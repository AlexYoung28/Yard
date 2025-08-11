import { useId } from "react";

export type TimeFieldProps = {
  value?: string;
  onChange: (v: string) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
  /** Enforced only when value !== "" so clearing works on iOS. */
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
  // call hook unconditionally
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
        className="border rounded px-3 py-2 w-[9.5rem] min-h-[40px]"
        inputMode="numeric"
        required={!!required && value !== ""}
        disabled={disabled}
        aria-label={label ?? "Time"}
      />
      {value !== "" && (
        <button
          type="button"
          className="border rounded px-3 py-2 text-sm min-h-[40px]"
          onClick={() => onChange("")}
          aria-label="Remove time"
          title="Remove time"
        >
          Clear
        </button>
      )}
    </div>
  );
}
