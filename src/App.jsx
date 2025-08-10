// src/App.jsx — v4.2.5 (Final)

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { db } from "./firebase";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";
import PwaInstallPrompt from "./components/PwaInstallPrompt.jsx";
import Modal from "./components/ui/Modal";
import Drawer from "./components/ui/Drawer";
import EditableList from "./components/ui/EditableList";
import WeekSelector from "./components/WeekSelector";
import CloudStatus from "./components/CloudStatus";
import { Container } from "./components/ui/UiKit";
import FeedingSchedule from "./components/FeedingSchedule/FeedingSchedule";
import DutiesSchedule from "./components/DutiesSchedule/DutiesSchedule";
import {
  days,
  getStartOfWeek,
  formatDateLocal,
  formatRange,
} from "./utils/dates";
import {
  defaultStaff,
  defaultHorses,
  defaultDutyStaff,
  makeFeeding,
  makeDuties,
} from "./utils/data";

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-color-scheme: dark)").matches;
const getInitialTheme = () =>
  localStorage.getItem("theme") || (prefersDark() ? "dark" : "light");

function useToast() {
  const [msg, setMsg] = useState("");
  const timer = useRef();
  const show = (m) => {
    clearTimeout(timer.current);
    setMsg(m);
    timer.current = setTimeout(() => setMsg(""), 1800);
  };
  return {
    show,
    Toast: msg && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/80 text-white rounded-lg shadow-lg text-sm">
        {msg}
      </div>
    ),
  };
}

