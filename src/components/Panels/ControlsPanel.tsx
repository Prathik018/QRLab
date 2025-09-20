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
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8 mt-2 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto"
    >
      {/* Headline + Tagline */}
      <div className="text-center sm:text-left space-y-3">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
          Create Professional QR Codes Instantly
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto sm:mx-0 text-justify sm:text-left mt-4">
          Create sleek, customizable QR codes for text, links, contact cards, or
          UPI payments. Personalize with colors, download instantly, and share
          your information effortlessly.
        </p>
      </div>

      {/* Control Panel */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg space-y-6">
        {/* Tabs */}
        <FormTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
        <div className="flex flex-col sm:flex-row gap-4">
          <ColorPicker label="QR Code Color" target="fgColor" />
          <ColorPicker label="Background Color" target="bgColor" />
        </div>
      </div>
    </motion.div>
  );
}


