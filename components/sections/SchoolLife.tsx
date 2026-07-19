import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";

const lifeTiles = [
  { label: "Academics", src: images.life1 },
  { label: "Sport", src: images.life2 },
  { label: "Clubs", src: images.life3 },
  { label: "Boarding", src: images.life4 },
  { label: "Trips", src: images.life5 },
  { label: "Community", src: images.life6 },
];

export function SchoolLife() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="School Life"
            title="A balanced life inside and outside the classroom"
            align="center"
            className="mx-auto mb-14 text-center"
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifeTiles.map((tile, idx) => (
            <FadeIn key={tile.label} delay={idx * 0.05}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={tile.src}
                  alt={`${tile.label} at First Class Private School`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="font-serif text-xl text-white">{tile.label}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
