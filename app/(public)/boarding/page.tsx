import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { homeContent, images } from "@/lib/data";
import Image from "next/image";
import { Bed, Clock, Shield, Utensils } from "lucide-react";

const features = [
  { title: "Supervised routines", icon: Clock },
  { title: "Safe accommodation", icon: Shield },
  { title: "Meals provided", icon: Utensils },
  { title: "Study time", icon: Bed },
];

export const metadata = {
  title: "Boarding | First Class Private School",
  description: "Boarding information for First Class Private School in Kwekwe, Zimbabwe.",
};

export default function BoardingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Boarding"
        title={homeContent.boardingTeaser.title}
        description={homeContent.boardingTeaser.body}
        image={images.boarding}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                eyebrow="A home away from home"
                title="Structured, caring and supervised"
              />
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Our boarding programme is designed to give learners stability, structure and the support they need to focus on their studies and personal growth. Specific details about dormitories, routines and requirements should be confirmed with the school office.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div key={f.title} className="flex items-center gap-3 rounded-sm bg-white p-4 shadow-sm">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-charcoal">{f.title}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                <Image
                  src={images.boarding}
                  alt="Boarding at First Class Private School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
