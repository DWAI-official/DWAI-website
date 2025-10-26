import Image from "next/image";
import Link from "next/link";

export default function Hero({ heading, subheading, bgImage }) {
  return (
    <section className="relative bg-purple-700 text-white py-20 flex flex-col items-center text-center px-4">
      <Image
        src={bgImage}
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{heading}</h1>
        <p className="text-xl md:text-2xl mb-8">{subheading}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/donate" className="bg-white text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-white">Donate Now</Link>
          <Link href="/contact" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 focus-visible:ring-2 focus-visible:ring-white">Get Help</Link>
        </div>
      </div>
    </section>
  );
}
