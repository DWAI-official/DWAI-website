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
//         className="absolute inset-0 bg-[url('/assets/images/pattern-bg.svg')] opacity-5"
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

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * REUSABLE GALLERY COMPONENT
 * Props:
 *   images = [ { url, alt } ]
 */
export default function Gallery({ images = [] }) {
  const [index, setIndex] = useState(null);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative py-16 px-6">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-900/40 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-300/40 blur-3xl rounded-full -z-10"></div>

      {/* Gallery Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            onClick={() => setIndex(i)}
          >
            {/* Soft hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>

            {/* Zoom effect */}
            <Image
              src={img.url}
              alt={img.alt || "gallery"}
              width={600}
              height={500}
              className="w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-110"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Lightbox Container */}
            <motion.div
              className="relative w-full max-w-4xl mx-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIndex(null)}
                className="absolute -top-12 right-0 bg-purple-700 text-white p-2 rounded-full shadow-xl hover:scale-110 transition"
              >
                <X />
              </button>

              {/* Image */}
              <Image
                src={images[index].url}
                alt={images[index].alt}
                width={1000}
                height={800}
                className="rounded-2xl object-contain w-full max-h-[80vh] shadow-2xl"
                unoptimized
              />

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-purple-700/70 backdrop-blur-xl p-3 rounded-full shadow  hover:bg-white text-purple-700 transition"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-700/70 backdrop-blur-xl p-3 rounded-full shadow hover:text-purple-700 hover:bg-white transition"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
