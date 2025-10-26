import Image from "next/image";

import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ImpactSection from "@/components/ImpactSection";
import ProjectCard from "@/components/ProjectCard";
import { fetchAPI } from "@/lib/api";

export default async function Home() {
  // const homeData = await fetchAPI("homepage");
  // const projects = await fetchAPI("projects");

  // const heroImage = homeData[0].attributes.image?.data?.attributes?.url || "/hero-default.jpg";

  return (
    <main className="overflow-hidden">
      <Hero
        heading="Empowering Deaf Women & Girls in Nigeria"
        subheading="Amplifying Deaf voices. Ending discrimination. Building inclusion."
        // bgImage={heroImage}
      />

      <FeatureSection
        heading="Our Mission"
        text="to empower Deaf women and girls to access sexual and reproductive health, and rights (SRHR) services, for the promotion of an inclusive society."
        // bgImage="/mission-image.jpg"
      />
      <FeatureSection
        heading="Our Vision"
        text="to create a society where sexual and reproductive health and rights (SRHR) information and services are accessible to Deaf women and girls without any form of barrier or exclusion."
        // bgImage="/vision-image.jpg"
      />
      <ImpactSection />

      {/* <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p: any) => (
            <ProjectCard
              key={p.id}
              title={p.attributes.title}
              description={p.attributes.description}
              imageUrl={p.attributes.photo?.data?.attributes?.url || "/project-default.jpg"}
            />
          ))}
        </div>
      </section> */}

      {/* Additional sections (Team, Events, CTA) can follow here */}
    </main>
  );
}
