// import QRCode from "react-qr-code";
// import { motion } from "framer-motion";
// import { useQRStore } from "../store/useQRStore";

// export default function QRPreview() {
//   const { mode, text, contact, upi, fgColor, bgColor } = useQRStore();

//   // Check if there is any input in current mode
//   const hasData = (() => {
//     switch (mode) {
//       case "text":
//         return text.trim() !== "";
//       case "contact":
//         return Object.values(contact).some((v) => v && v.trim() !== "");
//       case "upi":
//         return upi.id.trim() !== "" || upi.name.trim() !== "";
//       default:
//         return false;
//     }
//   })();

//   const qrValue = (() => {
//     if (!hasData) return "";
//     switch (mode) {
//       case "text":
//         return text;
//       case "contact":
//         return [
//           "BEGIN:VCARD",
//           "VERSION:3.0",
//           `FN:${contact.firstName || ""} ${contact.lastName || ""}`,
//           contact.phone ? `TEL:${contact.phone}` : "",
//           contact.email ? `EMAIL:${contact.email}` : "",
//           contact.address ? `ADR:${contact.address}` : "",
//           contact.insta ? `URL:${contact.insta}` : "",
//           contact.x ? `URL:${contact.x}` : "",
//           contact.yt ? `URL:${contact.yt}` : "",
//           contact.discord ? `URL:${contact.discord}` : "",
//           "END:VCARD",
//         ]
//           .filter(Boolean)
//           .join("\n");
//       case "upi":
//         return `upi://pay?pa=${upi.id}&pn=${upi.name}${
//           upi.amount ? `&am=${upi.amount}` : ""
//         }${upi.note ? `&tn=${upi.note}` : ""}`;
//       default:
//         return "";
//     }
//   })();

//   // download handler
//   const handleDownload = () => {
//     const svg = document.getElementById("qr-code") as SVGSVGElement;
//     if (!svg) return;

//     const serializer = new XMLSerializer();
//     const svgData = serializer.serializeToString(svg);

//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     const img = new Image();
//     const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
//     const url = URL.createObjectURL(svgBlob);

//     img.onload = () => {
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx?.drawImage(img, 0, 0);
//       URL.revokeObjectURL(url);

//       const pngUrl = canvas.toDataURL("image/png");
//       const link = document.createElement("a");
//       link.href = pngUrl;
//       link.download = "qr-code.png";
//       link.click();
//     };

//     img.src = url;
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.98 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.95 }}
//       className="p-6 mt-22 rounded-2xl bg-gradient-to-br from-white/6 to-white/3 border border-white/6 shadow-2xl flex flex-col items-center justify-center gap-4"
//       style={{ minHeight: "400px" }}
//     >
//       <div
//         className="bg-white rounded-lg flex items-center justify-center text-center"
//         style={{ width: 320, height: 320, padding: 16 }}
//       >
//         {hasData ? (
//           <QRCode
//             id="qr-code"
//             value={qrValue}
//             fgColor={fgColor}
//             bgColor={bgColor}
//             size={288} 
//           />
//         ) : (
//           <span className="text-gray-400 text-sm">
//             Enter data to generate QR code
//           </span>
//         )}
//       </div>

//       {/* Download button appears only if QR exists */}
//    {hasData && (
//   <motion.button
//     onClick={handleDownload}
//     whileHover={{ scale: 1.05, boxShadow: "0px 4px 12px rgba(0,0,0,0.25)" }}
//     whileTap={{ scale: 0.95 }}
//     transition={{ type: "spring", stiffness: 280 }}
//     className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-qrlabPurple to-purple-700 
//                text-white text-sm font-medium shadow-lg border border-gray-500"
//   >
//     Download QR
//   </motion.button>
// )}
//     </motion.div>
//   );
// }
















import QRCode from "react-qr-code";
import { motion } from "framer-motion";
import { useQRStore } from "../store/useQRStore";

export default function QRPreview() {
  const { mode, text, contact, upi, fgColor, bgColor } = useQRStore();

  // Check if there is any input in current mode
  const hasData = (() => {
    switch (mode) {
      case "text":
        return text.trim() !== "";
      case "contact":
        return Object.values(contact).some((v) => v && v.trim() !== "");
      case "upi":
        return upi.id.trim() !== "" || upi.name.trim() !== "";
      default:
        return false;
    }
  })();

  const qrValue = (() => {
    if (!hasData) return "";
    switch (mode) {
      case "text":
        return text;
      case "contact":
        return [
          "BEGIN:VCARD",
          "VERSION:3.0",
          `FN:${contact.firstName || ""} ${contact.lastName || ""}`,
          contact.phone ? `TEL:${contact.phone}` : "",
          contact.email ? `EMAIL:${contact.email}` : "",
          contact.address ? `ADR:${contact.address}` : "",
          contact.insta ? `URL:${contact.insta}` : "",
          contact.x ? `URL:${contact.x}` : "",
          contact.yt ? `URL:${contact.yt}` : "",
          contact.discord ? `URL:${contact.discord}` : "",
          "END:VCARD",
        ]
          .filter(Boolean)
          .join("\n");
      case "upi":
        return `upi://pay?pa=${upi.id}&pn=${upi.name}${
          upi.amount ? `&am=${upi.amount}` : ""
        }${upi.note ? `&tn=${upi.note}` : ""}`;
      default:
        return "";
    }
  })();

  // download handler
  const handleDownload = () => {
    const svg = document.getElementById("qr-code") as SVGSVGElement;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qr-code.png";
      link.click();
    };

    img.src = url;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="p-4 sm:p-6 mt-30 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 
             border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-4
             w-full max-w-md lg:max-w-sm mx-auto"
    >
      <div
        className="bg-white rounded-lg flex items-center justify-center text-center 
               w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs aspect-square p-4"
      >
        {hasData ? (
          <QRCode
            id="qr-code"
            value={qrValue}
            fgColor={fgColor}
            bgColor={bgColor}
            size={256} 
            className="w-full h-full"
          />
        ) : (
          <span className="text-gray-500 text-sm text-center px-2 font-normal">
            Enter data to generate QR code
          </span>
        )}
      </div>

      {/* Download button appears only if QR exists */}
      {hasData && (
        <motion.button
          onClick={handleDownload}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 280 }}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-qrlabPurple to-purple-700 
                     text-white text-sm font-medium shadow-lg border border-gray-500 w-full sm:w-auto"
        >
          Download QR
        </motion.button>
      )}
    </motion.div>
  );
}
