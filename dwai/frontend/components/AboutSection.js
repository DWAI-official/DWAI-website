"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="bg-white py-28"
      aria-labelledby="about-h2"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 lg:px-16">

        {/* IMAGE COLUMN */}
        <div className="relative">

          {/* Vertical caption */}
          <div className="absolute left-[-2rem] top-8 z-10 origin-center rotate-180 bg-[#C2185B] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white [writing-mode:vertical-rl]">
            Deaf Women Aloud
          </div>

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden">
            <Image
              src="/assets/images/outreach2.jpg"
              alt="DWAI team empowerment event"
              width={600}
              height={800}
              className="aspect-[3/4] w-full object-cover"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
              }}
            />
          </div>

          {/* ACCENT IMAGE */}
          <Image
            src="/assets/images/outreach6.jpg"
            alt="DWAI outreach programme"
            width={300}
            height={300}
            className="absolute -bottom-8 -right-8 w-[45%] border-4 border-white object-cover shadow-lg"
            style={{
              aspectRatio: "1/1",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)",
              boxShadow: "0 12px 40px rgba(91,45,142,.15)",
            }}
          />
        </div>

        {/* CONTENT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LABEL */}
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C2185B]">
            <span className="h-px w-5 bg-[#C2185B]" />
            Who We Are
          </p>

          {/* TITLE */}
          <h2
            id="about-h2"
            className="mb-6 text-[clamp(2.2rem,3.5vw,3.2rem)] font-serif font-medium text-[#1A1527]"
          >
            A Movement for{" "}
            <em className="text-[#5B2D8E] italic">Deaf Women&apos;s</em> Rights
          </h2>

          {/* TEXT */}
          <p className="mb-5 leading-[1.85] text-[#6B6478]">
            <strong>Deaf Women Aloud Initiative (DWAI)</strong> is a women-led,
            disability-inclusive NGO registered with the Corporate Affairs Commission
            (CAC), committed to advancing the rights, visibility, and well-being of Deaf
            women and girls across Nigeria.
          </p>

          <p className="mb-10 leading-[1.85] text-[#6B6478]">
            We work to eliminate barriers to education, healthcare, and civic participation —
            tackling gender-based violence, stigma, and discrimination through advocacy,
            capacity-building, and community-focused interventions.
          </p>

          {/* PILLARS */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              "Community-Driven",
              "Women-Led",
              "Impact-Focused",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="border-l-4 border-[#5B2D8E] bg-[#F4F0FA] p-5"
              >
                <div className="mb-2 text-lg">◈</div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#5B2D8E]">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/about"
            className="inline-flex items-center bg-[#5B2D8E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-white transition hover:bg-[#3D1A6B]"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
            }}
          >
            Learn More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}