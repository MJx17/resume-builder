import { useResumeStore } from "@/store/personal";
import { useState } from "react";

type EducationFormProps = {
  index: number;
};

const EducationForm: React.FC<EducationFormProps> = ({ index }) => {
  const { formData, setFormData } = useResumeStore();
  const [localData, setLocalData] = useState(formData.education[index]);

  const handleChange = (field: string, value: string) => {
    setLocalData({ ...localData, [field]: value });
  };

  const handleSave = () => {
    const updated = [...formData.education];
    updated[index] = localData;
    setFormData({ education: updated });
  };

  const handleDelete = () => {
    const updated = formData.education.filter((_, i) => i !== index);
    setFormData({ education: updated });
  };

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={localData.school}
        onChange={(e) => handleChange("school", e.target.value)}
        placeholder="School"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={localData.degree}
        onChange={(e) => handleChange("degree", e.target.value)}
        placeholder="Degree"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={localData.year}
        onChange={(e) => handleChange("year", e.target.value)}
        placeholder="Year"
        className="w-full border rounded px-3 py-2"
      />

      <div className="flex gap-2 mt-2 justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
