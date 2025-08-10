import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
export default function CloudStatus({
  listsLoaded,
  feedingLoaded,
  dutiesLoaded,
  saveBusy,
}) {
  const allLoaded = listsLoaded && feedingLoaded && dutiesLoaded;
  return (
    <span
      className={`ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs border ${allLoaded ? "bg-emerald-50 border-emerald-300 text-emerald-700" : "bg-amber-50 border-amber-300 text-amber-700"}`}
      title={
        saveBusy
          ? "Saving changes to the cloud…"
          : allLoaded
            ? "Connected to cloud and up to date"
            : "Connecting to cloud…"
      }
    >
      {saveBusy
        ? "Cloud: saving…"
        : allLoaded
          ? "Cloud: connected"
          : "Cloud: loading"}
    </span>
  );
}
