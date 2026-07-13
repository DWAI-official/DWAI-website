"use client";

import { useState } from "react";
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
import LoadMoreButton from "./LoadMoreButton";

/* =========================
   SAMPLE GALLERY DATA (Fallback)
   ========================= */
const SAMPLE_GALLERY = [
  {
    type: "image",
    category: "outreach",
    url: "/assets/images/program_1.jpg",
    caption: "Community outreach empowering Deaf women",
  },
  {
    type: "video",
    category: "advocacy",
    url: "https://www.youtube.com/embed/PUbshF8sh1I",
    caption: "Digital Rights and Safety",
  },
  {
    type: "image",
    category: "education",
    url: "/assets/images/program_6.jpg",
    caption: "International Day of Sign Language Celebration",
  },
  // ... (Keeping a few samples for fallback)
];

/* =========================
   FILTER BUTTONS
   ========================= */
const FILTERS = [
  { key: "all", label: "All", icon: <GalleryHorizontal /> },
  { key: "image", label: "Photos", icon: <Camera /> },
  { key: "video", label: "Videos", icon: <Video /> },
];

export default function GalleryContent({ galleries = [], initialHasMore = false }) {
  // Transform Sanity data to flat items array
  const sanityItems = galleries.flatMap((g) =>
    (g.items || []).map((item) => ({
      type: item._type || "image",
      category: "outreach", // Default category
      url: item.url,
      caption: item.caption || item.alt || g.title,
      publishedAt: item.publishedAt || g.publishedAt,
    }))
  ).sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

  // Use Sanity data if available, otherwise fallback to sample
  const initialItems = sanityItems.length > 0 ? sanityItems : SAMPLE_GALLERY;

  const [items, setItems] = useState(initialItems);
  const [galleryCount, setGalleryCount] = useState(galleries.length);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  /* Filter logic */
  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const loadMore = async () => {
    setIsLoadingMore(true);
    setLoadError("");
    try {
      const response = await fetch(`/api/content?type=galleries&start=${galleryCount}&limit=2`);
      if (!response.ok) throw new Error("Request failed");
      const result = await response.json();
      const newItems = result.items.flatMap((gallery) =>
        (gallery.items || []).map((item) => ({
          type: item._type || "image",
          category: "outreach",
          url: item.url,
          caption: item.caption || item.alt || gallery.title,
          publishedAt: item.publishedAt || gallery.publishedAt,
        })),
      );
      setItems((current) => [...current, ...newItems].sort(
        (a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0),
      ));
      setGalleryCount((count) => count + result.items.length);
      setHasMore(result.hasMore);
    } catch {
      setLoadError("We couldn’t load more stories. Please try again.");
    } finally {
      setIsLoadingMore(false);
    }
  };

  const nextItem = () =>
    setLightboxIndex((i) => (i + 1) % filtered.length);
  const prevItem = () =>
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);

  // Helper to extract YouTube ID
  const getYouTubeId = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") return parsed.pathname.split("/").filter(Boolean)[0] || null;
      if (parsed.hostname.includes("youtube.com")) {
        if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
        const [type, id] = parsed.pathname.split("/").filter(Boolean);
        if (["embed", "shorts", "live"].includes(type)) return id || null;
      }
    } catch {
      return null;
    }
    return null;
  };

  const getYouTubeThumbnail = (url) => {
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
  };

  const getEmbedUrl = (url) => {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
  };

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
          priority
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
         FILTER BUTTONS
         ========================= */}
      <div className="flex justify-center gap-4 mt-16 px-4">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-3 rounded-full flex items-center gap-2 transition border ${
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
        {filtered.map((item, index) => (
          <motion.div
            key={`${item.url}-${index}`}
            role="button"
            tabIndex={0}
            aria-label={`Open ${item.type}: ${item.caption}`}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-3xl cursor-pointer 
                       bg-white/70 dark:bg-gray-800/60 
                       backdrop-blur-xl shadow-xl border border-white/30 group"
            onClick={() => setLightboxIndex(filtered.indexOf(item))}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setLightboxIndex(filtered.indexOf(item));
              }
            }}
          >
            {item.type === "image" ? (
              <Image
                src={item.url}
                alt={item.caption}
                width={600}
                height={500}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : getYouTubeThumbnail(item.url) ? (
              <Image
                src={getYouTubeThumbnail(item.url)}
                alt={item.caption}
                width={600}
                height={500}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="h-64 w-full bg-gradient-to-br from-purple-800 via-fuchsia-800 to-pink-700" aria-hidden="true" />
            )}

            {/* Video Icon */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Video className="w-12 h-12 text-white drop-shadow-xl" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-3 px-6" aria-live="polite">
        {hasMore && <LoadMoreButton onClick={loadMore} loading={isLoadingMore} label="Load more stories" />}
        {loadError && <p className="text-sm font-medium text-red-700" role="alert">{loadError}</p>}
        {!hasMore && galleryCount > galleries.length && <p className="text-sm text-gray-600 dark:text-gray-300">All stories are displayed.</p>}
      </div>

      {/* =========================
         LIGHTBOX VIEWER
         ========================= */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-5xl w-full mx-4">
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-14 right-0 bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
                aria-label="Close media viewer"
              >
                <X className="text-black" />
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
                <iframe
                  src={getEmbedUrl(filtered[lightboxIndex].url)}
                  className="w-full h-[60vh] md:h-[70vh] rounded-xl"
                  allowFullScreen
                  title={filtered[lightboxIndex].caption || "Gallery video"}
                />
              )}

              <p className="text-center text-gray-200 mt-4 text-lg font-medium">
                {filtered[lightboxIndex].caption}
              </p>

              <button
                onClick={prevItem}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 p-3 rounded-full transition"
                aria-label="Previous gallery item"
              >
                <ChevronLeft className="text-white" />
              </button>

              <button
                onClick={nextItem}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/60 p-3 rounded-full transition"
                aria-label="Next gallery item"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
