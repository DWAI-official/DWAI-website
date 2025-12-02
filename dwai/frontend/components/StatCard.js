// import React from 'react'

// function StatCard({ label, value = 0, suffix = "" }) {
//   const [current, setCurrent] = useState(0);

//   function easeOutCubic(t) {
//   return 1 - Math.pow(1 - t, 3);
// }

//   useEffect(() => {
//     let raf;
//     let start;
//     const duration = 900;
//     const startVal = 0;
//     const endVal = value;
//     const step = (timestamp) => {
//       if (!start) start = timestamp;
//       const progress = Math.min((timestamp - start) / duration, 1);
//       const eased = easeOutCubic(progress);
//       setCurrent(Math.round(eased * (endVal - startVal) + startVal));
//       if (progress < 1) raf = requestAnimationFrame(step);
//     };
//     raf = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(raf);
//   }, [value]);

//   return (
//     <motion.div
//       className="bg-white rounded-xl p-6 text-center shadow-sm"
//       initial={{ opacity: 0, y: 10 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <div className="text-3xl font-extrabold text-purple-800" aria-hidden>
//         {current}
//         {suffix}
//       </div>
//       <div className="mt-2 text-gray-700 text-sm">{label}</div>
//     </motion.div>
//   );
// }
// export default StatCard