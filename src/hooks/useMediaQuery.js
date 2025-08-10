// hooks/useMediaQuery.js
import { useEffect, useState } from "react";
export default function useMediaQuery(q) {
  const get = () =>
    typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia(q).matches;
  const [ok, setOk] = useState(get);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const m = window.matchMedia(q);
    const fn = () => setOk(m.matches);
    if (m.addEventListener) m.addEventListener("change", fn);
    else if (m.addListener) m.addListener(fn);
    fn();
    return () => {
      if (m.removeEventListener) m.removeEventListener("change", fn);
      else if (m.removeListener) m.removeListener(fn);
    };
  }, [q]);
  return ok;
}
