import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";
import { ALL_IMAGES, LANDSCAPE_IMAGES } from "@/lib/image-manifest";

const areas = [
  { title: "Academics", description: "Focused class time supported by personal attention and clear learning goals.", src: images.life1 },
  { title: "Sport", description: "Athletics, team games and physical development for healthy, confident learners.", src: images.life2 },
  { title: "Clubs", description: "Clubs and societies that encourage curiosity, creativity and leadership.", src: images.life3 },
  { title: "Boarding", description: "A structured, supervised boarding experience for learners who live away from home.", src: images.life4 },
  { title: "Trips", description: "Educational trips that extend learning beyond the classroom.", src: images.life5 },
  { title: "Community", description: "Events and outreach that build a strong, caring school community.", src: images.life6 },
];

export const metadata = {
  title: "Student Life | First Class Private School",
  description: "Sport, culture, clubs and community life at First Class Private School.",
};

export default function StudentLifePage() {
  const wideFeature = LANDSCAPE_IMAGES[16] ?? ALL_IMAGES[16];
  const wideFeature2 = LANDSCAPE_IMAGES[17] ?? ALL_IMAGES[17];

  return (
    <>
      <PageHeader
        eyebrow="Student Life"
        title="Life inside and outside the classroom"
        description="A balanced school experience where learners grow academically, physically and socially."
        image={images.studentLife}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Explore"
              title="A well-rounded experience"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, idx) => (
              <FadeIn key={area.title} delay={idx * 0.05}>
                <div className="group overflow-hidden rounded-sm bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={area.src}
                      alt={`${area.title} at First Class Private School`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-charcoal">{area.title}</h3>
                    <p className="mt-2 text-sm text-muted">{area.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-width photo band */}
      <section className="bg-wine py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="More Moments"
              title="Captured at FCPS"
              align="center"
              className="mx-auto mb-10 text-center text-white"
            />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={wideFeature}
                  alt="Student life at FCPS"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={wideFeature2}
                  alt="Community and events at FCPS"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Sports & extras strip */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="columns-2 gap-3 space-y-3 md:columns-4">
            {ALL_IMAGES.slice(38, 50).map((src, idx) => (
              <FadeIn key={src} delay={(idx % 6) * 0.04} className="break-inside-avoid">
                <div className="group overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={src}
                    alt={`FCPS student life moment ${idx + 1}`}
                    width={600}
                    height={450}
                    loading="lazy"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
