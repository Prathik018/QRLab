import { Input } from "@/components/ui/input";
import { useQRStore } from "../../store/useQRStore";

export default function TextForm() {
  const text = useQRStore((s) => s.text);
  const setText = useQRStore((s) => s.setText);

  return (
    <div className="w-full max-w-full sm:max-w-md mx-auto">
      <label className="block mb-2 font-medium text-gray-200 text-sm sm:text-base">
        Content URL or Text
      </label>
      <Input
        className="w-full border border-gray-300 bg-white/10 text-white placeholder-gray-400
                   px-3 py-2 sm:px-4 sm:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL or text..."
      />
    </div>
  );
}
