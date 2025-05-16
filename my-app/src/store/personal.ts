import { create } from "zustand";

type Education = { school: string; degree: string; year: string };
type Experience = { role: string; company: string; duration: string; description: string[] };
type Certification = { title: string; institution: string; year: string };

type FormDataType = {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  linkedin: string;
  image: File | null;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
  certifications: Certification[];
};

type ResumeStore = {
  formData: FormDataType;
  setFormData: (
    data: Partial<FormDataType> | ((prev: FormDataType) => Partial<FormDataType>)
  ) => void;
  resetForm: () => void;
};

const defaultFormData: FormDataType = {
  name: "",
  title: "",
  phone: "",
  email: "",
  address: "",
  linkedin: "",
  image: null,
  summary: "",
  education: [{ school: "", degree: "", year: "" }],
  experience: [{ role: "", company: "", duration: "", description: [""] }],
  skills: [""],
  certifications: [{ title: "", institution: "", year: "" }],
};

export const useResumeStore = create<ResumeStore>((set, get) => ({
  formData: defaultFormData,
  setFormData: (data) => {
    const current = get().formData;
    const updated = typeof data === "function" ? data(current) : data;

    set({ formData: { ...current, ...updated } });
  },
  resetForm: () => set({ formData: defaultFormData }),
}));
