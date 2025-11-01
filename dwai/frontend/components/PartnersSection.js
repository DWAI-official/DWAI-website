"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "AAD", logo: "/assets/images/AAD.jpeg" },
  { name: "Chanani Hill", logo: "/assets/images/chananhill.jpeg" },
  { name: "DJP", logo: "/assets/images/DJP.png" },
  { name: "DRF", logo: "/assets/images/DRF.png" },
  { name: "DWAN", logo: "/assets/images/DWAN.jpeg" },
  { name: "JONAPWD", logo: "/assets/images/JONAPWD.png" },
  { name: "FMHSW", logo: "/assets/images/Ministry.jpeg" },
  { name: "NNAD", logo: "/assets/images/NNAD.jpeg" },
  { name: "MSI", logo: "/assets/images/MSI.png" },
  { name: "MFA", logo: "/assets/images/MFA.png" },
  { name: "UNFPA", logo: "/assets/images/UNFPA.jpeg" },
  { name: "HIVOS", logo: "/assets/images/HIVOS.png" },
  { name: "Education as a Vaccine", logo: "/assets/images/EV.png" },
];

export default function PartnersSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 overflow-hidden">
      {/* Floating background accents */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>

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

        {/* Infinite Scrolling Partner Logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-10 animate-scroll-x whitespace-nowrap"
            aria-label="Scrolling list of partner logos"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center w-44 shrink-0 text-center cursor-pointer transition-transform duration-300"
              >
                <div className="relative h-20 w-36 mb-3 drop-shadow-md rounded-md overflow-hidden bg-white p-2">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-gray-800 font-medium">{partner.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient edges for visual comfort */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </section>
  );
}
