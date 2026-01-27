import { sanityFetch } from "../../lib/sanity";
import { teamsQuery } from "../../lib/queries";
import AboutContent from "../../components/AboutContent";

export const metadata = {
  title: "About DWAI | Deaf Women Aloud Initiative",
  description: "Learn about DWAI, our mission, vision, and the team dedicated to empowering Deaf women and girls in Nigeria.",
};

export default async function AboutPage() {
  // Fetch team data from Sanity
  const team = await sanityFetch({ query: teamsQuery });

  return <AboutContent team={team} />;
}
