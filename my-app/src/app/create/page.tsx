"use client";
import React from "react";
import StepIndicator from "@/components/step-indicator";
import SelectLayout from "@components/steps/select-layout";
import PersonalDetailsForm from "@components/steps/personal-details";
import ResumePreview from "@components/steps/preview";
import DownloadResume from "@components/steps/download";

import { FormNavigationProvider, useFormNavigationContext } from "@/context/formNavigationContext";

const StepContent: React.FC = () => {
  const { currentStep,} = useFormNavigationContext();

  switch (currentStep) {
    case 1:
      return <SelectLayout  /*onNext={goToNextStep}*/ />;
    case 2:
      return <PersonalDetailsForm /*onNext={goToNextStep}*/ />;
    case 3:
      return <ResumePreview /*onNext={goToNextStep}*/ />;
    case 4:
      return <DownloadResume />;
    default:
      return null;
  }
};

const CreateResumePage: React.FC = () => {
  const { currentStep, steps } = useFormNavigationContext();

  return (
    <div className="max-w-3xl mx-auto p-2">
      <StepIndicator />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Step {currentStep}: {steps[currentStep - 1]}
        </h2>

        <StepContent />
      </div>
    </div>
  );
};

// Wrap the entire page inside the provider
export default function WrappedCreateResumePage() {
  return (
    <FormNavigationProvider>
      <CreateResumePage />
    </FormNavigationProvider>
  );
}
