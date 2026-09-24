"use client";

import { Phone, Mail, UserCheck, Download } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-green-950 text-green-100 text-xs py-2.5 px-4 sm:px-6 lg:px-8 border-b border-green-800/60 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Contact Info (Left) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+263771234567"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Phone size={13} className="text-amber-400 shrink-0" />
            <span>+263 77 123 4567</span>
          </a>
          
          <a
            href="mailto:info@chegatohigh.ac.zw"
            className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail size={13} className="text-amber-400 shrink-0" />
            <span>info@chegatohigh.ac.zw</span>
          </a>
        </div>

        {/* Portals & Resources (Right) */}
        <div className="flex items-center gap-4">
          <Link
            href="/parents"
            className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold"
          >
            <UserCheck size={13} className="text-amber-400 shrink-0" />
            <span>Parent Portal</span>
          </Link>

          <span className="text-green-800">|</span>

          <a
            href="/prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-amber-400 transition-colors font-semibold"
          >
            <Download size={13} className="text-amber-400 shrink-0" />
            <span>Prospectus</span>
          </a>
        </div>

      </div>
    </div>
  );
}