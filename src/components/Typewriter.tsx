import { useEffect, useState } from "react";

// Types text out one character at a time, then keeps a blinking caret.
export default function Typewriter({
  text,
  startDelay = 500,
}: {
  text: string;
  startDelay?: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setN(text.length);
      return;
    }
    let iv: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      let i = 0;
      iv = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length && iv) clearInterval(iv);
      }, 85);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (iv) clearInterval(iv);
    };
  }, [text, startDelay]);

  return (
    <span aria-label={text}>
      <span aria-hidden>{text.slice(0, n)}</span>
      <span aria-hidden className="caret" />
    </span>
  );
}
