// src/components/ui/UiKit.jsx
// -----------------------------------------------------------------------------
// A tiny design-system helper that centralises the most common layout and
// visual patterns so that other components don’t each have to repeat Tailwind
// class strings.  Import what you need:
//   import { Container, SectionCard, IconButton } from "./components/ui/UiKit";
// -----------------------------------------------------------------------------
import React from "react";

/**
 * cx – cheap className joiner (avoids an external dependency)
 */
function cx(...cls) {
  return cls.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/*  1. Container                                                               */
/* -------------------------------------------------------------------------- */
// Provides the responsive horizontal gutters & max-width that should wrap the
// main page content.  It also gives you an easy hook (className prop) for any
// per-page tweaks.
export const Container = ({ children, className }) => (
  <div className={cx("mx-auto p-4 md:px-10 lg:px-24 xl:px-32 max-w-screen-xl", className)}>
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  2. SectionCard                                                            */
/* -------------------------------------------------------------------------- */
// A rounded-corner card with shadow, border and an accented heading bar.  Use
// it to wrap logical sections like “Feeding Schedule” or “Duties Rota”.
//
//    <SectionCard title="Feeding Schedule" accent="amber"> … </SectionCard>
//
// Props
// ────────────────────────────────────────────────────────────────────────────
// title   – Section heading text.
// accent  – "amber" | "emerald" (choose palette for the heading, default amber)
// right   – Optional ReactNode rendered on the right of the header row.
// className – Extra classes for the outer <section> element.
export function SectionCard({ title, accent = "amber", right, children, className }) {
  const headingColour =
    accent === "emerald"
      ? "text-emerald-700 dark:text-emerald-300"
      : "text-amber-700 dark:text-amber-300";

  return (
    <section
      className={cx(
        "bg-white/95 dark:bg-slate-800 rounded-2xl shadow p-6 border border-slate-200 dark:border-slate-700 mb-12",
        className
      )}
    >
      <div className="flex items-baseline justify-between mb-4">
        <h2 className={cx("text-2xl font-bold", headingColour)}>{title}</h2>
        {right}
      </div>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. IconButton                                                             */
/* -------------------------------------------------------------------------- */
// Tiny helper for buttons that mix text + icon.  You can pass any icon component
// (lucide-react works great) via the `icon` prop.
//
//    <IconButton icon={Plus} label="Add" onClick={…} />
//
export const IconButton = ({ icon: Icon, label, className, ...rest }) => (
  <button
    className={cx(
      "inline-flex items-center gap-1 px-3 py-2 rounded-md border bg-white dark:bg-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors",
      className
    )}
    {...rest}
  >
    {Icon && <Icon className="w-4 h-4" aria-hidden="true" />} <span>{label}</span>
  </button>
);

/* -------------------------------------------------------------------------- */
/*  4. (optional) Toolbar / Sidebar                                           */
/* -------------------------------------------------------------------------- */
// If you later decide to surface a vertical toolbar on desktop, create a new
// component here and keep the look consistent with the rest of the kit.
// -----------------------------------------------------------------------------
