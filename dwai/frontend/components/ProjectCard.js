"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CalendarDays, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useGlobalData } from "../context/GlobalDataContext";
import Link from "next/link";

const categories = ["All", "Training", "Advocacy", "Health", "Community"];

export default function ProgramsSection() {
  const { programs: data = [] } = useGlobalData();

  const [active, setActive] = useState("All");

  const filteredPrograms =
    active === "All"
      ? data
      : data.filter((p) => p.category === active);

  const recentProgram = filteredPrograms[0];
  const otherPrograms = filteredPrograms.slice(1, 4);

  if (!recentProgram) return null;

  return (
    <section
      id="programs"
      className="relative py-28 bg-[#f7f5fb] overflow-hidden"
    >
      {/* luxury background glow */}
      <div className="absolute -top-40 left-20 w-[500px] h-[500px] bg-purple-200/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 right-20 w-[500px] h-[500px] bg-pink-200/20 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
          Our Programs
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Transformational programs empowering Deaf women through education,
          advocacy, and community impact.
        </p>
      </div>

      {/* FILTERS */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 text-sm tracking-wide border transition-all duration-300
              ${
                active === cat
                  ? "bg-purple-700 text-white border-purple-700"
                  : "bg-white text-gray-700 border-gray-200 hover:border-purple-400"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FEATURED PROGRAM */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mb-14 grid md:grid-cols-[5fr_4fr] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden group">
          <Image
            src={recentProgram.mainImageUrl}
            alt={recentProgram.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute top-6 left-6 bg-purple-700 text-white text-xs px-3 py-1 tracking-widest uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Featured
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-10">
          <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-3">
            <CalendarDays className="w-4 h-4" />
            {recentProgram.publishedAt
              ? new Date(recentProgram.publishedAt).toLocaleDateString()
              : "Recent"}
          </div>

          <h3 className="text-3xl font-semibold text-gray-900 mb-4 leading-snug">
            {recentProgram.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            {recentProgram.summary}
          </p>

          {/* READ MORE */}
          {/* <Link
            href={`/programs/${recentProgram.slug?.current}`}
            className="inline-flex items-center gap-2 text-purple-700 font-medium hover:gap-3 transition"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link> */}
        </div>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {otherPrograms.map((program, i) => (
          <motion.div
            key={i}
            className="bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={program.mainImageUrl}
                alt={program.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {program.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {program.summary}
              </p>

              {/* <Link
                href={`/programs/${program.slug?.current}`}
                className="text-sm text-purple-700 font-medium inline-flex items-center gap-2 hover:gap-3 transition"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}