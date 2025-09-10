import Header from "@/components/Header";
import TextInput from "./components/Controls/TextInput";
import ColorPicker from "./components/Controls/ColorPicker";
import DownloadButton from "./components/Controls/Download";
import QRPreview from "./components/QRPreview";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#e9e7d8] dark:bg-[#000000] transition-colors">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-md space-y-6">
          
          {/* Heading / Instructions */}
          <div className="text-left font-serif">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Design QR codes
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Pick a style preset and export your QR
            </p>
          </div>

          {/* QR Preview Container */}
          <div className="p-6 bg-[#e9e7d8] dark:bg-[#000000] border border-gray-300 dark:border-gray-800 rounded-2xl shadow-xl flex flex-col items-center justify-center">
            <QRPreview />
            <DownloadButton />
          </div>

          {/* Controls Container */}
          <div className="flex flex-col gap-4 p-6 bg-[#e9e7d8] dark:bg-[#000000] border border-gray-300 dark:border-gray-800 rounded-2xl shadow-xl">

            {/* Color Picker Row */}
            <div className="flex flex-row gap-4 border border-gray-300 dark:border-gray-800 rounded-lg p-4 items-center justify-center bg-[#e9e7d8] dark:bg-[#000000] font-medium">
              <ColorPicker label="Foreground" target="fgColor" size="sm" />
              <ColorPicker label="Background" target="bgColor" size="sm" />
            </div>

            {/* Text Input */}
            <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 bg-[#e9e7d8] dark:bg-[#000000]">
              <TextInput />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
