import { useEffect, useState } from "react";

// Types out a sequence of lines, one character at a time, one line after another.
export function useTypewriter(lines, { speed = 22, startDelay = 300, lineDelay = 250 } = {}) {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timeouts = [];

    const typeLine = (idx, charIdx) => {
      if (cancelled || idx >= lines.length) {
        if (!cancelled) setDone(true);
        return;
      }
      const full = lines[idx];
      if (charIdx <= full.length) {
        setDisplayed((prev) => {
          const next = [...prev];
          next[idx] = full.slice(0, charIdx);
          return next;
        });
        setLineIndex(idx);
        timeouts.push(setTimeout(() => typeLine(idx, charIdx + 1), speed));
      } else {
        timeouts.push(setTimeout(() => typeLine(idx + 1, 0), lineDelay));
      }
    };

    timeouts.push(setTimeout(() => typeLine(0, 0), startDelay));

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { displayed, lineIndex, done };
}
