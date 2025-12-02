import React from "react";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import GlossaryPDF from "../components/GlossaryDownloadSection";
import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import ProjectCard from "../components/ProjectCard";
import GallerySection from "../components/GallerySection";
import PartnersSection from "../components/PartnersSection";
import TestimonialSection from "../components/TestimonialSection";
import CTA from "../components/CTA";

import { fetchStrapiData, getPartners } from "../lib/strapi";

export default async function Home() {
  const homepageData = await fetchStrapiData("homepage");
  const hero = homepageData;

  // const programs = await fetchStrapiData("program");
  const galleries = await fetchStrapiData("galleries");
  const partners = await getPartners();

  return (
    <main className="overflow-hidden">
      <Hero data={hero} />
      <AboutSection />
      <FeatureSection
        heading="Our Mission"
        text="To empower Deaf Women and girls to access sexual and reproductive health and rights (SRHR) services, for the promotion of an inclusive society."
        bgImage={"/assets/images/outreach6.jpg"}
      />
      <FeatureSection
        heading="Our Vision"
        text="A society where SRHR information and services are accessible to Deaf Women and girls without barriers or exclusion."
        bgImage={"/assets/images/outreach7.jpg"}
        reverse
      />
      <GlossaryPDF />
      <ImpactSection />
      <ProjectCard />
      <GallerySection data={galleries} />
      <PartnersSection data={partners} />
      {/* <TestimonialSection /> */}
      {/* <CTA
        title="Join Us in Making a Difference"
        description="Your support can transform lives. Partner with us to empower Deaf women and girls in Nigeria."
        buttonText="Donate Now"
      /> */}
    </main>
  );
}
