"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";

export default function GlossaryDownloadSection() {
  return (
    <section
      className="relative py-20 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden font-sans"
      aria-labelledby="glossary-heading"
    >
      {/* Soft background aura */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Glossary Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full h-[450px] rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-200">
            <Image
              src="/assets/images/glossary.jpg" 
              alt="SRHR Glossary cover preview"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: Text + Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2
            id="glossary-heading"
            className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight mb-6 tracking-tight"
          >
            SRHR Glossary  
            <span className="text-purple-600 block">
              for Deaf Empowerment
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Understand Sexual and Reproductive Health and Rights (SRHR) through
            clear, accessible definitions — created specially for the Deaf
            community.  
            <span className="font-semibold text-purple-800">
              Knowledge is power, and every Deaf woman deserves access to it.
            </span>
          </p>

          <motion.a
            href="/assets/files/SRHR.pdf"
            download="SRHR-Glossary.pdf"
            className="inline-flex items-center gap-3 bg-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-purple-800 hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaFilePdf className="text-2xl" aria-hidden="true" />
            Download SRHR Glossary (PDF)
          </motion.a>

          <p className="text-sm text-gray-600 mt-4">
            Free resource • Accessible • Deaf-inclusive • Easy to understand
          </p>
        </motion.div>
      </div>
    </section>
  );
}
