import { useResumeStore } from "@/store/personal";
import { useState } from "react";

type ReferenceFormProps = {
  index: number;
};

const ReferenceForm: React.FC<ReferenceFormProps> = ({ index }) => {
  const { formData, setFormData } = useResumeStore();
  const [localData, setLocalData] = useState(formData.references[index]);

  const handleChange = (field: keyof typeof localData, value: string) => {
    setLocalData({ ...localData, [field]: value });
  };

  const handleSave = () => {
    const updated = [...formData.references];
    updated[index] = localData;
    setFormData({ references: updated });
  };

  const handleDelete = () => {
    const updated = formData.references.filter((_, i) => i !== index);
    setFormData({
      references: updated.length ? updated : [{ name: "", position: "", company: "", contact: "" }],
    });
  };

  return (
    <div className="space-y-3">
      <input
        type="text"
        value={localData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Name"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={localData.position}
        onChange={(e) => handleChange("position", e.target.value)}
        placeholder="Position"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={localData.company}
        onChange={(e) => handleChange("company", e.target.value)}
        placeholder="Company"
        className="w-full border rounded px-3 py-2"
      />
      <input
        type="text"
        value={localData.contact}
        onChange={(e) => handleChange("contact", e.target.value)}
        placeholder="Contact Info"
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

export default ReferenceForm;
