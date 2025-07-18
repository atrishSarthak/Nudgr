import React from "react";
import Button from "../common/Button";

export default function Hero({ onGetStarted }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-primary min-h-[60vh]">
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-black font-sans text-dark mb-6 leading-tight">
          Automate & Scale <br />
          Your <span className="text-accent">Habits</span>
        </h1>
        <p className="text-xl text-dark mb-8 font-medium">
          Nudgr helps you build positive habits and break addictions using daily nudges, a friendly lion mascot, and gamification.
        </p>
        <Button className="bg-dark text-primary hover:bg-accent hover:text-white" onClick={onGetStarted}>Get Started for Free</Button>
        <div className="mt-4 text-sm text-dark opacity-70">Free Trial — No Credit Card Required</div>
      </div>
      <div className="flex-1 flex flex-col items-center mt-12 md:mt-0">
        <div className="w-72 h-72 bg-white rounded-3xl shadow-lg flex items-center justify-center overflow-hidden">
          <img
            src={require("../../assets/Mascots/Mascot_Waving.svg").default}
            alt="Nudgr Mascot Waving"
            className="object-contain w-64 h-64"
            style={{ maxWidth: "15rem", maxHeight: "15rem" }}
          />
        </div>
        <div className="mt-6 w-72 bg-dark rounded-xl p-4 text-white font-mono text-xs shadow-lg">
          <span className="text-accent">// Habit streak code block placeholder</span>
          <pre className="mt-2">const streak = await nudgr.getStreak(USER_ID);</pre>
        </div>
      </div>
    </section>
  );
}
