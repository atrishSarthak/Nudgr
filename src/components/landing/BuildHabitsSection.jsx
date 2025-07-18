import React from "react";
import TypingText from "./TypingText";
import ExerciseIcon from "../../assets/icons/ExerciseIcon";
import ReadingIcon from "../../assets/icons/ReadingIcon";
import JournalingIcon from "../../assets/icons/JournalingIcon";
import WaterIcon from "../../assets/icons/WaterIcon";
import SkillIcon from "../../assets/icons/SkillIcon";
import HabitCard from "./HabitCard";

const cards = [
  {
    icon: ExerciseIcon,
    title: "Exercise to win.",
    description: "10 minutes? That counts. Track any movement. Build consistency, not perfection.",
    color: "bg-violet-500",
    size: "big",
  },
  {
    icon: ReadingIcon,
    title: "Pages over reels.",
    description: "Track your daily reading — even if it’s just 5 pages. Smart is sexy.",
    color: "bg-yellow-400",
    size: "small",
  },
  {
    icon: JournalingIcon,
    title: "Write it out.",
    description: "Dump the noise. 5 mins of journaling = 5x more clarity.",
    color: "bg-orange-400",
    size: "small",
  },
  {
    icon: WaterIcon,
    title: "Hydrate or fade.",
    description: "Set water goals. Get reminders. Don’t let dehydration steal your grind.",
    color: "bg-sky-400",
    size: "small",
  },
  {
    icon: SkillIcon,
    title: "1% Better Daily.",
    description: "Track micro-progress on any skill. You vs. yesterday.",
    color: "bg-amber-700",
    size: "small",
  },
];

export default function BuildHabitsSection() {
  return (
    <section className="py-16 px-4 md:px-16" style={{ background: '#EA75D4' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-6xl md:text-8xl font-black text-white mb-4 leading-[0.95] tracking-tight drop-shadow-[4px_4px_0_#B83280] skew-y-2 rotate-[-2deg] text-center">
          <span className="inline-block text-white">Build</span>
          <span className="inline-block ml-4 text-primary underline decoration-wavy decoration-4 decoration-white">Habits.</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium min-h-[2.5em]">
          <TypingText text="Win Your Day, One Nudge at a Time." speed={80} pause={3000} />
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-fr mb-10">
          <HabitCard {...cards[0]} className="col-span-2" />
          <HabitCard {...cards[1]} />
          <HabitCard {...cards[2]} />
          <HabitCard {...cards[3]} />
          <HabitCard {...cards[4]} />
        </div>
        <div className="text-white/90 text-lg md:text-xl mb-2 text-center">
          Meditation? Morning walk? Side hustle grind?<br/>
          Nudgr keeps your goals in check — without being a buzzkill.<br/>
          It’s you vs. you. Grr grr.
        </div>
      </div>
    </section>
  );
}
