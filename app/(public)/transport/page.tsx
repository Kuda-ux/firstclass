import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { TransportForm } from "@/components/forms/TransportForm";
import { images, transportContent } from "@/lib/data";
import { Bus, Info, Phone } from "lucide-react";

export const metadata = {
  title: "Transport & Bus Hire | First Class Private School",
  description: "School transport and bus hire information for First Class Private School.",
};

export default function TransportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transport"
        title={transportContent.title}
        description={transportContent.intro}
        image={images.transport}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <SectionHeader
                eyebrow="Services"
                title="How we can help"
              />
              <ul className="mt-6 space-y-3">
                {transportContent.services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-muted">
                    <Bus className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 rounded-sm border border-gold/30 bg-white p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-muted">{transportContent.note}</p>
              </div>
              <a
                href="tel:+263773870090"
                className="mt-6 inline-flex items-center gap-2 text-burgundy hover:underline"
              >
                <Phone className="h-4 w-4" />
                +263 773 870 090
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-sm border border-soft bg-white p-6 shadow-sm">
                <h2 className="mb-6 font-serif text-2xl text-charcoal">Transport enquiry</h2>
                <TransportForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
