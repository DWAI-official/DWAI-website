"use client";

import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function GlossaryDownloadSection() {
  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden"
      aria-labelledby="glossary-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2
          id="glossary-heading"
          className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6"
        >
          📘 SRHR Glossary for Deaf Empowerment
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
          Learn key terms and concepts about Sexual and Reproductive Health and
          Rights (SRHR) — explained in accessible, inclusive language for the
          Deaf community. This glossary helps you understand, advocate, and
          educate others.
        </p>

        {/* Download Button */}
        <motion.a
          href="/assets/files/SRHR.pdf" // path to your PDF in /public/assets/files/
          download="SRHR-Glossary.pdf"
          className="inline-flex items-center gap-3 bg-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaFilePdf className="text-2xl" aria-hidden="true" />
          Download SRHR Glossary (PDF)
        </motion.a>

        {/* Decorative small text */}
        <p className="text-sm text-gray-500 mt-6">
          Free educational resource • Accessible • Easy to understand
        </p>
      </motion.div>
    </section>
  );
}
