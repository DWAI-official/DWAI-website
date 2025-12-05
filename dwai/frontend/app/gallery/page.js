import { getGallery } from "../../lib/strapi";
import GalleryClient from "@/components/GalleryClient";

export default async function GalleryPage() {
  const gallery = await getGallery(); // Fetch from Strapi Cloud

  return <GalleryClient data={gallery} />;
}