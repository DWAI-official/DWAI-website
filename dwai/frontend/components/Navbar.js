"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { MdCancel } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full h-[80px] border-b border-[rgba(91,45,142,0.12)] bg-[rgba(250,248,255,0.92)] backdrop-blur-xl">
      
      {/* CONTAINER */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none"
        >
          <Image
            src="/assets/images/dwai_logo2.png"
            alt="DWAI Logo"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={link.href}
                className="
                  border-b border-transparent
                  pb-1
                  text-[0.8rem]
                  font-medium
                  uppercase
                  tracking-[0.1em]
                  text-muted
                  transition-all
                  duration-200
                  hover:border-magenta
                  hover:text-purple
                "
              >
                {link.name}
              </Link>
            </motion.li>
          ))}

          {/* CTA BUTTON */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="
                bg-purple
                px-6
                py-2.5
                text-[0.78rem]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
                transition-all
                duration-200
                hover:bg-purple-dark
              "
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
              }}
            >
              Join Us
            </Link>
          </motion.li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-purple transition md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <MdCancel size={28} />
          ) : (
            <TbMenuDeep size={28} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="
              border-t
              border-[rgba(91,45,142,0.12)]
              bg-[rgba(250,248,255,0.96)]
              px-6
              py-6
              backdrop-blur-xl
              md:hidden
            "
          >
            <div className="flex flex-col gap-5">

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block
                      border-b
                      border-purple/10
                      pb-3
                      text-[0.82rem]
                      font-medium
                      uppercase
                      tracking-[0.1em]
                      text-charcoal
                      transition
                      hover:text-purple
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* MOBILE CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  inline-flex
                  items-center
                  justify-center
                  bg-purple
                  px-6
                  py-3
                  text-[0.8rem]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                "
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                }}
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}