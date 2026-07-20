import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { TransportForm } from "@/components/forms/TransportForm";
import { images, transportContent, siteSettings } from "@/lib/data";
import { Bus, Info, Phone } from "lucide-react";

export const metadata = {
  title: "Transport & Bus Hire | First Class Private School",
  description: "School transport and bus hire information for First Class Private School, Kwekwe.",
};

// Vehicle images that show the actual FCPS fleet and buses
const vehicleGallery = [
  { src: images.bus1,    alt: "FCPS school bus — side view" },
  { src: images.bus2,    alt: "FCPS school bus — different angle" },
  { src: images.bus3,    alt: "FCPS school bus — front-left" },
  { src: images.busRear, alt: "FCPS bus rear showing school motto" },
  { src: images.bus5,    alt: "FCPS bus at dusk" },
  { src: images.car1,    alt: "FCPS branded school car" },
];

export default function TransportPage() {
  return (
    <>
      {/* Header: full FCPS fleet photo — van + minibus + car all together */}
      <PageHeader
        eyebrow="Transport"
        title={transportContent.title}
        description={transportContent.intro}
        image={images.fleet}
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
                    <Bus className="mt-0.5 h-5 w-5 shrink-0 text-burgundy" />
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-start gap-3 rounded-sm border border-gold/30 bg-white p-4">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-muted">{transportContent.note}</p>
              </div>
              <a
                href={`tel:${siteSettings.phones[0].replace(/\s/g, "")}`}
                className="mt-6 inline-flex items-center gap-2 font-medium text-burgundy hover:underline"
              >
                <Phone className="h-4 w-4" />
                {siteSettings.phones[0]}
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

      {/* Our vehicles — only FCPS bus and car photos */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Our Fleet"
              title="Safe, branded FCPS transport"
              description="Our vehicles are clearly branded with the First Class Private School identity, providing safe and reliable transport for our learners."
              align="center"
              className="mx-auto mb-12 text-center"
            />
          </FadeIn>

          {/* Flagship fleet photo */}
          <FadeIn>
            <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-sm shadow-md">
              <Image
                src={images.fleet}
                alt="FCPS full fleet — school van, minibus and branded car"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </FadeIn>

          {/* Individual vehicle gallery — buses and cars only */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {vehicleGallery.map((v, idx) => (
              <FadeIn key={v.src} delay={idx * 0.05}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={v.src}
                    alt={v.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
