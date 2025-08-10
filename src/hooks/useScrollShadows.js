// hooks/useScrollShadows.js
import { useEffect, useRef, useState } from "react";
export default function useScrollShadows() {
  const ref = useRef(null);
  const [s, setS] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const {
        scrollLeft,
        scrollTop,
        scrollWidth,
        scrollHeight,
        clientWidth,
        clientHeight,
      } = el;
      setS({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth - 1,
        top: scrollTop > 0,
        bottom: scrollTop + clientHeight < scrollHeight - 1,
      });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);
  return { ref, ...s };
}
