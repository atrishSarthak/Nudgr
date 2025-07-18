import React from "react";
import { useOnboarding } from "../../context/OnboardingContext";
import Modal from "../common/Modal";
import Button from "../common/Button";

const HABITS = [
  {
    emoji: "🏋️",
    title: "Exercise",
    summary:
      "Nudgr doesn’t lift — but he’ll nudge while you do. One stretch, one step, one roar at a time. Let’s turn sweat into streaks. 💦🦁",
  },
  {
    emoji: "🌞",
    title: "Morning Routine",
    summary:
      "Lions don’t hit snooze. They rise, shine, and own the savannah. Build your AM flow — and let Nudgr Grr you into glory. ☀️📅",
  },
  {
    emoji: "📖",
    title: "Reading Habit",
    summary:
      "Less screen, more scene. Flip pages, not reels. 📚 Nudgr loves a good plot twist — especially the one where you level up. Grrr.",
  },
  {
    emoji: "📝",
    title: "Journaling",
    summary:
      "You’ve got thoughts. Give them a home. 📓 Write it out, roar it out — Nudgr’s here to high-five your headspace. ✍️🦁",
  },
  {
    emoji: "🎯",
    title: "Learn a New Skill",
    summary:
      "Learn it. Practice it. Dominate it. Whether it's juggling, coding, or baking — Nudgr’s your hype lion. Grr Grr goes 'You got this!' 🧠⚡",
  },
];

function BuildHabitCard({ emoji, title, summary, selected, onSelect }) {
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

export default function BuildHabitModal({ open, onClose, onQuitHabits, onNext }) {
  const { selectedBuildHabits, setSelectedBuildHabits } = useOnboarding();

  function handleSelect(title) {
    setSelectedBuildHabits((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }
  return (
    <Modal open={open} onClose={onClose}>
      <div className="w-full max-w-5xl min-w-[700px] py-6 bg-yellow-300 border-4 border-black shadow-[8px_8px_0_#000] relative min-h-[600px] md:min-h-[520px]" style={{ borderRadius: 0 }}>
        <h2 className="text-3xl md:text-4xl font-black text-dark mb-2 text-center">Build Habits</h2>
        <div className="text-lg text-dark/80 mb-6 text-center">Choose habits you want to build</div>
        <div className="flex overflow-x-auto pb-16 hide-scrollbar px-8" style={{ WebkitOverflowScrolling: 'touch' }}>
          {HABITS.map((habit) => (
            <BuildHabitCard
              key={habit.title}
              {...habit}
              selected={selectedBuildHabits.includes(habit.title)}
              onSelect={() => handleSelect(habit.title)}
            />
          ))}
        </div>
        {/* Bottom right buttons */}
        <div className="absolute bottom-6 right-8 flex gap-4 z-10">
          <Button
            color="red"
            className="px-8 py-4 text-lg md:text-xl font-bold shadow-[4px_4px_0_#000] border-2 border-black"
            style={{ minWidth: 160 }}
            onClick={onQuitHabits}
          >
            Quit Habits
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
