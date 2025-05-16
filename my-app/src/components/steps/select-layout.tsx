import React, { useState } from "react";
import { Button } from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { COLORS } from "@components/color-picker";
import { useLayoutStore } from "@/store/layoutStore";

const SelectLayout: React.FC<{ onNext: () => void }> = ({ onNext }) => {
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

  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const { setLayout, setColor } = useLayoutStore();

  const handleSelectLayout = (layoutId: string) => {
    setSelectedLayout(layoutId);
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleNextClick = () => {
    if (selectedLayout && selectedColor) {
      setLayout(selectedLayout);
      setColor(selectedColor);
      onNext();
    }
  };

  const isNextDisabled = !selectedLayout?.length || !selectedColor?.length;

  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Color Picker */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Choose a theme color</h2>
        <div className="flex justify-center flex-wrap gap-3">
          {COLORS.map((col) => (
            <button
              key={col.id}
              className={`w-8 h-8 rounded-full border-2 ${col.color} ${
                selectedColor === col.color
                  ? "ring-2 ring-offset-2 ring-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => handleSelectColor(col.color)}
              aria-label={col.id}
              aria-pressed={selectedColor === col.color}
              title={col.id}
              type="button"
            />
          ))}
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
                className={`relative p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-all ${
                  selectedLayout === layout.id
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
                <p className="text-sm text-gray-500">{layout.description}</p>
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

      {/* Next Button */}
      <Button
        onClick={handleNextClick}
        disabled={isNextDisabled}
        className={`mt-4 ${
          isNextDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        Next
      </Button>
    </div>
  );
};

export default SelectLayout;
