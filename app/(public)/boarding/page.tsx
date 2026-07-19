import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";
import { Bed, Clock, Shield, Utensils } from "lucide-react";

const features = [
  { title: "Supervised routines", icon: Clock },
  { title: "Safe accommodation", icon: Shield },
  { title: "Meals provided", icon: Utensils },
  { title: "Dedicated study time", icon: Bed },
];

// Actual boarding room and dormitory interior images
const dormPhotos = [
  { src: images.boardingRoom,  alt: "Twin boarding room with study desks — FCPS" },
  { src: images.boardingDorm1, alt: "Three-bed dormitory room at FCPS" },
  { src: images.boardingDorm2, alt: "Bunk-bed dormitory at FCPS" },
  { src: images.boardingDorm3, alt: "Shared dorm room — FCPS boarding" },
];

// Portrait uniform photos for the community strip
const uniformPortraits = [
  "/images/WhatsApp_Image_2026-07-17_at_10.39.13.jpeg",    // 3 girls formal blazer
  "/images/WhatsApp_Image_2026-07-17_at_10.39.37.jpeg",    // girl winter uniform
  "/images/WhatsApp_Image_2026-07-17_at_10.39.13_(1).jpeg",// formal uniform portrait
  "/images/WhatsApp_Image_2026-07-17_at_10.39.13_(2).jpeg",// formal uniform portrait
];

export const metadata = {
  title: "Boarding | First Class Private School",
  description: "Boarding information for First Class Private School in Kwekwe, Zimbabwe.",
};

export default function BoardingPage() {
  return (
    <>
      {/* Header: campus buildings at golden-hour sunset */}
      <PageHeader
        eyebrow="Boarding"
        title={homeContent.boardingTeaser.title}
        description={homeContent.boardingTeaser.body}
        image={images.boarding}
      />

      {/* Overview + features */}
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

            {/* Dorm interior collage — twin room (full width) + two smaller rooms */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                  <Image
                    src={images.boardingRoom}
                    alt="Twin boarding room with study desks at FCPS"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={images.boardingDorm1}
                    alt="Three-bed dormitory at FCPS"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={images.boardingDorm2}
                    alt="Bunk-bed dormitory at FCPS"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* All four dorm photos in a grid with captions */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Accommodation"
              title="Inside our boarding rooms"
              description="Comfortable, clean rooms with beds, study desks and adequate storage — everything learners need to feel at home."
              align="center"
              className="mx-auto mb-10 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dormPhotos.map((photo, idx) => (
              <FadeIn key={photo.src} delay={idx * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
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

      {/* Uniform / community strip */}
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Our Boarders"
              title="Learners in their element"
              align="center"
              className="mx-auto mb-10 text-center"
            />
          </FadeIn>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {uniformPortraits.map((src, idx) => (
              <FadeIn key={src} delay={idx * 0.06}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={src}
                    alt={`FCPS learner in school uniform ${idx + 1}`}
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
