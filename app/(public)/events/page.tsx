"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { images, allEvents, pastEvents, eventsImages } from "@/lib/data";
import { Calendar, Clock, MapPin, Phone, MessageCircle, Star } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isPast(event: (typeof allEvents)[0], now: Date) {
  return new Date(event.endAt).getTime() < now.getTime();
}

export default function EventsPage() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const currentUpcoming = now
    ? allEvents.filter((event) => !isPast(event, now))
    : allEvents;
  const autoPast = now ? allEvents.filter((event) => isPast(event, now)) : [];
  const allPast = [...pastEvents, ...autoPast].sort(
    (a, b) => new Date(b.endAt).getTime() - new Date(a.endAt).getTime()
  );

  const sortedUpcoming = [...currentUpcoming].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming events"
        description="Calendar dates, open days and school events at First Class Private School. Click an event to view full details."
        image={images.aboutGrid3}
      />

      {/* Upcoming events */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader eyebrow="Calendar" title="Event calendar" className="mb-10" />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedUpcoming.map((event, idx) => (
              <FadeIn key={event.id} delay={idx * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-soft bg-white shadow-sm">
                  {event.image && (
                    <Link href={`/events/${event.slug}`} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {event.featured && (
                        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-white">
                          <Star className="h-3 w-3" />
                          Featured
                        </div>
                      )}
                    </Link>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.category}
                    </div>
                    <h2 className="mt-3 font-serif text-2xl text-charcoal">
                      <Link href={`/events/${event.slug}`} className="hover:text-burgundy">
                        {event.title}
                      </Link>
                    </h2>
                    <div className="mt-3 space-y-1 text-sm text-muted">
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gold" />
                        {formatDate(event.startDate)}
                        {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}, {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gold" />
                        {event.location}
                        {event.venue && `, ${event.venue}`}
                      </p>
                      {typeof event.fee === "number" && (
                        <p className="flex items-center gap-2 font-medium text-charcoal">
                          <span className="inline-block h-4 w-4 rounded-full bg-gold/20 text-center text-xs leading-4 text-gold">$</span>
                          Entrance fee: {event.feeCurrency || "US$"}{event.fee}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      <Button as="a" href={`/events/${event.slug}`} size="sm">
                        View details
                      </Button>
                      {event.contactNumbers && event.contactNumbers.length > 0 && (
                        <>
                          <Button as="a" href={`tel:${event.contactNumbers[0].replace(/\s/g, "")}`} size="sm" variant="outline">
                            <Phone className="mr-1 h-3.5 w-3.5" />
                            Call
                          </Button>
                          <Button as="a" href={`https://wa.me/${event.contactNumbers[0].replace(/\s/g, "").replace(/^0/, "263")}`} size="sm" variant="outline" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-1 h-3.5 w-3.5" />
                            WhatsApp
                          </Button>
                        </>
                      )}
                      {event.image && (
                        <Button as="a" href={event.image} target="_blank" rel="noopener noreferrer" size="sm" variant="ghost">
                          View full flyer
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          {sortedUpcoming.length === 0 && (
            <p className="text-center text-muted">No upcoming events at the moment.</p>
          )}
        </Container>
      </section>

      {/* Past events archive */}
      {allPast.length > 0 && (
        <section className="bg-white py-16 md:py-24">
          <Container>
            <FadeIn>
              <SectionHeader
                eyebrow="Archive"
                title="Past events"
                align="center"
                className="mx-auto mb-12 text-center"
              />
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allPast.map((event, idx) => (
                <FadeIn key={event.id} delay={idx * 0.05}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-soft bg-cream/50 shadow-sm">
                    {event.image && (
                      <Link href={`/events/${event.slug}`} className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </Link>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.category}
                      </div>
                      <h2 className="mt-3 font-serif text-xl text-charcoal">
                        <Link href={`/events/${event.slug}`} className="hover:text-burgundy">
                          {event.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-sm text-muted">
                        {formatDate(event.startDate)}
                        {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}, {event.time}
                      </p>
                      <Button as="a" href={`/events/${event.slug}`} variant="outline" size="sm" className="mt-4 w-fit">
                        View details
                      </Button>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Event poster gallery */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Posters & Flyers"
              title="Latest event posters"
              align="center"
              className="mx-auto mb-12 text-center"
            />
          </FadeIn>
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {eventsImages.map((src, idx) => (
              <FadeIn key={src} delay={(idx % 8) * 0.04} className="break-inside-avoid">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-sm shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`FCPS event poster ${idx + 1}`}
                    width={960}
                    height={1280}
                    loading="lazy"
                    className="h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
          {eventsImages.length === 0 && (
            <p className="text-center text-muted">No event posters available.</p>
          )}
        </Container>
      </section>
    </>
  );
}
