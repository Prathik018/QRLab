import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { useQRStore } from "../store/useQRStore";

export default function QRPreview() {
  const { text, fgColor, bgColor, size } = useQRStore();

  return (
    <motion.div
      className="p-3 bg-white/90 rounded-2xl shadow-lg"
      key={text + fgColor + bgColor + size}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <QRCode
        id="qr-code"
        value={text}
        size={size}
        fgColor={fgColor}
        bgColor={bgColor}
      />
    </motion.div>
  );
}
