"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Laptop, Megaphone } from "lucide-react";

const programs = [
  {
    title: "Leadership & Mentorship",
    desc: "Empowering Deaf women to become strong community leaders through mentorship, confidence building, and capacity development.",
    img: "/assets/images/dwai_picture.jpeg",
    icon: HeartHandshake,
    link: "/programs/leadership",
  },
  {
    title: "Technology & Education",
    desc: "Promoting digital inclusion by training Deaf women in tech and education — from digital literacy to professional STEM skills.",
    img: "/assets/images/dwai_picture.jpeg",
    icon: Laptop,
    link: "/programs/technology",
  },
  {
    title: "Advocacy & Awareness",
    desc: "Raising visibility and breaking barriers through storytelling, awareness campaigns, and inclusive policy advocacy.",
    img: "/assets/images/dwai_picture.jpeg",
    icon: Megaphone,
    link: "/programs/advocacy",
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-100"
      aria-labelledby="programs-heading"
    >
      {/* Floating gradient blobs for aesthetics */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          id="programs-heading"
          className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Programs
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Building confidence, leadership, and inclusion through <span className="font-semibold text-purple-700">impactful programs</span> that amplify Deaf women’s voices across Nigeria.
        </motion.p>
      </div>

      {/* Program Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((program, i) => {
          const Icon = program.icon;
          return (
            <motion.div
              key={i}
              className="group relative bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg overflow-hidden focus-within:ring-4 focus-within:ring-purple-300 transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image with subtle zoom */}
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={program.img}
                    alt={program.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-3 bg-purple-100 rounded-full">
                    <Icon className="w-6 h-6 text-purple-700" />
                  </span>
                  <h3 className="text-2xl font-bold text-purple-800 group-hover:text-pink-600 transition">
                    {program.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {program.desc}
                </p>

                <Link
                  href={program.link}
                  className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-purple-700 transition"
                  aria-label={`Learn more about ${program.title}`}
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Explore All Programs Button */}
      <motion.div
        className="relative z-10 text-center mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/programs"
          className="inline-block bg-gradient-to-r from-pink-600 to-purple-700 text-white px-10 py-3 rounded-full font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink-200 transition-all"
        >
          Explore All Programs
        </Link>
      </motion.div>
    </section>
  );
}
