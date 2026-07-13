"use client";

import Link from "next/link";

export default function ProgramError({ reset }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 text-center" role="alert">
      <p className="font-bold uppercase tracking-wider text-purple-700">Connection interrupted</p>
      <h1 className="mt-4 text-4xl font-bold text-gray-950">We couldn’t load this program.</h1>
      <p className="mt-4 text-lg text-gray-600">The content service may be temporarily unavailable. Please try again.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={reset} className="rounded-full bg-[#5B2D8E] px-6 py-3 font-semibold text-white hover:bg-[#3D1A6B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">Try again</button>
        <Link href="/#programs" className="rounded-full border border-purple-300 px-6 py-3 font-semibold text-purple-800 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">Back to programs</Link>
      </div>
    </section>
  );
}
