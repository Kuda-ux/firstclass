import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { aboutContent, homeContent, images } from "@/lib/data";
import { ALL_IMAGES } from "@/lib/image-manifest";
import Image from "next/image";

export const metadata = {
  title: "About Us | First Class Private School",
  description: "Learn about First Class Private School's values, history and community in Kwekwe, Zimbabwe.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About FCPS"
        title="About First Class Private School"
        description={aboutContent.intro}
        image={images.aboutGrid1}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <Image
                  src={images.intro}
                  alt="First Class Private School grounds and learners"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeader
                eyebrow="Our Identity"
                title="A community built on clear values"
              />
              <p className="mt-4 text-lg leading-relaxed text-muted">
                We are a private day and boarding school in Mbizo, Kwekwe. Our name reflects our ambition: to give every learner a first-class foundation in learning, character and leadership.
              </p>
              <div className="mt-6 border-l-4 border-gold bg-white pl-5 py-4 shadow-sm">
                <p className="font-serif text-2xl italic text-burgundy">
                  &ldquo;{homeContent.head.quote}&rdquo;
                </p>
                <p className="mt-2 text-sm text-gold">Draft welcome message — awaiting confirmation.</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Our Values"
              title="What guides us every day"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.05}>
                <div className="h-full rounded-sm border border-soft bg-cream p-6">
                  <h3 className="font-serif text-xl text-charcoal">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Campus Life"
              title="A place where learners belong"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_IMAGES.slice(20, 26).map((src, idx) => (
              <FadeIn key={src} delay={idx * 0.05}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt={`First Class Private School campus life ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
