import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { getStartOfWeek } from "../utils/dates";
export default function WeekSelector({ setWeekStart, openCopyConfirm }) {
  return (
    <div className="sticky top-0 z-30 bg-white dark:bg-slate-900 backdrop-blur py-3 flex flex-wrap justify-center gap-2 shadow-sm transition-colors duration-300">
      <button
        className="px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
        onClick={() => setWeekStart((d) => new Date(d.getTime() - 6048e5))}
        title="Go to the previous week"
      >
        ◀ Prev
      </button>
      <button
        className="px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
        onClick={() => setWeekStart(getStartOfWeek())}
        title="Jump to the current week"
      >
        Current
      </button>
      <button
        className="px-3 py-1.5 rounded-md border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
        onClick={() => setWeekStart((d) => new Date(d.getTime() + 6048e5))}
        title="Go to the next week"
      >
        Next ▶
      </button>
      <button
        className="px-3 py-1.5 rounded-md border border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        onClick={openCopyConfirm}
        title="Copy last week’s duties into this week"
      >
        Copy Previous Week ↘
      </button>
    </div>
  );
}
