import React from "react";

export default function CTA({ title, description, buttonText }) {
  return (
    <section className="py-4 px-6 bg-purple-700 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
      <p className="max-w-2xl mx-auto mb-8">{description}</p>
      <button className="bg-white text-purple-700 font-semibold py-2 px-4 rounded">
        {buttonText}
      </button>
    </section>
  );
}
