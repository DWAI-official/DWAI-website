"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
// import { Pause, Play } from "lucide-react";
import {FaPlay, FaPause} from "react-icons/fa";

export default function Hero() {
  const slides = [
    {
      id: 1,
      heading: "Empowering Deaf Women to Lead & Inspire 💜",
      subheading: "Advocacy. Education. Inclusion. DWAI is a movement for equality.",
      bgImage:
        "/assets/images/outreach_team.jpg",
      primaryBtn: { text: "Join Our Mission", href: "/contact" },
      secondaryBtn: { text: "Learn More", href: "/about" },
    },
    {
      id: 2,
      heading: "Building an Inclusive World for Deaf Women",
      subheading:
        "Through mentorship, leadership training, and community advocacy.",
      bgImage:
        "/assets/images/dwai_picture1.jpg",
      primaryBtn: { text: "Explore Programs", href: "/programs" },
      secondaryBtn: { text: "Support Us", href: "/donate" },
    },
    {
      id: 3,
      heading: "Every Deaf Woman’s Voice Matters 💫",
      subheading:
        "We champion digital access and representation across Nigeria and beyond.",
      bgImage:
        "/assets/images/outreach4.jpg",
      primaryBtn: { text: "Get Involved", href: "/contact" },
      secondaryBtn: { text: "View Gallery", href: "/gallery" },
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleManualChange = (index) => {
    setCurrent(index);
    setIsPlaying(false);
  };

  return (
    <section
      role="region"
      aria-label="DWAI Hero Carousel"
      className="relative  w-full h-[90vh] overflow-hidden text-white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src={slides[current].bgImage}
            alt={slides[current].heading}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/70"></div>

          <div className="relative pt-80 z-10 flex flex-col items-center justify-center text-center h-full px-6">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {slides[current].heading}
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {slides[current].subheading}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={slides[current].primaryBtn.href}
                className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
              >
                {slides[current].primaryBtn.text}
              </Link>
              <Link
                href={slides[current].secondaryBtn.href}
                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-800 focus-visible:ring-2 focus-visible:ring-white transition"
              >
                {slides[current].secondaryBtn.text}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Carousel controls */}
      <div className="absolute bottom-6 w-full flex justify-center items-center gap-3 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          className="p-2 rounded-full bg-white/30 hover:bg-white/50 focus-visible:ring-2 focus-visible:ring-white transition"
        >
          {isPlaying ? (
            <FaPause className="text-white w-5 h-5" />
          ) : (
            <FaPlay className="text-white w-5 h-5" />
          )}
        </button>

        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleManualChange(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
