// store/layoutStore.ts
import { create } from "zustand";

interface LayoutState {
  layout: string | null;
  color: string;
  setLayout: (layout: string) => void;
  setColor: (color: string) => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  layout: null,
  color: "#1E90FF", // default color
  setLayout: (layout) => set({ layout }),
  setColor: (color) => set({ color }),
}));
