import React from "react";

export default function HandDrawnDivider({ color = "#222", bg = "transparent", className = "" }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: 36, background: bg }}>
      <svg viewBox="0 0 1440 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <path
          d="M0 18 Q 120 36 240 18 Q 360 0 480 18 Q 600 36 720 18 Q 840 0 960 18 Q 1080 36 1200 18 Q 1320 0 1440 18"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
