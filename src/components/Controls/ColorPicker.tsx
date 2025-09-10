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
  const value = useQRStore((s) => s[target]);
  const setColor =
    target === "fgColor" ? useQRStore((s) => s.setFgColor) : useQRStore((s) => s.setBgColor);

  const sizeClasses = {
    sm: "h-8 w-16",
    md: "h-10 w-20",
    lg: "h-12 w-24",
  };

  return (
    <div className="flex flex-col space-y-2">
      {showLabel && <label className="font-medium">{label}</label>}
      
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => setColor(e.target.value)}
          className={`${sizeClasses[size]} rounded-lg border shadow-sm cursor-pointer`}
        />

        {/* Optional preset colors */}
        {presetColors.length > 0 && (
          <div className="flex gap-1">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                style={{ backgroundColor: color }}
                className="h-6 w-6 rounded-full border border-gray-300 shadow-sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
