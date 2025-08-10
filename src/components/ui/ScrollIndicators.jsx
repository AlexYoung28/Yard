export default function ScrollIndicators({ hook }) {
  const { left, right, top, bottom } = hook;
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-6 z-20 transition-opacity ${left ? "opacity-100" : "opacity-0"}`}
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-6 z-20 transition-opacity ${right ? "opacity-100" : "opacity-0"}`}
        aria-hidden
        style={{
          background:
            "linear-gradient(270deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-6 z-20 transition-opacity ${top ? "opacity-100" : "opacity-0"}`}
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-6 z-20 transition-opacity ${bottom ? "opacity-100" : "opacity-0"}`}
        aria-hidden
        style={{
          background:
            "linear-gradient(0deg, var(--fade-bg, rgba(255,255,255,0.95)) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 left-1.5 z-20 text-xs select-none ${left ? "" : "opacity-0"}`}
      >
        ←
      </div>
      <div
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 right-1.5 z-20 text-xs select-none ${right ? "" : "opacity-0"}`}
      >
        →
      </div>
      <div
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 top-1.5 z-20 text-xs select-none ${top ? "" : "opacity-0"}`}
      >
        ↑
      </div>
      <div
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1.5 z-20 text-xs select-none ${bottom ? "" : "opacity-0"}`}
      >
        ↓
      </div>
    </>
  );
}
