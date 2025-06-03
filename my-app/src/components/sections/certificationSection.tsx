import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";

import { useResumeStore } from "@/store/personal";
import CertificationForm from "./certifications";

const CertificationSection: React.FC = () => {
  const { formData, setFormData } = useResumeStore();

  const addCertification = () => {
    setFormData({
      certifications: [
        ...formData.certifications,
        { title: "", institution: "", year: "" },
      ],
    });
  };

  return (
    <div>
      <Accordion type="multiple">
        {formData.certifications.map((cert, index) => (
          <AccordionItem
            key={index}
            value={`cert-${index}`}
            className="rounded-md my-2 mx-6"
          >
            <AccordionTrigger>
              <div className="flex justify-between w-full">
                <div>
                  <strong>{cert.title || "Untitled Certification"}</strong>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <CertificationForm index={index} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <button
        type="button"
        onClick={addCertification}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Certification
      </button>
    </div>
  );
};

export default CertificationSection;
