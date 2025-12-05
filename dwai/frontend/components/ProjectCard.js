// "use client"; // Client component

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { HeartHandshake, Laptop, Megaphone, Sparkles } from "lucide-react";
// import { useEffect, useState } from "react";
// import { getPrograms } from "@/lib/strapi";

// // Helper to handle Strapi image URLs
// const getStrapiMedia = (url) => {
//   if (!url) return "/assets/images/placeholder.jpg";
//   return url.startsWith("http") ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
// };

// export default function ProjectCard() {
//   const [programs, setPrograms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchPrograms() {
//       const data = await getPrograms();
//       setPrograms(data);
//       setLoading(false);
//     }
//     fetchPrograms();
//   }, []);

//   const icons = [Sparkles, HeartHandshake, Laptop, Megaphone];

//   if (loading) return <p className="text-center py-10">Loading programs...</p>;

//   return (
//     <section
//       className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-100"
//       aria-labelledby="programs-heading"
//     >
//       {/* Floating gradient blobs */}
//       <div className="absolute -top-32 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute -bottom-32 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       {/* Header Section */}
//       <div className="relative z-10 text-center mb-14">
//         <motion.h2
//           id="programs-heading"
//           className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Programs
//         </motion.h2>
//         <motion.p
//           className="text-gray-700 text-lg max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Building confidence, leadership, and inclusion through{" "}
//           <span className="font-semibold text-purple-700">
//             impactful programs
//           </span>{" "}
//           that amplify Deaf women’s voices across Nigeria.
//         </motion.p>
//       </div>

//       {/* Program Cards */}
//       <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {programs.map((pro, i) =>  {
//             const Icon = icons[i % icons.length];
//             const imageUrl = getStrapiMedia(pro.image?.[0]?.url);
//             return (
//               <motion.div
//                 key={pro.id}
//                 className="group relative bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg overflow-hidden focus-within:ring-4 focus-within:ring-purple-300 transition-all hover:shadow-2xl"
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.03 }}
//               >
//                 {/* Image */}
//                 <div className="overflow-hidden">
//                   <motion.div
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4 }}
//                   >
//                     <Image
//                       src={imageUrl}
//                       alt={pro.Title}
//                       width={500}
//                       height={300}
//                       className="w-full h-56 object-cover"
//                     />
//                   </motion.div>
//                 </div>
    
//                 {/* Content */}
//                 <div className="p-6 text-left">
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="p-3 bg-purple-100 rounded-full">
//                       <Icon className="w-6 h-6 text-purple-700" />
//                     </span>
//                     <h3 className="text-xl font-bold text-purple-800 group-hover:text-pink-600 transition line-clamp-2">
//                       {pro.Title}
//                     </h3>
//                   </div>
    
//                   <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
//                     {pro.Description}
//                   </p>
    
//                   <Link
//                     href={`/programs/${pro.slug}`}
//                     className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-purple-700 transition"
//                     aria-label={`Learn more about ${pro.Title}`}
//                   >
//                     Learn More →
//                   </Link>
//                 </div>
//               </motion.div>
//             )
//         }
//         )}
//       </div>

//       {/* Explore All Programs Button */}
//       <motion.div
//         className="relative z-10 text-center mt-16"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3 }}
//       >
//         <Link
//           href="/programs"
//           className="inline-block bg-gradient-to-r from-pink-600 to-purple-700 text-white px-10 py-3 rounded-full font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink-200 transition-all"
//         >
//           Explore All Programs
//         </Link>
//       </motion.div>
//     </section>
//   );
// }
"use client";
import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import {HeartHandshake, Laptop, Megaphone } from "lucide-react";

const programs = [
  {
    title: "Initiative to Enhance Menstrual Health Support at Government Special School, Lafia",
    desc: "From October 21st to 23rd, DWAI, in partnership with ChananHill, conducted a transformative visit to the Government Special School, Lafia, aimed at addressing menstrual health challenges faced by girls with disabilities.",
    img: "/assets/images/DWAI_lafia.jpg",
    icon: HeartHandshake,
    link: "/programs/leadership",
  },
  {
    title: "DWAI celebrate this year’s International Day of the Girl Child under the inspiring theme, “The Girl I Am, The Change I Lead.",
    desc: "The DWAI team proudly supported an inspiring celebration for girls with disabilities.The event brought together Deaf girls from various schools to share stories of strength.It created a safe, empowering space for them to express their experiences and ambitions.They also learned from accomplished women who are leading change in their communities.",
    img: "/assets/images/girl_day.jpg",
    icon: Laptop,
    link: "/programs/technology",
  },
  {
    title: "DWAN partned with NNAD to celebrate the International Week of Deaf People 2025",
    desc: "During the International Week of Deaf People, the Deaf Women Aloud Initiative stood side by side with the Nigeria National Association of the Deaf, stakeholders and the wider Deaf community in a historic rally demanding the official recognition of Nigerian Sign Language (NSL).",
    img: "/assets/images/IDSL.jpg",
    icon: Megaphone,
    link: "/programs/advocacy",
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="relative py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-purple-100"
      aria-labelledby="programs-heading"
    >
      {/* Floating gradient blobs for aesthetics */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-14">
        <motion.h2
          id="programs-heading"
          className="text-4xl md:text-5xl font-extrabold text-purple-500 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Programs
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Building confidence, leadership, and inclusion through <span className="font-semibold text-purple-700">impactful programs</span> that amplify Deaf women’s voices across Nigeria.
        </motion.p>
      </div>

      {/* Program Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((program, i) => {
          // const Icon = program.icon;
          return (
            <motion.div
              key={i}
              className="group relative bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg overflow-hidden focus-within:ring-4 focus-within:ring-purple-300 transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image with subtle zoom */}
              <div className="overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={program.img}
                    alt={program.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-4">
                  {/* <span className="p-3 bg-purple-100 rounded-full">
                    <Icon className="w-6 h-6 text-purple-700" />
                  </span> */}
                  <h3 className="text-2xl font-bold text-purple-800 group-hover:text-pink-600 transition line-clamp-2">
                    {program.title}
                  </h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
                  {program.desc}
                </p>

                {/* <Link
                  href={program.link}
                  className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 focus-visible:ring-2 focus-visible:ring-purple-700 transition"
                  aria-label={`Learn more about ${program.title}`}
                >
                  Learn More →
                </Link> */}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Explore All Programs Button */}
      {/* <motion.div
        className="relative z-10 text-center mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/programs"
          className="inline-block bg-gradient-to-r from-pink-600 to-purple-700 text-white px-10 py-3 rounded-full font-semibold hover:opacity-90 focus-visible:ring-2 focus-visible:ring-pink-200 transition-all"
        >
          Explore All Programs
        </Link>
      </motion.div> */}
    </section>
  );
}