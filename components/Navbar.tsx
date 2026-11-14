"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Me", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Achievements", href: "/#achievements" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav className="w-full px-6 md:px-10 py-4 bg-black/50 backdrop-blur-xl border-b border-white/10 fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/#home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 rounded-xl blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-900/80 to-indigo-900/80 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:scale-105 transition-all shadow-lg">
              <Terminal size={20} />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-purple-300 transition-all">
            PulseDev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/hanifabuba848"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <Github size={18} />
          </a>
          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://github.com/hanifabuba848"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white"
          >
            <Github size={18} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white px-2 py-1 text-base font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
