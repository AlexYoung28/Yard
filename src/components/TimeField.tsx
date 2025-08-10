import React from "react";

type Props = {
  value?: string;
  onChange: (v: string) => void;
  label?: string;
  id?: string;
  required?: boolean;
};

/** Clearable <input type="time" /> — fixes iPhone/Safari not providing a clear control. */
export function TimeField({ value, onChange, label, id, required }: Props) {
  const inputId = id ?? "time-" + Math.random().toString(36).slice(2);
  return (
    <div className="flex items-center gap-2">
      {label && (
        <label htmlFor={inputId} className="text-sm">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="time"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="border rounded px-2 py-1"
        inputMode="numeric"
      />
      {value && (
        <button
          type="button"
          className="border rounded px-2 py-1 text-sm"
          onClick={() => onChange("")}
          aria-label="Clear time"
        >
          Clear
        </button>
      )}
    </div>
  );
}
