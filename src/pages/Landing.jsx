import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import QuitHabitsSection from "../components/landing/QuitHabitsSection";

import BuildHabitsSection from "../components/landing/BuildHabitsSection";
import MeetMascotSection from "../components/landing/MeetMascotSection";

import HowItWorksSection from "../components/landing/HowItWorksSection";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <div className="font-sans bg-light min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <QuitHabitsSection />
      <BuildHabitsSection />
      <HowItWorksSection />
      <MeetMascotSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
