import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

import { useResumeStore } from "@/store/personal";
import ReferenceForm from "./referenceForm";

const ReferenceSection: React.FC = () => {
  const { formData, setFormData } = useResumeStore();

  const addReference = () => {
    setFormData({
      references: [
        ...formData.references,
        { name: "", position: "", company: "", contact: "" },
      ],
    });
  };

  return (
    <div>
      <Accordion type="multiple">
        {formData.references.map((ref, index) => (
          <AccordionItem
            key={index}
            value={`ref-${index}`}
            className="rounded-md my-2 mx-6"
          >
            <AccordionTrigger>
              <strong>{ref.name || "Unnamed Reference"}</strong>
            </AccordionTrigger>
            <AccordionContent>
              <ReferenceForm index={index} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <button
        type="button"
        onClick={addReference}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Reference
      </button>
    </div>
  );
};

export default ReferenceSection;
