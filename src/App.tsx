import Header from "./components/Header";
import ControlsPanel from "./components/Panels/ControlsPanel";
import QRPreview from "./components/QRPreview";
import Footer from "./components/Footer";

export default function App() {
  return (
  
      <div className="min-h-screen w-full bg-[#020617] relative text-white">
        {/* Dark Sphere Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.12) 1px, transparent 1px),
              radial-gradient(circle at 10% 10%, rgba(139,92,246,0.12) 20%, transparent 50%)
            `,
            backgroundSize: "28px 28px, 28px 28px, 100% 100%",
          }}
        />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Header />

          <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left controls */}
            <div className="order-2 lg:order-1">
              <ControlsPanel />
            </div>

            {/* Right preview */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <QRPreview />
            </div>
          </main>

          <Footer />
        </div>
      </div>
  );
}
