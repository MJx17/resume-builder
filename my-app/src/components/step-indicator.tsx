import React, { useEffect, useRef, useState } from "react";
import { Button } from "@components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

const steps = [
  "Select Layout",
  "Fill in Details",
  "Preview",
  "Download",
];

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  onNext,
  onBack,
  totalSteps,
}) => {
  const stepCount = steps.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      // The total width available for the progress line (from left to right marginrounded-lg)
      const totalWidth = containerRef.current.offsetWidth;

      // Calculate pixel width for progress line:
      // subtract 5rem (80px) for margins (2.5rem left + 2.5rem right)
      const availableWidth = totalWidth - 80; 

      const width = ((currentStep - 1) / (stepCount - 1)) * availableWidth;
      setProgressWidth(width);
    }
  }, [currentStep, stepCount]);

  return (
    <Card className="mb-8 rounded-md">
      <CardHeader>
        <CardTitle className="text-center">Progress</CardTitle>
      </CardHeader>

      <CardContent>
        {/* Stepper container */}
        <div className="relative w-full px-4" ref={containerRef}>
          {/* Progress line background */}
          <div className="absolute top-5 left-10 right-10 h-1 bg-gray-300 rounded"></div>

          {/* Colored progress line */}
          <div
            className="absolute top-5 h-1 bg-blue-500 rounded transition-all duration-800"
            style={{
              left: "2.5rem", // center of first circle
              width: `${progressWidth}px`,
            }}
          ></div>

          {/* Steps */}
          <div
            className="relative flex justify-between"
            style={{ userSelect: "none" }}
          >
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center"
                  style={{ width: "5rem" }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                      ${isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                      }`}
                  >
                    {stepNumber}
                  </div>
                  <span className="text-xs mt-1 text-center">{step}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
  
      </CardContent>
    </Card>
  );
};

export default StepIndicator;
