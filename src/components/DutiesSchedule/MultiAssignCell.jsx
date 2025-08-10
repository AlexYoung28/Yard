// src/components/DutiesSchedule/MultiAssignCell.jsx
import React, { useState } from "react";

export default function MultiAssignCell({
  value,
  onChange,
  options,
  className,
}) {
  const [open, setOpen] = useState(false);
  const selection = value || "";

  const handleSelect = (name) => {
    onChange(name);
    setOpen(false);
  };

  return (
    <td className={`border p-1 min-w-[160px] ${className || ""}`}>
      <div className="flex items-center gap-2">
        {" "}
        {/* increased gap for spacing */}
        <span
          className={`${selection ? "text-slate-900 dark:text-slate-100" : "text-slate-400"}`}
        >
          {" "}
          {/* dark mode unchanged */}
          {selection || "Unassigned"}
        </span>
        <button
          type="button"
          className="ml-auto px-4 py-2 border rounded bg-white text-slate-900 hover:bg-gray-50 focus:outline-none" /* bigger touch area & hover contrast */
          onClick={() => setOpen(true)}
          title="Select a person for this task"
        >
          Edit
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/30"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-800 dark:text-gray-100 w-full max-w-sm rounded-xl shadow-xl p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h4 className="font-semibold text-lg">Assign person</h4>
            <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700 max-h-64 overflow-auto">
              {" "}
              {/* vertical list with dividers */}
              {options.filter(Boolean).map((name) => (
                <button
                  key={name}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                  onClick={() => handleSelect(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <button
                className="px-4 py-2 border rounded text-slate-700 hover:bg-gray-50"
                onClick={() => handleSelect("")}
              >
                Clear
              </button>
              <button
                className="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </td>
  );
}
