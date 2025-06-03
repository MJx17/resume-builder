import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

import { useResumeStore } from "@/store/personal";
import EducationForm from "./education";

const EducationSection: React.FC = () => {
  const { formData, setFormData } = useResumeStore();

  const addEducation = () => {
    setFormData({
      education: [...formData.education, { school: "", degree: "", year: "" }],
    });
  };

  return (
    <div>
      <Accordion type="multiple">
        {formData.education.map((edu, index) => (
          <AccordionItem
            key={index}
            value={`edu-${index}`}
            className="rounded-md my-2 mx-6"
          >
            <AccordionTrigger>
              <div className="flex justify-between w-full">
                <div>
                  <strong>{edu.school || "Untitled School"}</strong>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <EducationForm index={index} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <button
        type="button"
        onClick={addEducation}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Education
      </button>
    </div>
  );
};

export default EducationSection;
