import { sanityFetch } from "../../lib/sanity";
import { teamsQuery } from "../../lib/queries";
import AboutContent from "../../components/AboutContent";

// Rebuild the page regularly so newly published team changes are displayed.
export const revalidate = 60;

export const metadata = {
  title: "About DWAI | Deaf Women Aloud Initiative",
  description: "Learn about DWAI, our mission, vision, and the team dedicated to empowering Deaf women and girls in Nigeria.",
};

export default async function AboutPage() {
  const team = await sanityFetch({
    query: teamsQuery,
    revalidate,
    // Team edits should not wait for Sanity's CDN cache after revalidation.
    useCdn: false,
  });

  return <AboutContent team={team} />;
}
