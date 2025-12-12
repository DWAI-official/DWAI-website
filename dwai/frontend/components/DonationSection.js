"use client";

// import { useState } from "react";
import { motion } from "framer-motion";

export default function DonationSection() {
//   const donationTiers = [
//     "₦1,000 – Support a workshop participant",
//     "₦5,000 – Fund educational resources",
//     "₦10,000 – Sponsor community outreach",
//     "₦25,000 – Empower leadership programs",
//   ];

//   const [selectedTier, setSelectedTier] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-purple-900 to-pink-700 text-white py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/images/pattern-bg.svg')] opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Support DWAI 
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your contribution helps Deaf women and girls access to Sexual Reproductive Human Rights.
        </motion.p>

        {/* Donation Tiers Grid */}
        <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-10">
            Why SRHR Donations Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-purple-400 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2">Accessible Education</h3>
              <p className="text-gray-700">
                Help Deaf women and girls access SRHR education in sign language and inclusive formats.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-400 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2">Health & Well-being</h3>
              <p className="text-gray-700">
                Support SRHR services, reproductive healthcare, and psychosocial support tailored to Deaf women.
              </p>
            </motion.div>

            <motion.div
              className="bg-purple-400 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl mb-2">Advocacy & Leadership</h3>
              <p className="text-gray-700">
                Fund national and local initiatives empowering Deaf women to advocate for their SRHR rights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-lg mb-4">To donate, reach out to us via email:</p>
          <a
            href="mailto:deafwomenaloudinitiative@gmail.com"
            className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg"
          >
            Contact DWAI
          </a>
        </motion.div>
      </div>
    </section>
  );
}
