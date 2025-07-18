import React from "react";
export default function SmokingIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="32" width="32" height="8" rx="4" fill="#222"/>
      <rect x="28" y="32" width="12" height="8" rx="4" fill="#FFD600"/>
      <path d="M16 32c0-6 8-6 8 0" stroke="#888" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}
