import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images, upcomingEvents, eventsImages } from "@/lib/data";
import { Calendar, Clock, MapPin } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "Events | First Class Private School",
  description: "Upcoming events, calendar dates and event posters for First Class Private School.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming events"
        description="Calendar dates, open days and school events at First Class Private School. Click any poster to view it larger."
        image={images.aboutGrid3}
      />

      {/* Events list */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Calendar"
              title="Event calendar"
              className="mb-10"
            />
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, idx) => (
              <FadeIn key={event.id} delay={idx * 0.05}>
                <article className="group h-full overflow-hidden rounded-sm border border-soft bg-white shadow-sm">
                  {event.image && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider text-burgundy">
                      <Calendar className="h-3.5 w-3.5" />
                      {event.category}
                    </div>
                    <h2 className="mt-3 font-serif text-2xl text-charcoal">{event.title}</h2>
                    <div className="mt-3 text-sm text-muted">
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gold" />
                        {formatDate(event.startDate)}
                        {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}
                        , {event.time}
                      </p>
                      <p className="mt-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gold" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          {upcomingEvents.length === 0 && (
            <p className="text-center text-muted">No upcoming events at the moment.</p>
          )}
        </Container>
      </section>

      {/* Event poster gallery */}
      <section className="bg-white py-16 md:py-24">
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
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
