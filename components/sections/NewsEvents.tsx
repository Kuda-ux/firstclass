import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { newsItems, upcomingEvents } from "@/lib/data";
import { Calendar, MapPin, Clock } from "lucide-react";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-ZW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function NewsEvents() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              eyebrow="Latest News"
              title="What is happening at FCPS"
              className="mb-8"
            />
            <div className="flex flex-col gap-4">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="rounded-sm border border-soft bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                    <span>{item.category}</span>
                    <span className="text-muted">{formatDate(item.date)}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-charcoal">
                    <Link href={`/news#${item.slug}`} className="hover:text-burgundy">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.excerpt}</p>
                </article>
              ))}
            </div>
            <Button as="a" href="/news" variant="outline" className="mt-6">
              View all news
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionHeader
              eyebrow="Upcoming Events"
              title="Mark your calendar"
              className="mb-8"
            />
            <div className="flex flex-col gap-4">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="rounded-sm border border-soft bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                    <Calendar className="h-4 w-4" />
                    <span>{event.category}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-charcoal">
                    {event.title}
                  </h3>
                  <div className="mt-3 space-y-1 text-sm text-muted">
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold" />
                      {formatDate(event.startDate)}
                      {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}, {event.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gold" />
                      {event.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <Button as="a" href="/events" variant="outline" className="mt-6">
              Full calendar
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
