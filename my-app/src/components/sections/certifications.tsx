import { useResumeStore } from "@/store/personal";
import { useState } from "react";

type CertificationFormProps = {
    index: number;
};

const CertificationForm: React.FC<CertificationFormProps> = ({ index }) => {
    const { formData, setFormData } = useResumeStore();
    const [localData, setLocalData] = useState(formData.certifications[index]);

    const handleChange = (field: keyof typeof localData, value: string) => {
        setLocalData({ ...localData, [field]: value });
    };

    const handleSave = () => {
        const updated = [...formData.certifications];
        updated[index] = localData;
        setFormData({ certifications: updated });
    };

    const handleDelete = () => {
        const updated = formData.certifications.filter((_, i) => i !== index);
        setFormData({ certifications: updated });
    };

    return (
        <div className="space-y-3">
            <input
                type="text"
                value={localData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="Certification Title"
                className="w-full border rounded px-3 py-2"
            />
            <input
                type="text"
                value={localData.institution}
                onChange={(e) => handleChange("institution", e.target.value)}
                placeholder="Institution"
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

export default CertificationForm;
