// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// // import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
// import { getGallery, getStrapiMedia } from "../lib/strapi";

// export default function GallerySection() {
//   const [gallery, setGallery] = useState([]);
//   const [flatImages, setFlatImages] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const data = await getGallery();
//       setGallery(data);

//       // Flatten all image arrays for the lightbox
//       const flatten = data.flatMap((item) =>
//         item.image?.map((img) => ({
//           url: getStrapiMedia(img.url),
//           alt: img.alt || item.caption || "Gallery Image",
//         })) || []
//       );

//       setFlatImages(flatten);
//     }

//     fetchData();
//   }, []);

//   const handleNext = () => {
//     if (!flatImages.length) return;
//     setSelectedIndex((i) => (i + 1) % flatImages.length);
//   };

//   const handlePrev = () => {
//     if (!flatImages.length) return;
//     setSelectedIndex((i) => (i - 1 + flatImages.length) % flatImages.length);
//   };

//   return (
//     <section id="#gallery" className="relative bg-gradient-to-b from-purple-50 to-white py-20 px-6 md:px-16 overflow-hidden">

//       {/* Background */}
//       <motion.div
//         className="absolute inset-0 bg-[url('/assets/images/program_1g')] opacity-5"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 0.05 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Header */}
//       <div className="relative text-center mb-14">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="flex justify-center items-center gap-2 mb-3">
//             <Camera className="text-pink-600 w-8 h-8" />
//             <h2 className="text-4xl md:text-5xl font-bold text-purple-800">
//               Gallery
//             </h2>
//           </div>
//           <p className="text-gray-700 text-lg max-w-2xl mx-auto">
//             Capturing powerful moments of unity, inclusion, and Deaf empowerment.
//           </p>
//         </motion.div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
//         {gallery.flatMap((item) =>
//           item.image?.map((img) => {
//             const imageUrl = getStrapiMedia(img.url);
//             const flatIndex = flatImages.findIndex((f) => f.url === imageUrl);

//             return (
//               <motion.div
//                 key={img.id}
//                 className="relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl group cursor-pointer"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//                 onClick={() => setSelectedIndex(flatIndex)}
//               >
//                 <Image
//                   src={imageUrl}
//                   alt={img.alt || item.caption || "Gallery"}
//                   width={400}
//                   height={300}
//                   className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ease-out"
//                   unoptimized
//                 />

//                 {/* Hover Layer */}
//                 <motion.div
//                   className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center"
//                 >
//                   <div className="text-center text-white">
//                     <Heart className="mx-auto mb-3 text-pink-400 w-8 h-8 animate-pulse" />
//                     <p className="font-semibold text-lg">{item.caption}</p>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             );
//           })
//         )}
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {selectedIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative max-w-4xl w-full mx-4"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//             >
//               <Image
//                 src={flatImages[selectedIndex].url}
//                 alt={flatImages[selectedIndex].alt}
//                 width={800}
//                 height={600}
//                 className="w-full h-[600px] rounded-xl shadow-lg object-cover"
//                 unoptimized
//               />

//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedIndex(null)}
//                 className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full hover:bg-black/80"
//               >
//                 <X className="w-5 h-5" />
//               </button>

//               {/* Prev */}
//               <button
//                 onClick={handlePrev}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               {/* Next */}
//               <button
//                 onClick={handleNext}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Explore Button */}
//       <div className="text-center mt-16">
//         {/* <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Link
//             href="/gallery"
//             className="inline-block bg-gradient-to-r from-purple-700 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
//           >
//             View Full Gallery →
//           </Link>
//         </motion.div> */}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState,useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * REUSABLE GALLERY COMPONENT
 * Props:
 *   images = [ { url, alt } ]
 */


const SAMPLE_GALLERY = [
  {
    src: "/assets/images/program_1.jpg",
    alt: "DWAI Bootcamp participants smiling",
    caption: "Tech for Deaf Women Bootcamp 2022",
  },
  {
    src: "/assets/images/program_2.jpg",
    alt: "Leadership forum panel discussion",
    caption: "Digital Inclusion & Leadership Forum 2024",
  },
  {
    src: "/assets/images/program_3.jpg",
    alt: "Deaf women holding advocacy placards",
    caption: "Advocacy outreach 2019",
  },
  {
    src: "/assets/images/program_4.jpg",
    alt: "Volunteers distributing COVID awareness materials",
    caption: "COVID-19 Awareness Program 2020",
  },
  {
    src: "/assets/images/program_5.jpg",
    alt: "Girls celebrating SRHR workshop",
    caption: "SRHR Workshop 2023",
  },
];
export default function Gallery({ galleryData = SAMPLE_GALLERY }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [autoPlay, setAutoPlay] = useState(true);
  
    // Auto-play carousel in lightbox
    useEffect(() => {
      if (autoPlay && selectedIndex !== null) {
        const timer = setInterval(() => {
          setSelectedIndex((prev) => (prev + 1) % galleryData.length);
        }, 4000);
        return () => clearInterval(timer);
      }
    }, [autoPlay, selectedIndex, galleryData.length]);
  
  return (
    <section className="relative py-16 px-6">
      {/* Decorative Gradient Orbs */}
      <div className="absolute w-40 h-40 bg-purple-900/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300/40 blur-3xl rounded-full -z-10"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-purple-500 my-10"
        >
          Our Gallery
        </motion.h2>
      </div>
      {/* Gallery Masonry Grid */}
      <section id="gallery">
              <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Moments that Inspire
                </motion.h2>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {galleryData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500"
                      >
                        {/* <p className="text-white font-semibold text-center px-3">{item.caption}</p> */}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>


      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
          >
            <motion.div
              className="relative max-w-5xl w-full mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={galleryData[selectedIndex].src}
                alt={galleryData[selectedIndex].alt}
                width={900}
                height={600}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
              />

              {/* Caption */}
              {/* <p className="text-white text-center mt-4">{galleryData[selectedIndex].caption}</p> */}

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev */}
              <button
                onClick={() => setSelectedIndex((selectedIndex - 1 + galleryData.length) % galleryData.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next */}
              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % galleryData.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
