export function BackgroundEffects() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[460px] bg-[radial-gradient(circle_at_18%_20%,rgba(139,92,246,0.14),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(93,124,96,0.12),transparent_28%)]"
        aria-hidden="true"
      />
    </>
  );
}
