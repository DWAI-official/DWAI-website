"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LoadMoreButton from "./LoadMoreButton";

export default function ProgramsSection({ initialPrograms = [], programCount = 0 }) {
  const carouselRef = useRef(null);
  const [programs, setPrograms] = useState(initialPrograms);
  const [hasMore, setHasMore] = useState(initialPrograms.length < programCount);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    setPrograms(initialPrograms);
    setHasMore(initialPrograms.length < programCount);
  }, [initialPrograms, programCount]);

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollBy({ left: direction * Math.min(carousel.clientWidth * 0.85, 760), behavior: "smooth" });
  };

  const loadMore = async () => {
    setIsLoadingMore(true);
    setLoadError("");
    try {
      const response = await fetch(`/api/content?type=programs&start=${programs.length}&limit=4`);
      if (!response.ok) throw new Error("Request failed");
      const result = await response.json();
      setPrograms((current) => [...current, ...result.items]);
      setHasMore(result.hasMore);
      requestAnimationFrame(() => scrollCarousel(1));
    } catch {
      setLoadError("We couldn’t load more programs. Please try again.");
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <section id="programs" className="relative overflow-hidden bg-[#f7f5fb] py-24" aria-labelledby="programs-heading">
      <div className="absolute -top-40 left-20 h-[500px] w-[500px] rounded-full bg-purple-200/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 right-20 h-[500px] w-[500px] rounded-full bg-pink-200/20 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-700">Our work in action</p>
            <h2 id="programs-heading" className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">Programs creating lasting change</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">Explore Deaf-led programs advancing accessible health, safety, advocacy and community leadership.</p>
          </div>

          <div className="flex gap-3" aria-label="Program carousel controls">
            <button type="button" onClick={() => scrollCarousel(-1)} aria-label="Previous programs" className="grid h-12 w-12 place-items-center rounded-full border border-purple-200 bg-white text-purple-800 shadow-sm transition hover:border-purple-500 hover:bg-purple-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"><ChevronLeft aria-hidden="true" /></button>
            <button type="button" onClick={() => scrollCarousel(1)} aria-label="Next programs" className="grid h-12 w-12 place-items-center rounded-full bg-[#5B2D8E] text-white shadow-sm transition hover:bg-[#3D1A6B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200"><ChevronRight aria-hidden="true" /></button>
          </div>
        </div>

        {programs.length > 0 ? <div ref={carouselRef} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:thin] [scrollbar-color:#8b5cf6_transparent]" role="region" aria-label="DWAI programs" tabIndex={0}>
          {programs.map((program, index) => (
            <motion.article key={program._id} className="group flex w-[85vw] max-w-[390px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-[360px]" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <Link href={`/programs/${program.slug}`} aria-label={`Read about ${program.title}`} className="flex h-full flex-col rounded-3xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-purple-400">
                <div className="relative aspect-[16/10] overflow-hidden bg-purple-100">
                  {program.mainImageUrl ? <Image src={program.mainImageUrl} alt="" fill sizes="(min-width: 640px) 390px, 85vw" className="object-cover transition duration-700 group-hover:scale-105" /> : <div className="h-full bg-gradient-to-br from-purple-700 to-pink-500" aria-hidden="true" />}
                  {index === 0 && <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-800 shadow">Latest</span>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500"><CalendarDays className="h-4 w-4" aria-hidden="true" />{program.publishedAt ? new Intl.DateTimeFormat("en-NG", { dateStyle: "medium" }).format(new Date(program.publishedAt)) : "DWAI program"}</p>
                  <h3 className="mt-3 text-xl font-bold leading-snug text-gray-950 transition group-hover:text-purple-700">{program.title}</h3>
                  <p className="mt-3 line-clamp-3 leading-7 text-gray-600">{program.summary}</p>
                  {/* <span className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-purple-700">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" /></span> */}
                </div>
              </Link>
            </motion.article>
          ))}
        </div> : <div className="mt-12 rounded-3xl border border-purple-100 bg-white p-8 text-center"><h3 className="text-xl font-bold text-gray-950">Programs are being updated</h3><p className="mt-2 text-gray-600">Please check back soon to explore our latest community work.</p></div>}

        {programs.length > 0 && <p className="mt-2 text-sm text-gray-500">Swipe, scroll, or use the arrow buttons to explore programs.</p>}
        <div className="mt-8 flex flex-col items-center gap-3" aria-live="polite">
          {hasMore && <LoadMoreButton onClick={loadMore} loading={isLoadingMore} label="Load more programs" />}
          {loadError && <p className="text-sm font-medium text-red-700" role="alert">{loadError}</p>}
          {!hasMore && programs.length > 4 && <p className="text-sm text-gray-600">All programs are available in the carousel.</p>}
        </div>
      </div>
    </section>
  );
}
