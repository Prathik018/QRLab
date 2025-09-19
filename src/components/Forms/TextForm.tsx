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
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter URL or text..."
      />
    </div>
  );
}
