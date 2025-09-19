import { create } from "zustand";

type QRMode = "text" | "contact" | "upi";

interface QRState {
  mode: QRMode;
  text: string;
  contact: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    insta?: string;
    x?: string;
    yt?: string;
    discord?: string;
  };
  upi: {
    id: string;
    name: string;
    amount?: string;
    note?: string;
  };
  fgColor: string;
  bgColor: string;
  size: number;

  setMode: (m: QRMode) => void;
  setText: (t: string) => void;
  setContact: (c: Partial<QRState["contact"]>) => void;
  setUPI: (u: Partial<QRState["upi"]>) => void;
  setFgColor: (c: string) => void;
  setBgColor: (c: string) => void;
}

export const useQRStore = create<QRState>((set) => ({
  mode: "text",
  text: "",
  contact: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  },
  upi: { id: "", name: "" },
  fgColor: "#000000",
  bgColor: "#ffffff",
  size: 256,

  setMode: (m) => set({ mode: m }),
  setText: (t) => set({ text: t }),
  setContact: (c) => set((state) => ({ contact: { ...state.contact, ...c } })),
  setUPI: (u) => set((state) => ({ upi: { ...state.upi, ...u } })),
  setFgColor: (c) => set({ fgColor: c }),
  setBgColor: (c) => set({ bgColor: c }),
}));
