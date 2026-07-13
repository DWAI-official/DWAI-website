import { PortableText } from "next-sanity";

const components = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-lg leading-8 text-gray-700">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-12 text-3xl font-bold tracking-tight text-gray-950">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-9 text-2xl font-bold text-gray-950">{children}</h3>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-pink-500 bg-purple-50 px-6 py-5 text-xl italic leading-8 text-purple-950">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-7 ml-6 list-disc space-y-2 text-lg leading-8 text-gray-700">{children}</ul>,
    number: ({ children }) => <ol className="mb-7 ml-6 list-decimal space-y-2 text-lg leading-8 text-gray-700">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const external = value?.href?.startsWith("http");
      return <a href={value?.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="font-semibold text-purple-700 underline decoration-2 underline-offset-4 hover:text-purple-950">{children}</a>;
    },
  },
};

export default function ProgramBody({ value }) {
  if (!Array.isArray(value) || value.length === 0) return null;
  return <PortableText value={value} components={components} />;
}
