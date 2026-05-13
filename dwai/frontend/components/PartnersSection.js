"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useGlobalData } from "../context/GlobalDataContext";

export default function PartnersSection() {
  const { partners: data } = useGlobalData();
  const partners = data || [];

  const safePartners = partners;
  const row1 = safePartners.slice(0, Math.ceil(safePartners.length / 2));
  const row2 = safePartners.slice(Math.ceil(safePartners.length / 2));

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white">

      {/* Luxury ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-10 w-[28rem] h-[28rem] bg-purple-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-10 w-[30rem] h-[30rem] bg-pink-200/30 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <span className="text-xs tracking-[0.3em] uppercase text-purple-600 font-semibold">
          Our Partners
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Building a <span className="text-purple-600 italic">trusted ecosystem</span> for Deaf empowerment
        </h2>

        <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
          We collaborate with organizations committed to accessibility, inclusion,
          and sustainable impact for Deaf women and girls across Nigeria.
        </p>
      </div>

      {/* Premium glass container */}
      <div className="relative z-10 mt-16 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-purple-100 bg-white/40 backdrop-blur-xl shadow-xl py-12 px-6 overflow-hidden">

          {/* Row 1 */}
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {row1.map((partner) => (
              <LogoCard
                key={partner._id}
                name={partner.name}
                src={partner.logoUrl}
              />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-12 mt-10 whitespace-nowrap animate-marquee-reverse">
            {row2.map((partner) => (
              <LogoCard
                key={partner._id}
                name={partner.name}
                src={partner.logoUrl}
              />
            ))}
          </div>
        </div>
      </div>

      {/* animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* =========================
   PREMIUM LOGO CARD
   ========================= */
function LogoCard({ src, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center w-44 shrink-0 group"
    >
      <div className="
        relative h-24 w-44 p-4 rounded-2xl
        bg-white/60 backdrop-blur-md
        border border-purple-100
        shadow-sm group-hover:shadow-xl
        group-hover:shadow-purple-200/40
        transition-all duration-300
      ">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain p-2"
        />
      </div>

      <p className="mt-3 text-xs tracking-wide uppercase text-gray-500 group-hover:text-purple-600 transition">
        {name}
      </p>
    </motion.div>
  );
}