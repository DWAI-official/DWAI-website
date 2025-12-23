"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

const SAMPLE_GALLERY = [
  {
    year: "2019",
    type: "image",
    src: "/assets/images/program_3.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  // {
  //   year: "2020",
  //   type: "video",
  //   src: "/assets/videos/covid-awareness.mp4",
  //   caption: "COVID-19 Deaf Awareness Campaign",
  // },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_1.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  //   {
  //   year: "2019",
  //   type: "image",
  //   src: "/assets/programs/digit_2.jpg",
  //   caption: "Advocacy outreach for Deaf women rights",
  // },
    {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_3.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_4.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_5.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_6.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_7.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_8.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_9.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_10.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_11.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_12.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_13.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_14.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_15.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_16.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_17.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_18.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_19.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_20.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_21.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_22.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_23.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },
  {
    year: "2019",
    type: "image",
    src: "/assets/programs/digit_24.jpg",
    caption: "Advocacy outreach for Deaf women rights",
  },

  {
    year: "2022",
    type: "image",
    src: "/assets/images/program_25.jpg",
    caption: "Tech for Deaf Women Bootcamp",
  },
  // {
  //   year: "2023",
  //   type: "video",
  //   src: "/assets/videos/srhr-training.mp4",
  //   caption: "SRHR Training in Sign Language",
  // },
  {
    year: "2024",
    type: "image",
    src: "/assets/images/program_2.jpg",
    caption: "Digital Rights & Safety Workshop",
  },
];



export default function PremiumGallery({ galleryData = SAMPLE_GALLERY }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState("all");

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
          DWAI Gallery
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Stories of empowerment, advocacy, and digital inclusion.
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
        {filteredData.slice(0,6).map((item, index) => (
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
                <iframe
                  src={item.src}
                  title={item.alt}
                  className="w-full h-full"
                  allowFullScreen
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            )}

            {/* Caption */}
            {/* <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-sm p-3">
              {item.caption}
            </div> */}
          </motion.div>
        ))}
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
                  src={filteredData[selectedIndex].src}
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
