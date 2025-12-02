// app/services/page.jsx  OR  components/ServicesPage.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHandsHelping,
  FaGraduationCap,
  FaHeartbeat,
  FaDonate,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/**
 * ServicesPage
 * Single-file Services page: Hero, Purpose, Statistics, Timeline, Findings,
 * Testimonials, Recommendations, CTA.
 *
 * Notes:
 * - Tailwind CSS required.
 * - Framer Motion required.
 * - Replace sample images in /public/assets/images/ with your real images or Strapi URLs.
 * - For local Strapi-hosted images you may need `unoptimized` prop on <Image /> during development.
 */

export default function ServicesPage() {
  // sample data (from your PDF)
  const introText = `Deaf Women Aloud Initiative (DWAI) works to ensure inclusive sexual and reproductive health,
  protection from gender-based violence, and access to education and leadership for deaf women and girls across Nigeria.`;

  const stats = [
    { id: 1, label: "Communication Barriers", value: 85, suffix: "%" },
    { id: 2, label: "Lack of Awareness", value: 75, suffix: "%" },
    { id: 3, label: "Providers want sign training", value: 90, suffix: "%" },
    { id: 4, label: "Service Access Gaps", value: 80, suffix: "%" },
  ];

  const timeline = [
    {
      year: "Baseline",
      title: "Inclusive Needs Assessment",
      desc:
        "Sign-language enabled baseline surveys and focus groups to understand barriers in SRHR access.",
    },
    {
      year: "Intervention",
      title: "Training & Pad-bank Installation",
      desc:
        "Trained staff, installed pad banks in partner schools, provided monitoring tools.",
    },
    {
      year: "Scale",
      title: "Community Awareness",
      desc:
        "Sign-language resources and community events to reduce stigma and increase accessibility.",
    },
    {
      year: "Sustain",
      title: "Policy Engagement",
      desc:
        "Work with policymakers and partners to ensure long-term inclusive services.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "For the first time I understood my rights and how to access help. DWAI made health information clear and respectful.",
      author: "Hellen (Participant)",
    },
    {
      id: 2,
      quote:
        "Healthcare staff were trained in simple sign phrases — that changed everything in our community clinic.",
      author: "Health Worker",
    },
    {
      id: 3,
      quote:
        "The pad bank means my daughter no longer misses school — that's dignity and hope.",
      author: "Parent",
    },
  ];

  const recommendations = [
    "Train health workers in basic sign language & deaf-inclusive communication.",
    "Produce SRHR content in sign-language video formats and pictorial guides.",
    "Install and sustain sanitary pad banks in schools for deaf students.",
    "Engage policymakers to commit to disability-inclusive SRHR budgets.",
  ];

  return (
    <main
      className="min-h-screen bg-purple-500 font-sans antialiased text-gray-900"
      style={{ fontFamily: "'Inter', 'Noto Sans', system-ui, -apple-system" }}
    >
      {/* HERO */}
      <header
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white"
        aria-label="DWAI Services hero"
      >
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] contrast-[1.05]"
          src="/assets/videos/hero.mp4"
          // sample local video; replace with your own or image fallback
          autoPlay
          muted
          loop
          playsInline
        /> 
         <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Inclusive SRHR & Community Programs{" "}
            <span className="text-pink-300">for Deaf Women</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg max-w-3xl mx-auto text-gray-100"
          >
            {introText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="/programs"
              className="inline-flex items-center gap-3 bg-pink-500 px-5 py-3 rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/30 px-5 py-3 rounded-full text-white/90 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Support DWAI
            </a>
          </motion.div>
        </div> 
      </header>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        {/* Chip / Short CTA */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-md">
              <FaHandsHelping className="w-6 h-6 text-purple-700" aria-hidden />
            </div>
            <div>
              <p className="text-sm text-gray-600">Want to partner with us?</p>
              <p className="font-semibold text-gray-900">Get involved — sponsor programs or training</p>
            </div>
          </div>
          <div className="ml-auto">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-full font-semibold focus:outline-none focus:ring-4 focus:ring-purple-200"
            >
              Partner / Donate
              <FaDonate className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* PURPOSE + SERVICES */}
      <section id="programs" className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/assets/images/programs-hero.jpg"
              alt="DWAI community program"
              width={1200}
              height={800}
              className="object-cover w-full h-80 md:h-[420px]"
              unoptimized
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-extrabold text-white mb-4"
            >
              What We Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-white leading-relaxed mb-6"
            >
              We deliver research-informed, sign-language friendly SRHR training, community outreach,
              provider capacity-strengthening, and school-based interventions to close the accessibility gap.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              <ServiceCard
                Icon={FaHeartbeat}
                title="SRHR Outreach"
                text="Sign-language videos, community workshops and accessible materials."
              />
              <ServiceCard
                Icon={FaGraduationCap}
                title="Training & Leadership"
                text="Leadership bootcamps and livelihood skills for deaf women and girls."
              />
              <ServiceCard
                Icon={FaHandsHelping}
                title="Protection & Referral"
                text="Inclusive referral pathways and survivor-centered support for SGBV survivors."
              />
              <ServiceCard
                Icon={FaDonate}
                title="Sustainability"
                text="Pad-banks, monitoring tools and community support mechanisms."
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-purple-800 text-center mb-8">
            Key Findings (from assessment)
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <StatCard key={s.id} label={s.label} value={s.value} suffix={s.suffix} />
            ))}
          </div>

          <p className="mt-8 text-gray-700 max-w-3xl mx-auto text-center">
            These findings show urgent gaps in communication and health service accessibility that DWAI addresses through targeted programs.
          </p>
        </div>
      </section>

      {/* TIMELINE / METHODOLOGY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-white text-center mb-8">Methodology & Timeline</h3>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 top-8 bottom-8 hidden md:block" aria-hidden />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <TimelineItem key={i} item={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FINDINGS + CHALLENGES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h4 className="text-2xl font-bold text-purple-800 mb-4">Challenges We Identified</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Major communication barriers between deaf service users and health providers.</li>
              <li>Limited SRHR knowledge available in sign language or simplified visual formats.</li>
              <li>Persistent stigma and low prioritization of deaf-friendly services.</li>
              <li>Supply & resourcing gaps for menstrual health management in special schools.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-purple-800 mb-4">How We Respond</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-3">
              <li>Sign-language friendly training for providers and community champions.</li>
              <li>Deploy pad-banks and tracking cards in partner schools.</li>
              <li>Create sign-language SRHR video resources and pictorial guides.</li>
              <li>Advocate with policymakers for inclusive SRHR budgets and staff training.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {/* <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h3 className="text-3xl font-bold text-purple-800">Voices from the Community</h3>
          <p className="mt-2 text-gray-700">Real stories from program participants, caregivers and health staff.</p>
        </div>

        <TestimonialCarousel items={testimonials} />
      </section> */}

      {/* RECOMMENDATIONS */}
      {/* <section className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-purple-800 text-center mb-8">Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((rec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-gray-800">{rec}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      {/* <section id="contact" className="py-16 bg-purple-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">Join DWAI's Work</h3>
          <p className="mb-6 text-lg leading-relaxed">
            Partner with us to scale inclusive SRHR, training, and resources for deaf women and girls.
          </p>
          <a
            href="mailto:deafwomenaloudinitiative@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-purple-800 px-6 py-3 rounded-full font-semibold focus:ring-4 focus:ring-white/30"
          >
            Contact Us
          </a>
        </div>
      </section> */}

    </main>
  );
}

