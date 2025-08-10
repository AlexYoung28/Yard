import React, { useEffect, useState } from "react";

function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}
function isiOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

export default function PwaInstallPrompt() {
  const [deferred, setDeferred] = useState(null);
  const [installed, setInstalled] = useState(isStandalone());
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onBIP = (e) => {
      e.preventDefault();
      setDeferred(e);
      setShow(true);
    };
    const onInstalled = () => {
      setInstalled(true);
      setShow(false);
    };

    window.addEventListener("beforeinstallprompt", onBIP);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBIP);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  // iOS (Safari) has no beforeinstallprompt. Show a hint instead.
  const showIOSHint = !installed && isiOS() && isSafari();

  if (installed || (!show && !showIOSHint)) return null;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50">
      <div className="max-w-sm rounded-xl shadow-lg border bg-white/95 dark:bg-slate-800 dark:text-slate-100 p-3 text-sm">
        {show && deferred && (
          <div className="flex items-center gap-2">
            <span>Install Paris Farm Barn?</span>
            <button
              className="ml-auto px-3 py-1 rounded-md bg-emerald-600 text-white hover:bg-emerald-500"
              onClick={async () => {
                deferred.prompt();
                const { outcome } = await deferred.userChoice;
                console.log("[PWA] userChoice", outcome);
                setDeferred(null);
                setShow(false);
              }}
            >
              Install
            </button>
            <button className="px-2 py-1" onClick={() => setShow(false)}>
              Not now
            </button>
          </div>
        )}

        {showIOSHint && (
          <div>
            <div className="font-medium mb-1">Add to Home Screen</div>
            <div>
              On iPhone/iPad: tap <strong>Share</strong> →{" "}
              <strong>Add to Home Screen</strong>.
            </div>
            <div className="mt-2 text-right">
              <button
                className="px-2 py-1 border rounded"
                onClick={() => setShow(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
