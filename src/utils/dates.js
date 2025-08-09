// utils/dates.js
export const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

export const getStartOfWeek = (d = new Date()) => {
  const n = new Date(d); n.setHours(0,0,0,0); n.setDate(n.getDate() - ((n.getDay()+6)%7)); return n;
};

export const formatDateLocal = (d) => {
  const dt = new Date(d.getTime() - d.getTimezoneOffset()*60000);
  return dt.toISOString().split("T")[0];
};

export const formatRange = (s) => {
  const e = new Date(s); e.setDate(e.getDate()+6);
  const opts = { month:"short", day:"numeric" };
  return `${s.toLocaleDateString(undefined, opts)} – ${e.toLocaleDateString(undefined, opts)}`;
};