import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { academicsContent } from "@/lib/data";
import { BookOpen, Globe } from "lucide-react";

const icons = [BookOpen, Globe];

export function AcademicPathways() {
  return (
    <section className="bg-wine py-20 md:py-28 text-white">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Academic Pathways"
            title="ZIMSEC and Cambridge"
            description={academicsContent.intro}
            align="center"
            className="mx-auto mb-14 text-center"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {academicsContent.pathways.map((path, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={path.name} delay={idx * 0.1}>
                <div className="h-full rounded-sm border border-white/10 bg-white/5 p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-charcoal">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    {path.name}
                  </h3>
                  <p className="mt-3 leading-relaxed text-white/80">
                    {path.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-white/70">
            {academicsContent.note}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
