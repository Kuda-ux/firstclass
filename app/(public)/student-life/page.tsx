import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";

const areas = [
  { title: "Academics",  description: "Focused class time supported by personal attention and clear learning goals.", src: images.life1 },
  { title: "Sport",      description: "Athletics, team games and physical development for healthy, confident learners.", src: images.life2 },
  { title: "Clubs",      description: "Clubs and societies that encourage curiosity, creativity and leadership.",       src: images.life3 },
  { title: "Boarding",   description: "A structured, supervised boarding experience for learners who live away from home.", src: images.life4 },
  { title: "Trips",      description: "Educational trips that extend learning beyond the classroom.",                   src: images.life5 },
  { title: "Community",  description: "Events and outreach that build a strong, caring school community.",             src: images.life6 },
];

// Masonry strip — curated selection that tells the school story (no buses)
const mosaicImages = [
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.39.13.jpeg",    w: 776, h: 1080, alt: "FCPS learners in formal blazer uniform" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.33_(1).jpeg",w: 960, h: 1280, alt: "Meeting in the FCPS reception" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.22.jpeg",    w: 1000, h: 750, alt: "FCPS Form 4 Class building" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.39.37.jpeg",    w: 656, h: 1080, alt: "FCPS learner in winter school uniform" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.34.25.jpeg",    w: 1000, h: 750, alt: "FCPS classroom block at dusk" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.17_(1).jpeg",w: 1000, h: 750, alt: "FCPS school reception — welcoming" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.28.jpeg",    w: 1280, h: 960, alt: "FCPS campus at golden hour" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.07.jpeg",    w: 1000, h: 750, alt: "FCPS reception area" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.30.jpeg",    w: 1280, h: 960, alt: "New FCPS classroom block" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.32_(2).jpeg",w: 1280, h: 960, alt: "FCPS campus at sunset" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.39.13_(1).jpeg",w: 776, h: 1080, alt: "FCPS learner in formal uniform" },
  { src: "/images/WhatsApp_Image_2026-07-17_at_10.40.17.jpeg",    w: 1280, h: 960, alt: "FCPS main school gate" },
];

export const metadata = {
  title: "Student Life | First Class Private School",
  description: "Sport, culture, clubs and community life at First Class Private School.",
};

export default function StudentLifePage() {
  return (
    <>
      {/* Header: large group of learners at Chahwanda Stadium — vibrant, energetic */}
      <PageHeader
        eyebrow="Student Life"
        title="Life inside and outside the classroom"
        description="A balanced school experience where learners grow academically, physically and socially."
        image={images.studentLife}
      />

      {/* Six life-area cards */}
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

      {/* Feature banner — two wide landscape photos */}
      <section className="bg-wine py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="More Moments"
              title="Captured at FCPS"
              align="center"
              variant="dark"
              className="mx-auto mb-10 text-center"
            />
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            <FadeIn>
              {/* Stadium group photo — learners on a sports/excursion trip */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={images.studentLife}
                  alt="FCPS learners at Chahwanda Stadium"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              {/* Restaurant outing — school trip beyond the classroom */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={images.life5}
                  alt="FCPS learners on a school trip"
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

      {/* Masonry mosaic — curated campus/learner photos */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="columns-2 gap-3 space-y-3 md:columns-4">
            {mosaicImages.map((img, idx) => (
              <FadeIn key={img.src} delay={(idx % 6) * 0.04} className="break-inside-avoid">
                <div className="group overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
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
