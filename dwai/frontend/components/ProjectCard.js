import Image from "next/image";


export default function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
