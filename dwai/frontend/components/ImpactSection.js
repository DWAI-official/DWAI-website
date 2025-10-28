"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Sparkles, Heart, Users, Globe } from "lucide-react";

const stats = [
  { number: 10, label: "States Reached", icon: Globe, suffix: "+" },
  { number: 500, label: "Deaf Women Trained", icon: Users, suffix: "+" },
  { number: 20, label: "Community Projects", icon: Sparkles, suffix: "+" },
  { number: 15, label: "Partnerships Formed", icon: Heart, suffix: "+" },
];

export default function ImpactSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const controls = useAnimation();

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            controls.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-24 px-6 text-center bg-gradient-to-b from-purple-50 via-white to-purple-100 overflow-hidden"
      aria-labelledby="impact-heading"
    >
      {/* Soft Animated Blobs for Depth */}
      <div className="absolute -top-32 -left-16 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          id="impact-heading"
          className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Our Impact in Numbers
        </motion.h2>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">          
            {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <StatCard
                key={i}
                stat={stat}
                Icon={Icon}
                visible={visible}
                controls={controls}
                delay={i * 0.2}
              />
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.p
          className="mt-20 text-lg md:text-xl font-semibold text-purple-700 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.8 }}
        >
          Together, we’re not just making numbers — we’re building opportunities, changing lives, 
          and amplifying Deaf voices across Nigeria 💜
        </motion.p>
      </div>
    </section>
  );
}

function StatCard({ stat, Icon, visible, controls, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = stat.number;
      const duration = 1500; // 1.5 seconds
      const increment = end / (duration / 16);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
      return () => clearInterval(counter); // Cleanup on unmount or if visible changes
    }
  }, [visible, stat.number]);

  return (
        <motion.div
      className="relative bg-white/70 backdrop-blur-md border border-purple-100 rounded-3xl shadow-lg p-8 hover:shadow-xl focus-within:ring-4 focus-within:ring-purple-300 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, delay }} // ✅ use delay prop
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="p-4 bg-purple-100 rounded-full">
          <Icon className="w-8 h-8 text-purple-700" aria-hidden="true" />
        </div>
        <motion.h3
          className="text-5xl font-extrabold text-purple-700 tracking-tight"
          whileHover={{ scale: 1.1 }}
        >
          {count}
          {stat.suffix}
        </motion.h3>
        <p className="text-lg font-medium text-gray-700">{stat.label}</p>
      </div>
    </motion.div>
            );

}
