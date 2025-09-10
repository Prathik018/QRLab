import { Button } from "@/components/ui/button";
import { downloadQR } from "../../utils/download";

export default function DownloadButton() {
  return (
    <Button
      onClick={() => downloadQR()}
      className="mt-4 bg-black hover:bg-gray-800 text-white border border-gray-600 hover:border-gray-500"
    >
      Download QR
    </Button>
  );
}
