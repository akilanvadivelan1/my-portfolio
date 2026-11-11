import { useEffect, useRef } from "react";

// Glowing sine waves that bend toward the cursor. Inspired by the "Glowy Waves
// Hero" idea on 21st.dev, rewritten here with no dependencies and with this
// site's lavender and sunrise colors. It pauses when scrolled off screen.
type Wave = {
  offset: number;
  amp: number;
  freq: number;
  rgb: string;
  alpha: number;
};

const WAVES: Wave[] = [
  { offset: 0, amp: 70, freq: 0.003, rgb: "155,123,234", alpha: 0.55 },
  { offset: Math.PI / 2, amp: 90, freq: 0.0026, rgb: "107,72,214", alpha: 0.5 },
  { offset: Math.PI, amp: 60, freq: 0.0034, rgb: "183,157,242", alpha: 0.35 },
  { offset: Math.PI * 1.5, amp: 80, freq: 0.0022, rgb: "255,154,77", alpha: 0.3 },
  { offset: Math.PI * 2, amp: 50, freq: 0.004, rgb: "255,255,255", alpha: 0.12 },
];

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let visible = true;
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      mouse.x = target.x = w / 2;
      mouse.y = target.y = h * 0.86;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const baseY = h * 0.86;
      const radius = 320;
      for (const wave of WAVES) {
        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const dx = x - mouse.x;
          const dy = baseY - mouse.y;
          const influence = Math.max(0, 1 - Math.hypot(dx, dy) / radius);
          const bend =
            influence * 70 * Math.sin(t * 0.001 + x * 0.01 + wave.offset);
          const y =
            baseY +
            Math.sin(x * wave.freq + t * 0.002 + wave.offset) * wave.amp +
            Math.sin(x * wave.freq * 0.4 + t * 0.003) * (wave.amp * 0.45) +
            bend;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = `rgba(${wave.rgb},${wave.alpha})`;
        ctx.shadowBlur = 18;
        ctx.shadowColor = `rgba(${wave.rgb},0.9)`;
        ctx.stroke();
      }
    };

    const loop = () => {
      t += 16;
      mouse.x += (target.x - mouse.x) * 0.1;
      mouse.y += (target.y - mouse.y) * 0.1;
      draw();
      raf = visible ? requestAnimationFrame(loop) : 0;
    };

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf && !reduce) raf = requestAnimationFrame(loop);
    });

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    io.observe(canvas);

    if (reduce) draw();
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
