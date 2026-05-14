"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const MISSION = {
  title: "Accessible SRHR for Every Deaf Woman",
  text: "To empower Deaf women and girls to access sexual and reproductive health and rights (SRHR) services, for the promotion of an inclusive society — without communication barriers or exclusion.",
  image: "/assets/images/outreach6.jpg",
};

const VISION = {
  title: "A Society Without Barriers or Exclusion",
  text: "A Nigeria where SRHR information and services are fully accessible to Deaf women and girls — where sign language, deaf culture, and equal participation are embraced at every level of society.",
  image: "/assets/images/outreach7.jpg",
};

const VALUES = [
  {
    number: "01",
    title: "Rights & Protection",
    text: "Promoting the rights of Deaf women by engaging policymakers, justice systems, and community stakeholders to ensure legal protection and inclusion.",
  },
  {
    number: "02",
    title: "SRHR Education",
    text: "Raising awareness and training communities on SRHR, GBV, and related matters — making crucial information accessible through Nigerian Sign Language.",
  },
  {
    number: "03",
    title: "Economic Empowerment",
    text: "Strengthening leadership and life skills, enabling Deaf women to participate fully in society and build sustainable livelihoods.",
  },
  {
    number: "04",
    title: "Safe Access to Services",
    text: "Ensuring Deaf survivors of violence have access to health, legal, and psychosocial services that respect communication needs and Deaf culture.",
  },
  {
    number: "05",
    title: "Inclusive Communities",
    text: "Fostering communities where sign language, accessibility, and respect for Deaf culture are fully embraced at every level.",
  },
  {
    number: "06",
    title: "Safe Spaces & Networks",
    text: "Creating empowering spaces for Deaf women to connect, share experiences, and advocate collectively for their rights and well-being.",
  },
];

export default function AboutContent({ team = [] }) {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1A1527] py-32 md:py-40">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-[-30px] top-1/2 -translate-y-1/2 text-[12rem] md:text-[18rem] font-black text-white">
            DWAI
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-purple-700 uppercase tracking-[0.25em] text-xs font-semibold mb-6">
              <span className="w-6 h-[1px] bg-purple-700"></span>
              Who We Are
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-[1.05] mb-8">
              Building a{" "}
              <span className="italic text-purple-700">
                More Inclusive
              </span>
              <br />
              Nigeria for Deaf Women
            </h1>

            <p className="text-white/60 text-lg leading-8 max-w-2xl">
              DWAI confronts the distinct challenges Deaf women face —
              from communication barriers to gender-based violence —
              through advocacy, empowerment, and community-focused action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-start">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="uppercase tracking-[0.2em] text-xs font-semibold text-purple-700 mb-5">
              Our Organisation
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1527] mb-8 leading-tight">
              Who Are We?
            </h2>

            <div className="space-y-6 text-gray-600 leading-8 text-[1.02rem]">
              <p>
                Deaf Women Aloud Initiative (DWAI) is a women-led,
                disability-inclusive organisation committed to advancing
                the rights, visibility, and well-being of Deaf women and
                girls across Nigeria.
              </p>

              <p>
                Deaf women face distinct challenges — communication
                barriers, limited access to education, healthcare,
                information, and heightened risks of gender-based
                violence. DWAI confronts these issues through advocacy,
                empowerment, and community-focused interventions.
              </p>

              <p>
                Our work places strong emphasis on Sexual and
                Reproductive Health and Rights (SRHR). We train Deaf
                women and girls, provide accessible information, and
                advocate for their right to safe, informed, and
                inclusive healthcare.
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/dwai_picture1.jpg"
                alt="Deaf women together"
                width={900}
                height={700}
                className="w-full h-auto object-cover clip-about-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-[#FAF8FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden"
          >
            <Image
              src={MISSION.image}
              alt={MISSION.title}
              width={1000}
              height={700}
              className="w-full h-auto object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="uppercase tracking-[0.2em] text-xs font-semibold text-purple-700 mb-5">
              Our Mission
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1527] mb-8 leading-tight">
              {MISSION.title}
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {MISSION.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="uppercase tracking-[0.2em] text-xs font-semibold text-purple-700 mb-5">
              Our Vision
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1527] mb-8 leading-tight">
              {VISION.title}
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {VISION.text}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden order-1 lg:order-2"
          >
            <Image
              src={VISION.image}
              alt={VISION.title}
              width={1000}
              height={700}
              className="w-full h-auto object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-[#FAF8FC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="mb-16">
            <div className="uppercase tracking-[0.2em] text-xs font-semibold text-purple-700 mb-5">
              What We Do
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1527]">
              Our Areas of Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-10 hover:bg-[#FCFAFF] transition duration-300"
              >
                <div className="text-6xl font-black text-gray-100 mb-6">
                  {value.number}
                </div>

                <h3 className="text-2xl font-bold text-[#1A1527] mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="mb-16">
            <div className="uppercase tracking-[0.2em] text-xs font-semibold text-purple-700 mb-5">
              Our People
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1A1527] mb-4">
              Meet Our Team
            </h2>

            <p className="text-gray-600 text-lg">
              The dedicated individuals driving DWAI's mission forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gray-200">
            {team.map((member, index) => (
              <motion.div
                key={member._id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#FAF8FC] group overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-purple-100">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  )}

                  {/* {index === 0 && (
                    <div className="absolute bottom-0 left-0 right-0 bg-purple-700 text-white text-center py-3 text-[11px] tracking-[0.2em] uppercase font-semibold">
                      Founder & Executive Director
                    </div>
                  )} */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1527] mb-1">
                    {member.name}
                  </h3>

                  <p className="uppercase tracking-[0.15em] text-xs font-semibold text-purple-700">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-purple-700 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <FaQuoteLeft className="mx-auto text-7xl text-white/10 mb-8" />

          <blockquote className="text-white text-3xl md:text-5xl italic leading-relaxed font-light mb-10">
            When Deaf women rise, communities become more inclusive,
            strong, and innovative.
          </blockquote>

          <p className="uppercase tracking-[0.25em] text-sm text-purple-700 font-semibold">
            Deaf Women Aloud Initiative (DWAI)
          </p>
        </div>
      </section>

      {/* CUSTOM STYLE */}
      <style jsx>{`
        .clip-about-image {
          clip-path: polygon(
            0 0,
            calc(100% - 20px) 0,
            100% 20px,
            100% 100%,
            0 100%
          );
        }
      `}</style>
    </main>
  );
}