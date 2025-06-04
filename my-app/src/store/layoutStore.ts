// store/layoutStore.ts
import { create } from "zustand";

interface LayoutState {
  layout: string | null;
  color?: string;
  selectedTemplate: any; // You can replace `any` with a proper type if desired
  setLayout: (layout: string) => void;
  setColor: (color: string) => void;
  setSelectedTemplate: (template: any) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  layout: null,
  color: undefined, // No default color assigned here
  selectedTemplate: null,
  setLayout: (layout) => set({ layout }),
  setColor: (color) => set({ color }),
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
}));
