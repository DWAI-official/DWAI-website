"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;

      // Show button only after scrolling down a bit (e.g., 300px).
      // The previous value `-2000` would make it visible almost immediately.
      setIsVisible(scrollY > 300);
      setShowWhatsApp(scrollY + windowHeight >= scrollHeight - 100); // near bottom
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+2348037500671?text=Hello%20DWAI!%20I%20want%20to%20learn%20more%20about%20your%20programs.", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <button
            onClick={showWhatsApp ? handleWhatsAppClick : scrollToTop}
            className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white transition-all duration-300 ${
              showWhatsApp
                ? "bg-green-500 hover:bg-green-600"
                : "bg-purple-700 hover:bg-purple-900"
            }`}
            aria-label={showWhatsApp ? "Contact via WhatsApp" : "Scroll to top"}
          >
            {showWhatsApp ? (
              <MessageCircle className="w-7 h-7" />
            ) : (
              <ArrowUp className="w-7 h-7" />
            )}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
