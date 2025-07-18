import React from "react";

const steps = [
  {
    title: "Pick a Habit",
    description: "Choose what you want to build or break. Nudgr supports any habit, big or small.",
    icon: "🪄",
    color: "bg-green-400",
  },
  {
    title: "Get Nudged Daily",
    description: "Gentle, quirky reminders keep you on track—no guilt, just good vibes.",
    icon: "🔔",
    color: "bg-yellow-400",
  },
  {
    title: "Track Progress",
    description: "See your streaks grow and celebrate every win (even the tiny ones).",
    icon: "📈",
    color: "bg-blue-400",
  },
  {
    title: "Level Up You",
    description: "Reflect, tweak, and keep stacking wins. It’s you vs. you!",
    icon: "🚀",
    color: "bg-pink-400",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 px-4 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 leading-[0.95] tracking-tight drop-shadow-[2px_2px_0_#EA75D4] skew-y-2 rotate-[-2deg] text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mb-10">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] transition-all duration-300 ${step.color} hover:scale-105 hover:shadow-[8px_8px_0_#222]`}>
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="font-bold text-xl mb-2 text-black text-center tracking-tight">{step.title}</div>
              <div className="text-black/80 text-md font-medium italic text-center font-['Comic_Neue','Handlee','Lexend_Deca','sans-serif']">{step.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
