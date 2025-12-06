// import { getGallery } from "../../lib/strapi";
// import GalleryClient from "../../components/GalleryClient";

// export default async function GalleryPage() {
//   const gallery = await getGallery(); // Fetch from Strapi Cloud

//   return <GalleryClient data={gallery} />;
// }
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

// ⭐ SAMPLE STATIC GALLERY DATA — replace with Strapi later
const SAMPLE_GALLERY = [
  {
    type: "image",
    category: "image",
    url: "/assets/images/program_1.jpg",
    caption: "DWAI Outreach Program – Empowering Deaf Women",
  },
  {
    type: "image",
    category: "image",
    url: "/assets/images/program_2.jpg",
    caption: "DWAI Outreach Program – Empowering Deaf Women",
  },
    {
    type: "image",
    category: "image",
    url: "/assets/images/program_3.jpg",
    caption: "DWAI Outreach Program – Empowering Deaf Women",
  },
    {
    type: "image",
    category: "image",
    url: "/assets/images/program_4.jpg",
    caption: "DWAI Outreach Program – Empowering Deaf Women",
  },
    {
    type: "image",
    category: "image",
    url: "/assets/images/program_5.jpg",
    caption: "DWAI Outreach Program – Empowering Deaf Women",
  },
    {
    type: "image",
    category: "image",
    url: "/assets/images/program_6.jpg",
    caption: "DWAI Celebrates International Day of Sign Language 2025",
  },
  {
    type: "image",
    category: "events",
    url: "/assets/images/program_7.jpg",
    caption: "Women's Leadership Forum 2024",
  },
    {
    type: "image",
    category: "events",
    url: "/assets/images/program_8.jpg",
    caption: "Women's Leadership Forum 2024",
  },

    {
    type: "image",
    category: "events",
    url: "/assets/images/program_9.jpg",
    caption: "Women's Leadership Forum 2024",
  },

    {
    type: "image",
    category: "events",
    url: "/assets/images/program_10.jpg",
    caption: "Women's Leadership Forum 2024",
  },

    {
    type: "image",
    category: "events",
    url: "/assets/images/program_11.jpg",
    caption: "Women's Leadership Forum 2024",
  },
  //   {
  //   type: "image",
  //   category: "events",
  //   url: "/assets/images/program_12.jpg",
  //   caption: "Women's Leadership Forum 2024",
  // },

  // {
  //   type: "video",
  //   category: "srhr",
  //   url: "https://web.facebook.com/DeafWomenAloudInitiative/videos/531001716709806/?rdid=DisEjklAOSN7EfrZ#",
  //   caption: "SRHR Video Awareness – Deaf Women Educational Series",
  // },
  {
    type: "image",
    category: "events",
    url: "/assets/images/pad_7.jpg",
    caption: "Digital Literacy Bootcamp for Deaf Girls",
  },
  {
    type: "image",
    category: "outreach",
    url: "/assets/images/outreach_team.jpg",
    caption: "Community Awareness Campaign – Lagos State",
  },
  // {
  //   type: "video",
  //   category: "advocacy",
  //   url: "https://web.facebook.com/share/v/1DQoRoFL4c/",
  //   caption: "International Women's Month Feature",
  // },
];

const FILTERS = [
  { key: "all", label: "All", icon: <GalleryHorizontal /> },
  { key: "image", label: "Photos", icon: <Camera /> },
  // { key: "video", label: "Videos", icon: <Video /> },
  // { key: "outreach", label: "Outreach" },
  // { key: "events", label: "Events" },
  // { key: "advocacy", label: "Advocacy" },
];

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // infinite scroll chunk
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const observerRef = useRef();

  // Load sample data initially
  useEffect(() => {
    setItems(SAMPLE_GALLERY);
  }, []);

  // Infinite scroll
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((c) => c + 6);
        }
      },
      { threshold: 1 }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  const [filter, setFilter] = useState("all");

  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "image" || filter === "video")
      return item.type === filter;
    return item.category === filter;
  });

  const visibleItems = filtered.slice(0, visibleCount);

  const nextItem = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);

  const prevItem = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 pb-20">

      {/* HERO SECTION — PREMIUM GRADIENT */}
      <section className="relative h-[80vh] flex items-center justify-center bg-purple-900 text-white text-center overflow-hidden">
              <Image src="/assets/images/dwai_picture1.jpg" alt="Deaf women together smiling" fill className="object-cover opacity-40" />
              <div className="relative z-10 max-w-3xl px-6">
                <motion.h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                  Gallery <span className="text-pink-300"> Page</span>
                </motion.h1>
                {/* <motion.p className="mt-6 text-lg text-gray-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
                  DWAI ensures no Deaf woman is left behind — through advocacy, education, and inclusion.
                </motion.p> */}
              </div>
            </section>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 px-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 border transition ${
              filter === f.key
                ? "bg-purple-700 text-white shadow-lg scale-105"
                : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {f.icon} {f.label}
          </button>
        ))}
      </div>

      {/* MASONRY GALLERY GRID */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-5 px-6 md:px-12 max-w-7xl mx-auto mt-12 space-y-5">
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group bg-gray-100 dark:bg-gray-800"
            onClick={() => setLightboxIndex(filtered.indexOf(item))}
          >
            {/* Blur Loading Skeleton */}
            <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-2xl"></div>

            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.caption}
                width={600}
                height={500}
                className="rounded-2xl w-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                unoptimized
              />
            ) : (
              <div className="rounded-2xl overflow-hidden w-full relative z-10">
                <video
                  src={item.url}
                  muted
                  className="w-full rounded-2xl"
                  autoPlay
                  loop
                />
              </div>
            )}

            {/* Caption Overlay */}
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 opacity-0 group-hover:opacity-100 text-white text-sm p-2 text-center transition">
              {item.caption}
            </div> */}
          </motion.div>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={observerRef} className="h-16"></div>

      {/* LIGHTBOX VIEWER */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-14 right-0 bg-white/80 text-black p-2 rounded-full shadow-lg hover:bg-white transition"
              >
                <X />
              </button>

              {/* Media Viewer */}
              {filtered[lightboxIndex].type === "image" ? (
                <Image
                  src={filtered[lightboxIndex].url}
                  alt={filtered[lightboxIndex].caption}
                  width={1200}
                  height={900}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
                  unoptimized
                />
              ) : (
                <video
                  src={filtered[lightboxIndex].url}
                  className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
                  controls
                  autoPlay
                />
              )}

              <p className="text-center text-gray-200 mt-4 text-lg">
                {filtered[lightboxIndex].caption}
              </p>

              {/* Navigation */}
              <button
                onClick={prevItem}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 rounded-full hover:bg-white/60"
              >
                <ChevronLeft className="text-black" />
              </button>

              <button
                onClick={nextItem}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 p-3 rounded-full hover:bg-white/60"
              >
                <ChevronRight className="text-black" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
