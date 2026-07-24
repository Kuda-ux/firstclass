import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { busHireContent } from "@/lib/data";
import { Bus, Check, MapPin, Phone, MessageCircle, Star } from "lucide-react";

export function BusHireAd() {
  const firstPhone = busHireContent.phones[0]?.replace(/\s/g, "") ?? "";
  const waNumber = firstPhone.replace(/^0/, "263");

  return (
    <section className="bg-cream py-16 md:py-24">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="Transport"
            title={busHireContent.title}
            description={busHireContent.subtitle}
            align="center"
            className="mx-auto mb-12 text-center"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-sm border border-soft bg-white p-2 shadow-sm">
              <a
                href={busHireContent.flyer}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={busHireContent.flyer}
                  alt="First Class bus for hire flyer"
                  width={960}
                  height={1280}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <p className="mt-2 text-center text-xs text-muted">
                Click the flyer to view the full-size image
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-sm border-2 border-gold bg-white p-6 md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold text-white">
                <Star className="h-3.5 w-3.5" />
                BUS FOR HIRE
              </div>

              <p className="mt-4 text-lg leading-relaxed text-charcoal">
                {busHireContent.subtitle}
              </p>

              <div className="mt-6 rounded-sm border border-soft bg-cream p-6">
                <h3 className="mb-4 font-serif text-xl text-charcoal">
                  Services / Use Cases
                </h3>
                <ul className="space-y-4">
                  {busHireContent.services.map((service) => (
                    <li key={service.title} className="flex gap-3 text-muted">
                      <Bus className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" />
                      <div>
                        <strong className="block text-charcoal">
                          {service.title}
                        </strong>
                        <span className="text-sm">{service.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-sm border border-soft bg-cream p-6">
                <h3 className="mb-4 font-serif text-xl text-charcoal">
                  Vehicle Features
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {busHireContent.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted">
                      <Check className="h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-sm border border-soft bg-cream p-6">
                <h3 className="mb-4 font-serif text-xl text-charcoal">
                  Contact & Location
                </h3>
                <p className="mb-3 flex items-start gap-2 text-muted">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                  <span>
                    {busHireContent.contactLabel}:{" "}
                    {busHireContent.phones.map((phone, idx) => (
                      <span key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="font-medium text-burgundy hover:underline"
                        >
                          {phone}
                        </a>
                        {idx < busHireContent.phones.length - 1 && " / "}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex items-start gap-2 text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                  <span>
                    <strong className="text-charcoal">ADDRESS:</strong>{" "}
                    {busHireContent.address}
                  </span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {firstPhone && (
                  <Button as="a" href={`tel:${firstPhone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call to book
                  </Button>
                )}
                {waNumber && (
                  <Button
                    as="a"
                    href={`https://wa.me/${waNumber}`}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp enquiry
                  </Button>
                )}
                <Button
                  as="a"
                  href={busHireContent.flyer}
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full flyer
                </Button>
              </div>

              <p className="mt-8 text-center font-serif text-2xl text-charcoal">
                {busHireContent.slogan}
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
