"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ha", label: "Hausa", flag: "🇳🇬" },
];

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none"
        aria-label="Select Language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={20} />
        <span className="font-bold text-sm uppercase hidden sm:inline-block">
          {currentLang.code}
        </span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-purple-100 overflow-hidden z-50"
            role="menu"
          >
            <div className="p-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm rounded-lg transition-colors ${
                    language === lang.code
                      ? "bg-purple-50 text-purple-700 font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg" aria-hidden="true">{lang.flag}</span>
                    {lang.label}
                  </span>
                  {language === lang.code && <Check size={16} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}