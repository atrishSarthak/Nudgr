import React from "react";
export default function SkillIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="12" y="12" width="24" height="24" rx="8" fill="#A16207"/>
      <path d="M24 20v8" stroke="#fff" strokeWidth="2"/>
      <path d="M20 28h8" stroke="#fff" strokeWidth="2"/>
      <circle cx="24" cy="24" r="6" fill="#fff"/>
    </svg>
  );
}
