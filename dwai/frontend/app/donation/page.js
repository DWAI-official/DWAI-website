"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Donate() {
  const donationTiers = [
    "₦2,000 – Provide accessible SRHR materials",
    "₦5,000 – Sponsor sign language training on SRHR",
    "₦10,000 – Fund a community SRHR workshop",
    "₦25,000 – Support national advocacy for Deaf women's SRHR",
  ];

  const [selectedTier, setSelectedTier] = useState(null);

  return (
    <>
      <Head>
        <title>Donate | DWAI - Sexual & Reproductive Health Rights</title>
        <meta
          name="description"
          content="Support DWAI in advancing Sexual and Reproductive Health Rights (SRHR) for Deaf women and girls in Nigeria. Every contribution empowers dignity, safety, and inclusion."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-pink-700 text-white py-28 px-6 text-center overflow-hidden">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Support SRHR Empowerment
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Your donation ensures Deaf women and girls have access to safe, informed, and inclusive sexual and reproductive health education and services.
        </motion.p>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">
            How You Can Make an Impact
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-3xl shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl ${
                  selectedTier === index ? "ring-4 ring-purple-300" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedTier(index)}
              >
                <h3 className="text-xl font-bold text-purple-800 mb-2">{tier}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Click to contact DWAI and learn how to donate securely via email.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg text-gray-700 mb-6">
              To donate, reach out via email:
            </p>
            <a
              href="mailto:deafwomenaloudinitiatives@gmail.com"
              className="inline-block bg-gradient-to-r from-purple-700 to-pink-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Contact DWAI
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Your Support Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-10">
            Why SRHR Donations Matter
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-purple-50 p-6 rounded-2xl shadow-md"
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
              className="bg-purple-50 p-6 rounded-2xl shadow-md"
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
              className="bg-purple-50 p-6 rounded-2xl shadow-md"
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

      {/* Impact Statement */}
      <section className="bg-gradient-to-r from-purple-800 to-pink-700 text-white py-16 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Together, We Amplify Voices 💜</h3>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Your support ensures that Deaf women and girls can access the knowledge, resources, and community they deserve for their sexual and reproductive health and empowerment.
        </p>
        <a
          href="mailto:deafwomenaloudinitiatives@gmail.com"
          className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
        >
          Contact DWAI to Donate
        </a>
      </section>
    </>
  );
}
