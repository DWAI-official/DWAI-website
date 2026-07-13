import { sanityFetch } from "../../lib/sanity";
import { paginatedGalleriesQuery } from "../../lib/queries";
import GalleryContent from "../../components/GalleryContent";

export const metadata = {
  title: "Gallery | Deaf Women Aloud Initiative",
  description: "Visual stories amplifying the voices, resilience, and leadership of Deaf women across Nigeria.",
};

export default async function GalleryPage() {
  const galleries = await sanityFetch({
    query: paginatedGalleriesQuery,
    params: { start: 0, end: 3 },
  }).catch(() => []);
  
  return <GalleryContent galleries={galleries.slice(0, 2)} initialHasMore={galleries.length > 2} />;
}
