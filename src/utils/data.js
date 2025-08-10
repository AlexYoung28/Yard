// utils/data.js
import { days } from "./dates";

export const feedingTypes = [
  { label: "Earliest (am)", key: "earliest" },
  { label: "Latest (pm)", key: "latest" },
];

export const dutyTasks = ["Turnout", "Bring In", "Muck Out"];

export const defaultStaff = ["Anna", "Annabel", "Lilly", "Bev"];
export const defaultHorses = [
  "Lilly",
  "Annabel",
  "Anna",
  "Bev",
  "Lily",
  "Swift",
  "Tamar",
  "Ronnie",
  "Bruno",
];
export const defaultDutyStaff = [...defaultStaff];
export const defaultDutyExtras = [];

export const staffColors = {
  Anna: "bg-rose-200",
  Annabel: "bg-amber-200",
  Lilly: "bg-sky-200",
  Bev: "bg-emerald-200",
};
export const highlight = {
  earliest: "bg-emerald-200 dark:bg-emerald-700/60",
  latest: "bg-fuchsia-200 dark:bg-fuchsia-700/60",
};

export const makeFeeding = (staff) =>
  Object.fromEntries(
    staff.map((person) => [
      person,
      Object.fromEntries(
        feedingTypes.map((t) => [
          t.key,
          Object.fromEntries(days.map((d) => [d, ""])),
        ]),
      ),
    ]),
  );

export const makeDuties = (horses) =>
  Object.fromEntries(
    horses.map((h) => [
      h,
      Object.fromEntries(
        dutyTasks.map((t) => [t, Object.fromEntries(days.map((d) => [d, ""]))]),
      ),
    ]),
  );
