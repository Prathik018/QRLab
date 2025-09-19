import { useState } from "react";

export type TabValue = "text" | "contact" | "upi";

interface FormTabsProps {
  activeTab: TabValue;
  setActiveTab: (tab: TabValue) => void;
}

export default function FormTabs({ activeTab, setActiveTab }: FormTabsProps) {
  return (
    <div className="flex gap-2 mb-4">
      {["text", "contact", "upi"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as TabValue)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            activeTab === tab
              ? "bg-violet-600 text-white"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
          }`}
        >
          {tab === "text" && "Text / URL"}
          {tab === "contact" && "Contact Card"}
          {tab === "upi" && "UPI Payment"}
        </button>
      ))}
    </div>
  );
}
