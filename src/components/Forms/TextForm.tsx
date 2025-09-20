import { Input } from "@/components/ui/input";
import { useQRStore } from "../../store/useQRStore";

export default function TextForm() {
  const text = useQRStore((s) => s.text);
  const setText = useQRStore((s) => s.setText);

  return (
    <div>
      <label className="block mb-1 font-medium text-gray-200">
        Content URL or Text
      </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL or text..."
        className="w-full px-4 py-2 border border-gray-400 rounded-md 
               text-gray-900 placeholder-gray-400 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               focus:border-blue-500 transition-all duration-200"
      />
    </div>

  );
}
