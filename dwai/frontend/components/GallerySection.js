"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GallerySection() {
  const images = [
    "/assets/images/dwai_picture.jpeg",
    "/assets/images/dwai_picture.jpeg",
    "/assets/images/dwai_picture.jpeg",
    "/assets/images/dwai_picture.jpeg",
    "/assets/images/dwai_picture.jpeg",
    "/assets/images/dwai_picture.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // Navigate to next / previous image
  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };
  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative background */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/images/pattern-bg.svg')] opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />

      {/* Section Header */}
      <div className="relative text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-2 mb-3">
            <Camera className="text-pink-600 w-8 h-8" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-purple-800">
              Gallery
            </h2>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Capturing powerful moments of unity, inclusion, and Deaf empowerment.
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl group focus-within:ring-4 focus-within:ring-pink-300 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open image ${i + 1} in gallery view`}
            onKeyDown={(e) => e.key === "Enter" && setSelectedImage(i)}
          >
            <Image
              src={src}
              alt={`DWAI community event image ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-center text-white">
                <Heart className="mx-auto mb-3 text-pink-400 w-8 h-8 animate-pulse" />
                <p className="font-semibold text-lg">Deaf Women in Action</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[selectedImage]}
                alt={`Enlarged gallery image ${selectedImage + 1}`}
                width={800}
                height={600}
                className="w-full h-auto rounded-xl shadow-lg"
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close gallery view"
                className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80 focus:ring-2 focus:ring-pink-400"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev/Next buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 focus:ring-2 focus:ring-pink-400"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 focus:ring-2 focus:ring-pink-400"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explore Button */}
      <div className="text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/gallery"
            className="inline-block bg-gradient-to-r from-purple-700 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-pink-300 transition-all duration-300"
            aria-label="View the full DWAI gallery"
          >
            View Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
