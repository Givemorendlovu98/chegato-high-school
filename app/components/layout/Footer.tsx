import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Chegato High School
            </h3>

            <p className="text-gray-400">
              Excellence • Discipline • Leadership
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-green-400 transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-green-400 transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">
              Contact
            </h4>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-green-400" />
                <span>+263 XXX XXX XXX</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={18} className="text-green-400" />
                <span>info@chegatohigh.ac.zw</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-green-400" />
                <span>Mberengwa, Zimbabwe</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Chegato High School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}