import { downloadQR } from "../../utils/download";

export default function DownloadButton() {
  return (
    <button
      onClick={() => downloadQR("qrlab-qrcode.png")}
      className="mt-4 w-full rounded-lg px-4 py-2 bg-gradient-to-r from-qrlabPurple to-purple-600 text-white font-medium hover:opacity-95 transition"
    >
      Download QR as PNG
    </button>
  );
}
