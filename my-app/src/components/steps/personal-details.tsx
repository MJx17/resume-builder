import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@components/ui/accordion";
import PersonalInfoForm from "@/components/sections/personal";
// import your EducationForm
import EducationSection from "@/components/sections/educationSection";
import { Experience, Certification } from '../../store/personal';
import ExperienceSection from "../sections/experienceSection";
import SkillsForm from "../sections/skills";

import CertificationSection from "../sections/certificationSection";

import ReferenceSection from "../sections/referenceSection";



const PersonalDetailsForm = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="personal" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <p className="text-sm text-gray-500">
                Fill in your personal details and upload a profile picture.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <PersonalInfoForm />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-sm text-gray-500">
                Add and edit your education details.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6">
            {/* Pass index={0} to edit the first education entry */}
            <EducationSection />
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="experience" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-sm text-gray-500">
                Add and edit your Experience details.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6">
            {/* Pass index={0} to edit the first education entry */}
            <ExperienceSection />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Skills</h3>
              <p className="text-sm text-gray-500">
                Add and edit your Skills details.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6">
            {/* Pass index={0} to edit the first education entry */}
            <SkillsForm />
          </AccordionContent>
        </AccordionItem>


        <AccordionItem value="certifications" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Certifications</h3>
              <p className="text-sm text-gray-500">
                Add and edit your Certifications details.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6">
            {/* Pass index={0} to edit the first education entry */}
            <CertificationSection />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="references" className="border rounded-md shadow-md overflow-hidden my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">References</h3>
              <p className="text-sm text-gray-500">
                Add and edit your References details.
              </p>
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-6">
            {/* Pass index={0} to edit the first education entry */}
            <ReferenceSection />
          </AccordionContent>
        </AccordionItem>


      </Accordion>
    </div>
  );
};

export default PersonalDetailsForm;
