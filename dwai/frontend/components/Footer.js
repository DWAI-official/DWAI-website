"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MdFacebook } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Image from "next/image"
export default function Footer() {
  const socialLinks = [
    {
      icon: MdFacebook,
      href: "https://facebook.com/dwai",
      label: "DWAI Facebook",
    },
    {
      icon: CiInstagram,
      href: "https://instagram.com/dwai",
      label: "DWAI Instagram",
    },
    {
      icon: CiLinkedin,
      href: "https://linkedin.com/company/dwai",
      label: "DWAI LinkedIn",
    },
  ];

  const quickLinks = ["About", "Programs", "Gallery", "Donate", "Contact"];

  return (
    <footer
      className="relative bg-gradient-to-br from-purple-800 via-purple-700 to-pink-700 text-white overflow-hidden mt-24"
      role="contentinfo"
    >
      {/* ✨ Floating Light Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* 🦋 About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md"
          >
            <Image
              src="/assets/images/dwai_logo2.png"
              alt="DWAI Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            {/* <span className="ml-3 text-2xl font-extrabold text-purple-700 tracking-tight">
              DWAI
            </span> */}
          </Link>

          <p className="text-sm md:text-base leading-relaxed text-purple-100">
            Empowering Deaf women and girls across Nigeria to access education,
            leadership, and justice — free from discrimination.  
            Together, we amplify Deaf women’s voices and transform communities 💜
          </p>
        </motion.div>

        {/* 🔗 Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4 text-pink-100">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <motion.li
                key={link}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-purple-50 hover:text-pink-300 focus-visible:ring-2 focus-visible:ring-pink-300 rounded-sm transition"
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 📞 Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-4 text-pink-100">
            Contact Us
          </h4>
          <address className="not-italic text-purple-100 text-sm leading-relaxed">
            B5, Suite U04 & U05, P&D Plaza,  
            Beside Best Buyer Supermarket, Kuje, Abuja-FCT  
          </address>
          <p className="mt-2 text-sm">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:deafwomenaloudinitiatives@gmail.com"
              className="hover:text-pink-300 focus-visible:ring-2 focus-visible:ring-pink-300 rounded-sm"
            >
              deafwomenaloudinitiatives@gmail.com
            </a>
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" />{" "}
              <span>+234 803 750 0671 | +234 818 505 6488</span>
            </div>
            <div className="flex items-center gap-2">
              <MdCall className="text-yellow-300" />{" "}
              <span>+234 811 422 9969</span>
            </div>
          </div>

          {/* 🌐 Social Icons */}
          <div className="flex mt-5 space-x-5">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-pink-300 transition"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-white text-2xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 💫 Footer Bottom */}
      <div className="relative border-t border-purple-300/40 py-4 text-center text-sm text-purple-100 backdrop-blur-sm">
        <p>
          © {new Date().getFullYear()} Deaf Women Aloud Initiative. All rights
          reserved.
        </p>
        <p className="text-xs mt-1">
          Designed for accessibility & inclusion • Built with by{" "} 
          <Link
            href="https://acclusivo.vercel.app"
            className="underline hover:text-pink-300 focus-visible:ring-2 focus-visible:ring-pink-300 rounded-sm"
          >
            Acclusivo
          </Link>
        </p>
      </div>
    </footer>
  );
}
