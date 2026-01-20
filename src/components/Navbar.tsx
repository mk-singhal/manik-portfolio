"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-gray-900"
          onClick={() => setOpen(false)}
        >
          Manik<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative inline-flex items-center gap-1 transition hover:text-gray-900
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-gray-900
                  after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.label}
                {item.external && (
                  <ExternalLink size={12} className="opacity-60" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle menu"
          className="flex items-center md:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block h-[2px] w-6 bg-gray-900"></span>
            <span className="block h-[2px] w-6 bg-gray-900"></span>
            <span className="block h-[2px] w-6 bg-gray-900"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1 py-3 transition hover:text-gray-900"
                >
                  {item.label}
                  {item.external && (
                    <ExternalLink size={12} className="opacity-60" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
