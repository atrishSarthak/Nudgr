import React from "react";
import Button from "../common/Button";

export default function GetStartedModal({ open, onClose, onQuitHabits, onBuildHabits }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 transition-all duration-200" onClick={onClose} />
      {/* Modal content */}
      <div className="relative z-10 w-full max-w-xl mx-4">
        <div className="bg-green-500 w-full min-h-[340px] border-4 border-black shadow-[8px_8px_0_#000] p-14 flex flex-col gap-10 animate-fade-in-up" style={{ borderRadius: 0 }}>
          <button
            onClick={onClose}
            className="absolute top-6 right-7 text-white/80 hover:text-white text-2xl font-bold focus:outline-none"
            aria-label="Close"
          >
            ×
          </button>
          <div className="flex flex-col gap-7 items-center justify-center mt-6">
            <Button color="red" className="w-64 max-w-full text-lg py-4 font-bold tracking-tight" onClick={onQuitHabits}>
              Quit Habits
            </Button>
            <Button color="yellow" className="w-64 max-w-full text-lg py-4 font-bold tracking-tight" onClick={onBuildHabits}>
              Build Habits
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
