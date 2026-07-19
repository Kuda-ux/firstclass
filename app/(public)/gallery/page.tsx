import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { IMAGES, LANDSCAPE_IMAGES } from "@/lib/image-manifest";

export const metadata = {
  title: "Gallery | First Class Private School",
  description: "A selection of photographs from life at First Class Private School — classrooms, sport, boarding, events and community moments.",
};

export default function GalleryPage() {
  const hero = LANDSCAPE_IMAGES[1];

  // Build an interesting masonry layout with alternating sizes
  const featured = IMAGES.slice(0, 3);
  const rest = IMAGES.slice(3);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life at FCPS"
        description="Classrooms, sports fields, boarding houses and community moments — a visual story of First Class Private School."
        image={hero}
      />

      {/* Featured strip — 3 large images */}
      <section className="bg-white pt-16 pb-4 md:pt-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {featured.map((img, idx) => (
              <FadeIn key={img.src} delay={idx * 0.06}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={img.src}
                    alt={`First Class Private School — featured photograph ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Full masonry grid */}
      <section className="bg-white py-8 pb-20 md:pb-28">
        <Container>
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {rest.map((img, idx) => (
              <FadeIn key={img.src} delay={(idx % 8) * 0.04} className="break-inside-avoid">
                <div className="group relative overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={img.src}
                    alt={`First Class Private School photograph ${idx + 4}`}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
