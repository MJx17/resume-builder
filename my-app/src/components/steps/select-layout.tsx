import React, { useState, useEffect } from "react";
import { Button } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { COLORS } from "@components/color-picker";
import { useLayoutStore } from "@/store/layoutStore";
import { useFormNavigationContext } from "@/context/formNavigationContext";

const layouts = [
  {
    id: "harvard",
    name: "Harvard",
    description:
      "Classic and professional layout with a formal academic style, featuring serif fonts and structured design.",
    image: "/classic.jpg",
    formType: "no-image",
  },
  {
    id: "stanford",
    name: "Stanford",
    description:
      "Modern and clean layout with a minimalist design, perfect for highlighting key professional details.",
    image: "/modern.jpg",
    formType: "no-image",
  },
  {
    id: "oxford",
    name: "Oxford",
    description:
      "Traditional layout with a structured and organized style, ideal for formal academic and professional resumes.",
    image: "/professional.jpg",
    formType: "no-image",
  },
  {
    id: "mit",
    name: "MIT",
    description:
      "Technical-focused layout emphasizing engineering expertise and projects, with a clean and structured design.",
    image: "/images/mit.jpg",
    formType: "image",
  },
  {
    id: "cambridge",
    name: "Cambridge",
    description:
      "Elegant and professional layout, ideal for academic and research-oriented resumes with a clean design.",
    image: "/images/cambridge.jpg",
    formType: "image",
  },
  {
    id: "berkeley",
    name: "Berkeley",
    description:
      "Creative and dynamic layout, perfect for tech-savvy professionals and digital artists to showcase skills and projects.",
    image: "/images/berkeley.jpg",
    formType: "image",
  },
];

const SelectLayout: React.FC = () => {
  const {
    layout: selectedLayout,
    color: currentColor,
    setLayout,
    setColor,
    setSelectedTemplate,
  } = useLayoutStore();

  // Start with currentColor from store, or null
  const [selectedColor, setSelectedColor] = useState<string | null>(currentColor || null);
  const { goToNextStep } = useFormNavigationContext();

  const [hasMovedNext, setHasMovedNext] = useState(false);

  const handleSelectLayout = (layoutId: string) => {
    const layout = layouts.find((l) => l.id === layoutId);
    if (layout) {
      setLayout(layout.id);
      setSelectedTemplate(layout);

      // Only advance if color selected and not already moved to next step
      if (selectedColor && !hasMovedNext) {
        goToNextStep();
        setHasMovedNext(true);
      }
    }
  };

  const handleSelectColor = (colorId: string) => {
    const selected = COLORS.find((c) => c.id === colorId);
    if (!selected) return;

    setSelectedColor(colorId);
    setColor(selected.color); // Save actual Tailwind class to store

    if (selectedLayout && !hasMovedNext) {
      goToNextStep();
      setHasMovedNext(true);
    }
    console.log('Preview color:', colorId);
  };

  // Remove this useEffect or limit it strictly to the case when both are set
  // Keeping this to sync if both are set initially or changed outside handlers
  useEffect(() => {
    if (selectedLayout && selectedColor) {
      setColor(selectedColor); // sync store color if not in sync
      // Optionally, call goToNextStep here, but might cause multiple calls if handlers already call it
      // So safest to comment it out or remove
      // goToNextStep();
    }
  }, [selectedLayout, selectedColor, setColor]);


  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Color Picker */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Choose a theme color</h2>
        <div className="flex justify-center flex-wrap gap-3">


          <TooltipProvider>
            <div className="flex flex-wrap gap-4 p-2">
              {COLORS.map((col) => (
                <Tooltip key={col.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`w-8 h-8 rounded-full border-2 ${selectedColor === col.id
                          ? "ring-2 ring-offset-2 ring-blue-500"
                          : "border-gray-300"
                        }`}
                      style={{ backgroundColor: col.color }}
                      onClick={() => handleSelectColor(col.id)}
                      aria-label={col.id}
                      aria-pressed={selectedColor === col.id}
                      type="button"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" sideOffset={4}>
                    {col.id}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
         
        </div>

      </div>

      {/* Layout Carousel */}
      <Carousel className="mb-6">
        <CarouselContent className="-ml-2 md:-ml-4">
          {layouts.map((layout) => (
            <CarouselItem
              key={layout.id}
              className="basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            >
              <div
                className={`relative p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-all ${selectedLayout === layout.id
                  ? "border-blue-500"
                  : "border-gray-300"
                  }`}
                onClick={() => handleSelectLayout(layout.id)}
              >
                <img
                  src={layout.image}
                  alt={layout.name}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium mb-2">{layout.name}</h3>
                <p className="text-sm">{layout.description}</p>
                {selectedLayout === layout.id && (
                  <span className="absolute top-2 right-2 text-green-500 text-lg font-bold">
                    ✓
                  </span>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SelectLayout;