export default function App() {
  // Theme
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toast
  const { Toast, show: showToast } = useToast();

  // Lists
  const [staff, setStaff] = useState(defaultStaff);
  const [horses, setHorses] = useState(defaultHorses);
  const [dutyStaff, setDutyStaff] = useState(defaultDutyStaff);
  const [listsLoaded, setListsLoaded] = useState(false);
  const dutyOptions = useMemo(
    () => ["", ...staff, ...dutyStaff],
    [staff, dutyStaff],
  );

  // Feeding
  const [feeding, setFeeding] = useState(() => makeFeeding(defaultStaff));
  const [feedingLoaded, setFeedingLoaded] = useState(false);

  // Duties
  const [duties, setDuties] = useState(() => makeDuties(defaultHorses));
  const [dutiesLoaded, setDutiesLoaded] = useState(false);

  // Week
  const [weekStart, setWeekStart] = useState(getStartOfWeek());
  const weekKey = formatDateLocal(weekStart);
  const weekLabel = formatRange(weekStart);

  // Save indicator
  const [saveBusy, setSaveBusy] = useState(false);
  const savingTimer = useRef();
  const flagSaving = () => {
    setSaveBusy(true);
    clearTimeout(savingTimer.current);
    savingTimer.current = setTimeout(() => setSaveBusy(false), 800);
  };

  // Firestore refs
  const listsRef = useMemo(() => doc(db, "schedules", "lists"), []);
  const feedingRef = useMemo(() => doc(db, "schedules", "feedingSchedule"), []);
  const dutiesRef = useCallback(
    (key) => doc(db, "schedules", `duties_${key}`),
    [],
  );

  // Sync lists
  useEffect(() => {
    let unsub;
    (async () => {
      try {
        const snap = await getDoc(listsRef);
        if (snap.exists()) {
          const d = snap.data();
          if (d.staff) setStaff(d.staff);
          if (d.horses) setHorses(d.horses);
          if (d.dutyStaff) setDutyStaff(d.dutyStaff);
        } else {
          await setDoc(listsRef, { staff, horses, dutyStaff }, { merge: true });
        }
        unsub = onSnapshot(listsRef, (s) => {
          if (s.exists()) {
            const d = s.data();
            if (d.staff) setStaff(d.staff);
            if (d.horses) setHorses(d.horses);
            if (d.dutyStaff) setDutyStaff(d.dutyStaff);
            setListsLoaded(true);
          }
        });
      } catch (e) {
        console.error(e);
      }
    })();
    return () => unsub && unsub();
  }, [listsRef]);
  useEffect(() => {
    if (!listsLoaded) return;
    const id = setTimeout(() => {
      flagSaving();
      setDoc(listsRef, { staff }, { merge: true }).catch(console.error);
    }, 400);
    return () => clearTimeout(id);
  }, [staff, listsLoaded, listsRef]);
  useEffect(() => {
    if (!listsLoaded) return;
    const id = setTimeout(() => {
      flagSaving();
      setDoc(listsRef, { horses }, { merge: true }).catch(console.error);
    }, 400);
    return () => clearTimeout(id);
  }, [horses, listsLoaded, listsRef]);
  useEffect(() => {
    if (!listsLoaded) return;
    const id = setTimeout(() => {
      flagSaving();
      setDoc(listsRef, { dutyStaff }, { merge: true }).catch(console.error);
    }, 400);
    return () => clearTimeout(id);
  }, [dutyStaff, listsLoaded, listsRef]);

  // Sync feeding
  useEffect(() => {
    let unsub;
    (async () => {
      try {
        const snap = await getDoc(feedingRef);
        if (snap.exists())
          setFeeding((p) => ({ ...makeFeeding(staff), ...snap.data() }));
        else await setDoc(feedingRef, makeFeeding(staff), { merge: true });
        unsub = onSnapshot(feedingRef, (s) => {
          if (s.exists()) {
            setFeeding((p) => ({ ...makeFeeding(staff), ...s.data() }));
            setFeedingLoaded(true);
          }
        });
      } catch (e) {
        console.error(e);
      }
    })();
    return () => unsub && unsub();
  }, [feedingRef, staff]);
  useEffect(() => {
    if (!feedingLoaded) return;
    const id = setTimeout(() => {
      flagSaving();
      setDoc(feedingRef, feeding, { merge: true }).catch(console.error);
    }, 600);
    return () => clearTimeout(id);
  }, [feeding, feedingLoaded, feedingRef]);

  // Seed duties once, no overwrite
  useEffect(() => {
    const ref = dutiesRef(weekKey);
    let unsub;
    (async () => {
      try {
        const snap = await getDoc(ref);
        if (snap.exists()) setDuties({ ...makeDuties(horses), ...snap.data() });
        else await setDoc(ref, makeDuties(horses), { merge: true });
        setDutiesLoaded(true);
        unsub = onSnapshot(
          ref,
          () => {},
          (err) => console.error(err),
        );
      } catch (e) {
        console.error(e);
      }
    })();
    return () => unsub && unsub();
  }, [dutiesRef, weekKey, horses]);
  useEffect(() => {
    if (!dutiesLoaded) return;
    const id = setTimeout(() => {
      setDoc(dutiesRef(weekKey), duties, { merge: true }).catch(console.error);
    }, 600);
    return () => clearTimeout(id);
  }, [duties, dutiesLoaded, dutiesRef, weekKey]);

  // Copy previous week
  const [copyOpen, setCopyOpen] = useState(false);
  const openCopyConfirm = () => setCopyOpen(true);
  const doCopy = useCallback(
    async (mode) => {
      setCopyOpen(false);
      const prevKey = formatDateLocal(new Date(weekStart.getTime() - 6048e5));
      const snap = await getDoc(dutiesRef(prevKey));
      if (!snap.exists()) return showToast("No previous week");
      const prevData = snap.data();
      let next = { ...makeDuties(horses), ...duties };
      if (mode === "replace") next = { ...makeDuties(horses), ...prevData };
      if (mode === "fill") {
        next = { ...duties };
        for (const h of Object.keys(prevData)) {
          for (const t of Object.keys(prevData[h])) {
            for (const d of days) {
              if (!next[h]?.[t]?.[d] && prevData[h][t][d]) {
                next[h] = {
                  ...(next[h] || {}),
                  [t]: { ...(next[h]?.[t] || {}), [d]: prevData[h][t][d] },
                };
              }
            }
          }
        }
      }
      setDuties(next);
      await setDoc(dutiesRef(weekKey), next, { merge: true });
      showToast(mode === "replace" ? "Replaced week" : "Filled blanks");
    },
    [duties, horses, weekKey, dutiesRef, showToast, days],
  );

  // Manage Names UI state
  const [showModal, setShowModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">
      <PwaInstallPrompt />

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 shadow bg-white/90 dark:bg-slate-900/90">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Menu"
          >
            ☰
          </button>
          <span className="text-2xl font-bold">Stable Scheduler</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-full border bg-white dark:bg-slate-800">
            {weekLabel}
          </span>
          <CloudStatus
            listsLoaded={listsLoaded}
            feedingLoaded={feedingLoaded}
            dutiesLoaded={dutiesLoaded}
            saveBusy={saveBusy}
          />
          <button
            onClick={() => setShowModal(true)}
            className="hidden md:block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100"
          >
            Manage Names
          </button>
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            className="px-3 py-2 border rounded-xl bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-100"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <button
          onClick={() => {
            setShowModal(true);
            setDrawerOpen(false);
          }}
          className="block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100"
        >
          Manage Names
        </button>
        <button
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          className="block px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </Drawer>

      {/* Week Selector */}
      <WeekSelector
        setWeekStart={setWeekStart}
        openCopyConfirm={openCopyConfirm}
      />

      {/* Main Content */}
      <Container className="space-y-10">
        <FeedingSchedule
          staffList={staff}
          data={feeding}
          setData={setFeeding}
        />
        <DutiesSchedule
          horses={horses}
          data={duties}
          setData={setDuties}
          weekLabel={weekLabel}
          dutyOptions={dutyOptions}
        />
      </Container>

      {/* Manage Names Modal */}
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h2 id="edit-names-title" className="text-xl font-bold mb-4">
          Edit Names
        </h2>
        <EditableList
          title="Owners"
          items={staff}
          setItems={setStaff}
          placeholder="e.g., Alex"
        />
        <EditableList
          title="Helpers"
          items={dutyStaff}
          setItems={setDutyStaff}
          placeholder="e.g., Bev"
        />
        <EditableList
          title="Horses"
          items={horses}
          setItems={setHorses}
          placeholder="e.g., Bella"
        />
      </Modal>

      {/* Copy Previous Week Modal */}
      <Modal open={copyOpen} onClose={() => setCopyOpen(false)}>
        <h2 id="copy-week-title" className="text-lg font-semibold mb-2">
          Copy previous week?
        </h2>
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          This can overwrite the current week’s duties.
        </p>
        <div className="flex flex-col gap-2">
          <button
            className="px-3 py-2 rounded bg-emerald-600 text-white"
            onClick={() => doCopy("replace")}
          >
            Replace current week
          </button>
          <button
            className="px-3 py-2 rounded border"
            onClick={() => doCopy("fill")}
          >
            Fill empty cells only
          </button>
          <button
            className="px-3 py-2 rounded border"
            onClick={() => setCopyOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {Toast}
    </div>
  );
}
