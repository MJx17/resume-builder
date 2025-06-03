import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

import { useResumeStore } from "@/store/personal";
import ExperienceForm from "./experience";

const ExperienceSection: React.FC = () => {
  const { formData, setFormData } = useResumeStore();

  const addExperience = () => {
    setFormData({
      experience: [
        ...formData.experience,
        { company: "", position: "", duration: "", description: [""] },
      ],
    });
  };

  return (
    <div>
      <Accordion type="multiple">
        {formData.experience.map((exp, index) => (
          <AccordionItem
            key={index}
            value={`exp-${index}`}
            className="rounded-md my-2 mx-6"
          >
            <AccordionTrigger>
              <div className="flex justify-between w-full">
                <div>
                  <strong>{exp.company || "Untitled Company"}</strong>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ExperienceForm index={index} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <button
        type="button"
        onClick={addExperience}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Experience
      </button>
    </div>
  );
};

export default ExperienceSection;
