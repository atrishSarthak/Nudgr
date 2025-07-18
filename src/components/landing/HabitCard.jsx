import React from "react";

/**
 * Props:
 * - emoji: string
 * - title: string
 * - description: string
 * - color: Tailwind color string (e.g. 'bg-yellow-300')
 * - size: 'big' | 'small'
 */
// To use: import your SVGs from /src/assets/icons and pass as the 'icon' prop
export default function HabitCard({ icon: Icon, title, description, color, size = 'small' }) {
  return (
    <div
      className={`group relative rounded-2xl border-2 border-black shadow-[4px_4px_0_#000] transition-all duration-300 flex flex-col justify-between p-6 cursor-pointer ${color} ${size === 'big' ? 'row-span-2 min-h-[260px]' : 'min-h-[120px]'}
        hover:scale-105 hover:rotate-[-2deg] hover:shadow-[8px_8px_0_#222] active:scale-100 active:shadow-none`}
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />}
        <span className="font-bold tracking-tight text-lg md:text-xl text-black leading-tight group-hover:text-white transition-colors duration-300">{title}</span>
      </div>
      <div className="text-black/80 text-md md:text-lg font-medium italic group-hover:text-white transition-colors duration-300 font-['Comic_Neue','Handlee','Lexend_Deca','sans-serif']">
        {description}
      </div>
    </div>
  );
}
