import React from "react";
import BigMascotIcon from "../../assets/icons/BigMascotIcon";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-4 px-4 md:px-16 relative overflow-hidden">
      {/* Decorative paw prints or dots (optional) */}
      {/* Mascot peeking/waving bottom left */}
      <div className="absolute left-0 bottom-0 z-10 hidden md:block opacity-80">
        <BigMascotIcon className="w-24 h-24 -mb-4 ml-[-16px]" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-8 animate-fade-in">
        {/* About Nudgr */}
        <div className="flex flex-col items-start gap-4 animate-fade-in-up">
          <div className="bg-yellow-300 rounded-full p-3 shadow-lg mb-2">
            <BigMascotIcon className="w-12 h-12" />
          </div>
          <div className="font-bold text-2xl mb-2">Nudgr</div>
          <div className="text-gray-400 italic font-medium">
            Built to nudge you toward better habits — not bark orders. Grr grr.<br />
            Made with 🧠 & ❤️.
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-2 animate-fade-in-up">
          <div className="font-bold text-xl mb-2">Quick Links</div>
          {[
            { label: "Quit Habits", href: "#quit-habits" },
            { label: "Build Habits", href: "#build-habits" },
            { label: "Meet Nudgr", href: "#meet-nudgr" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Contact Us", href: "mailto:hello@nudgr.app" },
          ].map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-yellow-300 hover:underline transition-colors font-medium py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Newsletter Signup */}
        <div className="flex flex-col gap-4 animate-fade-in-up">
          <div className="font-bold text-xl mb-2">Get Nudged by Email 📨</div>
          <div className="text-gray-400 italic font-medium mb-2">
            Short weekly pep talks. Zero spam. Grr’s honor.
          </div>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-l-xl px-4 py-3 text-lg bg-neutral-800 text-white placeholder-gray-500 border-none focus:ring-2 focus:ring-yellow-300 outline-none flex-1"
            />
            <Button
              type="submit"
              color="yellow"
              className="rounded-l-none rounded-r-xl px-6 py-3 text-lg font-bold transition-colors duration-200 hover:bg-yellow-400"
            >
              Subscribe &rarr;
            </Button>
          </form>
        </div>
      </div>
      {/* Divider and bottom bar */}
      <div className="w-full h-px bg-neutral-800 my-6" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm px-2">
        <div>© 2025 Nudgr. All roars reserved.</div>
        <div className="flex gap-4">
          <a href="#terms" className="hover:underline hover:text-yellow-300 transition-colors">Terms</a>
          <a href="#privacy" className="hover:underline hover:text-yellow-300 transition-colors">Privacy</a>
          <a href="#roar-policy" className="hover:underline hover:text-yellow-300 transition-colors">Roar Policy</a>
        </div>
      </div>
    </footer>
  );
}
