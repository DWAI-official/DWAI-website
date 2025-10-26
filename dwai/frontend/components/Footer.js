import Link from "next/link";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
import {MdFacebook} from "react-icons/md"
import {CiInstagram} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaWhatsapp} from "react-icons/fa"
import {MdCall} from "react-icons/md"

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Deaf Women Aloud Initiative (DWAI)
          </h3>
          <p className="text-sm leading-relaxed">
            Empowering Deaf women and girls across Nigeria to access education,
            leadership, and justice — free from discrimination.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Projects", "Events", "Donate", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:rounded-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">B5, Suite U04 & U04, P&D Plaza Beside Best Buyer Supermarket, Kuje, Abuja-FCT</p>
          <p className="text-sm mt-1">Email: deafwomenaloudinitiatives@gmail.com</p>
          <div></div>
          <div className="flex mt-4 space-x-4">
            <FaWhatsapp className="mt-1 inline-block" /> <span className="ml-2"> +234 8037500671</span> | <span className="ml-2">+234 8185056488</span> 
          </div>
          <div className="flex mt-4 space-x-4">
            <MdCall className="mt-1 inline-block" /> <span className="ml-2"> +234 8114229969</span>
          </div>
          <div className="flex mt-4 space-x-4">
            <a href="https://facebook.com/dwai" aria-label="DWAI Facebook" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
              <MdFacebook />
            </a>
            <a href="https://instagram.com/dwai" aria-label="DWAI Instagram" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
              <CiInstagram />
            </a>
            <a href="https://linkedin.com/company/dwai" aria-label="DWAI LinkedIn" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
              <CiLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white py-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Deaf Women Aloud Initiative. All rights reserved.
        </p>
        <p className="text-xs text-white mt-1">
          Designed for accessibility and inclusion | Built by Acclusivo
        </p>
      </div>
    </footer>
  );
}
