// 📌 Use only your live Strapi Cloud URL
export const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "https://decisive-confidence-d7cd061097.strapiapp.com";

/**
 * 🔵 Universal Strapi Fetcher
 */
export async function fetchStrapiData(endpoint) {
  const url = `${STRAPI_URL}/api/${endpoint}?populate=*`;
  console.log("Fetching from Strapi:", url);

  try {
    const res = await fetch(url, {
      // ❗ Vercel-compatible caching
      next: { revalidate: 60 },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return [];
  }
}

/**
 * 🔵 Convert relative Strapi URL → absolute
 */
export function getStrapiMedia(url) {
  if (!url) return null;
  return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
}

/**
 * 🔵 GALLERY FETCHER
 */
export async function getGallery() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/galleries?populate=image`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();
    const items = json?.data || [];

    return items.map((item) => ({
      id: item.id,
      caption: item.caption || "",
      type: item.type || "",
      image:
        item.image?.map((img) => ({
          id: img.id,
          url: getStrapiMedia(img.url),
          alt: img.alternativeText || "Gallery Image",
          caption: img.caption || "",
          width: img.width,
          height: img.height,
        })) || [],
    }));
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return [];
  }
}

/**
 * 🔵 PARTNERS FETCHER
 */
export async function getPartners() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/partners?populate=*`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();
    const items = json?.data || [];

    return items.map((partner) => ({
      id: partner.id,
      name: partner.Title || partner.name || "Unnamed Partner",
      logo:
        partner.logo?.map((img) => ({
          id: img.id,
          url: getStrapiMedia(img.url),
          alt: img.alternativeText || partner.name,
          caption: img.caption || "",
        })) || [],
    }));
  } catch (error) {
    console.error("Partners fetch error:", error);
    return [];
  }
}

/**
 * 🔵 TEAMS FETCHER
 */
export async function getTeams() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/teams?populate=image`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();
    const items = json?.data || [];

    return items.map((item) => ({
      id: item.id,
      name: item.title || item.Name,
      position: item.role || "Team Member",
      image:
        item.image?.map((img) => ({
          id: img.id,
          url: getStrapiMedia(img.url),
          alt: img.alternativeText || item.name,
        })) || [],
    }));
  } catch (error) {
    console.error("Teams fetch error:", error);
    return [];
  }
}

/**
 * 🔵 PROGRAMS FETCHER
 */
export async function getPrograms() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/programs?populate=image`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();
    const items = json?.data || [];

    return items.map((program) => ({
      id: program.id,
      Title: program.Title || "Untitled Program",
      Description: program.Description || "",
      Date: program.Date || null,
      slug: program.slug || String(program.id),
      image:
        program.image?.map((img) => ({
          id: img.id,
          url: getStrapiMedia(img.url),
          alt: img.alternativeText || program.Title,
          caption: img.caption || "",
        })) || [],
    }));
  } catch (error) {
    console.error("Programs fetch error:", error);
    return [];
  }
}
