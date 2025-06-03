"use client";
import React, { createContext, useContext, useState } from "react";

const steps = [
  "Select Layout",
  "Fill in Personal Details",
  "Preview",
  "Download",
];

interface FormNavigationContextType {
  currentStep: number;
  totalSteps: number;
  steps: string[];
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const FormNavigationContext = createContext<FormNavigationContextType | undefined>(undefined);

export const FormNavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <FormNavigationContext.Provider
      value={{
        currentStep,
        totalSteps: steps.length,
        steps,
        goToNextStep,
        goToPreviousStep,
      }}
    >
      {children}
    </FormNavigationContext.Provider>
  );
};

export const useFormNavigationContext = () => {
  const context = useContext(FormNavigationContext);
  if (!context) {
    throw new Error("useFormNavigationContext must be used within FormNavigationProvider");
  }
  return context;
};
