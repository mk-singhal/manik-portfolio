// src/components/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Left */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Manik Singhal
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-1 inline-flex items-center gap-1 text-sm text-gray-600 transition hover:text-gray-900"
          >
            Resume
            <ExternalLink size={12} className="opacity-60" />
          </Link>

          <Link
            href="https://github.com/mk-singhal"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-600 transition hover:text-gray-900"
          >
            <Github size={18} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/maniksingal/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-600 transition hover:text-gray-900"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="mailto:maniksingal29@gmail.com"
            aria-label="Email"
            className="text-gray-600 transition hover:text-gray-900"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
