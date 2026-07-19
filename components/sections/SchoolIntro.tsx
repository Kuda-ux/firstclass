import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images, siteSettings } from "@/lib/data";
import { ALL_IMAGES } from "@/lib/image-manifest";

export function SchoolIntro() {
  const secondary = ALL_IMAGES[5] ?? images.intro;
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            {/* Two-photo overlap card */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <Image
                  src={images.intro}
                  alt="First Class Private School — learners in class"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 right-0 w-2/5 overflow-hidden rounded-sm border-4 border-cream shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={secondary}
                    alt="FCPS school life"
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:pt-0 pt-8">
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
            <Button as="a" href="/about" variant="outline" className="mt-6">
              Learn more about FCPS
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
