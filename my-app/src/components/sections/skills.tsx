import { useResumeStore } from "@/store/personal";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const SkillsForm = () => {
    const { formData, setFormData } = useResumeStore();
    const [skills, setSkills] = useState<string[]>(formData.skills || [""]);

    useEffect(() => {
        if (!skills.length) setSkills([""]);
    }, []);

    const handleSkillChange = (index: number, value: string) => {
        const updated = [...skills];
        updated[index] = value;
        setSkills(updated);
    };

    const addSkill = () => {
        setSkills([...skills, ""]);
    };

    const removeSkill = (index: number) => {
        const updated = skills.filter((_, i) => i !== index);
        setSkills(updated.length > 0 ? updated : [""]);
    };

    const handleSave = () => {
        setFormData({ ...formData, skills });
    };

    return (
        <div className="space-y-3 border p-4 rounded-md shadow">
            <h2 className="text-lg font-semibold">Skills</h2>

            {skills.map((skill, i) => (
                <div key={i} className="flex items-start gap-2">
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(i, e.target.value)}
                        placeholder={`Skill ${i + 1}`}
                        className="w-full border rounded px-3 py-2"
                    />

                    <button
                        type="button"
                        onClick={() => removeSkill(i)}
                        className="text-red-500 hover:text-red-700 text-2xl mt-1"
                        title="Remove skill"
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addSkill}
                className="flex items-center gap-2 text-blue-600 hover:text-white hover:bg-blue-600 transition px-3 py-1 rounded border border-blue-600 mt-2"
                title="Add Skill"
            >
                <IoIosAddCircle className="text-2xl" />
                <span className="text-base font-medium">Add More</span>
            </button>

            <div className="flex justify-end gap-2 mt-4">
                <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Save Skills
                </button>
            </div>
        </div>
    );
};

export default SkillsForm;
