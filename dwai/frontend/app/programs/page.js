"use client"
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import {fetchStrapiData} from "@/lib/strapi";


export default async function Programs() {
    const programs = await fetchStrapiData("programs");

  console.log("Programs d:", programs);
  const programImageUrl =programs?.programImage?.programs?.attributes?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${programs.programImage.programs.attributes.url}`
      : "/assets/images/outreach_team.jpg";


  const timeline = [
    { year: "2018", title: "DWAI Founded", desc: "Deaf women came together to build a movement for equality, empowerment, and inclusion." },
    { year: "2019", title: "First Advocacy Campaign", desc: "Launched our first campaign promoting access to education for Deaf girls in Nigeria." },
    { year: "2020", title: "Leadership Bootcamp", desc: "Hosted training sessions to build leadership and communication skills for young Deaf women." },
    { year: "2021", title: "Digital Literacy Drive", desc: "Expanded our work into tech inclusion through hands-on training on digital tools and accessibility." },
    { year: "2022", title: "Health & Mental Wellness", desc: "Introduced mental health workshops and community peer support groups." },
    { year: "2023", title: "National Partnerships", desc: "Collaborated with disability organizations to push gender-inclusive policies nationwide." },
    { year: "2024", title: "Global Expansion", desc: "DWAI began reaching Deaf women leaders across Africa through virtual mentorship and digital advocacy." },
    { year: "2025", title: "7 Years of Impact", desc: "Celebrating our journey of resilience, growth, and empowerment with hundreds of Deaf women impacted." },
  ];

  return (
    <>
      <Head>
        <title>Programs | Deaf Women Aloud Initiative (DWAI)</title>
        <meta
          name="description"
          content="Explore DWAI’s programs empowering Deaf women and girls through leadership, digital inclusion, gender equality, and advocacy."
        />
      </Head>

      {/* Hero Section with Video/Photo Banner */}
      <section className="relative h-[85vh] flex items-center justify-center text-white text-center overflow-hidden">
        {/* Video Background (replace with DWAI video if available) */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://videos.pexels.com/video-files/3195395/3195395-uhd_2560_1440_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        {/* Fallback Image */}
        <div className="absolute inset-0 bg-purple-900/60 bg-cover bg-center"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            7 Years of Empowering <span className="text-pink-300">Deaf Women</span> Across Nigeria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg text-gray-100"
          >
            From humble beginnings to national advocacy — DWAI continues to uplift, educate, and
            inspire Deaf women and girls to lead without limits.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-white text-purple-900 font-semibold px-8 py-3 rounded-full hover:bg-pink-200 transition focus-visible:ring-2 focus-visible:ring-white focus:outline-none"
          >
            Get Involved
          </motion.a>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Our Core Programs
          </h2>
          <p className="text-gray-700 text-lg">
            DWAI’s programs are designed to empower Deaf women through education, technology, leadership, and inclusion.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...programs].map((program, index) => (

            // const {Title, slug, description, image} = program.attributes;
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              <Image
                src={programImageUrl}
                alt={program.Title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">
                  {program.Title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {program.Description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7 Years of Impact Timeline */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
            7 Years of Impact
          </h2>

          <div className="relative border-l-4 border-purple-700 ml-6">
            {timeline?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="mb-10 ml-6"
              >
                <div className="absolute -left-3 w-6 h-6 bg-purple-700 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-purple-800">
                  {item.year} — {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-gradient-to-r from-purple-900 to-fuchsia-800 text-white">
        <h3 className="text-3xl font-bold mb-4">Be Part of Our Journey</h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Join DWAI in creating a world where Deaf women and girls live, learn, and lead without barriers.
        </p>
        <a
          href="/contact"
          className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
        >
          Support DWAI
        </a>
      </section>
    </>
  );
}
