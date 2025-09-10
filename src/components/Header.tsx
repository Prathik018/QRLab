import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex items-center justify-between px-6 py-4">
      {/* Logo / Text */}
      <h1 className="text-2xl font-semibold  text-gray-900 dark:text-white font-serif">
        QRLab
      </h1>

      {/* Theme toggle button */}
      <Button variant="ghost" size="icon" onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500 " />
        ) : (
          <Moon className="h-5 w-5 text-gray-900" />
        )}
      </Button>
    </div>
  );
}
