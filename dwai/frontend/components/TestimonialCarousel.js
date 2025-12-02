// import React from 'react'

// function TestimonialCarousel({ items = [] }) {
//   const [index, setIndex] = useState(0);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     startAuto();
//     return () => stopAuto();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index]);

//   const startAuto = () => {
//     stopAuto();
//     timerRef.current = setInterval(() => {
//       setIndex((i) => (i + 1) % items.length);
//     }, 5000);
//   };

//   const stopAuto = () => {
//     if (timerRef.current) clearInterval(timerRef.current);
//   };

//   const prev = () => {
//     setIndex((i) => (i - 1 + items.length) % items.length);
//   };
//   const next = () => {
//     setIndex((i) => (i + 1) % items.length);
//   };

  

//   return (
//     <div className="max-w-4xl mx-auto px-6">
//       <div className="relative bg-white rounded-2xl p-8 shadow-lg">
//         <AnimatePresence initial={false}>
//           <motion.blockquote
//             key={items[index]?.id}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.4 }}
//             className="text-gray-800 text-center"
//             aria-live="polite"
//           >
//             <p className="text-lg leading-relaxed">“{items[index]?.quote}”</p>
//             <footer className="mt-4 text-sm font-semibold text-purple-700">{items[index]?.author}</footer>
//           </motion.blockquote>
//         </AnimatePresence>

//         {/* Controls */}
//         <div className="absolute inset-x-0 -bottom-6 flex justify-center gap-4">
//           <button
//             onClick={prev}
//             aria-label="Previous testimonial"
//             className="bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-200"
//           >
//             <FaChevronLeft className="w-4 h-4" />
//           </button>
//           <div className="flex gap-2 items-center">
//             {items.map((it, i) => (
//               <button
//                 key={it.id}
//                 aria-label={`Go to testimonial ${i + 1}`}
//                 onClick={() => setIndex(i)}
//                 className={`w-2 h-2 rounded-full ${i === index ? "bg-purple-700" : "bg-gray-300"}`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={next}
//             aria-label="Next testimonial"
//             className="bg-white rounded-full p-2 shadow focus:outline-none focus:ring-2 focus:ring-purple-200"
//           >
//             <FaChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TestimonialCarousel