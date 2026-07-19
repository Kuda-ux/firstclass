import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images, siteSettings } from "@/lib/data";

export function SchoolIntro() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
              <Image
                src={images.intro}
                alt="First Class Private School life"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeader
              eyebrow="About FCPS"
              title={homeContent.intro.title}
              description={homeContent.intro.body[0]}
            />
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              {homeContent.intro.body[1]}
            </p>
            <div className="mt-6 border-l-4 border-gold bg-white pl-5 pr-4 py-4 shadow-sm">
              <p className="font-serif text-xl italic text-burgundy">
                &ldquo;{siteSettings.motto}&rdquo;
              </p>
              <p className="mt-1 text-sm text-muted">School motto</p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
