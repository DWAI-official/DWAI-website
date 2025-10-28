"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function FeatureSection({
  heading,
  text,
  bgImage,
  reverse = false,
  accentColor = "from-purple-50 to-pink-50",
}) {
  return (
    <section
      className={`py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r ${accentColor} relative overflow-hidden`}
      aria-labelledby={`${heading.toLowerCase().replace(/\s/g, "-")}-heading`}
    >
      {/* Decorative floating circles for a soft vibe */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-300/30 rounded-full blur-3xl animate-pulse"></div>

      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h2
            id={`${heading.toLowerCase().replace(/\s/g, "-")}-heading`}
            className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4 leading-tight"
          >
            {heading}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {text}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={bgImage}
            alt={`${heading} visual illustration`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
