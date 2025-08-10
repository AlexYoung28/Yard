import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
export default function Drawer({ open, onClose, children }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 dark:text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="p-4 flex justify-end">
        <button onClick={onClose} aria-label="Close menu">
          ✕
        </button>
      </div>
      {children}
    </div>
  );
}
