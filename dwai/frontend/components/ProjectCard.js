"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CalendarDays } from "lucide-react";

/* =========================
   RECENT PROGRAM (FEATURED)
   ========================= */
const recentProgram = {
  title: "Digital Rights & Online Safety Training for Deaf Women",
  date: "December 13, 2025",
  desc: "DWAI recently conducted a focused training on Digital Rights and Online Safety, equipping Deaf women with practical knowledge to stay safe, informed, and confident in digital spaces. The session emphasized privacy, cyber safety, and responsible online participation using sign language–accessible facilitation.",
  img: "/assets/images/digit_35.jpg",
};

/* =========================
   OTHER PROGRAMS
   ========================= */
const programs = [
  {
    title:
      "Menstrual Health Support at Government Special School, Lafia",
    desc: "DWAI, in partnership with ChananHill, addressed menstrual health challenges faced by girls with disabilities through education, dignity kits, and safe conversations.",
    img: "/assets/images/DWAI_lafia.jpg",
  },
  {
    title:
      "International Day of the Girl Child – “The Girl I Am, The Change I Lead”",
    desc: "An empowering celebration where Deaf girls shared stories of strength, learned leadership skills, and connected with inspiring women role models.",
    img: "/assets/images/girl_day.jpg",
  },
  {
    title:
      "International Week of Deaf People 2025 – NSL Advocacy Rally",
    desc: "DWAI partnered with NNAD and the Deaf community to advocate for official recognition of Nigerian Sign Language through a historic rally.",
    img: "/assets/images/IDSL.jpg",
  },
];

export default function ProgramsSection() {
  return (
    <section
      className="relative py-28 px-6 md:px-16 overflow-hidden 
                 bg-gradient-to-b from-purple-50 via-white to-purple-100"
      aria-labelledby="programs-heading"
    >
      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-32 left-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      {/* ================= HEADER ================= */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          id="programs-heading"
          className="text-4xl md:text-5xl font-extrabold text-purple-600 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Programs
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From advocacy to education, DWAI designs inclusive programs that
          protect rights, amplify voices, and empower Deaf women and girls
          across Nigeria.
        </motion.p>
      </div>

      {/* ================= RECENT PROGRAM ================= */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mb-24 
                   grid md:grid-cols-2 gap-12 items-center
                   bg-white/70 backdrop-blur-xl rounded-3xl
                   border border-purple-100 shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={recentProgram.img}
            alt={recentProgram.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-pink-600 text-white text-sm px-4 py-1 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Recent Program
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-2 text-purple-700 mb-3">
            <CalendarDays className="w-5 h-5" />
            <span className="text-sm font-medium">{recentProgram.date}</span>
          </div>

          <h3 className="text-3xl font-bold text-purple-800 mb-4">
            {recentProgram.title}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {recentProgram.desc}
          </p>
        </div>
      </motion.div>

      {/* ================= OTHER PROGRAM CARDS ================= */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            className="group bg-white/70 backdrop-blur-md 
                       border border-purple-100 rounded-3xl 
                       shadow-lg overflow-hidden transition-all
                       hover:shadow-2xl hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={program.img}
                alt={program.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-800 mb-3 group-hover:text-pink-600 transition line-clamp-2">
                {program.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                {program.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
