// src/components/ui/Modal.jsx
import React, { useEffect } from "react";

/**
 * Modal wrapper: disables body scroll, closes on backdrop click or Escape,
 * stops propagation inside container so inputs are focusable.
 */
export default function Modal({ open, onClose, children, labelledById }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledById}
    >
      <div
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 p-3 focus:outline-none"
          style={{ minWidth: "44px", minHeight: "44px" }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
