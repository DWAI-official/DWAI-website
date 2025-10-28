"use client";

import Image from "next/image";

const partners = [
  { name: "Google", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "Microsoft", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "UNICEF", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "UNDP", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "Meta", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "Data Lead Africa", logo: "assets/images/deaf_in_tech.jpeg" },
  { name: "Tech Inclusion for the Deaf", logo: "assets/images/deaf_in_tech.jpeg" },
];

export default function PartnersSection() {
  return (
    <section className="relative bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Trusted <span className="text-purple-700">Partners</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          We’re proud to collaborate with inclusive organizations who share our mission of empowering the Deaf community through technology and accessibility.
        </p>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-10 animate-scroll-x whitespace-nowrap"
            aria-label="Scrolling list of partner logos"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-44 shrink-0 text-center"
              >
                <div className="relative h-16 w-32 mb-2">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient edges for visual comfort */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
