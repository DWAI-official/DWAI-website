// pages/about.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About DWAI | Deaf Women Aloud Initiative</title>
        <meta
          name="description"
          content="Deaf Women Aloud Initiative (DWAI) is an non-government organization founded to amplify the voice of Deaf Women and girls in Nigeria. We are registered with the Corporate Affairs Commission (CAC) and our goals are to reduce the exploitation of Deaf Women, eradicate discrimination, advance social inclusion, and promote the sexual and reproductive health rights of this vulnerable group."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-purple-900 text-white text-center overflow-hidden">
        <Image
          src={"/assets/images/dwai_picture.jpeg"} // update with real URL
          alt="Deaf women together smiling"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          priority
        />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-extrabold leading-tight drop-shadow-lg">
            Empowering <span className="text-pink-300">Deaf Women</span> to Lead, Learn, and Inspire.
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            DWAI stands as a voice for equality, accessibility, and empowerment — ensuring no Deaf woman is left behind.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-purple-900 font-semibold px-8 py-3 rounded-full hover:bg-pink-200 transition focus-visible:ring-2 focus-visible:ring-white focus:outline-none"
          >
            Get Involved
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>Deaf Women Aloud Initiative (DWAI)</strong> Deaf Women Aloud Initiative (DWAI) is an non-government organization founded to amplify the voice of Deaf Women and girls in Nigeria. We are registered with the Corporate Affairs Commission (CAC) and our goals are to reduce the exploitation of Deaf Women, eradicate discrimination, advance social inclusion, and promote the sexual and reproductive health rights of this vulnerable group. 

              At DWAI aim to increase public Awareness and access to health information and services on sensitive issues affecting Deaf Women and girls, in the area of assault, gender based violence, stigmatization, and discrimination. 

              Additionally, We seek to bring together pertinent parties to share ideas in advancing the issues and rights of Deaf Women and girls in the society.
            </p>
          </div>
          <div className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={"/assets/images/dwai_picture.jpeg"} // update with real URL
              alt="DWAI leadership training"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-50 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-4xl font-bold text-purple-900 mb-8">Our Mission & Vision</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">Our Vision</h4>
              <p className="text-gray-700 leading-relaxed">
                A society where sexual and reproductive health and rights (SRHR) information and services are accessible to Deaf Women and girls, without any form of barriers or exclusion.

              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h4>
              <p className="text-gray-700 leading-relaxed">
                To empower Deaf Women and girls to access sexual and reproductive health and rights ( SRHR ) services, for the promotion of an inclusive society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-purple-800 mb-12">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Respect for Individual Differences", img: "/assets/images/dwai_picture.jpeg" },
              { title: "Dignity and Integrity", img: "/assets/images/dwai_picture.jpeg" },
              { title: "Hard Work", img: "/assets/images/dwai_picture.jpeg" },
              { title: "Social Inclusion", img: "/assets/images/dwai_picture.jpeg" },
              { title: "Gender Equity", img: "/assets/images/dwai_picture.jpeg" },
              { title: "Accountability", img: "/assets/images/dwai_picture.jpeg" },
            ].map((value, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={value.img}
                  alt={value.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 opacity-80 group-hover:opacity-100 transition duration-500"
                />
                <div className="absolute inset-0 bg-purple-900/50 flex items-center justify-center">
                  <h4 className="text-white text-xl font-semibold px-4">{value.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-bold text-purple-800">Meet Our Team</h3>
          <p className="mt-4 text-lg text-gray-700">The dedicated individuals driving DWAI’s mission forward.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Hellen Beyioku-Alase",
              role: "Executive Director",
              img: "/assets/images/dwai_picture.jpeg"
            },
            {
              name: "Patience Etim",
              role: "Programs Lead",
              img: "/assets/images/dwai_picture.jpeg"
            },
            {
              name: "Amina Ahmed",
              role: "Advocacy & Partnerships",
              img: "/assets/images/dwai_picture.jpeg"
            }
          ].map((person, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition">
              <div className="relative w-full h-80">
                <Image
                  src={person.img}
                  alt={`${person.name} – ${person.role}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold text-purple-800">{person.name}</h4>
                <p className="text-gray-600 mt-1">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="bg-purple-800 text-white py-16 px-6 text-center">
        <blockquote className="max-w-3xl mx-auto text-xl italic leading-relaxed">
          “When Deaf women rise, communities become more inclusive, strong, and innovative.”
        </blockquote>
        <p className="mt-4 text-pink-200 font-semibold">— Deaf Women Aloud Initiative (DWAI)</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-900 to-pink-800 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-4">Join Our Movement</h3>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Support our mission to empower Deaf women and girls through education, advocacy, and inclusion.
          Together, we can build a future where every Deaf woman’s voice is heard and valued.
        </p>
        <Link
          href="/contact"
          className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-200 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition"
        >
          Support DWAI
        </Link>
      </section>
    </>
  );
}
