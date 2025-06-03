import React, { useEffect, useRef, useState } from "react";
import { Button } from "@components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useFormNavigationContext } from "@/context/formNavigationContext";

const StepIndicator: React.FC = () => {
  const { currentStep, totalSteps, steps, goToNextStep, goToPreviousStep } = useFormNavigationContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const totalWidth = containerRef.current.offsetWidth;
      const availableWidth = totalWidth - 80;
      const width = ((currentStep - 1) / (totalSteps - 1)) * availableWidth;
      setProgressWidth(width);
    }
  }, [currentStep, totalSteps]);

  return (
    <Card className="mb-8 rounded-md">
      <CardHeader>
        <CardTitle className="text-center">Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full px-4" ref={containerRef}>
          <div className="absolute top-5 left-10 right-10 h-1 bg-gray-300 rounded" />
          <div
            className="absolute top-5 h-1 bg-blue-500 rounded transition-all duration-800"
            style={{ left: "2.5rem", width: `${progressWidth}px` }}
          />
          <div className="relative flex justify-between select-none">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;

              return (
                <div key={index} className="flex flex-col items-center w-20">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold
                      ${isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"}`}
                  >
                    {stepNumber}
                  </div>
                  <span className="text-xs mt-1 text-center">{step}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Button onClick={goToPreviousStep} className="bg-gray-200 hover:bg-gray-300 text-black">
            Prev
          </Button>
          <Button
            onClick={goToNextStep}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StepIndicator;
