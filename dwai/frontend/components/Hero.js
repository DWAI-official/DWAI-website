"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Lock, Globe } from "lucide-react";

const SAMPLE_HERO = {
  title: "Digital Rights & Online Safety",
  highlight: "for Deaf Women",
  subtitle:
    "DWAI equips Deaf women and girls with the knowledge, tools, and confidence to stay safe, informed, and protected in digital spaces.",
  heroImage: "/assets/images/digit_2.jpg",
};

export default function PremiumHeroLevel3({ heroData = SAMPLE_HERO }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold tracking-wide">
            DWAI Training Program
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {heroData.title} <br />
            <span className="text-pink-300">{heroData.highlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-purple-100 max-w-xl mb-10 leading-relaxed">
            {heroData.subtitle}
          </p>

          {/* CTA */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-purple-800 px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-pink-100 transition"
          >
            Explore the Training
          </motion.a>

          {/* TRUST ICONS */}
          <div className="mt-10 flex gap-8 text-purple-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-pink-300" />
              <span className="text-sm">Digital Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-6 h-6 text-pink-300" />
              <span className="text-sm">Online Safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-pink-300" />
              <span className="text-sm">Digital Rights</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Main Image */}
          <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={heroData.heroImage}
              alt="DWAI Digital Rights Training"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* FLOATING INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-10 -right-10 bg-white text-purple-900 p-6 rounded-2xl shadow-xl max-w-xs"
          >
            <h4 className="font-bold text-lg mb-2">
              Why Digital Safety Matters
            </h4>
            <p className="text-sm leading-relaxed">
              Deaf women face higher risks of online abuse, misinformation, and
              exploitation. DWAI ensures no one is left unprotected.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* DECORATIVE BLURS */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
    </section>
  );
}
