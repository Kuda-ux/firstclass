import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { academicsContent, images } from "@/lib/data";
import { BookOpen, Globe, GraduationCap, FlaskConical, Laptop, Sprout } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Languages & Humanities": Globe,
  "Commercial":             BookOpen,
  "Mathematics & Sciences": FlaskConical,
  "Technology & Practical": Laptop,
};

export const metadata = {
  title: "Academics | First Class Private School",
  description:
    "ZIMSEC and Cambridge academic pathways with 15 subjects across languages, sciences, commerce and practical skills at First Class Private School, Kwekwe.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Academic Pathways"
        description={academicsContent.intro}
        image={images.academics}
      />

      {/* ── Curriculum pathways ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Curricula"
              title="ZIMSEC and Cambridge"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {academicsContent.pathways.map((path, idx) => {
              const Icon = idx === 0 ? BookOpen : Globe;
              return (
                <FadeIn key={path.name} delay={idx * 0.1}>
                  <div className="h-full rounded-sm border border-soft bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-burgundy text-gold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal">{path.name}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{path.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-10 rounded-sm border border-gold/30 bg-white p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-burgundy" />
                <p className="text-muted">{academicsContent.note}</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Subjects offered ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Subjects Offered"
              title="15 subjects across four departments"
              align="center"
              className="mx-auto mb-14 text-center"
            />
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2">
            {academicsContent.subjectGroups.map((group, gIdx) => {
              const Icon = categoryIcons[group.category] ?? Sprout;
              return (
                <FadeIn key={group.category} delay={gIdx * 0.08}>
                  <div className="rounded-sm border border-soft bg-cream p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-xl text-charcoal">{group.category}</h3>
                    </div>
                    <ul className="space-y-2">
                      {group.subjects.map((subject) => (
                        <li key={subject} className="flex items-center gap-2 text-muted">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Classroom imagery strip ───────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="In the Classroom"
              title="Learning in action"
              align="center"
              className="mx-auto mb-10 text-center"
            />
          </FadeIn>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {(
              [
                images.classBuilding1,
                images.classBuilding2,
                images.classBuilding3,
                images.classBuilding4,
                images.classBuilding5,
                images.classBuilding6,
                images.classBuilding7,
                images.classBuilding8,
              ] as string[]
            ).map((src, idx) => (
              <FadeIn key={src} delay={idx * 0.04}>
                <div className="group relative aspect-square overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={src}
                    alt={`FCPS classroom and campus ${idx + 1}`}
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
