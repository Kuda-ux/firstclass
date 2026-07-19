import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";

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
                <div className="group relative overflow-hidden rounded-sm bg-white shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={area.src}
                      alt={`${area.title} at First Class Private School`}
                      fill
                      className="object-cover"
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
    </>
  );
}
