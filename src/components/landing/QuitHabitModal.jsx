import React from "react";
import { useOnboarding } from "../../context/OnboardingContext";
import Modal from "../common/Modal";
import Button from "../common/Button";

const HABITS = [
  {
    emoji: "🚬",
    title: "Smoking",
    summary:
      "Grr Grr! Your lungs aren’t ashtrays, buddy. Nudgr’s got no chill for smoke — only fire for your future. Let’s breathe better, one nudge at a time. 🫁🔥",
  },
  {
    emoji: "📱",
    title: "Doomscrolling",
    summary:
      "Your thumb deserves a break. All that scrolling isn’t knowledge — it’s just digital noise. Nudgr says: put the phone down, pick life up. Grrr~ ✋📵",
  },
  {
    emoji: "🎰",
    title: "Gambling",
    summary:
      "The odds aren’t in your favor — they never were. Nudgr ain’t bluffin’ — it’s time to stop rolling the dice on your peace of mind. 💸🧠",
  },
  {
    emoji: "🌙",
    title: "Late Night Sleep",
    summary:
      "Owls are cool. But lions? They sleep early and rise like kings. Grr Grr says lights out, dreams in. 🛌🌅",
  },
  {
    emoji: "🍟",
    title: "Unhealthy Eating",
    summary:
      "You’re not a trash panda. Nudgr’s here to bite down on cravings and roar in favor of greens. 🥦💪 Grr Grr your way to glow-ups.",
  },
  {
    emoji: "🌀",
    title: "Overthinking",
    summary:
      "If your brain’s stuck in a spin cycle — Nudgr says “pause, breathe, grr softly.” You’re not your thoughts. You’re the lion that tames them. 🧘‍♂️🦁",
  },
];

function QuitHabitCard({ emoji, title, summary, selected, onSelect }) {
  return (
    <div
      className={`shadow-[4px_4px_0_#000] border-2 flex flex-col items-center min-w-[260px] max-w-xs p-6 mx-2 my-2 ${selected ? 'bg-blue-200 border-blue-500 ring-4 ring-blue-400' : 'bg-white border-black'}`}
      style={{ flex: "0 0 auto", borderRadius: 0 }}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 border border-gray-200 ${selected ? 'bg-blue-100' : 'bg-gray-100'}`}>
        {emoji}
      </div>
      <div className="font-bold text-lg text-dark mb-2 text-center">{title}</div>
      <div className="text-gray-700 text-sm font-medium italic mb-6 text-center" style={{ fontFamily: "Comic Neue, Handlee, Lexend Deca, sans-serif" }}>{summary}</div>
      <Button color="green" className="w-full py-2 text-base font-bold" onClick={onSelect}>Select</Button>
    </div>
  );
}

export default function QuitHabitModal({ open, onClose, onBuildHabits, onNext }) {
  const { selectedQuitHabits, setSelectedQuitHabits } = useOnboarding();

  function handleSelect(title) {
    setSelectedQuitHabits((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }
  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-5xl min-w-[700px] py-6 bg-red-500 border-4 border-black shadow-[8px_8px_0_#000] relative min-h-[600px] md:min-h-[520px]" style={{ borderRadius: 0 }}>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-2 text-center">Quit Habits</h2>
        <div className="text-lg text-white/90 mb-6 text-center">Choose habits you want to quit</div>
        <div className="flex overflow-x-auto pb-16 hide-scrollbar px-8" style={{ WebkitOverflowScrolling: 'touch' }}>
          {HABITS.map((habit) => (
            <QuitHabitCard
              key={habit.title}
              {...habit}
              selected={selectedQuitHabits.includes(habit.title)}
              onSelect={() => handleSelect(habit.title)}
            />
          ))}
        </div>
        {/* Bottom right buttons */}
        <div className="absolute bottom-6 right-8 flex gap-4 z-10">
          <Button
            color="yellow"
            className="px-8 py-4 text-lg md:text-xl font-bold shadow-[4px_4px_0_#000] border-2 border-black"
            style={{ minWidth: 160 }}
            onClick={onBuildHabits}
          >
            Build Habits
          </Button>
          <Button
            color="white"
            className="px-6 py-3 text-base md:text-lg font-semibold shadow-[4px_4px_0_#000] border-2 border-black"
            style={{ minWidth: 100 }}
            onClick={onNext}
          >
            Next
          </Button>
        </div>
      </div>
    </Modal>
  );
}

// Add this to your CSS or Tailwind config for hide-scrollbar if not already present:
// .hide-scrollbar::-webkit-scrollbar { display: none; }
