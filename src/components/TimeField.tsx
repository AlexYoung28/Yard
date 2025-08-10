import { useId } from "react";

export type TimeFieldProps = {
  value?: string;
  onChange: (v: string) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
  /** enforced only when value !== "" so clearing works on iOS */
  required?: boolean;
  className?: string;
};

export function TimeField({
  value = "",
  onChange,
  label,
  id,
  disabled,
  required,
  className,
}: TimeFieldProps) {
  // Call the hook unconditionally, then choose which id to use.
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm">
          {label}
        </label>
      )}

      <input
        id={inputId}
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
        inputMode="numeric"
        required={!!required && value !== ""} // allow clearing to ""
        disabled={disabled}
        aria-label={label ?? "Time"}
      />

      {value !== "" && (
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
