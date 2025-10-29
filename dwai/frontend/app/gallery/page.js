"use client"
import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      type: "image",
      src: "/assets/images/dwai_picture.jpeg",
      alt: "DWAI tech bootcamp participants smiling together",
      caption: "Tech for Deaf Women Bootcamp 2022 — empowering women in digital literacy.",
    },
    {
      type: "image",
      src: "/assets/images/dwai_picture.jpeg",
      alt: "DWAI leadership forum panel discussion",
      caption: "Digital Inclusion & Leadership Forum 2024 in Abuja.",
    },
    {
      type: "video",
      src: "https://web.facebook.com/share/v/16Qc3MoRs3/",
      caption: " Sexual and Reproductive Health and Rights (SRHR)",
    },
    {
      type: "image",
      src: "/assets/images/dwai_picture.jpeg",
      alt: "Deaf women holding advocacy placards",
      caption: "Advocacy outreach in schools and communities, 2019.",
    },
    {
      type: "image",
      src: "/assets/images/dwai_picture.jpeg",
      alt: "DWAI volunteers distributing COVID awareness materials",
      caption: "COVID-19 Deaf awareness response program 2020.",
    },
    {
      type: "video",
      src: "https://web.facebook.com/share/v/1F9np99Nzf/",
      caption: "Interview with Deaf women leaders sharing their stories of resilience.",
    },
    {
      type: "video",
      src: "https://web.facebook.com/share/v/1A1hct3sx7/",
      caption: "Month of International Women’s Day",
    },
  ];

  return (
    <>
      <Head>
        <title>Gallery | Deaf Women Aloud Initiative (DWAI)</title>
        <meta
          name="description"
          content="A visual journey through DWAI programs — celebrating Deaf women’s empowerment through advocacy, education, and inclusion."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-purple-800 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/dwai_picture.jpeg')] bg-cover bg-center opacity-25"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DWAI Gallery</h1>
          <p className="text-lg md:text-xl">
            A glimpse into our 7-year journey of empowering Deaf women and girls.
          </p>
        </motion.div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-10">Moments that Inspire</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                onClick={() => setSelectedMedia(item)}
                onKeyPress={(e) => e.key === "Enter" && setSelectedMedia(item)}
                tabIndex={0}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="object-cover w-full h-64 group-hover:scale-110 transition duration-500"
                    muted
                    loop
                    autoPlay
                  />
                )}
                <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <p className="text-white font-semibold text-center px-3">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Media viewer"
          >
            <motion.div
              className="relative bg-black rounded-xl max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold focus-visible:ring-2 focus-visible:ring-white focus:outline-none"
                aria-label="Close viewer"
              >
                ×
              </button>

              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  width={700}
                  height={300}
                  className="rounded-xl w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  controls
                  className="rounded-xl w-full max-h-[80vh] object-contain"
                  aria-label="Video player"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <p className="text-center text-gray-100 mt-4">{selectedMedia.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
