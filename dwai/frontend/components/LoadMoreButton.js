"use client";

import { LoaderCircle, Plus } from "lucide-react";

export default function LoadMoreButton({ onClick, loading, label = "Load more" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      aria-busy={loading}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5B2D8E] px-7 py-3 font-semibold text-white shadow-lg shadow-purple-900/15 transition hover:bg-[#3D1A6B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 disabled:cursor-wait disabled:opacity-70"
    >
      {loading ? <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Plus className="h-5 w-5" aria-hidden="true" />}
      {loading ? "Loading…" : label}
    </button>
  );
}
