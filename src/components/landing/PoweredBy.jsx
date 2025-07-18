import React from "react";

export default function PoweredBy() {
  return (
    <section className="bg-accent py-10 flex flex-col items-center">
      <div className="flex gap-16 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 text-2xl">⚡</div>
          <span className="font-bold text-dark text-center">OFFICIAL ZAPIER PARTNER</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 text-2xl">☁️</div>
          <span className="font-bold text-dark text-center">POWERED BY AWS</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 text-2xl">🏆</div>
          <span className="font-bold text-dark text-center">#1 PRODUCT OF THE DAY</span>
        </div>
      </div>
    </section>
  );
}
