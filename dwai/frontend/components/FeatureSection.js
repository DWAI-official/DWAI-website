import React from "react";
import Image from "next/image";

export default function FeatureSection({ heading, text, bgImage }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">{heading}</h2>
          <p className="text-lg leading-relaxed">
            {text}
          </p>
        </div>
        <div>
          <Image
            src={bgImage}
            alt={`${heading} Image`}
            className="w-full h-auto rounded-lg shadow-lg"
            width={500}
            height={300}
          />
        </div>
      </section>
  );
}
