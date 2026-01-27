"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// Helper to extract YouTube ID
const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Helper to get Embed URL
const getEmbedUrl = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
};


export default function PremiumGallery({ data }) {
  const { heading, subheading, items = [] } = data || {};
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  // Map Sanity images to component format
  const galleryData = items.map(img => ({
    type: img._type || "image",
    src: img.url,
    alt: img.alt || img.caption || "Gallery Media",
    caption: img.caption || img.alt
  }));

  if (galleryData.length === 0) {
    return null;
  }

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.type === filter);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {heading || "DWAI Gallery"}
        </motion.h2>
        <p className="text-gray-600 text-lg">
          {subheading || "Stories of empowerment, advocacy, and digital inclusion."}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        {["all", "image", "video"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === type
                ? "bg-purple-800 text-white"
                : "bg-white text-purple-800 border border-purple-200"
            }`}
          >
            {type === "all" ? "All" : type === "image" ? "Images" : "Videos"}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.slice(0,6).map((item, index) => {
          // Generate thumbnail for videos
          const videoId = item.type === "video" ? getYouTubeId(item.src) : null;
          const videoThumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

          return (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setSelectedIndex(index)}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt || "Gallery Image"}
                  width={500}
                  height={350}
                  className="object-cover w-full h-64 group-hover:scale-110 transition"
                />
              ) : (
                <div className="relative w-full h-64 bg-black">
                  {videoThumbnail ? (
                    <Image src={videoThumbnail} alt={item.alt} width={500} height={350} className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition duration-500" />
                  ) : (
                    <div className="w-full h-full bg-gray-900" />
                  )}
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                    <Play className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              {filteredData[selectedIndex].type === "image" ? (
                <Image
                  src={filteredData[selectedIndex].src}
                  alt={filteredData[selectedIndex].alt || "Gallery Image"}
                  width={1000}
                  height={700}
                  className="w-full max-h-[80vh] object-contain rounded-xl"
                />
              ) : (
                <iframe
                  src={getEmbedUrl(filteredData[selectedIndex].src)}
                  className="w-full h-[70vh] rounded-xl"
                  allowFullScreen
                />
              )}

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 bg-white text-black w-9 h-9 rounded-full flex items-center justify-center"
              >
                <X />
              </button>

              {/* Navigation */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + filteredData.length) %
                      filteredData.length
                  )
                }
                className="absolute left-4 top-1/2 bg-black/50 text-white p-3 rounded-full"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % filteredData.length)
                }
                className="absolute right-4 top-1/2 bg-black/50 text-white p-3 rounded-full"
              >
                <ChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
