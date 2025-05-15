import React, { useState, useEffect } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { PersonalDetailsFormProps } from '@/types/types';
import { Textarea } from "@components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";
import { MdEdit } from "react-icons/md";
import { useResumeStore } from "@/store/personal";

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({ onNext, onBack }) => {
  const { formData, setFormData } = useResumeStore();
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleChange = (field: string, value: any) => {
    setFormData({ [field]: value }); // update Zustand
  };

  const handleNestedChange = (
    section: keyof typeof formData,
    index: number,
    key: string,
    value: string | string[]
  ) => {
    const updated = [...(formData[section] as any)];
    updated[index][key] = value;
    handleChange(section, updated);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
      handleChange("image", file);
    }
  };

  const addItem = (section: keyof typeof formData, defaultItem: any) => {
    const updated = [...(formData[section] as any), defaultItem];
    handleChange(section, updated);
  };

  const removeItem = (section: keyof typeof formData, index: number) => {
    const updated = [...(formData[section] as any)];
    if (updated.length > 1) {
      updated.splice(index, 1);
      handleChange(section, updated);
    }
  };

  const isValid = formData.name.trim() !== "" && formData.email.trim() !== "";

  // ...render inputs based on formData

  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="">
        {/* Personal Info */}
        <AccordionItem value="personal" className="border rounded-md shadow-md overflow-hidden my-2">
          {/* Trigger as the top card header */}
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              <p className="text-sm text-gray-500">
                Fill in your personal details and upload a profile picture.
              </p>
            </div>
          </AccordionTrigger>

          {/* Content area with 2-column grid */}
          <AccordionContent className="p-6 bg-white grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
            {/* Left: Image preview */}
            <div className="relative w-36 h-36 border rounded-full bg-gray-100 flex-shrink-0 mx-auto md:mx-0">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  className="object-cover w-full h-full rounded-full"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400 rounded-full">
                  No Image
                </div>
              )}

              {/* Upload Icon */}
              <label
                htmlFor="image-upload"
                className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow cursor-pointer hover:bg-gray-100"
                title="Upload Profile Image"
              >
                <MdEdit size={20} className="text-blue-600" />
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Right: Inputs */}
            <div className="flex flex-col space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
                <Input
                  placeholder="Title"
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
                <Input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
                <Input
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
                <Input
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
                <Input
                  placeholder="LinkedIn URL"
                  value={formData.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                  className="w-full px-4 py-2 border rounded-md shadow-sm"
                />
              </div>
              <Textarea
                placeholder="Summary"
                value={formData.summary}
                onChange={(e) => handleChange("summary", e.target.value)}
                className="w-full px-4 py-2 border rounded-md shadow-sm min-h-[100px]"
              />
            </div>
          </AccordionContent>
        </AccordionItem>


        {/* Education */}
        <AccordionItem value="education" className="border rounded  relative shadow-sm bg-white rounded-md my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-sm text-gray-500">
                Fill Educational Attainments.
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 p-6">
            {/** 
     * If formData.education is empty, render a default editable block; 
     * otherwise, render all education items.
     **/}
            {(formData.education.length === 0
              ? [{ school: "", degree: "", year: "" }]
              : formData.education
            ).map((edu, index) => {
              // Determine whether this block should be in 'editing' mode.
              // For the default block (when education is empty), we always show inputs.
              const isFirstDefault = formData.education.length === 0 && index === 0;
              const isEditing = isFirstDefault || editingIndex === index;

              return (
                <div
                  key={index}
                  className=""
                >
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={`${edu.school} `}
                        readOnly
                        className="w-full bg-transparent border-none font-semibold text-lg"
                      />
                    ) : (
                      <h3 className="font-semibold text-lg">
                        {`${edu.school}`}
                      </h3>
                    )}

                    {/** 
             * Show Edit/Delete buttons only if there is real education data.
             * For the initial default block (when there’s no education data), we don't show these controls.
             **/}
                    {formData.education.length > 0 && (
                      <div className="flex space-x-2">
                        {isEditing ? (
                          <>
                            <button
                              className="text-green-600 hover:underline"
                              onClick={() => setEditingIndex(null)}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 hover:underline"
                              onClick={() => setEditingIndex(null)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => setEditingIndex(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:underline"
                              onClick={() => removeItem("education", index)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {/** 
           * If in editing mode, show input fields; otherwise, show text display.
           * For the default empty block, inputs are always shown.
           **/}
                  {isEditing ? (
                    <div className="space-y-2">
                      <Input
                        placeholder="School"
                        value={edu.school}
                        onChange={(e) =>
                          handleNestedChange("education", index, "school", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) =>
                          handleNestedChange("education", index, "degree", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) =>
                          handleNestedChange("education", index, "year", e.target.value)
                        }
                      />

                      {/** For the default block (when no data exists), show a Save button instead of Edit/Delete controls */}
                      {isFirstDefault && (
                        <div className="flex justify-end mt-2">
                          <Button
                            onClick={() => {
                              // Validate: at least one of the fields must be filled.
                              if (edu.school || edu.degree || edu.year) {
                                // Add to state
                                addItem("education", edu);
                              } else {
                                alert("Please fill in at least one field.");
                              }
                            }}
                          >
                            Save Education
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p>
                        <strong>School:</strong> {edu.school}
                      </p>
                      <p>
                        <strong>Degree:</strong> {edu.degree}
                      </p>
                      <p>
                        <strong>Year:</strong> {edu.year}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

            {/** 
     * If there is already education data (and we're not in the "no data" default state),
     * show a button to add additional education entries.
     **/}
            {formData.education.length > 0 && (
              <Button
                onClick={() => {
                  addItem("education", { school: "", degree: "", year: "" });
                  setEditingIndex(formData.education.length);
                }}
                className="mt-4"
              >
                + Add Education
              </Button>
            )}
          </AccordionContent>
        </AccordionItem>









        {/* Experience */}
        <AccordionItem value="experience" className="space-y-4 border rounded  relative shadow-sm bg-white">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-sm text-gray-500">
                Fill Educational Attainments.
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6">
            {(formData.experience.length === 0
              ? [{ role: "", company: "", duration: "", description: [""] }]
              : formData.experience
            ).map((exp, index) => {
              const isFirstDefault = formData.experience.length === 0 && index === 0;
              const isEditing = editingIndex === index || isFirstDefault;

              return (
                <div
                  key={index}
                  className=""
                >
                  <div className="flex justify-between items-center mb-2 border-b pb-2">
                    {isEditing ? (
                      <input
                        type="text"
                        value={` ${exp.company} `}
                        readOnly
                        className="w-full bg-transparent border-none font-semibold text-lg"
                      />
                    ) : (
                      <h3 className="font-semibold text-lg">
                        {` ${exp.company}`}
                      </h3>
                    )}

                    {formData.experience.length > 0 && (
                      <div className="flex space-x-2">
                        {isEditing ? (
                          <>
                            <button
                              className="text-green-600 hover:underline"
                              onClick={() => setEditingIndex(null)}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 hover:underline"
                              onClick={() => setEditingIndex(null)}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => setEditingIndex(index)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:underline"
                              onClick={() => removeItem("experience", index)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  {isEditing && (
                    <div className="space-y-2">
                      <Input
                        placeholder="Role"
                        value={exp.role}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "role", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "company", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "duration", e.target.value)
                        }
                      />
                      <Textarea
                        placeholder="Description"
                        value={exp.description.join("\n")}
                        onChange={(e) =>
                          handleNestedChange(
                            "experience",
                            index,
                            "description",
                            e.target.value.split("\n")
                          )
                        }
                        className="min-h-[100px]"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            <Button
              onClick={() => {
                if (formData.experience.length === 0) {
                  setFormData((prev) => ({
                    ...prev,
                    experience: [{ role: "", company: "", duration: "", description: [""] }],
                  }));
                } else {
                  addItem("experience", {
                    role: "",
                    company: "",
                    duration: "",
                    description: [""],
                  });
                  setEditingIndex(formData.experience.length);
                }
              }}
              className="mt-4"
            >
              + Add Experience
            </Button>
          </AccordionContent>
        </AccordionItem>




        {/* Skills */}
        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent className="space-y-4">
            {formData.skills.map((skill, index) => (
              <div key={index} className="relative">
                <Input
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChange={(e) => {
                    const updated = [...formData.skills];
                    updated[index] = e.target.value;
                    handleChange("skills", updated);
                  }}
                />
                {formData.skills.length > 1 && (
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-red-500"
                    onClick={() => {
                      const updated = [...formData.skills];
                      updated.splice(index, 1);
                      handleChange("skills", updated);
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <Button onClick={() => addItem("skills", "")}>+ Add Skill</Button>
          </AccordionContent>
        </AccordionItem>

        {/* Certifications */}
        <AccordionItem value="certifications">
          <AccordionTrigger>Certifications</AccordionTrigger>
          <AccordionContent className="space-y-4">
            {formData.certifications.map((cert, index) => (
              <div key={index} className="space-y-2 border p-2 rounded relative">
                <Input
                  placeholder="Title"
                  value={cert.title}
                  onChange={(e) => handleNestedChange("certifications", index, "title", e.target.value)}
                />
                <Input
                  placeholder="Institution"
                  value={cert.institution}
                  onChange={(e) => handleNestedChange("certifications", index, "institution", e.target.value)}
                />
                <Input
                  placeholder="Year"
                  value={cert.year}
                  onChange={(e) => handleNestedChange("certifications", index, "year", e.target.value)}
                />
                {formData.certifications.length > 1 && (
                  <button
                    type="button"
                    className="absolute top-2 right-2 text-red-500"
                    onClick={() => removeItem("certifications", index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <Button onClick={() => addItem("certifications", { title: "", institution: "", year: "" })}>
              + Add Certification
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <Button onClick={onBack} className="bg-gray-200 hover:bg-gray-300 text-black">
          Prev
        </Button>
        <Button
          onClick={onNext}
          disabled={!isValid}
          className={`text-white ${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
            }`}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
