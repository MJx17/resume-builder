"use client";

import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { useResumeStore } from "@/store/personal";

const PersonalInfoForm: React.FC = () => {
  const { formData, setFormData } = useResumeStore();
  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    // Create preview URL when image changes
    if (formData.image) {
      const previewURL = URL.createObjectURL(formData.image);
      setImagePreview(previewURL);
      return () => {
        URL.revokeObjectURL(previewURL);
      };
    } else {
      setImagePreview("");
    }
  }, [formData.image]);

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData({ [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    handleChange("image", file);
  };

  return (
    <div className="p-6 bg-white grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
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
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    </div>
  );
};

export default PersonalInfoForm;
