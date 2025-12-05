"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function GalleryClient({ data = [] }) {
  const [selectedMedia, setSelectedMedia] = useState(null);

  // Convert Strapi data → frontend gallery items
  const galleryItems =
    data.flatMap((item) =>
      (item.image || []).map((img) => ({
        type: "image",
        src: img.url,
        alt: img.alt || "Gallery Image",
        caption: item.caption || "",
      }))
    ) || [];

  // Fallback if Strapi is empty
  if (galleryItems.length === 0) {
    galleryItems.push({
      type: "image",
      src: "/assets/images/dwai_picture.jpeg",
      alt: "DWAI Event",
      caption: "DWAI Empowerment Program",
    });
  }

  return (
    <>
      <Head>
        <title>Gallery | Deaf Women Aloud Initiative</title>
        <meta
          name="description"
          content="DWAI gallery showcasing empowerment, outreach, and community transformation."
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-purple-800 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/dwai_picture.jpeg')] bg-cover bg-center opacity-25"></div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">DWAI Gallery</h1>
          <p className="text-lg md:text-xl mt-4">
            A visual journey of impact, advocacy, and empowerment.
          </p>
        </motion.div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-10">
            Moments That Inspire
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer hover:shadow-xl"
                onClick={() => setSelectedMedia(item)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <p className="text-white text-sm font-semibold px-4 text-center">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-black rounded-xl max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-black font-bold"
              >
                ×
              </button>

              <Image
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                width={800}
                height={600}
                className="object-contain w-full max-h-[80vh] rounded-xl"
              />

              <p className="text-gray-200 mt-4 text-center">{selectedMedia.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
