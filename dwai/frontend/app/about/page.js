"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getTeams, getStrapiMedia } from "../../lib/strapi";
import { FaHandsHelping, FaGraduationCap, FaHeartbeat } from "react-icons/fa";

export default function About() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTeams();

      setTeams(data);
    }

    fetchData();
  }, []);

  const programs = [
    {
      icon: FaHandsHelping,
      title: "Advocacy & Protection",
      description:
        "We engage policymakers, justice systems, and communities to protect the rights of deaf women and girls.",
    },
    {
      icon: FaGraduationCap,
      title: "Leadership & Skills",
      description:
        "Strengthening leadership, economic, and life skills to empower deaf women to thrive in society.",
    },
    {
      icon: FaHeartbeat,
      title: "Health & SRHR",
      description:
        "We educate and provide accessible information on SRHR, GBV, and related matters using sign language.",
    },
  ];


  return (
    <>
      <Head>
        <title>About DWAI | Deaf Women Aloud Initiative</title>
        <meta
          name="description"
          content="Deaf Women Aloud Initiative (DWAI) is a non-government organization founded to amplify the voice of Deaf Women and girls in Nigeria..."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative  h-[50vh] flex items-center justify-center bg-purple-900 text-white text-center overflow-hidden">
        <Image
          src="/assets/images/hellen_2.jpg"
          alt="Deaf women together smiling"
          fill
          className="object-cover opacity-40"
          priority
        />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            About <span className="text-pink-300">DWAI</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            DWAI stands as a voice for equality, accessibility, and empowerment — ensuring no Deaf woman is left behind.
          </p>

        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              <strong>
                Deaf Women Aloud Initiative (DWAI)
                </strong> is a women-led, disability-inclusive organization committed to advancing the rights, visibility, and well-being of deaf women and girls across Nigeria. Founded on the belief that every deaf woman deserves dignity, safety, and equal opportunity, DWAI works to eliminate the barriers that limit the participation of deaf women in social, economic, and civic life.Across Nigeria, deaf women face distinct challenges, from communication barriers and limited access to education, healthcare, and information, to heightened risks of gender-based violence (GBV), sexual and gender-based violence (SGBV), and exclusion from decision-making spaces. DWAI confronts these issues through advocacy, empowerment, capacity-building, and community-focused interventions.Our work also places strong emphasis on Sexual and Reproductive Health and Rights (SRHR). We train deaf women and girls on SRHR services, provide accessible information, and advocate for their right to safe, informed, and inclusive healthcare. In addition, we actively combat GBV, SGBV, and related matters, ensuring survivors have access to support, justice pathways, and protection services that respect communication needs and deaf culture.
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center justify-center h-100  md:h-full rounded-2xl  shadow-2xl">
            <Image
              src="/assets/images/hellen_2.jpg"
              alt="DWAI FOUNDER"
              fill
              className="object-cover hover:scale-105 transition-transform bg-top bg-auto duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
     <section className="py-24 px-6 bg-gradient-to-b from-purple-50 to-pink-50">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h3 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4 tracking-tight">
      Our Mission & Vision
    </h3>
    <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
      What drives DWAI is simple — dignity, safety, and opportunity for every Deaf Woman.
      Our mission and vision reflect the heart of our movement.
    </p>
  </div>

  {/* Vision (Image Right, Text Left) */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="order-2 md:order-1"
    >
      <h4 className="text-3xl font-bold text-purple-800 mb-4">Our Vision</h4>
      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        We envision a Nigeria where Sexual and Reproductive Health and Rights (SRHR)
        are fully accessible to Deaf Women — free of communication barriers,
        discrimination, and stigma. A society where Deaf Women
        are seen, heard, safe, empowered, and included in every space.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2"
    >
      <Image
        src="/assets/images/outreach_team.jpg"
        alt="A Deaf woman expressing confidence, symbolizing hope and a barrier-free future"
        fill
        className="object-cover"
      />
    </motion.div>
  </div>

  {/* Mission (Image Left, Text Right) */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
    >
      <Image
        src="/assets/images/outreach_team.jpg"
        alt="Deaf women supporting one another, symbolizing empowerment and sisterhood"
        fill
        className="object-cover"
      />
    </motion.div>

    {/* Text */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h4 className="text-3xl font-bold text-purple-800 mb-4">Our Mission</h4>
      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        Our mission is to empower Deaf Women and Girls with the knowledge,
        skills, and accessible information they need to safely access SRHR services.
        We create safe spaces, build leadership, amplify voices, and ensure
        that Deaf Women are included where decisions are made.
      </p>
    </motion.div>

  </div>
</section>

<div className=" bg-purple-100 py-10 px-6 text-center">
        <h3 className="text-4xl font-extrabold text-purple-800 mb-12">
          How We Empower Deaf Women
        </h3>
        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-purple-700 mb-4">
                  <Icon className="w-10 h-10 mx-auto" />
                </div>
                <h4 className="text-xl font-semibold text-purple-800 mb-3">{program.title}</h4>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-bold text-purple-800">Meet Our Team</h3>
          <p className="mt-4 text-lg text-gray-700">
            The dedicated individuals driving DWAI’s mission forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {teams?.map((member) =>
            member.image?.map((img) => {
              const imageUrl = getStrapiMedia(img.url);

              return (
                <motion.div
                  key={img.id}
                  className="bg-white rounded-3xl w-80 p-6 shadow-md hover:shadow-xl text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative border-4 border-purple-800 w-40 h-40 rounded-full mx-auto   overflow-hidden ">
                    <Image
                      src={imageUrl}
                      alt={member.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <h3 className="text-xl font-bold text-purple-800">
                    {member?.name}
                  </h3>

                  <p className="text-gray-600">
                    {member?.position}
                  </p>
                </motion.div>
              );
            })
          )}
        </div>
      </section>

      {/* Quote */}
      {/* <section className="bg-purple-800 text-white py-16 px-6 text-center">
        <blockquote className="max-w-3xl mx-auto text-xl italic leading-relaxed">
          “When Deaf women rise, communities become more inclusive, strong, and innovative.”
        </blockquote>
        <p className="mt-4 text-pink-200 font-semibold">
          — Deaf Women Aloud Initiative (DWAI)
        </p>
      </section> */}

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Join Our Movement</h3>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Support our mission to empower Deaf women and girls through education, advocacy, and inclusion.

        </p>
        <Link
          href="/contact"
          className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 transition"
        >
          Support DWAI
        </Link>
      </section>
    </>
  );
}
