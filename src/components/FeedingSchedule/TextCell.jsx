import { useEffect, useState } from "react";
import { TimeField } from "../TimeField.tsx";

export default function TextCell({
  value,
  onChange,
  placeholder,
  className,
  onFocus,
}) {
  const isTime = (v) => typeof v === "string" && /^\d{1,2}:\d{2}$/.test(v);
  const [mode, setMode] = useState(isTime(value) ? "time" : "note");

  // keep mode in sync if parent changes value externally
  useEffect(() => {
    setMode(isTime(value) ? "time" : "note");
  }, [value]);

  const normalizeTime = (raw) => {
    const m = (raw || "").trim().match(/^(\d{1,2}):(\d{1,2})$/);
    if (!m) return null;
    const h = Math.max(0, Math.min(23, parseInt(m[1], 10)));
    const mm = Math.max(0, Math.min(59, parseInt(m[2], 10)));
    return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
  };

  const title =
    "Enter HH:MM (e.g., 07:30, 20:00) or type a note like ‘On Holiday’.";

  return (
    <div className={`flex items-stretch gap-2 ${className || ""}`}>
      {mode === "time" ? (
        <>
          <TimeField
            value={isTime(value) ? (normalizeTime(value) ?? "") : ""}
            onChange={(t) => onChange(t)}
            aria-label="Choose a time"
          />
          <button
            type="button"
            className="px-2 py-1 border rounded text-sm"
            onClick={() => setMode("note")}
            aria-label="Switch to note"
            title="Switch to note"
          >
            Note
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="flex-1 p-2 rounded bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-amber-400"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onFocus}
            placeholder={placeholder}
            inputMode="numeric"
            list="timeHints"
            pattern="^(?:\\d{1,2}:\\d{2}|On Holiday)?$"
            title={title}
            enterKeyHint="done"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Use HH:MM (e.g., 07:30) or ‘On Holiday’",
              )
            }
            onInput={(e) => e.currentTarget.setCustomValidity("")}
            onBlur={(e) => {
              const v = (e.target.value || "").trim();
              if (!v) return; // allow empty
              if (/^On Holiday$/i.test(v)) {
                onChange("On Holiday");
                return;
              }
              const fixed = normalizeTime(v);
              if (fixed) {
                onChange(fixed);
                setMode("time"); // switch to time after valid time entry
              }
            }}
          />
          <button
            type="button"
            className="px-2 py-1 border rounded text-sm"
            onClick={() => setMode("time")}
            aria-label="Switch to time"
            title="Switch to time"
          >
            Time
          </button>
        </>
      )}

      <datalist id="timeHints">
        <option value="On Holiday" />
        <option value="06:30" />
        <option value="07:00" />
        <option value="07:30" />
        <option value="19:00" />
        <option value="20:00" />
      </datalist>
    </div>
  );
}
