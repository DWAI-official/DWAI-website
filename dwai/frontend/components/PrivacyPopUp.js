"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function PrivacyPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("dwai-privacy-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("dwai-privacy-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("dwai-privacy-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-[9999] bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-purple-100 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-purple-100 rounded-full shrink-0">
              <ShieldCheck className="w-6 h-6 text-purple-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Privacy & Cookies
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                We use cookies to improve your experience. By using our site, you agree to our 
                <Link href="/privacy" className="text-purple-700 hover:underline ml-1 font-medium">
                  Privacy Policy
                </Link>.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm shadow-md"
                >
                  Accept
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                >
                  Decline
                </button>
              </div>
            </div>
            <button 
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
