"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeatureSection({
  title,
  text,
  image,
  label,
  reverse = false,
  alt = false,
}) {
  return (
    <section
      className={`py-24 ${alt ? "bg-[#F4F0FA]" : "bg-white"}`}
      aria-labelledby={`${label}-heading`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-16 ${
          reverse ? "md:[direction:rtl]" : ""
        }`}
      >

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={reverse ? "[direction:ltr]" : ""}
        >
          {/* LABEL */}
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C2185B]">
            <span className="h-px w-5 bg-[#C2185B]" />
            {label}
          </p>

          {/* TITLE */}
          <h2
            id={`${label}-heading`}
            className="mb-5 text-[clamp(2rem,3vw,3rem)] font-serif font-medium leading-tight text-[#1A1527]"
          >
            {title}
          </h2>

          {/* TEXT */}
          <p className="mb-8 leading-[1.85] text-[#6B6478]">
            {text}
          </p>

          {/* BUTTON */}
          <button
            className="border border-[#5B2D8E] px-6 py-3 text-sm font-semibold uppercase tracking-[0.06em] text-[#5B2D8E] transition hover:bg-[#5B2D8E] hover:text-white"
          >
            Learn More
          </button>
        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[16/11] w-full overflow-hidden">
            <Image
              src={image}
              alt={label}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1527]/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}