
export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 py-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} QRLab - Generate & customize QR codes
    </footer>
  );
}
