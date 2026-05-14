"use client";

import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f14] text-white/70 overflow-hidden">

      {/* Soft glow background */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-pink-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/images/dwai_logo2.png"
                alt="DWAI Logo"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-pink-400 font-semibold tracking-wide">
                  DWAI
                </h3>
                <p className="text-xs text-white/40 uppercase tracking-widest">
                  Deaf Women Aloud Initiative
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              A non-government organisation amplifying the voices of Deaf women and girls in Nigeria —
              advancing inclusion, dignity, and reproductive rights.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: <MdFacebook />, href: "https://www.facebook.com/share/18s37jbQ2H/", label: "Facebook" },
                { icon: <CiInstagram />, href: "https://www.instagram.com/dwainigeria", label: "Instagram" },
                { icon: <FaXTwitter />, href: "#", label: "X (Twitter)" },
                { icon: <CiLinkedin />, href: "https://www.linkedin.com/in/deaf-women-aloud-initiative-2781132b2", label: "LinkedIn" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 rounded-md text-white/60 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/30 mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
                // ["Donate", "/donate"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-white transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/30 mb-5">
              Resources
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/assets/files/SRHR.pdf" className="hover:text-white transition">
                  SRHR Glossary
                </Link>
              </li>
              {/* <li>
                <Link href="/programs" className="hover:text-white transition">
                  Our Programs
                </Link>
              </li> */}
              {/* <li>
                <Link href="/impact" className="hover:text-white transition">
                  Impact Report
                </Link>
              </li> */}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white/30 mb-5">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm text-white/60">

              <div className="flex gap-3">
                <span className="text-purple-400">📍</span>
                <p>
                  P&D Plaza, Beside Best Buyer Supermarket,<br />
                  Kuje, Abuja-FCT
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-purple-400">✉️</span>
                <a
                  href="mailto:deafwomenaloudinitiative@gmail.com"
                  className="hover:text-white transition"
                >
                  deafwomenaloudinitiative@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <span className="text-purple-400">📞</span>
                <p>
                  +234 803 750 0671<br />
                  +234 818 505 6488
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/40">

          <p>
            © 2026 Deaf Women Aloud Initiative. All rights reserved · CAC Registered
          </p>

          <p>
            Designed for accessibility & inclusion · Built by{" "}
            <a
              href="https://acclusivo.vercel.app"
              className="text-white/60 hover:text-white transition"
            >
              Victor Oricha
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}