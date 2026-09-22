import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/principal1.png", alt: "Chegato High School Gallery Image 1" },
  { src: "/images/hero-campus.png", alt: "Chegato High School Gallery Image 2" },
  { src: "/images/hero-campus1.png", alt: "Chegato High School Gallery Image 3" },
  { src: "/images/principal.png", alt: "Chegato High School Gallery Image 4" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">
            Gallery Highlights
          </h2>

          <Link 
            href="/gallery" 
            className="text-green-700 hover:text-green-900 font-semibold transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.src} className="relative h-64 overflow-hidden rounded-xl shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}