/* -------------------- Subcomponents -------------------- */

function ServiceCard({ Icon, title, text }) {
  return (
    <motion.article
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="p-2 bg-purple-50 inline-block rounded-md mb-4">
        <Icon className="w-6 h-6 text-purple-700" aria-hidden />
      </div>
      <h4 className="text-lg font-semibold text-purple-800">{title}</h4>
      <p className="mt-2 text-gray-700">{text}</p>
    </motion.article>
  );
}

function StatCard({ label, value = 0, suffix = "" }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let raf;
    let start;
    const duration = 900;
    const startVal = 0;
    const endVal = value;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setCurrent(Math.round(eased * (endVal - startVal) + startVal));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);

  return (
    <motion.div
      className="bg-white rounded-xl p-6 text-center shadow-sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl font-extrabold text-purple-800" aria-hidden>
        {current}
        {suffix}
      </div>
      <div className="mt-2 text-gray-700 text-sm">{label}</div>
    </motion.div>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative md:pl-8 md:pr-8"
    >
      <div className={`md:flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
        <div className="md:w-1/2 md:px-6">
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-md shadow-sm">
            <div className="text-sm font-semibold text-purple-700">{item.year}</div>
            <h4 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h4>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:justify-center md:items-center">
          <div className="hidden md:block w-8 h-8 rounded-full bg-purple-700 transform -translate-y-6" aria-hidden />
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  };
  const next = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="relative bg-white rounded-2xl p-8 shadow-lg">
        {/* <AnimatePresence initial={false}>
          <motion.blockquote
            key={items[index]?.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="text-gray-800 text-center"
            aria-live="polite"
          >
            <p className="text-lg leading-relaxed">“{items[index]?.quote}”</p>
            <footer className="mt-4 text-sm font-semibold text-purple-700">{items[index]?.author}</footer>
          </motion.blockquote>
        </AnimatePresence> */}

        {/* Controls */}
        <div className="absolute inset-x-0 -bottom-6 flex justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2 items-center">
            {items.map((it, i) => (
              <button
                key={it.id}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-purple-700" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-200"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Helpers -------------------- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
