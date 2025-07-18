import React from "react";
import Button from "../common/Button";

export default function NoCode() {
  return (
    <section className="bg-light py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 max-w-xl mb-12 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">No Code? No Problem</h2>
        <p className="text-lg text-dark opacity-80 mb-8">
          Create #nocode automated workflows that take care of repetitive habit tracking and nudging in the background.
        </p>
        <Button className="text-2xl">Learn More</Button>
      </div>
      <div className="flex-1 flex justify-center w-full md:w-auto">
        <div className="relative w-full max-w-md bg-white border-2 border-black rounded-2xl overflow-hidden shadow-lg">
          <div className="divide-y-2 divide-black">
            <div className="flex items-center h-20 px-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-xl border-2 border-black mr-4">📊</div>
              <span className="font-semibold text-dark text-lg">New data</span>
            </div>
            <div className="flex items-center h-20 px-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-xl border-2 border-black mr-4">🦁</div>
              <span className="font-semibold text-dark text-lg">Create nudge</span>
            </div>
            <div className="flex items-center h-20 px-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-xl border-2 border-black mr-4">💬</div>
              <span className="font-semibold text-dark text-lg">Tweet</span>
            </div>
          </div>
          {/* Mascot placeholder, bottom right */}
          <div className="absolute bottom-0 right-0 w-32 h-24 flex items-end justify-end pointer-events-none">
            <div className="w-28 h-20 bg-primary rounded-full border-2 border-black flex items-center justify-center text-5xl -mb-4 mr-2">
              🦁
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
