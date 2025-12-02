"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero({data}) {
  
  // ✅ Match Strapi field name (heroImage, not hero)
  const heroImageUrl =
    data?.heroImage?.data?.attributes?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.heroImage.data.attributes.url}`
      : "/assets/images/outreach_team.jpg";

  return (
    <section
      role="region"
      aria-label="DWAI Hero Section"
      className="relative w-full h-[90vh] overflow-hidden text-white"
    >
      <Image
        src={heroImageUrl}
        alt={data?.Title || "Hero Image"}
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-40 px-6 z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {data?.Title}
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {data?.subtitle}
        </motion.p>

        <motion.a
          href="#gallery"
          className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Explore Gallery
        </motion.a>
      </div>
    </section>
  );
}
