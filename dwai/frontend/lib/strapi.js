const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Universal fetch function
 */
export async function fetchStrapiData(endpoint) {
  const url = `${STRAPI_URL}/api/${endpoint}?populate=*`;
  console.log("Fetching from Strapi:", url);

  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Strapi fetch error:", error);
    return null;
  }
}

/**
 * Convert relative Strapi image URLs to full URLs
 */
export function getStrapiMedia(url) {
  if (!url) return null;
  if (url.startsWith("http")) return url;  // full URL okay
  return `${STRAPI_URL}${url}`;            // convert /uploads/... to full URL
}

/**
 * Fetch and normalize gallery data
 */
export async function getGallery() {
  const res = await fetch(`${STRAPI_URL}/api/galleries?populate=image`, {
    cache: "no-store",
  });

  const json = await res.json();

  return json.data.map((item) => ({
    id: item.id,
    caption: item.caption || "",
    type: item.type || "",
    image: (item.image || []).map((img) => ({
      id: img.id,
      url: getStrapiMedia(img.url),
      alt: img.alternativeText || "",
      caption: img.caption || "",
      width: img.width,
      height: img.height,
    })),
  }));
}


export async function getPartners() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    const res = await fetch(`${STRAPI_URL}/api/partners?populate=*`, {
      cache: "no-store",
    });

    const json = await res.json();
    if (!json.data) return [];

    return json.data.map((partner) => ({
      id: partner.id,
      name: partner.name, // direct access — no attributes

      logo: partner.logo?.map((img) => ({
        id: img.id,
        url: img.url.startsWith("http")
          ? img.url
          : `${STRAPI_URL}${img.url}`,
        alt: img.alternativeText || partner.name,
        caption: img.caption || "",
      })) || [],
    }));
  } catch (error) {
    console.error("Failed to fetch partners:", error);
    return [];
  }
}




export async function getTeams() {
  const res = await fetch(`${STRAPI_URL}/api/teams?populate=image`, {
    cache: "no-store",
  });

  const json = await res.json();

  // Normalize format (NO attributes in frontend use)
  return json.data.map((item) => ({
    id: item.id,
    name: item.title,
    position: item.role,
    image: item.image?.map((img) => ({
      id: img.id,
      url: img.url,
      alt: img.alternativeText || item.name,
    })) || [],
  }));
}


export async function getPrograms() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  try {
    const res = await fetch(`${STRAPI_URL}/api/programs?populate=image`, {
      cache: "no-store",
    });

    const json = await res.json();
    if (!json.data) return [];

    return json.data.map((program) => ({
      id: program.id,
      Title: program.Title || "Untitled Program",
      Description: program.Description || "",
      Date: program.Date || null,
      slug: program.slug || program.id,
      image: program.image?.map((img) => ({
        id: img.id,
        url: img.url.startsWith("http") ? img.url : `${STRAPI_URL}${img.url}`,
        alt: img.alternativeText || program.Title || "Program image",
        caption: img.caption || "",
      })) || [],
    }));
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    return [];
  }
}