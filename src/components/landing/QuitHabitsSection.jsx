import React from "react";
import HabitCard from "./HabitCard";
import SmokingIcon from "../../assets/icons/SmokingIcon";
import DoomscrollingIcon from "../../assets/icons/DoomscrollingIcon";
import SpendingIcon from "../../assets/icons/SpendingIcon";
import SleepIcon from "../../assets/icons/SleepIcon";
import MealsIcon from "../../assets/icons/MealsIcon";
import MindsetIcon from "../../assets/icons/MindsetIcon";
import BigMascotIcon from "../../assets/icons/BigMascotIcon";
import TypingText from "./TypingText";

const cards = [
  // Big Yellow
  {
    icon: SmokingIcon,
    title: "Smoke less. Breathe more.",
    description: "Track each no-smoke day. Win streaks, not coughs.",
    color: "bg-yellow-400",
    size: "big",
  },
  // Big Green
  {
    icon: DoomscrollingIcon,
    title: "Unplug to upgrade.",
    description: "Say no to the endless scroll. Set screen limits Nudgr helps you keep.",
    color: "bg-green-500",
    size: "big",
  },
  // Small Blue
  {
    icon: SpendingIcon,
    title: "Wallet > dopamine.",
    description: "Tame your splurge monster. Watch your savings roar.",
    color: "bg-red-500",
    size: "small",
  },
  // Small Orange
  {
    icon: SleepIcon,
    title: "Sleep like a lion.",
    description: "No more ‘just one more episode.’ Set a wind-down time Nudgr enforces.",
    color: "bg-orange-500",
    size: "small",
  },
  // Small Brown
  {
    icon: MealsIcon,
    title: "Feed your focus.",
    description: "Skipping meals = skipping progress. Get meal reminders and streaks.",
    color: "bg-pink-500",
    size: "small",
  },
  // Small Purple
  {
    icon: MindsetIcon,
    title: "Flip the script.",
    description: "Replace doom thoughts with daily check-ins. Rewire your mind, one nudge at a time.",
    color: "bg-purple-600",
    size: "small",
  },
];

export default function QuitHabitsSection() {
  return (
    <section className="bg-accent py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <BigMascotIcon className="w-32 h-32 mb-2" />
        <h2 className="text-6xl md:text-8xl font-black text-white mb-4 leading-[0.95] tracking-tight drop-shadow-[4px_4px_0_#3E8DFF] skew-y-2 rotate-[-2deg] text-center">
          <span className="inline-block text-primary">Quit</span>
          <span className="inline-block ml-4 text-white underline decoration-wavy decoration-4 decoration-accent">Habits</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium min-h-[2.5em]">
          <TypingText text="Break Free From What’s Breaking You." speed={80} pause={3000} />
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr mb-10">
          {/* Big cards */}
          <HabitCard {...cards[0]} className="col-span-2" />
          <HabitCard {...cards[1]} className="col-span-2" />
          {/* Small cards */}
          <HabitCard {...cards[2]} />
          <HabitCard {...cards[3]} />
          <HabitCard {...cards[4]} />
          <HabitCard {...cards[5]} />
        </div>
        <div className="text-white/90 text-lg md:text-xl mb-2">
          Doomscrolling? Smoking? Impulse buys at 2AM? We’ve all been there.<br/>
          Nudgr helps you catch the moment before it catches you.<br/>
          Backed by science, built for Gen-Z brains.
        </div>
        <div className="font-black text-2xl md:text-3xl text-white mt-4">
          Nudgr doesn’t judge — it just nudges. Grr grr 🦁<br/>
          <span className="font-bold">Built-in streaks. Gentle reminders. Zero guilt.</span>
        </div>
      </div>
    </section>
  );
}
