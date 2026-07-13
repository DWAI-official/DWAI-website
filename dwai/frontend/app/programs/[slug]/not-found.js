import Link from "next/link";

export default function ProgramNotFound() {
  return <section className="mx-auto max-w-3xl px-6 py-28 text-center"><p className="font-bold uppercase tracking-wider text-purple-700">Program not found</p><h1 className="mt-4 text-4xl font-bold text-gray-950">This program is no longer available.</h1><p className="mt-4 text-lg text-gray-600">It may have been moved, unpublished, or the link may be incorrect.</p><Link href="/#programs" className="mt-8 inline-flex rounded-full bg-[#5B2D8E] px-6 py-3 font-semibold text-white hover:bg-[#3D1A6B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">Browse current programs</Link></section>;
}
