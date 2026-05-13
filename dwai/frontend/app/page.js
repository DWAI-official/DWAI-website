import React from "react";
import AboutSection from "../components/AboutSection";
import FeatureSection from "../components/FeatureSection";
import GlossaryPDF from "../components/GlossaryDownloadSection";
import Hero from "../components/Hero";
import ImpactSection from "../components/ImpactSection";
import ProjectCard from "../components/ProjectCard";
import GallerySection from "../components/GallerySection";
import PartnersSection from "../components/PartnersSection";
// import TestimonialSection from "../components/TestimonialSection";
import DonationSection from "../components/sections/DonationSection";
// import CTA from "../components/CTA";
export default function Home() {
  return (
    <main className="overflow-hiddpen">
      <Hero />
      <AboutSection />
      <FeatureSection
  label="Our Mission"
  title="Accessible SRHR for Every Deaf Woman"
  text="To empower Deaf women and girls to access sexual and reproductive health and rights (SRHR) services, for the promotion of an inclusive society — without communication barriers or exclusion."
  image="/assets/images/outreach6.jpg"
/>
      <FeatureSection
      label="Our Vision"
      title="A Society Without Barriers or Exclusion"
      text="A Nigeria where SRHR information and services are fully accessible to Deaf women and girls — where sign language, deaf culture, and equal participation are embraced at every level of society."
      image="/assets/images/digit_35.jpg"
      reverse={true}
      alt={true}
/>
      <ImpactSection />
      <GlossaryPDF />
      
      <ProjectCard />
      <GallerySection />
      <PartnersSection />
      {/* <TestimonialSection /> */}
      {/* <CTA
        title="Join Us in Making a Difference"
        description="Your support can transform lives. Partner with us to empower Deaf women and girls in Nigeria."
        buttonText="Donate Now"
      /> */}
      {/* <DonationSection /> */}
    </main>
  );
}
