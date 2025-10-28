"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const testimonials = [
  {
    name: "Grace A.",
    role: "Deaf Student, Abuja",
    image: "/assets/images/avatar.jpg",
    message:
      "DWAI helped me gain confidence to speak up for myself. Their sign language workshops changed my life!",
  },
  {
    name: "Mary J.",
    role: "Community Leader, Lagos",
    image: "/assets/images/avatar.jpg",
    message:
      "For the first time, I felt seen and heard as a Deaf woman. DWAI programs truly empower us.",
  },
  {
    name: "Helen O.",
    role: "Advocate, Kaduna",
    image: "/assets/images/avatar.jpg",
    message:
      "DWAI opened doors for me to learn leadership and digital skills. Now, I mentor younger Deaf girls.",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-purple-50 to-white py-16 px-6 md:px-10"
      aria-labelledby="testimonial-heading"
    >
      <div className="max-w-5xl mx-auto text-center relative">
        <motion.h2
          id="testimonial-heading"
          className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Deaf Community Says 
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Real voices. Real stories. Discover how DWAI is making a difference in the lives of Deaf women and girls across Nigeria.
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg px-6 py-10 md:px-12 md:py-12 max-w-3xl mx-auto"
              aria-live="polite"
            >
              <FaQuoteLeft className="text-purple-300 text-3xl mb-4 mx-auto" aria-hidden="true" />
              <p className="text-gray-700 italic text-lg leading-relaxed">
                {testimonials[current].message}
              </p>
              <FaQuoteRight className="text-purple-300 text-3xl mt-4 mx-auto" aria-hidden="true" />

              <div className="mt-8 flex flex-col items-center">
                <Image
                  src={testimonials[current].image}
                  alt={`Photo of ${testimonials[current].name}`}
                  width={90}
                  height={90}
                  className="rounded-full object-cover border-4 border-purple-300"
                />
                <h3 className="mt-3 font-semibold text-purple-800 text-lg">
                  {testimonials[current].name}
                </h3>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <MdNavigateBefore size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <MdNavigateNext size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? "bg-purple-700 w-6" : "bg-purple-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/testimonials"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            Read More Stories →
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
