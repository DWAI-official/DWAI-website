import { sanityFetch } from "../../lib/sanity";
import { allGalleriesQuery } from "../../lib/queries";
import GalleryContent from "../../components/GalleryContent";

export const metadata = {
  title: "Gallery | Deaf Women Aloud Initiative",
  description: "Visual stories amplifying the voices, resilience, and leadership of Deaf women across Nigeria.",
};

export default async function GalleryPage() {
  // Fetch all gallery documents from Sanity
  const galleries = await sanityFetch({ query: allGalleriesQuery });
  
  return <GalleryContent galleries={galleries} />;
}
