// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { getPartners, getStrapiMedia } from "../lib/strapi";

// export default function PartnersSection() {
//   const [partners, setPartners] = useState([]);
//   const [flatImages, setFlatImages] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getPartners();
//       setPartners(data);

//       // Flatten image arrays (same logic as Gallery)
//       const flatten = data.flatMap((item) =>
//         item.logo?.map((img) => ({
//           url: getStrapiMedia(img.url),
//           alt: img.alt || item.name || "Partner Logo",
//         })) || []
//       );

//       setFlatImages(flatten);
//     }

//     fetchData();
//   }, []);

//   return (
//     <section className="relative bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 overflow-hidden">

//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
//         >
//           Our Trusted <span className="text-purple-700">Partners</span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//           className="text-gray-700 max-w-2xl mx-auto mb-12 text-lg leading-relaxed"
//         >
//           We proudly collaborate with organizations committed to Deaf empowerment,
//           accessibility, and inclusive innovation.
//         </motion.p>

//         {/* Scrolling Logos */}
//         <div className="relative w-full overflow-hidden">
//           <motion.div
//             className="flex gap-12 animate-scroll-x whitespace-nowrap"
//             aria-label="Scrolling partner logos"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             {partners.flatMap((partner) =>
//               partner.logo?.map((img) => {
//                 const imageUrl = getStrapiMedia(img.url);

//                 return (
//                   <motion.div
//                     key={img.id}
//                     whileHover={{ scale: 1.05 }}
//                     className="flex flex-col items-center justify-center w-44 shrink-0 text-center cursor-pointer"
//                   >
//                     {/* Logo Box */}
//                     <div className="relative h-20 w-36 mb-3 shadow-md rounded-md overflow-hidden bg-white p-2">
//                       <Image
//                         src={imageUrl}
//                         alt={img.alt || partner.name}
//                         fill
//                         className="object-contain transition-transform duration-500 hover:scale-105"
//                         unoptimized
//                       />
//                     </div>

//                     {/* Partner Name */}
//                     <p className="text-sm text-gray-900 font-semibold">
//                       {partner.name}
//                     </p>
//                   </motion.div>
//                 );
//               })
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// SAMPLE STATIC DATA — replace with Strapi later
const SAMPLE_PARTNERS = [
  {
    id: 1,
    name: "Disabiliy Rights Fund (DRF)",
    logos: ["/assets/partners/DRF.png"],
  },
  {
    id: 2,
    name: "AID Foundation",
    logos: ["/assets/partners/AID.jpg"],
  },
  {
    id: 3,
    name: "HIVOS",
    logos: ["/assets/partners/HIVOS.png"],
  },
  {
    id: 4,
    name: "Education as a Vaccine (EVA)",
    logos: ["/assets/partners/EV.png"],
  },
  {
    id: 5,
    name: "Ministry of Health Nigeria (FMoH)",
    logos: ["/assets/partners/Ministry.jpeg"],
  },
  {
    id: 6,
    name: "US Embassy",
    logos: ["/assets/partners/US.png"],
  },

];

export default function PartnersSection() {
  const [partners, setPartners] = useState(SAMPLE_PARTNERS);

  // Create two rows for parallax scrolling
  const row1 = partners.slice(0, Math.ceil(partners.length / 2));
  const row2 = partners.slice(Math.ceil(partners.length / 2));

  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-gray-900 dark:to-gray-800 overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-72 h-52 bg-purple-300/30  blur-3xl rounded-full -top-16 -left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-pink-300/20  blur-3xl rounded-full bottom-0 right-0 animate-ping"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-500"
        >
          Our Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-purple-200 text-lg mt-4"
        >
          Together we advance Deaf empowerment, accessibility, and gender inclusion.
        </motion.p>
      </div>

      {/* Parallax Logo Rows */}
      <div className="mt-16 flex justify-center items-center flex-col space-y-10 relative z-10">

        {/* Row 1 — Scroll Right */}
        <motion.div
          className="flex gap-14 whitespace-nowrap animate-marquee"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {row1.map((partner) =>
            partner.logos.map((logo, idx) => (
              <LogoCard key={`${partner.id}-${idx}`} name={partner.name} src={logo} />
            ))
          )}
        </motion.div>

        {/* Row 2 — Scroll Left (Opposite Direction) */}
        <motion.div
          className="flex gap-14 whitespace-nowrap animate-marquee-reverse"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {row2.map((partner) =>
            partner.logos.map((logo, idx) => (
              <LogoCard key={`${partner.id}-${idx}`} name={partner.name} src={logo} />
            ))
          )}
        </motion.div>

      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

/* Partner Logo Card Component */
function LogoCard({ src, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center w-40 shrink-0"
    >
      <div className="
        relative h-24 w-40 p-3 rounded-xl shadow-xl
        bg-purple-700/40 dark:bg-gray-900/40
        backdrop-blur-xl border border-white/30
        hover:shadow-purple-300/40 dark:hover:shadow-purple-900/40
        hover:ring-2 ring-purple-500 transition-all
      ">
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <p className="mt-3 text-sm font-semibold text-purple-300  text-center">
        {name}
      </p>
    </motion.div>
  );
}
