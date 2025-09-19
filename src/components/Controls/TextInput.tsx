import { useQRStore } from "../../store/useQRStore";

export default function TextInput() {
  const text = useQRStore((s) => s.text);
  const setText = useQRStore((s) => s.setText);

  return (
    <div className="flex flex-col w-full">
      <label className="text-sm text-gray-200 mb-2">Content (Text or URL)</label>
      <input
        placeholder="Enter URL or plain text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 rounded-md bg-white/6 border border-white/10 text-sm text-white placeholder:text-gray-400"
      />
    </div>
  );
}
