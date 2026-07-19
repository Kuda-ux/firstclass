import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent } from "@/lib/data";
import {
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  Home,
  Trophy,
} from "lucide-react";

const icons = [
  Users,
  BookOpen,
  GraduationCap,
  Heart,
  Home,
  Trophy,
];

export function WhyChoose() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Why Parents Choose FCPS"
            title="A place where learners are known, supported and challenged"
            align="center"
            className="mb-14"
          />
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeContent.whyChoose.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <FadeIn key={item.title} delay={idx * 0.05}>
                <div className="h-full rounded-sm border border-soft bg-cream p-6 transition-shadow hover:shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
