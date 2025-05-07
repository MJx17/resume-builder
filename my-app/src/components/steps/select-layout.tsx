import React, { useState } from "react";
import { Button } from "@components/ui/button"; // ShadCN button component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SelectLayout: React.FC<{ onNext: () => void }> = ({ onNext }) => {


  const layouts = [
    {
      name: "Harvard",
      description: "Classic and professional layout with a formal academic style, featuring serif fonts and structured design.",
      image: "/classic.jpg",
      formType: "no-image", // Specifies no image layout
    },
    {
      name: "Stanford",
      description: "Modern and clean layout with a minimalist design, perfect for highlighting key professional details.",
      image: "/modern.jpg",
      formType: "no-image", // Specifies no image layout
    },
    {
      name: "Oxford",
      description: "Traditional layout with a structured and organized style, ideal for formal academic and professional resumes.",
      image: "/professional.jpg",
      formType: "no-image", // Specifies no image layout
    },
    {
      name: "MIT",
      description: "Technical-focused layout emphasizing engineering expertise and projects, with a clean and structured design.",
      image: "/images/mit.jpg", // Image available
      formType: "image", // Image layout
    },
    {
      name: "Cambridge",
      description: "Elegant and professional layout, ideal for academic and research-oriented resumes with a clean design.",
      image: "/images/cambridge.jpg", // Image available
      formType: "image", // Image layout
    },
    {
      name: "Berkeley",
      description: "Creative and dynamic layout, perfect for tech-savvy professionals and digital artists to showcase skills and projects.",
      image: "/images/berkeley.jpg", // Image available
      formType: "image", // Image layout
    },
  ];




  const [selectedLayout, setSelectedLayout] = useState<string | null>(null);

  return (
    <div className="text-center max-w-3xl mx-auto">


      <Carousel className="mb-6">
        <CarouselContent className="-ml-2 md:-ml-4">
          {layouts.map((layout) => (
            <CarouselItem key={layout.name} className=" basis-full md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
              <div
                className={`p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-all ${selectedLayout === layout.name
                  ? "border-blue-500"
                  : "border-gray-300"
                  }`}
                onClick={() => {
                  setSelectedLayout(layout.name);
                  onNext();
                }}
              >
                <img
                  src={layout.image}
                  alt={layout.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium mb-2">{layout.name}</h3>
                <p className="text-sm text-gray-500">{layout.description}</p>
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
