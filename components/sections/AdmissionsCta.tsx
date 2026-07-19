import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent } from "@/lib/data";

export function AdmissionsCta() {
  return (
    <section className="bg-burgundy py-20 md:py-28 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl lg:text-5xl">
              {homeContent.cta.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              {homeContent.cta.body}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button as="a" href="/admissions" size="lg" variant="secondary">
                Enquire now
              </Button>
              <Button
                as="a"
                href="/contact"
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact us
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
