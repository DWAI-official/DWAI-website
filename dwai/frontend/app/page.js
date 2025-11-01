
import Image from "next/image";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import ImpactSection from "@/components/ImpactSection";
import CTA from "@/components/CTA";
import ProjectCard from "@/components/ProjectCard";
import { fetchAPI } from "@/lib/api";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import TestimonialSection from "@/components/TestimonialSection";
import Link from "next/link";
import { motion } from "framer-motion";
import ParntersSection from "@/components/ParnterSection";


export default async function Home() {
  // const homeData = await fetchAPI("homepage");
  // const projects = await fetchAPI("projects");

  // const heroImage = homeData[0].attributes.image?.data?.attributes?.url || "/hero-default.jpg";

  return (
    <main className="overflow-hidden">
      <Hero
        heading="Empowering Deaf Women & Girls in Nigeria"
        subheading="Amplifying Deaf voices. Ending discrimination. Building inclusion."
        bgImage={"/assets/images/dwai_picture.jpg"}
      />
      <AboutSection />
      <FeatureSection
        heading="Our Mission"
        text="To empower Deaf Women and girls to access sexual and reproductive health and rights ( SRHR ) services, for the promotion of an inclusive society."
        bgImage={"/assets/images/dwai_picture.jpeg"}
      />
      <FeatureSection
        heading="Our Vision"
        text="A society where sexual and reproductive health and rights (SRHR) information and services are accessible to Deaf Women and girls, without any form of barriers or exclusion."
        bgImage={"/assets/images/dwai_picture.jpeg"}
        reverse={true}
      />
      <ImpactSection />

      <ProjectCard />
      
      <GallerySection />
      
      {/* <ParntersSection /> */}

      <TestimonialSection />

      <CTA 
        title="Join Us in Making a Difference"
        description="Your support can transform lives. Partner with us to empower Deaf women and girls in Nigeria."
        buttonText="Donate Now"
      />
    </main>
  );
}
