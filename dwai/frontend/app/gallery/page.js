"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Video,
  GalleryHorizontal,
} from "lucide-react";

/* =========================
   SAMPLE GALLERY DATA
   ========================= */
const SAMPLE_GALLERY = [
  {
    type: "image",
    category: "outreach",
    url: "/assets/images/program_1.jpg",
    caption: "Community outreach empowering Deaf women",
  },
    {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_1.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_3.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_4.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_5.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_6.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_7.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_8.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_9.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_10.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_11.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_12.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_13.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_14.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_15.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_16.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_17.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_18.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_19.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_20.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_21.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_22.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_23.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_24.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_25.jpg",
    caption: "Community outreach empowering Deaf women",
  },
    {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_26.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_27.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_28.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_29.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_30.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_31.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_32.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_32.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_33.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_34.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_35.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_36.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/programs/digit_37.jpg",
    caption: "Community outreach empowering Deaf women",
  },


  // {
  //   type: "video",
  //   category: "events",
  //   url: "/assets/videos/dwai_event_highlight.mp4",
  //   caption: "Women’s Leadership Forum – Silent Highlights",
  // },
  {
    type: "image",
    category: "education",
    url: "/assets/images/program_6.jpg",
    caption: "International Day of Sign Language Celebration",
  },
  {
    type: "image",
    category: "events",
    url: "/assets/images/program_7.jpg",
    caption: "Digital Literacy Bootcamp for Deaf Girls",
  },
  // {
  //   type: "video",
  //   category: "advocacy",
  //   url: "/assets/videos/srhr_awareness.mp4",
  //   caption: "SRHR Awareness in Sign Language",
  // },
];

/* =========================
   FILTER BUTTONS
   ========================= */
const FILTERS = [
  { key: "all", label: "All", icon: <GalleryHorizontal /> },
  { key: "image", label: "Photos", icon: <Camera /> },
  { key: "video", label: "Videos", icon: <Video /> },
];

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(8);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const observerRef = useRef(null);

  /* Load sample data */
  useEffect(() => {
    setItems(SAMPLE_GALLERY);
  }, []);

  /* Infinite Scroll */
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((v) => v + 6);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Filter logic */
  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const visibleItems = filtered.slice(0, visibleCount);

  const nextItem = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevItem = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pb-20">

      {/* =========================
         HERO SECTION
         ========================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/dwai_picture1.jpg"
          alt="Deaf women together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-purple-800/60 to-black/70"></div>

        <div className="relative z-10 max-w-3xl text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-pink-300">Stories</span> in Motion
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Visual stories amplifying the voices, resilience, and leadership of
            Deaf women across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* =========================
         FEATURED VIDEO
         ========================= */}
      {/* <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <video
            src="/assets/videos/dwai_feature.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="rounded-3xl shadow-2xl"
          />
          <div>
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Advocacy Through Visibility
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              DWAI uses powerful visual storytelling to promote inclusion,
              dignity, and access to opportunities for Deaf women and girls.
            </p>
          </div>
        </div>
      </section> */}

      {/* =========================
         FILTER BUTTONS
         ========================= */}
      <div className="flex justify-center gap-4 mt-16 px-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition border ${
              filter === f.key
                ? "bg-purple-700 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
            }`}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {/* =========================
         MASONRY GALLERY
         ========================= */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 px-6 md:px-12 max-w-7xl mx-auto mt-14 space-y-6">
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-3xl cursor-pointer 
                       bg-white/70 dark:bg-gray-800/60 
                       backdrop-blur-xl shadow-xl border border-white/30 group"
            onClick={() => setLightboxIndex(filtered.indexOf(item))}
          >
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.caption}
                width={600}
                height={500}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <video
                src={item.url}
                muted
                autoPlay
                loop
                playsInline
                className="w-full object-cover"
              />
            )}

            {/* Category Badge */}
            {/* <div className="absolute top-3 left-3 bg-purple-700/90 text-white text-xs px-3 py-1 rounded-full">
              {item.category.toUpperCase()}
            </div> */}

            {/* Caption Overlay */}
            {/* <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition">
              {item.caption}
            </div> */}

            {/* Video Icon */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Video className="w-12 h-12 text-white drop-shadow-xl" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div ref={observerRef} className="h-20"></div>

      {/* =========================
         LIGHTBOX VIEWER
         ========================= */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="relative max-w-5xl w-full mx-4">
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-14 right-0 bg-white p-2 rounded-full shadow"
              >
                <X />
              </button>

              {filtered[lightboxIndex].type === "image" ? (
                <Image
                  src={filtered[lightboxIndex].url}
                  alt={filtered[lightboxIndex].caption}
                  width={1200}
                  height={900}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              ) : (
                <video
                  src={filtered[lightboxIndex].url}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              )}

              <p className="text-center text-gray-200 mt-4">
                {filtered[lightboxIndex].caption}
              </p>

              <button
                onClick={prevItem}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 rounded-full"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextItem}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 rounded-full"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
