import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Dynamically get the current year so it's never hardcoded
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="text-amber-400">Chegato</span> High School
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400/90 bg-amber-400/10 px-3 py-1 rounded-full inline-block border border-amber-400/20">
              Excellence • Discipline • Leadership
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              A premier Lutheran Church in Zimbabwe institution committed to academic achievement, spiritual growth, and holistic development.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-amber-400 transition-colors">
                  Academics & ZIMSEC
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-amber-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/parents" className="hover:text-amber-400 transition-colors inline-flex items-center gap-1">
                  Parent Gateway <ShieldCheck size={12} className="text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-400 transition-colors">
                  School Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <a 
                href="tel:+263xxxxxxx" 
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Phone size={15} className="text-amber-400 shrink-0" />
                <span>+263 (0) 51 2345 / Accounts</span>
              </a>

              <a 
                href="mailto:info@chegatohigh.ac.zw" 
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors"
              >
                <Mail size={15} className="text-amber-400 shrink-0" />
                <span>info@chegatohigh.ac.zw</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Chegato Mission, Mberengwa District, Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Stay updated with school sports, events, and academic announcements.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/share/19askS4J5Y/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://wa.me/263XXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-all"
                aria-label="WhatsApp Desk"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Chegato High School. All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-slate-400 font-medium">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}