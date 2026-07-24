import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { sayNoToDrugsContent } from "@/lib/data";
import { Shield } from "lucide-react";

export function SayNoToDrugs() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Learner Welfare"
            title={sayNoToDrugsContent.title}
            description={sayNoToDrugsContent.subtitle}
            align="center"
            className="mx-auto mb-12 text-center"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-sm border border-soft bg-white p-2 shadow-sm">
              <a
                href={sayNoToDrugsContent.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={sayNoToDrugsContent.flyer}
                  alt="Say no to drugs and abuse poster"
                  width={960}
                  height={1280}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <p className="mt-2 text-center text-xs text-muted">
                Click the poster to view the full-size image
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-sm border-2 border-gold bg-white p-6 md:p-8">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-burgundy font-serif text-sm font-bold text-white">
                  {sayNoToDrugsContent.logoText}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-burgundy">
                    {sayNoToDrugsContent.school}
                  </p>
                  <p className="text-sm italic text-muted">
                    Motto: {sayNoToDrugsContent.motto}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-sm border border-soft bg-cream p-6">
                <h3 className="mb-4 font-serif text-xl text-charcoal">
                  Our Stand
                </h3>
                <ul className="space-y-3">
                  {sayNoToDrugsContent.messages.map((message) => (
                    <li key={message} className="flex items-start gap-3 text-charcoal">
                      <Shield className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" />
                      <span className="font-medium">{message}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-center font-serif text-2xl text-burgundy">
                {sayNoToDrugsContent.tagline}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
