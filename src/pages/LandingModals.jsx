import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/landing/Hero";
import QuitHabitsSection from "../components/landing/QuitHabitsSection";
import BuildHabitsSection from "../components/landing/BuildHabitsSection";
import MeetMascotSection from "../components/landing/MeetMascotSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import Testimonials from "../components/landing/Testimonials";
import Footer from "../components/layout/Footer";
import Modal from "../components/common/Modal";
import GetStartedModal from "../components/landing/GetStartedModal";
import QuitHabitModal from "../components/landing/QuitHabitModal";
import BuildHabitModal from "../components/landing/BuildHabitModal";
import Login from "./Login";
import SignUp from "./SignUp";
import OnboardingAuthModal from "../components/landing/OnboardingAuthModal";
import { useOnboarding } from "../context/OnboardingContext";

export default function LandingModals() {
  const {
    step,
    setStep,
    selectedQuitHabits,
    setSelectedQuitHabits,
    selectedBuildHabits,
    setSelectedBuildHabits
  } = useOnboarding();

  return (
    <div className="font-sans bg-light min-h-screen flex flex-col relative">
      {/* Blurred overlay when modal is open */}
      {step && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all" />
      )}
      <Navbar onLogin={() => setStep('login')} onSignUp={() => setStep('signup')} />
      <Hero onGetStarted={() => setStep('getStarted')} />
      <QuitHabitsSection />
      <BuildHabitsSection />
      <HowItWorksSection />
      <MeetMascotSection />
      <Testimonials />
      <Footer />
      {/* Modals */}
      <GetStartedModal
        open={step === 'getStarted'}
        onClose={() => setStep(null)}
        onQuitHabits={() => setStep('quitHabits')}
        onBuildHabits={() => setStep('buildHabits')}
      />
      <QuitHabitModal
        open={step === 'quitHabits'}
        onClose={() => setStep(null)}
        onBuildHabits={() => setStep('buildHabits')}
        onNext={() => setStep('auth')}
      />
      <BuildHabitModal
        open={step === 'buildHabits'}
        onClose={() => setStep(null)}
        onQuitHabits={() => setStep('quitHabits')}
        onNext={() => setStep('auth')}
      />
      <OnboardingAuthModal
        open={step === 'auth'}
        onLogin={() => setStep('login')}
        onSignUp={() => setStep('signup')}
        onClose={() => setStep(null)}
      />
      <Modal open={step === 'login'} onClose={() => setStep(null)}>
        <Login hideSignUp onSignUp={() => setStep('signup')} onClose={() => setStep(null)} />
      </Modal>
      <Modal open={step === 'signup'} onClose={() => setStep(null)}>
        <SignUp hideLogin onLogin={() => setStep('login')} onClose={() => setStep(null)} />
      </Modal>
    </div>
  );
}
