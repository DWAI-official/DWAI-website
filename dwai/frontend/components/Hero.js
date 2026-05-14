"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, Globe } from "lucide-react";
import { useGlobalData } from "../context/GlobalDataContext";

export default function Hero() {
  const { hero: data } = useGlobalData();

  return (
    <section className="relative grid min-h-screen grid-cols-1 overflow-hidden bg-[#FAF8FF] pt-[72px] md:grid-cols-2">

      {/* BACKGROUND SHAPE */}
      <div
        className="absolute right-0 top-0 z-0 h-full w-[55%]"
        style={{
          background: "linear-gradient(135deg, #EDE5F8 0%, #E8D9F7 100%)",
          clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 px-6 py-20 md:px-12 lg:px-16"
      >
        {/* EYEBROW */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-[1.5px] w-8 bg-pink-400" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-400">
            DWAI Training Program · Nigeria
          </span>
        </div>

        {/* TITLE */}
        <h1 className="mb-6 text-[clamp(2.8rem,5vw,4.5rem)] font-serif font-medium leading-[1.15] text-[#1A1527]">
          {data?.title || "Empowering"}
          <span className="block text-[#5B2D8E] italic">
            Deaf Women & Girls
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mb-10 max-w-xl text-[1.05rem] leading-[1.8] text-[#6B6478]">
          {data?.subtitle}
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#5B2D8E] px-8 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#3D1A6B]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            }}
          >
            Learn About Our Work
          </Link>

          {/* <Link
            href="/donate"
            className="inline-flex items-center border border-[#5B2D8E] px-8 py-4 text-[0.85rem] font-semibold uppercase tracking-[0.06em] text-[#5B2D8E] transition hover:bg-[#5B2D8E] hover:text-white"
          >
            Support DWAI
          </Link> */}
        </div>

        {/* TRUST ITEMS */}
        <div className="mt-12 flex flex-wrap gap-8 border-t border-[rgba(91,45,142,0.12)] pt-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#C2185B]" />
            <span className="text-sm text-[#6B6478]">Digital Protection</span>
          </div>

          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-[#C2185B]" />
            <span className="text-sm text-[#6B6478]">Online Safety</span>
          </div>

          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-[#C2185B]" />
            <span className="text-sm text-[#6B6478]">Digital Rights</span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex items-center justify-center px-6 py-20 lg:px-16"
      >
        <div className="relative w-full max-w-[520px]">

          {/* IMAGE */}
          <div
            className="relative aspect-[4/5] w-full overflow-hidden shadow-[24px_24px_0_rgba(91,45,142,0.12)]"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)",
            }}
          >
            <Image
              src={data?.heroImageUrl || "/assets/images/digit_2.jpg"}
              alt="DWAI Digital Rights Training"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-20 -left-8 max-w-[240px] bg-[#5B2D8E] p-4 text-white"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
              boxShadow: "8px 8px 0 #8C0E3F",
            }}
          >
            <h4 className="mb-2 text-[1.05rem] font-serif font-medium">
              Why Digital Safety Matters
            </h4>
            <p className="text-[0.78rem] leading-[1.6] opacity-90">
              Deaf women face higher risks of online abuse, misinformation, and exploitation.
            </p>
          </motion.div>

          {/* GOLD DOT */}
          <div className="absolute -right-1 top-6 h-20 w-20 rounded-full border-2 border-pink-400 opacity-50" />
        </div>
      </motion.div>
    </section>
  );
}