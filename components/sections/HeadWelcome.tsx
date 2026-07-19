import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";
import { Quote } from "lucide-react";

export function HeadWelcome() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm bg-cream shadow-sm lg:max-w-md">
              <Image
                src={images.head}
                alt="Head of School portrait"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6 text-white">
                <p className="font-serif text-lg">{homeContent.head.name}</p>
                <p className="text-sm text-white/80">{homeContent.head.title}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
              Head&apos;s Welcome
            </span>
            <h2 className="font-serif text-3xl text-charcoal md:text-4xl">
              A message from the head
            </h2>
            <blockquote className="mt-6 border-l-4 border-gold pl-5">
              <Quote className="mb-2 h-6 w-6 text-gold" />
              <p className="font-serif text-lg italic leading-relaxed text-charcoal md:text-xl">
                &ldquo;{homeContent.head.quote}&rdquo;
              </p>
            </blockquote>
            <p className="mt-4 text-sm text-gold">
              Draft content — awaiting school confirmation.
            </p>
            <Button as="a" href="/about" variant="outline" className="mt-6">
              Read the full welcome
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
