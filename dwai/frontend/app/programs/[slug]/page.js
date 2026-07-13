import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import ProgramBody from "../../../components/ProgramBody";
import { sanityFetch } from "../../../lib/sanity";
import { programDetailQuery, programSlugsQuery } from "../../../lib/queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const programs = await sanityFetch({ query: programSlugsQuery }).catch(() => []);
  return programs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = await sanityFetch({ query: programDetailQuery, params: { slug } }).catch(() => null);
  if (!program) return { title: "Program not found | DWAI" };

  return {
    title: `${program.title} | DWAI Programs`,
    description: program.summary,
    openGraph: {
      title: program.title,
      description: program.summary,
      images: program.mainImage?.url ? [{ url: program.mainImage.url, alt: program.mainImage.alt }] : [],
      type: "article",
      publishedTime: program.publishedAt,
    },
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = await sanityFetch({ query: programDetailQuery, params: { slug } });
  if (!program) notFound();

  const publishedDate = program.publishedAt
    ? new Intl.DateTimeFormat("en-NG", { dateStyle: "long" }).format(new Date(program.publishedAt))
    : null;

  return (
    <article className="bg-white">
      <header className="relative isolate overflow-hidden bg-[#160d25] text-white">
        {program.mainImage?.url && <Image src={program.mainImage.url} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />}
        <div className="absolute inset-0 bg-gradient-to-r from-[#160d25] via-[#160d25]/90 to-purple-950/45" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <Link href="/#programs" className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-pink-200 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to programs
          </Link>
          {publishedDate && <p className="mt-10 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-purple-200"><CalendarDays className="h-4 w-4" aria-hidden="true" />{publishedDate}</p>}
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">{program.title}</h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-purple-100">{program.summary}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-24">
        <div>
          {program.mainImage?.url && <figure className="mb-12 overflow-hidden rounded-3xl bg-purple-50"><Image src={program.mainImage.url} alt={program.mainImage.alt} width={1200} height={750} sizes="(min-width: 1024px) 800px, 100vw" className="aspect-[16/10] w-full object-cover" placeholder={program.mainImage.lqip ? "blur" : "empty"} blurDataURL={program.mainImage.lqip} /></figure>}
          <ProgramBody value={program.body} />
          {(!program.body || program.body.length === 0) && <p className="text-lg leading-8 text-gray-700">More information about this program will be available soon.</p>}
        </div>
        <aside aria-label="Support this program" className="h-fit rounded-3xl bg-purple-50 p-7 lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-wider text-purple-700">Create lasting change</p>
          <h2 className="mt-3 text-2xl font-bold text-gray-950">Help us expand this work</h2>
          <p className="mt-3 leading-7 text-gray-700">Your support helps make information, services and leadership opportunities accessible to more Deaf women and girls.</p>
          <Link href="/donation" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5B2D8E] px-5 py-3 font-semibold text-white hover:bg-[#3D1A6B] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">Support DWAI <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </aside>
      </div>

      {program.relatedPrograms?.length > 0 && <section aria-labelledby="related-programs" className="bg-[#f7f5fb] px-6 py-16">
        <div className="mx-auto max-w-6xl"><h2 id="related-programs" className="text-3xl font-bold text-gray-950">Explore more programs</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{program.relatedPrograms.map((related) => <Link key={related._id} href={`/programs/${related.slug}`} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300">{related.mainImageUrl && <div className="relative aspect-[16/10]"><Image src={related.mainImageUrl} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" /></div>}<div className="p-6"><h3 className="text-xl font-bold text-gray-950 group-hover:text-purple-700">{related.title}</h3><p className="mt-2 line-clamp-3 leading-6 text-gray-600">{related.summary}</p><span className="mt-4 inline-flex items-center gap-2 font-semibold text-purple-700">Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" /></span></div></Link>)}</div></div>
      </section>}
    </article>
  );
}
