import { useEffect, useRef } from "react";

// A soft lavender orb with a faint sunrise-orange core, locked directly to the
// cursor (no trailing or easing). Fixed positioning keeps it correct on scroll.
const LAVENDER = "#9b7bea";
const DEEP = "#6b48d6";
const SUNRISE = "#ff9a4d";

export default function CursorDots() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduce) return;

    const orb = orbRef.current;
    if (!orb) return;

    const onMove = (e: MouseEvent) => {
      orb.style.opacity = "1";
      orb.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };
    const onLeave = () => {
      orb.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full md:block"
      style={{
        width: 22,
        height: 22,
        opacity: 0,
        background: `radial-gradient(circle at 35% 30%, ${SUNRISE} 0%, ${LAVENDER} 35%, ${DEEP} 80%)`,
        boxShadow: `0 0 16px 3px ${LAVENDER}99, 0 0 38px 8px ${DEEP}66`,
        willChange: "transform",
      }}
    />
  );
}
