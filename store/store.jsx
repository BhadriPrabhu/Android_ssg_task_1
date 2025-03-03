import { create } from "zustand";

export const useColor = create((set) => ({
    themeColor: true,
    setThemeColor: () => set((state) => ({ themeColor: !state.themeColor }))
}));
