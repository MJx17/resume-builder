import React from "react";
import { Button } from "@components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

interface StepIndicatorProps {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  totalSteps: number;
}

const steps = [
  "Select Layout",
  "Fill in  Details",
  "Preview",
  "Download",
];

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  onNext,
  onBack,
  totalSteps,
}) => {
  const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-center">Progress</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Progress Bar */}
        <div className="relative h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Circles with Labels */}
        <div className="flex justify-between items-center mb-6">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;

            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${isCompleted ? "bg-green-500 text-white" :
                      isCurrent ? "bg-blue-500 text-white" :
                        "bg-gray-300 text-gray-700"}`}
                >
                  {stepNumber}
                </div>
                <span className="text-xs mt-1 text-center w-20">{step}</span>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button onClick={onBack} disabled={currentStep === 1}>
            Back
          </Button>
          {currentStep < totalSteps ? (
            <Button onClick={onNext}>Next</Button>
          ) : (
            <Button disabled>Done</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StepIndicator;
