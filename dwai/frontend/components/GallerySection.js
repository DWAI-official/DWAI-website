"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, Images, Play, Video, X } from "lucide-react";
import { useGlobalData } from "../context/GlobalDataContext";

const getYouTubeId = (url = "") => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") return parsed.pathname.split("/").filter(Boolean)[0] || null;
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.searchParams.get("v")) return parsed.searchParams.get("v");
      const [type, id] = parsed.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live"].includes(type)) return id || null;
    }
  } catch {
    return null;
  }
  return null;
};
const getEmbedUrl = (url) => {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : url;
};

const filters = [
  { value: "all", label: "All stories", icon: Images },
  { value: "image", label: "Photos", icon: Camera },
  { value: "video", label: "Videos", icon: Video },
];

export default function GallerySection() {
  const { gallerySection: data } = useGlobalData();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryData = useMemo(() => (data?.items || [])
    .filter((item) => item.url)
    .map((item) => ({
      key: item._key,
      type: item._type || "image",
      src: item.url,
      alt: item.alt || item.caption || "DWAI community gallery media",
      caption: item.caption || item.alt || "DWAI community story",
      publishedAt: item.publishedAt,
    }))
    .sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0)), [data?.items]);

  const filteredData = filter === "all"
    ? galleryData
    : galleryData.filter((item) => item.type === filter);
  const previewItems = filteredData.slice(0, 6);
  const selectedItem = selectedIndex === null ? null : previewItems[selectedIndex];

  useEffect(() => {
    if (!selectedItem) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") setSelectedIndex((index) => (index + 1) % previewItems.length);
      if (event.key === "ArrowLeft") setSelectedIndex((index) => (index - 1 + previewItems.length) % previewItems.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItem, previewItems.length]);

  if (!galleryData.length) return null;

  const move = (direction) => setSelectedIndex((index) =>
    (index + direction + previewItems.length) % previewItems.length);

  return (
    <section className="relative overflow-hidden bg-[#160d25] px-6 py-24 text-white" aria-labelledby="gallery-heading">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(192,38,211,.2),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(219,39,119,.18),transparent_30%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-300">Stories in focus</p>
            <h2 id="gallery-heading" className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{data?.heading || "DWAI Gallery"}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-purple-100/80">{data?.subheading || "Stories of empowerment, advocacy and accessible community action."}</p>
          </div>
          <Link href="/gallery" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-purple-900 transition hover:-translate-y-0.5 hover:bg-pink-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300">Explore full gallery <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" aria-label="Filter gallery preview">
          {filters.map(({ value, label, icon: Icon }) => <button key={value} type="button" onClick={() => { setFilter(value); setSelectedIndex(null); }} aria-pressed={filter === value} className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 ${filter === value ? "border-pink-300 bg-pink-300 text-purple-950" : "border-white/20 bg-white/10 text-white hover:bg-white/20"}`}><Icon className="h-4 w-4" aria-hidden="true" />{label}</button>)}
        </div>

        <div className="mt-10 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {previewItems.map((item, index) => {
            const videoId = item.type === "video" ? getYouTubeId(item.src) : null;
            const thumbnail = item.type === "image"
              ? item.src
              : videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : null;
            const featured = index === 0;
            return <motion.button key={item.key || `${item.src}-${index}`} type="button" onClick={() => setSelectedIndex(index)} aria-label={`Open ${item.type}: ${item.caption}`} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className={`group relative overflow-hidden rounded-3xl bg-purple-950 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300 ${featured ? "sm:row-span-2 lg:col-span-7" : "lg:col-span-5"}`}>
              {thumbnail ? <Image src={thumbnail} alt={item.type === "image" ? item.alt : ""} fill sizes={featured ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 42vw, 100vw"} className="object-cover transition duration-700 group-hover:scale-105" /> : <span className="absolute inset-0 bg-gradient-to-br from-purple-800 via-fuchsia-800 to-pink-700" aria-hidden="true" />}
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" aria-hidden="true" />
              {item.type === "video" && <span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-purple-900 shadow-xl transition group-hover:scale-110"><Play className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true" /></span></span>}
              <span className="absolute inset-x-0 bottom-0 p-6"><span className="line-clamp-2 block text-lg font-bold text-white">{item.caption}</span><span className="mt-2 block text-sm font-semibold text-pink-200">View {item.type === "video" ? "video" : "photo"}</span></span>
            </motion.button>;
          })}
        </div>

        {!previewItems.length && <p className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-6 text-purple-100">No media is available for this filter yet.</p>}
      </div>

      <AnimatePresence>
        {selectedItem && <motion.div role="dialog" aria-modal="true" aria-label={selectedItem.caption} className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedIndex(null); }}>
          <motion.div className="relative w-full max-w-5xl" initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close media viewer" autoFocus className="absolute -top-14 right-0 grid h-11 w-11 place-items-center rounded-full bg-white text-black hover:bg-pink-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"><X aria-hidden="true" /></button>
            {selectedItem.type === "image" ? <Image src={selectedItem.src} alt={selectedItem.alt} width={1200} height={850} className="max-h-[75vh] w-full rounded-2xl object-contain" /> : <iframe src={getEmbedUrl(selectedItem.src)} title={selectedItem.caption} className="h-[65vh] w-full rounded-2xl" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />}
            <p className="mt-4 text-center text-lg font-semibold text-white">{selectedItem.caption}</p>
            {previewItems.length > 1 && <><button type="button" onClick={() => move(-1)} aria-label="Previous media" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"><ChevronLeft aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Next media" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white hover:bg-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300"><ChevronRight aria-hidden="true" /></button></>}
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
