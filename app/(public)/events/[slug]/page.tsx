import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { allEvents, pastEvents, siteSettings } from "@/lib/data";
import { Calendar, Clock, MapPin, Phone, MessageCircle, ArrowLeft, CheckCircle } from "lucide-react";

const everyEvent = [...allEvents, ...pastEvents];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return everyEvent.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = everyEvent.find((e) => e.slug === slug);
  return {
    title: event ? `${event.title} | First Class Private School` : "Event | First Class Private School",
    description: event?.shortDescription || "Event details for First Class Private School.",
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = everyEvent.find((e) => e.slug === slug);

  if (!event) return notFound();

  const contact = event.contactNumbers?.[0]?.replace(/\s/g, "") ?? siteSettings.phones[0]?.replace(/\s/g, "");
  const waNumber = contact.replace(/^0/, "263");

  return (
    <>
      <section className="bg-wine py-16 text-white md:py-24">
        <Container>
          <FadeIn>
            <Link href="/events" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-gold">
              <ArrowLeft className="h-4 w-4" />
              Back to events
            </Link>
            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold text-white">
                  <Calendar className="h-3.5 w-3.5" />
                  {event.category}
                </span>
                <h1 className="mt-4 font-serif text-3xl md:text-5xl">{event.title}</h1>
                <p className="mt-2 text-lg text-white/80">
                  {formatDate(event.startDate)}
                  {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`} &nbsp;|&nbsp; {event.time}
                </p>
              </div>
              {event.featured && (
                <span className="w-fit rounded-full border border-gold bg-gold/20 px-4 py-2 text-sm font-semibold text-gold">
                  Featured Event
                </span>
              )}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-white py-12 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="overflow-hidden rounded-sm border border-soft bg-cream p-2 shadow-sm">
                {event.image ? (
                  <a href={event.image} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={event.image}
                      alt={`${event.title} flyer`}
                      width={960}
                      height={1280}
                      className="h-auto w-full object-contain object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </a>
                ) : (
                  <p className="p-8 text-center text-muted">No flyer available.</p>
                )}
                <p className="mt-2 text-center text-xs text-muted">Click the flyer to view the full-size image</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {event.shortDescription && (
                  <p className="text-lg leading-relaxed text-charcoal">{event.shortDescription}</p>
                )}

                <div className="rounded-sm border border-soft bg-cream p-6">
                  <h2 className="font-serif text-xl text-charcoal">Event details</h2>
                  <ul className="mt-4 space-y-3 text-muted">
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-gold" />
                      <span>
                        {formatDate(event.startDate)}
                        {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}
                        <br />
                        <span className="font-medium text-charcoal">{event.time}</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-gold" />
                      <span>
                        {event.location}
                        {event.venue && (
                          <>
                            <br />
                            <span className="font-medium text-charcoal">{event.venue}</span>
                          </>
                        )}
                      </span>
                    </li>
                    {typeof event.fee === "number" && (
                      <li className="flex items-start gap-3">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">$</span>
                        <span>
                          Entrance test fee: <span className="font-medium text-charcoal">{event.feeCurrency || "US$"}{event.fee}</span>
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {event.bring && event.bring.length > 0 && (
                  <div className="rounded-sm border border-soft bg-cream p-6">
                    <h2 className="font-serif text-xl text-charcoal">Learners must bring</h2>
                    <ul className="mt-4 space-y-2">
                      {event.bring.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-muted">
                          <CheckCircle className="h-4 w-4 text-burgundy" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  {event.curricula && event.curricula.length > 0 && (
                    <div className="rounded-sm border border-soft p-5">
                      <h3 className="font-serif text-lg text-charcoal">Curricula</h3>
                      <p className="mt-2 text-sm text-muted">{event.curricula.join(" & ")}</p>
                    </div>
                  )}
                  {event.facilities && event.facilities.length > 0 && (
                    <div className="rounded-sm border border-soft p-5">
                      <h3 className="font-serif text-lg text-charcoal">Facilities</h3>
                      <p className="mt-2 text-sm text-muted">{event.facilities.join(" & ")}</p>
                    </div>
                  )}
                </div>

                {event.supportingMessage && (
                  <p className="text-center text-lg font-medium italic text-burgundy">
                    {event.supportingMessage}
                  </p>
                )}
                {event.closingSlogan && (
                  <p className="text-center font-serif text-2xl text-charcoal">
                    {event.closingSlogan}
                  </p>
                )}

                <div className="flex flex-wrap gap-3 pt-4">
                  {contact && (
                    <Button as="a" href={`tel:${contact}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call to book
                    </Button>
                  )}
                  {contact && (
                    <Button as="a" href={`https://wa.me/${waNumber}`} variant="outline" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp enquiry
                    </Button>
                  )}
                  {event.image && (
                    <Button as="a" href={event.image} variant="ghost" target="_blank" rel="noopener noreferrer">
                      View full flyer
                    </Button>
                  )}
                </div>

                {event.contactNumbers && event.contactNumbers.length > 0 && (
                  <p className="text-sm text-muted">
                    Contact: {event.contactNumbers.join(" | ")}
                  </p>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
