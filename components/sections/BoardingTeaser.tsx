import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";

export function BoardingTeaser() {
  // Secondary overlap: actual boarding room interior (twin beds + desks)
  const secondary = images.boardingRoom;
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
            {/* Overlapping photo pair */}
            <div className="relative h-72 sm:h-96">
              <div className="absolute right-0 top-0 w-4/5 overflow-hidden rounded-sm shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images.boarding}
                    alt="Boarding at First Class Private School"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-2/5 overflow-hidden rounded-sm shadow-lg border-4 border-white">
                <div className="relative aspect-square">
                  <Image
                    src={secondary}
                    alt="Boarding community life"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
