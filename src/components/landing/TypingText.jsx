import React, { useEffect, useRef, useState } from "react";

export default function TypingText({ text, speed = 45, pause = 2000, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);
  const timeoutRef = useRef();

  useEffect(() => {
    let isCancelled = false;
    function startTyping() {
      setDisplayed("");
      setDone(false);
      idx.current = 0;
      const interval = setInterval(() => {
        idx.current++;
        setDisplayed(text.slice(0, idx.current));
        if (idx.current >= text.length) {
          clearInterval(interval);
          setDone(true);
          timeoutRef.current = setTimeout(() => {
            if (!isCancelled) startTyping();
          }, pause);
        }
      }, speed);
      timeoutRef.current = interval;
    }
    startTyping();
    return () => {
      isCancelled = true;
      clearInterval(timeoutRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-2 animate-blink">|</span>
    </span>
  );
}

