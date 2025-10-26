"use client";

import { useState } from "react";
import Link from "next/link";
// import {Menu, X} from "lucide-react";
import {TbMenuDeep} from "react-icons/tb"
import {MdCancel} from "react-icons/md"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Events", href: "/events" },
    { name: "Donate", href: "/donate" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {/* <Image
              src="/dwai-logo.png"
              alt="DWAI Logo"
              className="h-10 w-auto"
            /> */}
            <span className="ml-2 font-bold text-xl text-purple-700">
              DWAI
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-purple-700 font-medium focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:rounded-md"
              >
                {link.name}
              </Link>
            ))}
            {/* <Link
              href="/sign-language"
              className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition focus-visible:ring-2 focus-visible:ring-purple-500"
            >
              Sign Language
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-label="Toggle menu"
          >
            {isOpen ? 
            <MdCancel size={24} className="text-purple-700" />
            : 
            <TbMenuDeep size={24} className="text-purple-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-gray-700 font-medium hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-purple-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* <Link
            href="/sign-language"
            className="block bg-purple-700 text-white text-center py-2 rounded-md hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Sign Language
          </Link> */}
        </div>
      )}
    </nav>
  );
}
