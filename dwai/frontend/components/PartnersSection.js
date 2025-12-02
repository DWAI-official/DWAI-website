"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getPartners, getStrapiMedia } from "../lib/strapi";

export default function PartnersSection() {
  const [partners, setPartners] = useState([]);
  const [flatImages, setFlatImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPartners();
      setPartners(data);

      // Flatten image arrays (same logic as Gallery)
      const flatten = data.flatMap((item) =>
        item.logo?.map((img) => ({
          url: getStrapiMedia(img.url),
          alt: img.alt || item.name || "Partner Logo",
        })) || []
      );

      setFlatImages(flatten);
    }

    fetchData();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
        >
          Our Trusted <span className="text-purple-700">Partners</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
        >
          We proudly collaborate with organizations committed to Deaf empowerment,
          accessibility, and inclusive innovation.
        </motion.p>

        {/* Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 animate-scroll-x whitespace-nowrap"
            aria-label="Scrolling partner logos"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {partners.flatMap((partner) =>
              partner.logo?.map((img) => {
                const imageUrl = getStrapiMedia(img.url);

                return (
                  <motion.div
                    key={img.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center w-44 shrink-0 text-center cursor-pointer"
                  >
                    {/* Logo Box */}
                    <div className="relative h-20 w-36 mb-3 shadow-md rounded-md overflow-hidden bg-white p-2">
                      <Image
                        src={imageUrl}
                        alt={img.alt || partner.name}
                        fill
                        className="object-contain transition-transform duration-500 hover:scale-105"
                        unoptimized
                      />
                    </div>

                    {/* Partner Name */}
                    <p className="text-sm text-gray-900 font-semibold">
                      {partner.name}
                    </p>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
