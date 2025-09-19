import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormTabs, { TabValue } from "../FormTabs";
import TextForm from "../Forms/TextForm";
import ContactForm from "../Forms/ContactForm";
import UPIForm from "../Forms/UPIForm";
import ColorPicker from "../Controls/ColorPicker";
import { useQRStore } from "../../store/useQRStore";

export default function ControlsPanel() {
  const [activeTab, setActiveTab] = useState<TabValue>("text");
  const setMode = useQRStore((s) => s.setMode);

  useEffect(() => {
    setMode(activeTab);
  }, [activeTab, setMode]);

  return (
    <div className="space-y-6 mt-5 ">
      {/* Headline + Tagline */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  text-left ">
          Create Professional QR Codes Instantly
        </h1>
        <p className="text-gray-500 text-sm max-w-xl mx-auto text-justify">
          Create sleek, customizable QR codes for text, links, contact cards, or UPI payments. 
          Personalize with colors, download instantly, and share your information effortlessly.
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg space-y-6">
        {/* Tabs */}
        <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Animated Forms */}
        <AnimatePresence mode="wait">
          {activeTab === "text" && (
            <motion.div
              key="textform"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <TextForm key={`textform-${activeTab}`} />
            </motion.div>
          )}
          {activeTab === "contact" && (
            <motion.div
              key="contactform"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ContactForm key={`contactform-${activeTab}`} />
            </motion.div>
          )}
          {activeTab === "upi" && (
            <motion.div
              key="upiform"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <UPIForm key={`upiform-${activeTab}`} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Color Pickers */}
        <div className="flex gap-4">
          <ColorPicker label="QR Code Color" target="fgColor" />
          <ColorPicker label="Background Color" target="bgColor" />
        </div>
      </div>
    </div>
  );
}

