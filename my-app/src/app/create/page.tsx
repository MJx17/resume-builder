"use client";

import React, { useState } from "react";
import StepIndicator from "@/components/step-indicator";

import SelectLayout from "@components/steps/select-layout";
import PersonalDetailsForm from "@components/steps/personal-details";
import ResumePreview from "@components/steps/preview";
import DownloadResume from "@components/steps/download";

const steps = [
  "Select Layout",
  "Fill in Personal Details",
  "Preview",
  "Download",
];

const CreateResumePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Dynamically render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <SelectLayout onNext={goToNextStep} />;
      case 2:
        return <PersonalDetailsForm onNext={goToNextStep} />;
      case 3:
        return <ResumePreview onNext={goToNextStep}/>;
      case 4:
        return <DownloadResume />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-2">
      <StepIndicator
        currentStep={currentStep}
        onNext={goToNextStep}
        onBack={goToPreviousStep}
        totalSteps={steps.length}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Step {currentStep}: {steps[currentStep - 1]}
        </h2>

        <div>{renderStepContent()}</div>
      </div>
    </div>
  );
};

export default CreateResumePage;
