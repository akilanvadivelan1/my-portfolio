import { useEffect, useRef } from "react";

// A cluster of colored dots that trail the cursor. Each dot eases toward the
// one ahead of it, so they form a smooth comet-like tail. The tail keeps
// tracking the pointer during scroll by re-deriving the page position from the
// last known viewport point plus the current scroll offset.
const DOTS = [
  { color: "#f55036", size: 14 }, // accent orange
  { color: "#ff8a3d", size: 12 },
  { color: "#ffd23f", size: 11 },
  { color: "#5bd6a6", size: 10 },
  { color: "#3da9ff", size: 9 },
  { color: "#9b7bff", size: 8 },
  { color: "#ff6ad5", size: 7 },
];

export default function CursorDots() {
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Skip on touch / coarse pointers and when reduced motion is requested.
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;

    const nodes = nodesRef.current;

    // Last known pointer position in viewport coords + the scroll at that time.
    let clientX = window.innerWidth / 2;
    let clientY = window.innerHeight / 2;
    let scrollAtMove = { x: window.scrollX, y: window.scrollY };

    // Target page position (what the head dot eases toward).
    const pageTarget = () => ({
      x: clientX + (window.scrollX - scrollAtMove.x),
      y: clientY + (window.scrollY - scrollAtMove.y),
    });

    // Each dot's current page position.
    const pos = DOTS.map(() => pageTarget());

    const onMove = (e: MouseEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
      scrollAtMove = { x: window.scrollX, y: window.scrollY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      const target = pageTarget();
      for (let i = 0; i < pos.length; i++) {
        const lead = i === 0 ? target : pos[i - 1];
        // Later dots lag a bit more for a trailing feel.
        const ease = 0.35 - i * 0.03;
        pos[i].x += (lead.x - pos[i].x) * ease;
        pos[i].y += (lead.y - pos[i].y) * ease;
        const n = nodes[i];
        if (n) {
          n.style.transform = `translate3d(${pos[i].x}px, ${pos[i].y}px, 0) translate(-50%, -50%)`;
        }
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
      {DOTS.map((d, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) nodesRef.current[i] = el;
          }}
          className="absolute left-0 top-0 rounded-full"
          style={{
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 ${d.size}px ${d.color}`,
            opacity: 0.85 - i * 0.07,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
