import { useResumeStore } from "@/store/personal";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

type ExperienceFormProps = {
    index: number;
};

const ExperienceForm: React.FC<ExperienceFormProps> = ({ index }) => {
    const { formData, setFormData } = useResumeStore();
    const [localData, setLocalData] = useState(formData.experience[index]);

    useEffect(() => {
        if (!localData.description || localData.description.length === 0) {
            setLocalData({ ...localData, description: [""] });
        }
    }, []);

    const handleChange = (field: string, value: string) => {
        setLocalData({ ...localData, [field]: value });
    };

    const handleDescriptionChange = (i: number, value: string) => {
        const newDescriptions = [...localData.description];
        newDescriptions[i] = value;
        setLocalData({ ...localData, description: newDescriptions });
    };

    const addDescription = () => {
        setLocalData({ ...localData, description: [...localData.description, ""] });
    };

    const removeDescription = (i: number) => {
        const updated = localData.description.filter((_, index) => index !== i);
        setLocalData({ ...localData, description: updated.length > 0 ? updated : [""] });
    };

    const handleSave = () => {
        const updated = [...formData.experience];
        updated[index] = localData;
        setFormData({ experience: updated });
    };

    const handleDelete = () => {
        const updated = formData.experience.filter((_, i) => i !== index);
        setFormData({ experience: updated });
    };

    return (
        <div className="space-y-3 border p-4 rounded-md shadow">
            <input
                type="text"
                value={localData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Company"
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
                value={localData.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
                placeholder="Duration"
                className="w-full border rounded px-3 py-2"
            />

            <div className="space-y-4">
                {localData.description.map((desc, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex gap-2">
                            <textarea
                                value={desc}
                                onChange={(e) => handleDescriptionChange(i, e.target.value)}
                                placeholder={`Description ${i + 1}`}
                                className="w-full border rounded px-3 py-2 h-40 resize-none"
                            />

                            {i !== 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeDescription(i)}
                                    className="text-red-500 hover:text-red-700 text-2xl mt-1"
                                    title="Remove description"
                                >
                                    <FaTrashAlt />
                                </button>
                            )}
                        </div>

                        {i === localData.description.length - 1 && (
                            <div>
                                <button
                                    type="button"
                                    onClick={addDescription}
                                    className="flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 transition px-3 py-1 rounded border border-blue-600"
                                    title="Add Description"
                                >
                                    <IoIosAddCircle className="text-2xl" />
                                    <span className="text-base font-medium">Add More</span>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>



            <div className="flex gap-2 mt-4 justify-end">
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

export default ExperienceForm;
