"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HandHeart, ShieldCheck } from "lucide-react";
import { useGlobalData } from "../context/GlobalDataContext";

const trustPoints = [
  { icon: HandHeart, label: "Deaf-led advocacy" },
  { icon: ShieldCheck, label: "Accessible SRHR" },
  { icon: Globe2, label: "Communities across Nigeria" },
];

export default function Hero() {
  const { hero: data } = useGlobalData();
  const reduceMotion = useReducedMotion();
  const title = data?.title || "Every Deaf woman deserves to be heard.";
  const highlight = data?.highlight || "Access. Agency. Equality.";

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#160d25] text-white" aria-labelledby="home-hero-title">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={data?.heroImageUrl || "/assets/images/digit_2.jpg"}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55 md:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,13,37,.98)_0%,rgba(22,13,37,.88)_43%,rgba(22,13,37,.28)_76%,rgba(22,13,37,.55)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(219,39,119,.34),transparent_28%)]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/25 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.p {...reveal()} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-pink-100 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-pink-400" aria-hidden="true" />
            Deaf Women Aloud Initiative · Nigeria
          </motion.p>

          <motion.h1 {...reveal(0.08)} id="home-hero-title" className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {title}
            <span className="mt-3 block bg-gradient-to-r from-pink-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
              {highlight}
            </span>
          </motion.h1>

          <motion.p {...reveal(0.16)} className="mt-7 max-w-2xl text-lg leading-8 text-purple-50/85 sm:text-xl">
            {data?.subtitle || "We advance accessible health information, rights and leadership opportunities with Deaf women and girls—not just for them."}
          </motion.p>

          <motion.div {...reveal(0.24)} className="mt-9 flex flex-wrap gap-4">
            <Link href="/about" className="inline-flex min-h-13 items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-[#3D1A6B] shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300">
              Discover our impact <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="/donation" className="inline-flex min-h-13 items-center rounded-full border border-white/40 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300">
              Support the mission
            </Link>
          </motion.div>

          <motion.ul {...reveal(0.32)} className="mt-12 grid max-w-3xl gap-3 border-t border-white/15 pt-7 sm:grid-cols-3" aria-label="Our focus areas">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-semibold text-purple-50/90">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-pink-400/15 text-pink-200"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 hidden max-w-sm border-l border-t border-white/15 bg-[#241238]/80 p-6 backdrop-blur-xl lg:block">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-300">Our approach</p>
        <p className="mt-2 text-sm leading-6 text-purple-50/80">Led by lived experience, grounded in Nigerian Sign Language, and built for lasting systemic change.</p>
      </div>
    </section>
  );
}
