import React from "react";
export default function SpendingIcon(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" {...props}>
      <rect x="8" y="16" width="32" height="20" rx="6" fill="#EF4444"/>
      <circle cx="24" cy="26" r="5" fill="#fff"/>
      <path d="M24 21v10" stroke="#EF4444" strokeWidth="2"/>
      <path d="M21 26h6" stroke="#EF4444" strokeWidth="2"/>
    </svg>
  );
}
