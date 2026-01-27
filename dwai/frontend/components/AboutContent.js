"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// Sample Mission & Vision
const MISSION = { title: "Our Mission", text: "To empower Deaf Women and girls to access sexual and reproductive health and rights (SRHR) services, for the promotion of an inclusive society.", image: "/assets/images/outreach6.jpg" };
const VISION = { title: "Our Vision", text: "A society where SRHR information and services are accessible to Deaf Women and girls without barriers or exclusion.", image: "/assets/images/outreach7.jpg" };

export default function AboutContent({ team = [] }) {
  return (
    <main className="overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-purple-900 text-white text-center overflow-hidden">
        <Image src="/assets/images/dwai_picture1.jpg" alt="Deaf women together smiling" fill className="object-cover opacity-40" priority />
        <div className="relative z-10 max-w-3xl px-6">
          <motion.h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            About <span className="text-pink-300">Us Page</span>
          </motion.h1>
          <motion.p className="mt-6 text-lg text-gray-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}>
            DWAI ensures no Deaf woman is left behind — through advocacy, education, and inclusion.
          </motion.p>
        </div>
      </section>

      {/* What is DWAI? */}
      <section className="py-20 px-6 md:px-16 bg-pink-200">
        <motion.div className="max-w-5xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-purple-800 mb-6">Who Are We?</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
           Deaf Women Aloud Initiative (DWAI) is a women-led, disability-inclusive organization committed to advancing the rights, visibility, and well-being of deaf women and girls across Nigeria. Founded on the belief that every deaf woman deserves dignity, safety, and equal opportunity, DWAI works to eliminate the barriers that limit the participation of deaf women in social, economic, and civic life.

Across Nigeria, deaf women face distinct challenges, from communication barriers and limited access to education, healthcare, and information, to heightened risks of gender-based violence (GBV), sexual and gender-based violence (SGBV), and exclusion from decision-making spaces. DWAI confronts these issues through advocacy, empowerment, capacity-building, and community-focused interventions.

Our work also places strong emphasis on Sexual and Reproductive Health and Rights (SRHR). We train deaf women and girls on SRHR services, provide accessible information, and advocate for their right to safe, informed, and inclusive healthcare. In addition, we actively combat GBV, SGBV, and related matters, ensuring survivors have access to support, justice pathways, and protection services that respect communication needs and deaf culture.<br></br>

Through our programs, we: <br></br>
•	Promote the rights and protection of deaf women and girls by engaging with policymakers, justice systems, and community stakeholders. <br></br>
•	Strengthen economic, leadership, and life skills, enabling deaf women to participate fully in society and build sustainable livelihoods. <br></br>
•	Raise awareness and train communities on SRHR, GBV, SGBV, and related matters, making crucial information accessible through sign language. <br></br>
•	Ensure safe access to health, legal, and psychosocial services for deaf survivors of violence and discrimination.<br></br>
•	Foster inclusive communities where sign language, accessibility, and respect for deaf culture are fully embraced.<br></br>
•	Create safe and empowering spaces for deaf women to connect, learn, share experiences, and advocate for themselves.<br></br>

community networks, and government agencies to ensure that deaf women and girls are not only included but supported and empowered to lead.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-purple-200 md:px-16 space-y-20">
        {/* Mission */}
        <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-10 items-center">
          <motion.div className="relative h-96 rounded-2xl shadow-xl overflow-hidden" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image src={MISSION.image} alt={MISSION.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold text-purple-800 mb-4">{MISSION.title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{MISSION.text}</p>
          </motion.div>
        </div>

        {/* Vision */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">{VISION.title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{VISION.text}</p>
          </motion.div>
          <motion.div className="relative h-96 rounded-2xl shadow-xl overflow-hidden order-1 md:order-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Image src={VISION.image} alt={VISION.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-pink-200">
        <div className="max-w-7xl mx-auto text-center mb-12 px-4">
          <h2 className="text-4xl font-bold text-purple-800">Meet Our Team</h2>
          <p className="mt-4 text-lg text-gray-700">The dedicated individuals driving DWAI’s mission forward.</p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
          {team.map((member) => (
            <motion.div key={member._id} className="bg-white border-2 border-purple-500 rounded-3xl ounded-3xl shadow-md hover:shadow-xl p-6 text-center" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-purple-800">
                {member.image && <Image src={member.image} alt={member.name} fill className="object-cover" />}
              </div>
              <h3 className="text-xl font-bold text-purple-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote / Testimonial */}
      <section className="bg-purple-800 text-white py-16 px-6 text-center">
        <blockquote className="max-w-3xl mx-auto text-xl italic leading-relaxed flex items-center justify-center gap-3">
          <FaQuoteLeft className="text-pink-300 w-6 h-6" />
          “When Deaf women rise, communities become more inclusive, strong, and innovative.”
        </blockquote>
        <p className="mt-4 text-pink-200 font-semibold">— Deaf Women Aloud Initiative (DWAI)</p>
      </section>
    </main>
  );
}