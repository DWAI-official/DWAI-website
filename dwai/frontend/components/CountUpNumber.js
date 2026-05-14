"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUpNumber({ value, duration = 500, suffix = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let raf;
    let start;
    const startVal = 0;
    const endVal = value;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setCurrent(Math.round(eased * (endVal - startVal) + startVal));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    // Reset current to 0 when value changes to re-trigger animation
    setCurrent(0);
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);

  return (
    <motion.div className="text-5xl font-semibold text-white">
      {current}
      {suffix && (
        <span className="text-pink-400 font-serif font-medium leading-tight">
          {suffix}
        </span>
      )}
    </motion.div>
  );
}