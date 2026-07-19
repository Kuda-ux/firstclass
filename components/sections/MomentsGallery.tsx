import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";

export function MomentsGallery() {
  const moments = images.moments ?? [];
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Story"
            title="Moments that shape a learner"
            description="A glimpse into everyday life, learning, sport and community at First Class Private School."
            align="center"
            className="mx-auto mb-14 text-center"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {moments.map((src, idx) => {
            const isFeature = idx === 0 || idx === 6;
            const isTall = idx === 3 || idx === 10;
            return (
              <FadeIn
                key={src}
                delay={idx * 0.03}
                className={isFeature ? "col-span-2 row-span-2" : isTall ? "row-span-2" : ""}
              >
                <div className="group relative h-full min-h-[10rem] overflow-hidden rounded-sm bg-white shadow-sm md:min-h-[12rem]">
                  <Image
                    src={src}
                    alt={`First Class Private School moment ${idx + 1}`}
                    fill
                    loading={idx < 4 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={isFeature ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
