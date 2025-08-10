// src/components/DutiesSchedule/DutiesSchedule.jsx
import React, { useState, useMemo } from "react";
import useScrollShadows from "../../hooks/useScrollShadows";
import ScrollIndicators from "../ui/ScrollIndicators";
import { days } from "../../utils/dates";
import { dutyTasks } from "../../utils/data";
import { SectionCard } from "../ui/UiKit";

/**
 * DutiesSchedule – shows a single-day, single-column view with day tabs like FeedingSchedule.
 * Uses native <select> for helper assignment, avoids nested <td>.
 * Rows are memoized to avoid expensive recalculation on each render.
 */
export default function DutiesSchedule({
  horses,
  data,
  setData,
  weekLabel,
  dutyOptions,
}) {
  const [selectedDay, setSelectedDay] = useState(
    days[(new Date().getDay() + 6) % 7],
  );
  const scrollHook = useScrollShadows();

  const uniqueOptions = useMemo(
    () => Array.from(new Set(dutyOptions)),
    [dutyOptions],
  );

  const change = (horse, task, day, value) => {
    setData((prev) => ({
      ...prev,
      [horse]: {
        ...(prev[horse] || {}),
        [task]: { ...((prev[horse] || {})[task] || {}), [day]: value },
      },
    }));
  };

  const rows = useMemo(
    () =>
      horses.flatMap((horse) =>
        dutyTasks.map((task) => (
          <tr
            key={`${horse}-${task}-${selectedDay}`}
            className="group even:bg-emerald-50/40 dark:even:bg-emerald-900/30 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <td className="border p-1 sticky left-0 z-10 bg-white dark:bg-slate-800 font-medium whitespace-nowrap text-slate-900 dark:text-slate-100">
              {horse} {task}
            </td>
            <td className="border p-1 min-w-[160px]">
              <select
                className="w-full p-1 rounded bg-white text-slate-900 dark:bg-slate-700 dark:text-slate-100 outline-none focus:ring-2 focus:ring-emerald-400"
                value={data[horse]?.[task]?.[selectedDay] ?? ""}
                onChange={(e) =>
                  change(horse, task, selectedDay, e.target.value)
                }
              >
                <option value="">—</option>
                {uniqueOptions.map((opt) => (
                  <option key={opt || "empty"} value={opt}>
                    {opt || "—"}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        )),
      ),
    [horses, selectedDay, data, uniqueOptions],
  );

  return (
    <SectionCard
      title="Duties Rota"
      accent="emerald"
      right={
        <span className="text-sm text-slate-700 dark:text-slate-300">
          {weekLabel}
        </span>
      }
    >
      <div className="flex gap-1.5 mb-3 overflow-x-auto">
        {days.map((d) => (
          <button
            key={d}
            className={`px-3 py-1 rounded-md text-sm ${d === selectedDay ? "bg-emerald-600 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
            onClick={() => setSelectedDay(d)}
          >
            {d.slice(0, 3)}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          ref={scrollHook.ref}
          className="overflow-auto max-h-[60vh] rounded-xl [-webkit-overflow-scrolling:touch]"
        >
          <table className="w-full border-collapse text-sm min-w-max">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900 text-slate-800 dark:text-emerald-100">
                <th className="border p-2 sticky top-0 bg-inherit text-left font-semibold">
                  Task
                </th>
                <th className="border p-2 sticky top-0 bg-inherit font-semibold">
                  {selectedDay}
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
        </div>
        <ScrollIndicators hook={scrollHook} />
      </div>
    </SectionCard>
  );
}
