"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@components/ui/accordion";
import { MdEdit } from "react-icons/md";
import { useResumeStore, FormDataType, Education, Experience, Certification } from "@/store/personal";

const PersonalDetailsForm: React.FC = () => {
  const { formData, setFormData } = useResumeStore();
  const [imagePreview, setImagePreview] = useState<string>("");

  const [draftEducation, setDraftEducation] = useState<Record<number, Education>>({});
  const [draftExperience, setDraftExperience] = useState<Record<number, Experience>>({});
  const [draftCertification, setDraftCertification] = useState<Record<number, Certification>>({});


  const [editing, setEditing] = useState<{ section: keyof FormDataType | null; index: number | null }>({
    section: null,
    index: null,
  });

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleChange = (field: keyof FormDataType, value: any) => {
    setFormData({ [field]: value });
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

  const handleNestedChange = (
    section: keyof FormDataType,
    index: number,
    key: string,
    value: string | string[]
  ) => {
    const updated = [...(formData[section] as any)];
    updated[index][key] = value;
    setFormData((prev) => ({
      ...prev,
      [section]: updated,
    }));
  };

  const addItem = (section: keyof FormDataType, defaultItem: any) => {
    const updated = [...(formData[section] as any), defaultItem];
    handleChange(section, updated);
  };

  const removeItem = (section: keyof FormDataType, index: number) => {
    const updated = [...(formData[section] as any)];
    if (updated.length > 1) {
      updated.splice(index, 1);
      handleChange(section, updated);
    }
  };

  const startEditing = (section: keyof FormDataType, index: number) => {
    setEditing({ section, index });
    const item = (formData[section] as any)[index];
    switch (section) {
      case "education":
        setDraftEducation((prev) => ({ ...prev, [index]: item }));
        break;
      case "experience":
        setDraftExperience((prev) => ({ ...prev, [index]: item }));
        break;
      case "certifications":
        setDraftCertification((prev) => ({ ...prev, [index]: item }));
        break;
    }
  };
  const saveItem = (section: keyof FormDataType, index: number) => {
    const updated = [...(formData[section] as any[])];

    switch (section) {
      case "education":
        if (draftEducation[index]) {
          updated[index] = draftEducation[index];
          setDraftEducation((prev) => {
            const newDraft = { ...prev };
            delete newDraft[index];
            return newDraft;
          });
        }
        break;

      case "experience":
        if (section === "experience" && draftExperience[index]) {
          updated[index] = draftExperience[index];
          setDraftExperience((prev) => {
            const newDraft = { ...prev };
            delete newDraft[index];
            return newDraft;
          });
        }
        break;
      case "certifications":
        if (section === "certifications" && draftCertification[index]) {
          updated[index] = draftCertification[index];
          setDraftCertification((prev) => {
            const newDraft = { ...prev };
            delete newDraft[index];
            return newDraft;
          });
        }
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [section]: updated,
    }));

    setEditing({ section: null, index: null });
  };

  const cancelEdit = () => {
    if (editing.index !== null && editing.section !== null) {
      switch (editing.section) {
        case "education":
          setDraftEducation((prev) => {
            const newDraft = { ...prev };
            delete newDraft[editing.index!];
            return newDraft;
          });
          break;
        case "experience":
          // Reset to default or remove changes
          setDraftExperience((prev) => {
            const newDraft = { ...prev };
            delete newDraft[editing.index!];
            return newDraft;
          });
          break;
        case "certifications":
          setDraftCertification((prev) => {
            const newDraft = { ...prev };
            delete newDraft[editing.index!];
            return newDraft;
          });
          break;
      }
    }

    setEditing({ section: null, index: null });
  };

  const handleDraftChange = (
    section: keyof FormDataType,
    key: string,
    value: any,
    index?: number
  ) => {
    if (index === undefined) return;

    switch (section) {
      case "education":
        setDraftEducation((prev) => ({
          ...prev,
          [index]: {
            ...prev[index],
            [key]: value,
          },
        }));
        break;

      case "experience":
        setDraftExperience((prev) => ({
          ...prev,
          [index]: {
            ...prev[index],
            [key]: value,
          },
        }));
        break;

      case "certifications":
        setDraftCertification((prev) => ({
          ...prev,
          [index]: {
            ...prev[index],
            [key]: value,
          },
        }));
        break;

      default:
        break;
    }
  };

  const isValid = formData.name.trim() !== "" && formData.email.trim() !== "";

  // Continue rendering UI as normal...


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
        <AccordionItem
          value="education"
          className="border rounded relative shadow-sm bg-white rounded-md my-2"
        >
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Education</h3>
              <p className="text-sm text-gray-500">Fill Educational Attainments.</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6">
            {formData.education.map((edu, index) => {
              const isNew = !edu.school && !edu.degree && !edu.year;
              const isEditing = (editing.section === "education" && editing.index === index) || isNew;
              const draft = draftEducation[index] || { school: "", degree: "", year: "" };


              return (
                <Accordion type="single" collapsible key={index}>
                  <AccordionItem value={`edu-${index}`}>
                    <AccordionTrigger>
                      {isEditing ? "Education" : edu.school || `Education #${index + 1}`}
                    </AccordionTrigger>

                    <AccordionContent>
                      {isEditing ? (
                        <>
                          <Input
                            placeholder="School"
                            value={draft.school}
                            onChange={(e) =>
                              setDraftEducation((prev) => ({
                                ...prev,
                                [index]: { ...draft, school: e.target.value },
                              }))
                            }
                            className="mb-2"
                          />
                          <Input
                            placeholder="Degree"
                            value={draft.degree}
                            onChange={(e) =>
                              setDraftEducation((prev) => ({
                                ...prev,
                                [index]: { ...draft, degree: e.target.value },
                              }))
                            }
                            className="mb-2"
                          />
                          <Input
                            placeholder="Year"
                            value={draft.year}
                            onChange={(e) =>
                              setDraftEducation((prev) => ({
                                ...prev,
                                [index]: { ...draft, year: e.target.value },
                              }))
                            }
                          />
                          <div className="flex justify-end mt-2 space-x-2">
                            <button
                              className="text-green-600 hover:underline"
                              onClick={() => saveItem("education", index)}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 hover:underline"
                              onClick={cancelEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p><strong>School:</strong> {edu.school}</p>
                          <p><strong>Degree:</strong> {edu.degree}</p>
                          <p><strong>Year:</strong> {edu.year}</p>
                          <div className="flex justify-end mt-2 space-x-2">
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => {
                                setDraftEducation((prev) => ({
                                  ...prev,
                                  [index]: edu,
                                }));
                                startEditing("education", index);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:underline"
                              onClick={() => removeItem("education", index)}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}

            <Button
              onClick={() => {
                const newIndex = formData.education.length;
                const newItem = { school: "", degree: "", year: "" };

                addItem("education", newItem);

                setDraftEducation({
                  ...draftEducation,
                  [newIndex]: { school: "", degree: "", year: "" },
                });


                setEditing({ section: "education", index: newIndex });
              }}
              className="mt-4"
            >
              + Add Education
            </Button>
          </AccordionContent>
        </AccordionItem>










        {/* Experience */}
        <AccordionItem value="experience" className="space-y-4 border rounded  relative shadow-sm bg-white my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Experience</h3>
              <p className="text-sm text-gray-500">
                Fill Work Experience
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6">
            {formData.experience.map((exp, index) => {
              const isNew = !exp.company && !exp.role && !exp.duration && !exp.description;
              const isEditing = (editing.section === "experience" && editing.index === index) || isNew;
              const draft = draftExperience[index] || { company: "", role: "", duration: "", description: [] };


              return (
                <Accordion type="single" collapsible key={index}>
                  <AccordionItem value={`exp-${index}`}>
                    <AccordionTrigger>
                      {isEditing ? "Experience" : exp.company || `Experience #${index + 1}`}
                    </AccordionTrigger>

                    <AccordionContent>
                      {isEditing ? (
                        <>
                          <Input
                            placeholder="Company"
                            value={draft.company}
                            onChange={(e) =>
                              setDraftExperience((prev) => ({
                                ...prev,
                                [index]: { ...draft, company: e.target.value },
                              }))
                            }
                            className="mb-2"
                          />
                          <Input
                            placeholder="Role"
                            value={draft.role}
                            onChange={(e) =>
                              setDraftExperience((prev) => ({
                                ...prev,
                                [index]: { ...draft, role: e.target.value },
                              }))
                            }
                            className="mb-2"
                          />
                          <Input
                            placeholder="Duration"
                            value={draft.duration}
                            onChange={(e) =>
                              setDraftExperience((prev) => ({
                                ...prev,
                                [index]: { ...draft, duration: e.target.value },
                              }))
                            }
                          />
                          <Input
                            placeholder="Description"
                            value={draft.description.join('\n')}  // join array into multiline string
                            onChange={(e) =>
                              setDraftExperience((prev) => ({
                                ...prev,
                                [index]: { ...draft, description: e.target.value.split('\n') }, // split back into array on newline
                              }))
                            }
                          />

                          <div className="flex justify-end mt-2 space-x-2">
                            <button
                              className="text-green-600 hover:underline"
                              onClick={() => saveItem("experience", index)}
                            >
                              Save
                            </button>
                            <button
                              className="text-gray-600 hover:underline"
                              onClick={cancelEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <p><strong>Company:</strong> {exp.company}</p>
                          <p><strong>Role:</strong> {exp.role}</p>
                          <p><strong>Duration:</strong> {exp.duration}</p>
                          <p><strong>Description:</strong> {exp.description.join(", ")}</p>


                          <div className="flex justify-end mt-2 space-x-2">
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() => {
                                setDraftExperience((prev) => ({
                                  ...prev,
                                  [index]: exp,
                                }));
                                startEditing("experience", index);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:underline"
                              onClick={() => removeItem("experience", index)}
                            >
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}

            <Button
              onClick={() => {
                const newIndex = formData.experience.length;
                const newItem = { company: "", role: "", duration: "", description: [] };

                addItem("experience", newItem);
                setDraftExperience({
                  ...draftExperience,
                  [newIndex]: newItem,
                });

                setEditing({ section: "experience", index: newIndex });
              }}
              className="mt-4"
            >
              + Add Experience
            </Button>

          </AccordionContent>


        </AccordionItem>




        {/* Skills */}
        <AccordionItem value="Skiils" className="space-y-4 border rounded  relative shadow-sm bg-white my-2">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Skiils</h3>
              <p className="text-sm text-gray-500">
                Skiils
              </p>
            </div>
          </AccordionTrigger>
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
        <AccordionItem value="Certifications" className="space-y-4 border rounded  relative shadow-sm bg-white">
          <AccordionTrigger className="p-4 cursor-pointer">
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-lg">Certifications</h3>
              <p className="text-sm text-gray-500">
                Certificate
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            {formData.certifications.map((cert, index) => {
              const isNew = !cert.title && !cert.institution && !cert.year;
              const isEditing = (editing.section === "certifications" && editing.index === index) || isNew;

              return (
                <div key={index} className="space-y-2 border p-2 rounded relative">
                  {isEditing ? (
                    <>
                      <Input
                        placeholder="Title"
                        value={cert.title}
                        onChange={(e) =>
                          handleNestedChange("certifications", index, "title", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Institution"
                        value={cert.institution}
                        onChange={(e) =>
                          handleNestedChange("certifications", index, "institution", e.target.value)
                        }
                      />
                      <Input
                        placeholder="Year"
                        value={cert.year}
                        onChange={(e) =>
                          handleNestedChange("certifications", index, "year", e.target.value)
                        }
                      />

                      <div className="flex justify-end space-x-2">
                        <button
                          className="text-green-600 hover:underline"
                          onClick={() => setEditing({ section: "", index: null })}
                        >
                          Save
                        </button>
                        <button
                          className="text-gray-600 hover:underline"
                          onClick={() => {
                            if (isNew) removeItem("certifications", index);
                            else setEditing({ section: "", index: null });
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p><strong>Title:</strong> {cert.title}</p>
                      <p><strong>Institution:</strong> {cert.institution}</p>
                      <p><strong>Year:</strong> {cert.year}</p>
                      <div className="flex justify-end space-x-2">
                        <button
                          className="text-blue-600 hover:underline"
                          onClick={() => setEditing({ section: "certifications", index })}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => removeItem("certifications", index)}
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

            <Button
              onClick={() => {
                const newIndex = formData.certifications.length;
                addItem("certifications", { title: "", institution: "", year: "" });
                setEditing({ section: "certifications", index: newIndex });
              }}
            >
              + Add Certification
            </Button>
          </AccordionContent>

        </AccordionItem>
      </Accordion>

      {/* Buttons
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
      </div> */}
    </div>
  );
};

export default PersonalDetailsForm;
