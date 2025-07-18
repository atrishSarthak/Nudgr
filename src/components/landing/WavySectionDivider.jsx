import React from "react";

export default function WavySectionDivider({ color = "#EA75D4", bg = "#fff", className = "" }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ height: 48, background: bg }}>
      <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
        <path
          d="M0,24 Q360,48 720,24 T1440,24 V48 H0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
