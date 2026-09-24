"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronRight, Phone, ShieldCheck } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-green-900 text-amber-400 flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-green-950 tracking-tight leading-tight group-hover:text-green-800 transition-colors">
              Chegato High School
            </h1>
            <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
              Mberengwa • ELCZ Mission
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "text-green-900 bg-green-50"
                    : "text-gray-700 hover:text-green-900 hover:bg-slate-100/80"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Action Buttons (Apply Online & Parent Portal) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href="/parents"
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 border ${
              pathname === "/parents"
                ? "bg-green-950 text-amber-400 border-green-950 shadow-sm"
                : "bg-slate-100 hover:bg-green-950 hover:text-amber-400 text-slate-800 border-slate-200"
            }`}
          >
            <ShieldCheck size={16} />
            <span>Parent Portal</span>
          </Link>

          <Link
            href="/admissions"
            className="bg-amber-400 hover:bg-amber-300 text-green-950 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:shadow-md"
          >
            Apply Online
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-green-950 hover:bg-slate-100 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </nav>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? "text-green-950 bg-green-100/70 border border-green-200"
                      : "text-gray-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/parents"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-green-950 text-amber-400 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck size={16} />
              <span>Parent Portal</span>
            </Link>

            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-amber-400 hover:bg-amber-300 text-green-950 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              Apply Online
            </Link>

            <a
              href="tel:+263771234567"
              className="w-full text-center text-xs text-green-900 font-semibold py-2.5 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center gap-2"
            >
              <Phone size={14} /> Contact School Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
}