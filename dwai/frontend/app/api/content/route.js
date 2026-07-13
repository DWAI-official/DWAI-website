import { NextResponse } from "next/server";
import { sanityFetch } from "../../../lib/sanity";
import {
  paginatedGalleriesQuery,
  paginatedProgramsQuery,
} from "../../../lib/queries";

const QUERIES = {
  programs: paginatedProgramsQuery,
  galleries: paginatedGalleriesQuery,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const start = Math.max(0, Number.parseInt(searchParams.get("start") || "0", 10));
  const requestedLimit = Number.parseInt(searchParams.get("limit") || "4", 10);
  const limit = Math.min(12, Math.max(1, requestedLimit));

  if (!QUERIES[type] || !Number.isFinite(start)) {
    return NextResponse.json({ error: "Invalid pagination request." }, { status: 400 });
  }

  try {
    const items = await sanityFetch({
      query: QUERIES[type],
      params: { start, end: start + limit + 1 },
    });

    return NextResponse.json({
      items: items.slice(0, limit),
      hasMore: items.length > limit,
    });
  } catch {
    return NextResponse.json(
      { error: "Content could not be loaded. Please try again." },
      { status: 500 },
    );
  }
}
