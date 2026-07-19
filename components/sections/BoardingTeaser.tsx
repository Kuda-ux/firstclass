import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";

export function BoardingTeaser() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              eyebrow="Boarding"
              title={homeContent.boardingTeaser.title}
              description={homeContent.boardingTeaser.body}
            />
            <Button as="a" href="/boarding" className="mt-6">
              Boarding information
            </Button>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
              <Image
                src={images.boarding}
                alt="Boarding facilities at First Class Private School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
