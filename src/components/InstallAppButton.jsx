// src/components/InstallAppButton.jsx
import { useEffect, useState } from "react";

function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    (window.matchMedia &&
      window.matchMedia("(display-mode: standalone)").matches) ||
    window.navigator?.standalone === true
  );
}

function isiOSSafari() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isiOS = /iP(hone|od|ad)/.test(ua);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
  return isiOS && isSafari;
}

const DISMISS_KEY = "installHintDismissedAt";
const COOLDOWN_DAYS = 90;

export default function InstallAppButton() {
  const [deferred, setDeferred] = useState(null);
  const [showIOSSheet, setShowIOSSheet] = useState(false);
  const [supported, setSupported] = useState(false);

  // Chrome/Edge: capture native prompt
  useEffect(() => {
    if (isStandalone()) return;
    const onBIP = (e) => {
      e.preventDefault();
      setDeferred(e);
      setSupported(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  // iOS Safari: allow showing our sheet (on click)
  useEffect(() => {
    if (isStandalone()) return;
    if (isiOSSafari()) setSupported(true);
  }, []);

  if (isStandalone() || !supported) return null;

  async function handleClick() {
    if (deferred) {
      deferred.prompt();
      try {
        await deferred.userChoice;
      } catch (err) {
        // user cancelled, nothing to do
      } finally {
        setDeferred(null);
      }
      return;
    }
    if (isiOSSafari()) {
      let shouldShow = true;
      try {
        const last = Number(localStorage.getItem(DISMISS_KEY) || 0);
        const days = (Date.now() - last) / 86400000;
        shouldShow = last === 0 || days >= COOLDOWN_DAYS;
      } catch (err) {
        // ignore storage errors; default to showing once
        shouldShow = true;
      }
      if (shouldShow) setShowIOSSheet(true);
    }
  }

  function dismissIOS() {
    setShowIOSSheet(false);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch (err) {
      // ignore storage write errors
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className="px-3 py-2 border rounded-xl bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100"
      >
        Install app
      </button>

      {showIOSSheet && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={dismissIOS}
            aria-label="Close"
          />
          <div className="relative w-full sm:w-[480px] max-w-[96vw] rounded-t-2xl sm:rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-xl">
            <h3 className="font-semibold mb-2">Add to Home Screen</h3>
            <p className="text-sm mb-3">
              On iPhone Safari, tap the <span title="Share">▵</span> button,
              then choose <strong>Add to Home Screen</strong>.
            </p>
            <div className="flex justify-end">
              <button className="px-3 py-2 rounded border" onClick={dismissIOS}>
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
