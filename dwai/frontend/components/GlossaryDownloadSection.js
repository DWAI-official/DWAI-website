"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function GlossarySection() {
  return (
    <section
      id="glossary"
      aria-labelledby="glossary-h2"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* background aura */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-[16px_16px_0_#f3f4f6] clip-path-[polygon(0_0,calc(100%-20px)_0,100%_20px,100%_100%,0_100%)]">
              <Image
                src="/assets/images/outreach8.jpg"
                alt="SRHR Glossary cover"
                fill
                className="object-cover"
              />
            </div>

            {/* badge */}
            <div className="absolute top-6 right-[-20px] bg-yellow-400 text-gray-900 text-[11px] font-bold tracking-widest uppercase px-4 py-2">
              Free Resource
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold tracking-[0.2em] uppercase text-purple-600 mb-3">
              SRHR Glossary
            </div>

            <h2
              id="glossary-h2"
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Health Information{" "}
              <em className="italic text-purple-600">in Plain Language</em>
            </h2>

            <p className="text-gray-600 leading-[1.85] mb-6">
              Understand Sexual and Reproductive Health and Rights (SRHR) through
              clear, accessible definitions — created specially for the Deaf community.
              Knowledge is power, and every Deaf woman deserves access to it.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Free Resource",
                "Deaf-Inclusive",
                "Accessible",
                "Easy to Understand",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 border border-gray-300 text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <a
              href="/assets/files/SRHR.pdf"
              download
              className="inline-flex items-center gap-3 bg-gray-900 text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 transition hover:bg-purple-700 clip-[polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]"
            >
              <FaFilePdf className="text-lg" />
              Download SRHR Glossary (PDF)
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}