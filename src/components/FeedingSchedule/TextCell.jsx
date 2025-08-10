// src/components/FeedingSchedule/TextCell.jsx
import React, { useRef } from "react";

/**
 * TextCell now renders a <div> wrapper to avoid nested <td> issues.
 * Parent table components must wrap this in their own <td>.
 */
export default function TextCell({
  value,
  onChange,
  placeholder,
  className,
  onFocus,
}) {
  const title =
    "Enter a time as HH:MM (e.g., 07:30, 20:00) or type a note like ‘On Holiday’.";
  const timeRef = useRef(null);

  return (
    <div className={`flex items-stretch gap-1 ${className || ""}`}>
      <input
        type="text"
        className="flex-1 p-2 rounded bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100 outline-none focus:ring-2 focus:ring-amber-400"
        value={value}
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
          e.target.setCustomValidity("Use HH:MM (e.g., 07:30) or ‘On Holiday’")
        }
        onInput={(e) => e.currentTarget.setCustomValidity("")}
        onBlur={(e) => {
          const v = e.target.value.trim();
          if (!v) return;
          if (/^On Holiday$/i.test(v)) {
            onChange("On Holiday");
            return;
          }
          const m = v.match(/^(\d{1,2}):(\d{1,2})$/);
          if (!m) return;
          const h = Math.min(23, parseInt(m[1], 10));
          const mm = Math.min(59, parseInt(m[2], 10));
          const fixed = `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`;
          if (fixed !== v) onChange(fixed);
        }}
      />
      {/* Native time picker */}
      <input
        type="time"
        step="60"
        className="px-2 rounded border bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100"
        value={/^\d{2}:\d{2}$/.test(value) ? value : ""}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Choose a time"
      />
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
