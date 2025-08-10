import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

/** Compute the next occurrences (today or tomorrow) for HH:mm times in a given IANA TZ. */
export function nextOccurrences(
  times: string[],
  tzid: string,
  now = dayjs(),
): { label: string; at: number }[] {
  const today = now.tz(tzid);
  const out = times.map((t) => {
    const [h, m] = t.split(":").map(Number);
    let dt = today.hour(h).minute(m).second(0).millisecond(0);
    if (dt.isBefore(today)) dt = dt.add(1, "day");
    return { label: t, at: dt.toDate().getTime() };
  });
  return out.sort((a, b) => a.at - b.at);
}

/** Format a millis timestamp into HH:mm in the yard's timezone. */
export function formatTimeAt(ts: number, tzid: string) {
  return dayjs(ts).tz(tzid).format("HH:mm");
}
