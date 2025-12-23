"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
        // { name: "donation", href: "/donation" }
    // { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-purple-100 shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* 🌸 Logo Section */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md"
          >
            <Image
              src="/assets/images/dwai_logo2.png"
              alt="DWAI Logo"
              width={140}
              height={140}
              className="rounded-full"
            />
            {/* <span className="ml-3 text-2xl font-extrabold text-purple-700 tracking-tight">
              DWAI
            </span> */}
          </Link>

          {/* 💻 Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >

                
                <Link
                  href={link.href}
                  className="text-gray-700 uppercase hover:text-purple-700 font-medium transition duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:rounded-md"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            {/* <Link
              href="https://decisive-confidence-d7cd061097.strapiapp.com/admin"
              className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Admin
            </Link> */}
          </ul>

          {/* 📱 Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-purple-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <MdCancel size={26} className="text-purple-700" />
            ) : (
              <TbMenuDeep size={26} className="text-purple-700" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-md border-t flex flex-col justify-center items-center border-purple-100 px-4 py-4 space-y-3 shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block uppercase text-gray-800 font-medium hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
                <hr className="my-2 border-t border-purple-400 w-100" />
              </motion.div>
            ))}
            {/* <Link
              href="https://decisive-confidence-d7cd061097.strapiapp.com/admin"
              className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500 font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Admin
            </Link> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
