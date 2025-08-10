// src/components/FeedingSchedule/FeedingSchedule.jsx
import React, { useState, useRef, useMemo, useCallback } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import useScrollShadows from "../../hooks/useScrollShadows";
import ScrollIndicators from "../ui/ScrollIndicators";
import { SectionCard } from "../ui/UiKit";
import TextCell from "./TextCell";
import { days } from "../../utils/dates";
import { feedingTypes, highlight } from "../../utils/data";

export default function FeedingSchedule({ staffList, data, setData }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [openIndex, setOpenIndex] = useState(null);
  const [dayMobile, setDayMobile] = useState(
    days[(new Date().getDay() + 6) % 7],
  );
  const scrollHook = useScrollShadows();
  const active = useRef(null);

  // Parse & clamp HH:MM into minutes (06:00–21:00)
  const toMinutes = useCallback((txt) => {
    if (!txt) return null;
    const m = txt.match(/^([01]?\d|2[0-3]):([0-5]\d)$/);
    if (!m) return null;
    const h = Number(m[1]),
      mm = Number(m[2]);
    const total = h * 60 + mm;
    return total < 360 || total > 1260 ? null : total;
  }, []);

  // Compute first & last arrival for selected day
  const summary = useMemo(() => {
    let first = { m: Infinity, staff: null, time: null };
    let last = { m: -Infinity, staff: null, time: null };
    staffList.forEach((staff) => {
      feedingTypes.forEach(({ key }) => {
        const v = data[staff]?.[key]?.[dayMobile];
        const m = toMinutes(v);
        if (m !== null) {
          if (m < first.m) first = { m, staff, time: v };
          if (m > last.m) last = { m, staff, time: v };
        }
      });
    });
    return first.m < Infinity && last.m > -Infinity ? { first, last } : null;
  }, [staffList, data, dayMobile, toMinutes]);

  // Change handler: delay validation until full input, then confirm out-of-range
  const change = (staff, typeKey, day, value) => {
    if (value) {
      const fullPattern = /^([01]?\d|2[0-3]):([0-5]\d)$/;
      if (fullPattern.test(value)) {
        const m = toMinutes(value);
        if (m === null) {
          const [h, mm] = value.split(":").map(Number);
          const total = h * 60 + mm;
          const clampVal = total < 360 ? "06:00" : "21:00";
          if (
            window.confirm(
              `"${value}" is outside the allowed range (06:00–21:00).\nUse closest valid time: "${clampVal}"?`,
            )
          ) {
            value = clampVal;
          } else {
            return; // user canceled
          }
        }
      }
      // else: input not full, allow typing
    }
    setData((prev) => ({
      ...prev,
      [staff]: {
        ...(prev[staff] || {}),
        [typeKey]: {
          ...((prev[staff] || {})[typeKey] || {}),
          [day]: value,
        },
      },
    }));
  };

  // Mobile layout
  if (isMobile) {
    return (
      <section className="space-y-4 p-4">
        <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300">
          Feeding Schedule
        </h2>
        {/* Day tabs */}
        <div className="flex gap-1.5 mb-2 overflow-x-auto">
          {days.map((d) => (
            <button
              key={d}
              className={`px-3 py-1 rounded-md text-sm ${d === dayMobile ? "bg-emerald-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
              onClick={() => setDayMobile(d)}
            >
              {d.slice(0, 3)}
            </button>
          ))}
        </div>
        {/* Summary */}
        {summary && (
          <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
            First: <strong>{summary.first.time}</strong> by{" "}
            <strong>{summary.first.staff}</strong> • Last:{" "}
            <strong>{summary.last.time}</strong> by{" "}
            <strong>{summary.last.staff}</strong>
          </div>
        )}
        {/* Accordion per staff/type for selected day */}
        {staffList.flatMap((staffName) =>
          feedingTypes.map((t) => {
            const key = `${staffName}-${t.key}`;
            const isOpen = openIndex === key;
            return (
              <div key={key} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-800"
                  onClick={() => setOpenIndex(isOpen ? null : key)}
                >
                  <span className="font-medium text-base">{`${staffName} ${t.label}`}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="bg-white dark:bg-gray-700 p-4">
                    <div className="flex items-center gap-3">
                      <span className="w-20 text-sm">{dayMobile}:</span>
                      <input
                        type="time"
                        className="flex-1 px-3 py-2 border rounded"
                        value={data[staffName]?.[t.key]?.[dayMobile] || ""}
                        onChange={(e) =>
                          change(staffName, t.key, dayMobile, e.target.value)
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          }),
        )}
      </section>
    );
  }

  // Desktop layout
  return (
    <SectionCard title="Feeding Schedule" accent="amber">
      {/* Day tabs */}
      <div className="flex gap-1.5 mb-3">
        {days.map((d) => (
          <button
            key={d}
            className={`px-3 py-1 rounded-md text-sm ${d === dayMobile ? "bg-emerald-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            onClick={() => setDayMobile(d)}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>
      {/* Summary */}
      {summary && (
        <div className="mb-3 px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded text-sm">
          First: <strong>{summary.first.time}</strong> by{" "}
          <strong>{summary.first.staff}</strong> • Last:{" "}
          <strong>{summary.last.time}</strong> by{" "}
          <strong>{summary.last.staff}</strong>
        </div>
      )}
      <div className="relative">
        <div
          ref={scrollHook.ref}
          className="overflow-auto max-h-[60vh] rounded-xl"
        >
          <table className="w-full border-collapse text-sm min-w-max">
            <thead>
              <tr className="bg-amber-100 dark:bg-amber-900 text-slate-800 dark:text-amber-100">
                <th className="border p-2 sticky top-0 bg-inherit text-left font-semibold">
                  Staff / Time
                </th>
                <th className="border p-2 sticky top-0 bg-inherit font-semibold">
                  {dayMobile}
                </th>
              </tr>
            </thead>
            <tbody>
              {staffList.map((person) =>
                feedingTypes.map((t) => (
                  <tr
                    key={`${person}-${t.key}`}
                    className="even:bg-amber-50/40 dark:even:bg-amber-900/30 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <td className="border p-1 font-medium whitespace-nowrap">
                      {person} {t.label}
                    </td>
                    <td className="border p-1">
                      <TextCell
                        value={data[person]?.[t.key]?.[dayMobile] || ""}
                        onChange={(v) => change(person, t.key, dayMobile, v)}
                        placeholder={t.key === "earliest" ? "06:00–21:00" : ""}
                        className={highlight[t.key]}
                        onFocus={() =>
                          (active.current = {
                            staff: person,
                            typeKey: t.key,
                            day: dayMobile,
                          })
                        }
                      />
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
        <ScrollIndicators hook={scrollHook} />
      </div>
    </SectionCard>
  );
}
