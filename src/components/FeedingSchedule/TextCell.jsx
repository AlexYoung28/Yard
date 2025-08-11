import { useEffect, useMemo, useState } from "react";
import { TimeField } from "../TimeField.tsx";

const isTime = (v) => typeof v === "string" && /^\d{1,2}:\d{2}$/.test(v);
const normalizeTime = (raw) => {
  const m = (raw || "").trim().match(/^(\d{1,2}):(\d{1,2})$/);
  if (!m) return null;
  const h = Math.max(0, Math.min(23, parseInt(m[1], 10)));
  const mm = Math.max(0, Math.min(59, parseInt(m[2], 10)));
  return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
};

export default function TextCell({
  value,
  onChange,
  placeholder,
  className,
  onFocus,
}) {
  const [open, setOpen] = useState(false);
  const initialMode = isTime(value) ? "time" : "note";
  const [mode, setMode] = useState(initialMode);
  const [timeVal, setTimeVal] = useState(
    isTime(value) ? (normalizeTime(value) ?? "") : "",
  );
  const [noteVal, setNoteVal] = useState(!isTime(value) ? (value ?? "") : "");

  useEffect(() => {
    const t = isTime(value);
    setMode(t ? "time" : "note");
    setTimeVal(t ? (normalizeTime(value) ?? "") : "");
    setNoteVal(!t ? (value ?? "") : "");
  }, [value]);

  const label = useMemo(() => {
    if (isTime(value)) return normalizeTime(value) ?? "";
    const txt = (value || "").trim();
    return txt || placeholder || "Set";
  }, [value, placeholder]);

  function save() {
    if (mode === "time") {
      const fixed = normalizeTime(timeVal || "");
      onChange(fixed || ""); // empty if invalid/blank
    } else {
      const note = (noteVal || "").trim();
      onChange(note);
    }
    setOpen(false);
  }

  function removeValue() {
    setTimeVal("");
    setNoteVal("");
    onChange("");
    setOpen(false);
  }

  return (
    <>
      {/* Cell button (large tap target) */}
      <button
        type="button"
        className={`w-full min-h-[44px] px-3 py-2 rounded border text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 ${className || ""}`}
        onClick={() => {
          onFocus?.();
          setOpen(true);
        }}
        title="Edit"
      >
        <span
          className={label === (placeholder || "Set") ? "text-slate-400" : ""}
        >
          {label}
        </span>
      </button>

      {/* Editor overlay (dialog on desktop, sheet on mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          {/* panel */}
          <div className="relative w-full sm:w-[520px] max-w-[96vw] rounded-t-2xl sm:rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <button
                className={`px-3 py-1.5 rounded border text-sm ${mode === "time" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : ""}`}
                onClick={() => setMode("time")}
              >
                Time
              </button>
              <button
                className={`px-3 py-1.5 rounded border text-sm ${mode === "note" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : ""}`}
                onClick={() => setMode("note")}
              >
                Note
              </button>
            </div>

            {mode === "time" ? (
              <TimeField
                value={timeVal}
                onChange={(v) => setTimeVal(v)}
                className="mb-4"
              />
            ) : (
              <div className="mb-4">
                <label className="block text-sm mb-1">Note</label>
                <input
                  type="text"
                  value={noteVal}
                  onChange={(e) => setNoteVal(e.target.value)}
                  placeholder="e.g., On Holiday"
                  className="w-full border rounded px-3 py-2"
                  enterKeyHint="done"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                className="px-3 py-2 rounded border"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="px-3 py-2 rounded border"
                  onClick={removeValue}
                  title="Remove value"
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="px-3 py-2 rounded bg-emerald-600 text-white"
                  onClick={save}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
