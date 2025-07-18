import React from "react";

/**
 * Button component for Nudgr
 * Props:
 * - color: 'green' | 'accent' | 'white' | 'dark' (default: 'green')
 * - className: additional classes
 * - ...props: other button props
 *
 * All buttons have the same cutout shadow, border, hover, and active effect.
 */
const COLOR_CLASSES = {
  green: 'bg-green-400 hover:bg-green-500 text-black hover:text-white',
  red: 'bg-red-500/90 hover:bg-red-600 text-white',
  yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
  accent: 'bg-accent hover:bg-blue-600 text-white hover:text-black',
  white: 'bg-white hover:bg-light text-black hover:text-accent',
  dark: 'bg-dark hover:bg-black text-white',
};

export default function Button({ children, color = 'green', className = '', ...props }) {
  return (
    <button
      className={`px-8 py-4 rounded-xl font-semibold text-3xl border-2 border-black shadow-[4px_4px_0_#000] transition-all duration-200 active:shadow-none active:translate-x-1 active:translate-y-1 ${COLOR_CLASSES[color] || COLOR_CLASSES.green} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

