import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { aboutContent, homeContent, images } from "@/lib/data";
import Image from "next/image";
import { Target, Compass, BookOpen, Layers } from "lucide-react";

export const metadata = {
  title: "About Us | First Class Private School",
  description:
    "Learn about First Class Private School's vision, mission, Christian values and community in Kwekwe, Zimbabwe.",
};

const mandateSectionIcon = [Target, Compass, BookOpen, Layers];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About FCPS"
        title="About First Class Private School"
        description={aboutContent.intro}
        image={images.aboutHeader}
      />

      {/* ── Vision, Mission, Mandate ─────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <Image
                  src={images.intro}
                  alt="First Class Private School reception"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeader
                eyebrow="Our Identity"
                title="Who we are and where we are going"
              />
              <p className="mt-4 leading-relaxed text-muted">
                Registered with the Ministry of Primary and Secondary Education, First Class Private School is a
                Christian-centred day and boarding secondary school serving Mbizo and surrounding communities.
                Our motto <strong className="text-charcoal">Non Ducor, Duco</strong> — I am not led, I lead —
                runs through everything we do.
              </p>
              <div className="mt-6 border-l-4 border-gold bg-white pl-5 py-4 shadow-sm">
                <p className="font-serif text-xl italic text-burgundy">
                  &ldquo;{homeContent.head.quote}&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted">{homeContent.head.title}</p>
              </div>
            </FadeIn>
          </div>

          {/* Vision / Mission / Mandate cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { label: "Our Vision", text: aboutContent.vision },
              { label: "Our Mission", text: aboutContent.mission },
              { label: "Our Mandate", text: aboutContent.mandate },
            ].map(({ label, text }, idx) => (
              <FadeIn key={label} delay={idx * 0.1}>
                <div className="h-full rounded-sm border border-soft bg-white p-8 shadow-sm">
                  <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-burgundy">
                    {label}
                  </span>
                  <p className="leading-relaxed text-muted">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Core Values ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Core Values"
              title="What guides us every day"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.values.map((value, idx) => (
              <FadeIn key={value.title} delay={idx * 0.05}>
                <div className="h-full rounded-sm border border-soft bg-cream p-6">
                  <h3 className="font-serif text-xl text-charcoal">{value.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-burgundy">{value.shona}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Focus Areas ──────────────────────────────────────────────────── */}
      <section className="bg-burgundy py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Key Focus Areas"
              title="Six pillars of a complete education"
              align="center"
              variant="dark"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.focusAreas.map((area, idx) => {
              const Icon = mandateSectionIcon[idx % mandateSectionIcon.length];
              return (
                <FadeIn key={area.title} delay={idx * 0.05}>
                  <div className="h-full rounded-sm border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-lg text-white">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{area.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Campus photos grid ───────────────────────────────────────────── */}
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
            {(
              [
                images.aboutGrid1,
                images.aboutGrid2,
                images.aboutGrid3,
                images.aboutGrid4,
                images.aboutGrid5,
                images.aboutGrid6,
              ] as string[]
            ).map((src, idx) => (
              <FadeIn key={src} delay={idx * 0.05}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt={`First Class Private School campus life ${idx + 1}`}
                    fill
                    loading="lazy"
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
