"use client";

import { motion } from "framer-motion";
import React from "react";

export default function CTA({
  title = "Join Our Mission 💜",
  description = "Be part of a growing movement for Deaf empowerment, accessibility, and leadership.",
  buttonText = "Get Involved",
  buttonLink = "/contact",
  accentColor = "from-purple-700 via-purple-600 to-pink-600",
}) {
  return (
    <section
      className={`relative py-20 px-6 bg-gradient-to-br ${accentColor} text-white overflow-hidden`}
      aria-labelledby="cta-heading"
    >
      {/* Floating glow elements for background depth */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Main CTA content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
        >
          {title}
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-10 leading-relaxed">
          {description}
        </p>

        {/* Animated button */}
        <motion.a
          href={buttonLink}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus:outline-none"
        >
          {buttonText} →
        </motion.a>
      </motion.div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </section>
  );
}
