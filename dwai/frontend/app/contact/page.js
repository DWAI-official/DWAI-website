"use client";

import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";

import { MdFacebook } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Deaf Women Aloud Initiative (DWAI)</title>
        <meta
          name="description"
          content="Reach out to Deaf Women Aloud Initiative (DWAI) for partnerships, advocacy, inclusion, and support for Deaf women and girls in Nigeria."
        />
      </Head>

      <main className="overflow-hidden bg-[#faf8ff]">

        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <section className="relative overflow-hidden pt-36 pb-24 bg-[#12071f]">

          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/dwai_picture1.jpg"
              alt="DWAI Team"
              fill
              priority
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12071f] via-[#1e0f33]/90 to-[#12071f]" />
          </div>

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-purple-300 mb-6">
                  <span className="w-8 h-[1px] bg-purple-300"></span>
                  Get In Touch
                </span>

                <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                  Let’s Build a
                  <span className="block italic text-pink-300">
                    More Inclusive Future
                  </span>
                </h1>

                <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Whether you're a Deaf woman seeking support, a partner who
                  believes in accessibility, or an organisation passionate about
                  inclusion — we would love to connect with you.
                </p>

                {/* Contact Cards */}
                <div className="mt-10 grid sm:grid-cols-2 gap-5">

                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                    <MapPin className="w-6 h-6 text-pink-300 mb-3" />
                    <h3 className="text-white font-semibold mb-1">
                      Office Address
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      P&D Plaza, Beside Best Buyer Supermarket,
                      Kuje, Abuja-FCT
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5">
                    <Mail className="w-6 h-6 text-pink-300 mb-3" />
                    <h3 className="text-white font-semibold mb-1">
                      Email Address
                    </h3>
                    <a
                      href="mailto:deafwomenaloudinitiative@gmail.com"
                      className="text-sm text-purple-200 hover:text-white transition"
                    >
                      deafwomenaloudinitiative@gmail.com
                    </a>
                  </div>

                </div>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/assets/images/dwai_picture1.jpg"
                    alt="DWAI Team"
                    width={800}
                    height={700}
                    className="w-full h-[550px] object-cover"
                  />
                </div>

                {/* Floating Badge */}
                {/* <div className="absolute -bottom-6 -left-6 bg-white shadow-2xl rounded-2xl px-6 py-5 max-w-xs">
                  <p className="text-sm text-gray-600">
                    Together, we amplify the voices of Deaf women and girls
                    across Nigeria through advocacy, accessibility, and empowerment.
                  </p>
                </div> */}
              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            CONTACT FORM SECTION
        ========================================================= */}
        <section className="relative py-28">

          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-[2rem] border border-purple-100 shadow-[0_10px_60px_rgba(91,45,142,0.08)] p-8 md:p-12"
              >

                <span className="text-sm uppercase tracking-[0.2em] text-purple-600 font-semibold">
                  Send a Message
                </span>

                <h2 className="text-4xl font-black text-[#1d102f] mt-4 mb-4">
                  We’d Love to Hear From You
                </h2>

                <p className="text-gray-600 leading-relaxed mb-10">
                  Fill in the form below and a member of our team
                  will get back to you shortly.
                </p>

                <form
                  action="https://formspree.io/f/xnqkyjzy"
                  method="POST"
                  className="space-y-6"
                >

                  {/* ROW */}
                  <div className="grid md:grid-cols-2 gap-5">

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full border text-black border-gray-200 bg-[#faf8ff] rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 bg-[#faf8ff] rounded-xl text-black px-5 py-4 outline-none focus:border-purple-600 transition"
                      />
                    </div>

                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="What is this about?"
                      className="w-full border border-gray-200 bg-[#faf8ff] rounded-xl text-black px-5 py-4 outline-none focus:border-purple-600 transition"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] font-semibold text-gray-500 mb-3">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={6}
                      required
                      placeholder="Write your message..."
                      className="w-full border border-gray-200 text-black bg-[#faf8ff] rounded-xl px-5 py-4 outline-none focus:border-purple-600 transition resize-none"
                    />
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    type="submit"
                    className="inline-flex items-center gap-3 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-all"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>

                </form>
              </motion.div>

              {/* CONTACT INFO */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <span className="text-sm uppercase tracking-[0.2em] text-purple-600 font-semibold">
                  Contact Information
                </span>

                <h2 className="text-4xl font-black text-[#1d102f] mt-4 mb-5">
                  Reach Out Anytime
                </h2>

                <p className="text-gray-600 leading-relaxed mb-10">
                  We are always ready to connect with Deaf women,
                  allies, volunteers, and organisations who believe
                  in accessibility and equality.
                </p>

                {/* INFO CARDS */}
                <div className="space-y-6">

                  {/* PHONE */}
                  <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-700 flex items-center justify-center text-white">
                        <Phone className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#1d102f] mb-2">
                          Phone Numbers
                        </h3>

                        <p className="text-gray-600 text-sm leading-7">
                          +234 803 750 0671 <br />
                          +234 818 505 6488 <br />
                          +234 811 422 9969
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* WHATSAPP */}
                  <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition">

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white">
                        <FaWhatsapp className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-[#1d102f] mb-2">
                          WhatsApp Support
                        </h3>

                        <a
                          href="https://wa.me/2348037500671"
                          target="_blank"
                          className="text-green-700 hover:underline text-sm"
                        >
                          Chat with DWAI on WhatsApp
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

                {/* SOCIALS */}
                <div className="mt-10">
                  <h3 className="font-bold text-[#1d102f] mb-5">
                    Follow DWAI
                  </h3>

                  <div className="flex items-center gap-4">

                    <a
                      href="https://www.facebook.com/share/18s37jbQ2H/"
                      target="_blank"
                      className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-sm hover:bg-purple-700 hover:text-white transition flex items-center justify-center text-2xl text-purple-700"
                    >
                      <MdFacebook />
                    </a>

                    <a
                      href="https://www.instagram.com/dwainigeria"
                      target="_blank"
                      className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-sm hover:bg-purple-700 hover:text-white transition flex items-center justify-center text-2xl text-purple-700"
                    >
                      <CiInstagram />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/deaf-women-aloud-initiative-2781132b2"
                      target="_blank"
                      className="w-14 h-14 rounded-2xl bg-white border border-purple-100 shadow-sm hover:bg-purple-700 hover:text-white transition flex items-center justify-center text-2xl text-purple-700"
                    >
                      <CiLinkedin />
                    </a>

                  </div>
                </div>

                {/* MAP */}
                <div className="mt-12 rounded-[2rem] overflow-hidden border border-purple-100 shadow-xl h-[350px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.5976510443216!2d7.224908375017637!3d8.887258291168452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e6361a9957367%3A0x2649b16581f18635!2sDeaf%20Women%20Aloud%20Initiative!5e0!3m2!1sen!2sng!4v1708428452044!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DWAI Office Location"
                  />
                </div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* =========================================================
            CTA SECTION
        ========================================================= */}
        {/* <section className="relative overflow-hidden py-24 bg-[#1a0d2b] text-white text-center">

          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">

            <motion.h3
              className="text-4xl md:text-5xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Together, We Rise
            </motion.h3>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Every message, every connection, and every collaboration
              helps us build a more inclusive future for Deaf women and girls in Nigeria.
            </motion.p>

            <motion.a
              href="/donate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 bg-white text-purple-900 font-bold px-8 py-4 rounded-full hover:bg-pink-200 transition"
            >
              Support DWAI
              <ArrowRight className="w-5 h-5" />
            </motion.a>

          </div>
        </section> */}

      </main>
    </>
  );
}