import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";
import { ALL_IMAGES, PORTRAIT_IMAGES } from "@/lib/image-manifest";
import { Bed, Clock, Shield, Utensils } from "lucide-react";

const features = [
  { title: "Supervised routines", icon: Clock },
  { title: "Safe accommodation", icon: Shield },
  { title: "Meals provided", icon: Utensils },
  { title: "Dedicated study time", icon: Bed },
];

export const metadata = {
  title: "Boarding | First Class Private School",
  description: "Boarding information for First Class Private School in Kwekwe, Zimbabwe.",
};

export default function BoardingPage() {
  const portraits = PORTRAIT_IMAGES.slice(0, 4);
  return (
    <>
      <PageHeader
        eyebrow="Boarding"
        title={homeContent.boardingTeaser.title}
        description={homeContent.boardingTeaser.body}
        image={images.boarding}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                eyebrow="A home away from home"
                title="Structured, caring and supervised"
              />
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Our boarding programme is designed to give learners stability, structure and the support they need to focus on their studies and personal growth. Specific details about dormitories, routines and requirements should be confirmed with the school office.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex items-center gap-3 rounded-sm bg-white p-4 shadow-sm">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-charcoal">{f.title}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              {/* Stacked photo collage */}
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={images.boarding}
                    alt="Boarding at First Class Private School"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {ALL_IMAGES.slice(21, 23).map((src, idx) => (
                  <div key={src} className="relative aspect-square overflow-hidden rounded-sm shadow-sm">
                    <Image
                      src={src}
                      alt={`Boarding life at FCPS ${idx + 2}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Portrait photos of learners */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Our Boarders"
              title="Faces of the boarding community"
              align="center"
              className="mx-auto mb-10 text-center"
            />
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {portraits.map((src, idx) => (
              <FadeIn key={src} delay={idx * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={src}
                    alt={`FCPS boarder ${idx + 1}`}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
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
