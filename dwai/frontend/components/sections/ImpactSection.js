// components/sections/ImpactSection.js
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ImpactSection() {
  const [stats, setStats] = useState({ totalDonations: 0, totalAmount: 0 });

  useEffect(() => {
    const fetchDonationStats = async () => {
      try {
        const res = await fetch('/api/donations');

        if (!res.ok) {
          console.warn('Failed to fetch donation stats', { status: res.status });
          return;
        }

        const data = await res.json();
        const totalDonations = Number(data.totalDonations);
        const totalAmount = Number(data.totalAmount);

        if (Number.isFinite(totalDonations) && Number.isFinite(totalAmount)) {
          setStats({ totalDonations, totalAmount });
        }
      } catch (error) {
        console.warn('Failed to fetch donation stats', error);
      }
    };

    fetchDonationStats();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h2>
          <p className="text-purple-100 text-lg">
            Together, we&apos;re making a difference for deaf women and girls
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <p className="text-5xl font-bold mb-2">₦{(stats.totalAmount / 1000000).toFixed(1)}M+</p>
            <p className="text-orange-100">Raised</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <p className="text-5xl font-bold mb-2">{stats.totalDonations}+</p>
            <p className="text-orange-100">Donors</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <p className="text-5xl font-bold mb-2">30+</p>
            <p className="text-orange-100">SRHR Workshops</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <p className="text-5xl font-bold mb-2">500+</p>
            <p className="text-orange-100">Deaf Women & Girls Reached</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
