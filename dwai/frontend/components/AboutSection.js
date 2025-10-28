"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, VolumeX, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="relative bg-gradient-to-b from-purple-50 via-white to-pink-50 py-24 px-6 md:px-16 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative background blur shapes */}
      <motion.div
        className="absolute top-20 -left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Image with animated overlay */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src="/assets/images/dwai_picture.jpeg"
            alt="Deaf women leadership and empowerment event"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-start p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-1">Deaf Leadership in Action</h3>
              <p className="text-sm opacity-90">Empowering voices through visibility and technology</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="text-pink-600 w-8 h-8 animate-pulse" aria-hidden="true" />
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold text-purple-800"
            >
              Who We Are
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            <strong>Deaf Women Aloud Initiative (DWAI)</strong> is a Deaf-led,
            women-centered NGO amplifying the voices of Deaf women and girls
            across Nigeria. We foster empowerment through{" "}
            <span className="text-purple-700 font-semibold">
              advocacy, mentorship, leadership, and digital literacy.
            </span>{" "}
            Our mission is to inspire Deaf women to rise beyond barriers and
            create lasting social change.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Founded by passionate Deaf women, DWAI builds a world where Deaf
            perspectives are celebrated — a society where every Deaf woman’s
            contribution matters, and her voice (signed or unsaid) is seen,
            valued, and felt.
          </p>

          {/* Quick Stats Icons */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { icon: <Users className="w-6 h-6 text-purple-700" />, label: "Community-Driven" },
              { icon: <VolumeX className="w-6 h-6 text-pink-600" />, label: "Deaf-Led" },
              { icon: <Sparkles className="w-6 h-6 text-yellow-500" />, label: "Impact-Focused" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-md p-4 text-center"
              >
                <div className="flex justify-center mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-800">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-purple-700 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-pink-400 transition-all duration-300"
              aria-label="Learn more about Deaf Women Aloud Initiative"
            >
              Learn More About Us →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
