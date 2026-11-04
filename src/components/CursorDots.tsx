import { useEffect, useRef } from "react";

// A single soft red orb that eases toward the cursor, matching the accent red
// used in the background glow (#f55036). It keeps tracking the pointer during
// scroll by re-deriving the page position from the last known viewport point
// plus the current scroll offset.
const ACCENT = "#f55036";

export default function CursorDots() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;

    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;
    let scrollAtMove = { x: window.scrollX, y: window.scrollY };

    const pageTarget = () => ({
      x: clientX + (window.scrollX - scrollAtMove.x),
      y: clientY + (window.scrollY - scrollAtMove.y),
    });

    const pos = pageTarget();

    const onMove = (e: MouseEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      scrollAtMove = { x: window.scrollX, y: window.scrollY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      const target = pageTarget();
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      const n = orbRef.current;
      if (n) {
        n.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[60] hidden md:block"
      style={{ top: 0, left: 0 }}
    >
      <div
        ref={orbRef}
        className="absolute left-0 top-0 rounded-full"
        style={{
          width: 26,
          height: 26,
          background: `radial-gradient(circle at 35% 30%, ${ACCENT}, #c73a24 70%)`,
          boxShadow: `0 0 18px 4px ${ACCENT}99, 0 0 42px 10px ${ACCENT}55`,
          willChange: "transform",
        }}
      />
    </div>
  );
}
