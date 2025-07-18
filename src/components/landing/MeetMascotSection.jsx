import React from "react";
import Button from "../common/Button";
import BigMascotIcon from "../../assets/icons/BigMascotIcon";

export default function MeetMascotSection() {
  return (
    <section className="py-16 px-4 md:px-16" style={{ background: '#666891' }} >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Mascot Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in-left">
          {/* Replace with waving mascot if available */}
          <div className="bg-yellow-200 rounded-full p-6 shadow-lg flex items-center justify-center">
            <img
              src={require("../../assets/Mascots/Mascot_Waving.svg").default}
              alt="Nudgr Mascot Waving"
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
              style={{ maxWidth: "14rem", maxHeight: "14rem" }}
            />
          </div>
        </div>
        {/* Text + CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start animate-fade-in-right">
          <h2 className="text-5xl md:text-7xl font-black text-primary mb-4 leading-[0.95] tracking-tight drop-shadow-[2px_2px_0_#EA75D4] skew-y-2 rotate-[-2deg] text-center md:text-left">
            Meet the Mascot
          </h2>
          <p className="text-lg md:text-2xl text-black/80 font-medium italic mb-8 text-center md:text-left font-['Comic_Neue','Handlee','Lexend_Deca','sans-serif']">
            Nudgr the lion is your quirky, friendly sidekick.<br />
            He’s always ready with a nudge, a wink, and a roar of encouragement.<br />
            Not your average productivity pal—he’s got personality!
          </p>
          <Button color="yellow" className="text-2xl px-8 py-4">
            Meet Nudgr &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
}
