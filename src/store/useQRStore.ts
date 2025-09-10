import { create } from "zustand";

interface QRState {
  text: string;
  fgColor: string;
  bgColor: string;
  size: number;
  setText: (t: string) => void;
  setFgColor: (c: string) => void;
  setBgColor: (c: string) => void;
  setSize: (s: number) => void;
}

export const useQRStore = create<QRState>((set) => ({
  text: "",
  fgColor: "#000000",
  bgColor: "#ffffff",
  size: 256,
  setText: (t) => set({ text: t }),
  setFgColor: (c) => set({ fgColor: c }),
  setBgColor: (c) => set({ bgColor: c }),
  setSize: (s) => set({ size: s }),
}));
