import React from "react";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-200"
        onClick={onClose}
      />
      {/* Modal content */}
      <div className="relative z-10 mx-4 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold focus:outline-none z-20"
          aria-label="Close"
        >
          ×
        </button>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
