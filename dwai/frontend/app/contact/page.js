"use client"
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import {MdFacebook} from "react-icons/md"
import {CiInstagram} from "react-icons/ci"
import {CiLinkedin} from "react-icons/ci"
import {FaWhatsapp} from "react-icons/fa"
import {MdCall} from "react-icons/md"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Deaf Women Aloud Initiative (DWAI)</title>
        <meta
          name="description"
          content="Reach out to Deaf Women Aloud Initiative (DWAI) — we’d love to hear from you about partnerships, advocacy, or supporting Deaf women empowerment."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-800 to-pink-700 text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/dwai_picture.jpeg')] bg-cover bg-center opacity-20"></div>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch </h1>
          <p className="text-lg text-gray-100 leading-relaxed">
            Whether you’re a Deaf woman seeking support, a partner who believes in inclusion,
            or someone inspired by our mission — we’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-4 bg-gray-50 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white shadow-lg rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-6">
              Send Us a Message
            </h2>

            <form
              action="https://formspree.io/f/xnqkyjzy" // Replace with your Formspree or backend endpoint
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="bg-purple-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 focus-visible:ring-2 focus-visible:ring-purple-400 focus:outline-none transition"
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We’re always ready to connect with Deaf women, allies, and
              organizations who share our vision for inclusion, empowerment, and equality.
            </p>

            <div>
                      <h4 className="font-semibold text-white mb-3">Contact</h4>
                      <p className="text-sm">B5, Suite U04 & U04, P&D Plaza Beside Best Buyer Supermarket, Kuje, Abuja-FCT</p>
                      <p className="text-sm mt-1">Email: deafwomenaloudinitiatives@gmail.com</p>
                      <div></div>
                      <div className="flex mt-4 space-x-4">
                        <FaWhatsapp className="mt-1 inline-block" /> <span className="ml-2"> +234 8037500671</span> | <span className="ml-2">+234 8185056488</span> 
                      </div>
                      <div className="flex mt-4 space-x-4">
                        <MdCall className="mt-1 inline-block" /> <span className="ml-2"> +234 8114229969</span>
                      </div>
                      <div className="flex mt-4 space-x-4">
                        <a href="https://facebook.com/dwai" aria-label="DWAI Facebook" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
                          <MdFacebook />
                        </a>
                        <a href="https://instagram.com/dwai" aria-label="DWAI Instagram" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
                          <CiInstagram />
                        </a>
                        <a href="https://linkedin.com/company/dwai" aria-label="DWAI LinkedIn" className="hover:text-purple-400 focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full p-1">
                          <CiLinkedin />
                        </a>
                      </div>
                    </div>
            {/* Map Placeholder */}
            <div className="mt-6 w-full h-64 bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.02213037059!2d7.4956!3d9.0578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd0ee7e2a9c07%3A0x8e0e68209de4d18b!2sAbuja!5e0!3m2!1sen!2sng!4v1688567420000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DWAI Office Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-900 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-3">Together, We Rise 💜</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Every message, every connection, every idea — helps us build a more inclusive future
          for Deaf women and girls in Nigeria.
        </p>
        <a
          href="/donate"
          className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
        >
          Support DWAI
        </a>
      </section>
    </>
  );
}
