"use client";

import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useResumeStore } from "@/store/personal";
import { useLayoutStore } from "@/store/layoutStore";

const PersonalInfoForm: React.FC = () => {
  const { formData, setFormData } = useResumeStore();
  const { selectedTemplate } = useLayoutStore();

  const [imagePreview, setImagePreview] = useState<string>("");
  const shouldShowImage = selectedTemplate?.formType === "image";

  useEffect(() => {
    if (formData.image && shouldShowImage) {
      const previewURL = URL.createObjectURL(formData.image);
      setImagePreview(previewURL);
      return () => {
        URL.revokeObjectURL(previewURL);
      };
    } else {
      setImagePreview("");
    }
  }, [formData.image, shouldShowImage]);

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData({ [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    handleChange("image", file);
  };

 return (
  <div
    className={`p-6 grid gap-8 ${
      shouldShowImage ? "grid-cols-1 md:grid-cols-[auto_1fr]" : "grid-cols-1"
    }`}
  >
    {/* Left: Image Preview and Upload */}
    {shouldShowImage && (
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
    )}

    {/* Right: Inputs */}
    <div className="flex flex-col space-y-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <Input
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        <Input
          placeholder="Address"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
        <Input
          placeholder="LinkedIn URL"
          value={formData.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
        />
      </div>
      <Textarea
        placeholder="Summary"
        value={formData.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
        className="min-h-36"
      />
    </div>
  </div>
);
}
export default PersonalInfoForm;
 
