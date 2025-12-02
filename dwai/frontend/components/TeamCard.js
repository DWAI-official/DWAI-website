"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamSection({ data }) {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-800 mb-2">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The dedicated individuals driving DWAI’s mission forward.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {data?.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center"
            viewport={{ once: true }}
          >
            {/* Team Image Placeholder */}
            <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <Image
                src="/assets/images/team_placeholder.png"
                alt={member.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-purple-800">
              {member.title}
            </h3>

            {/* Role */}
            <p className="text-gray-600 mt-1">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
