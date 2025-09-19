export default function Header() {

  return (
    <header className="sticky top-4 z-30 mx-auto w-full max-w-6xl px-6">
      <div className="backdrop-blur-md bg-white/6 dark:bg-white/6 rounded-xl border border-white/10 px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-qrlabPurple to-purple-700 flex items-center justify-center text-white font-bold">
            QL
          </div>
          <div>
            <h1 className="text-lg font-semibold text-violet-300">QRLab</h1>
            <div className="text-xs text-gray-300">Design & export QR codes</div>
          </div>
        </div>

      </div>
    </header>
  );
}
