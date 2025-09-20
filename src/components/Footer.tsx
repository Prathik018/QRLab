import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl mt-12 py-6 text-center text-sm text-gray-400 flex flex-col items-center">
      {/* Footer text */}
      <span>© {new Date().getFullYear()} QRLab - Generate & customize QR codes</span>

      {/* Social Icons on a new line */}
      <div className="flex items-center gap-4 mt-2">
        <a
          href="https://github.com/Prathik018"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>

        <a
          href="https://x.com/Prathik__Pai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Twitter size={20} />
        </a>

        <a
          href="https://linkedin.com/in/prathikpai18"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="mailto:prathikvpai@gmail.com"
          className="hover:text-white transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}
