import { useQRStore } from "../../store/useQRStore";

interface ColorPickerProps {
  label: string;
  target: "fgColor" | "bgColor";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  presetColors?: string[];
}

export default function ColorPicker({
  label,
  target,
  size = "md",
  showLabel = true,
  presetColors = [],
}: ColorPickerProps) {
  const value = useQRStore((s) => (target === "fgColor" ? s.fgColor : s.bgColor));
  const setColor =
    target === "fgColor" ? useQRStore((s) => s.setFgColor) : useQRStore((s) => s.setBgColor);

  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-14 w-14",
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      {showLabel && (
        <label className="text-sm font-medium text-gray-200">
          {target === "fgColor" ? "QR Code Color" : "Background Color"}
        </label>
      )}

      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3">
        {/* Circular color wrapper */}
        <label
          className={`${sizeClasses[size]} rounded-full cursor-pointer border border-white/20`}
          style={{ backgroundColor: value }}
        >
          <input
            type="color"
            value={value}
            onChange={(e) => setColor(e.target.value)}
            className="opacity-0 w-full h-full cursor-pointer rounded-full"
          />
        </label>

        {/* Display selected color code */}
        <span className="text-gray-200 font-mono">{value.toUpperCase()}</span>

        {/* Preset buttons */}
        {presetColors.length > 0 && (
          <div className="flex gap-2 ml-auto">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                style={{ backgroundColor: color }}
                className="h-6 w-6 rounded-full border border-white/10 shadow-sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
