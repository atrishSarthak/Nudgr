import React, { createContext, useContext, useState } from "react";

const OnboardingContext = createContext();

export function OnboardingProvider({ children }) {
  const [selectedQuitHabits, setSelectedQuitHabits] = useState([]);
  const [selectedBuildHabits, setSelectedBuildHabits] = useState([]);
  const [step, setStep] = useState(null); // 'getStarted' | 'quitHabits' | 'buildHabits' | 'auth' | null

  return (
    <OnboardingContext.Provider
      value={{
        selectedQuitHabits,
        setSelectedQuitHabits,
        selectedBuildHabits,
        setSelectedBuildHabits,
        step,
        setStep,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  return useContext(OnboardingContext);
}
