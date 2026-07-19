import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images, upcomingEvents } from "@/lib/data";
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
  description: "Upcoming events and calendar dates for First Class Private School.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming events"
        description="Calendar dates, open days and school events at First Class Private School."
        image={images.aboutGrid3}
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((event, idx) => (
              <FadeIn key={event.id} delay={idx * 0.05}>
                <article className="rounded-sm border border-soft bg-white p-6 shadow-sm">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.category}
                      </div>
                      <h2 className="mt-3 font-serif text-2xl text-charcoal">{event.title}</h2>
                    </div>
                    <div className="text-sm text-muted md:text-right">
                      <p className="flex items-center gap-2 md:justify-end">
                        <Clock className="h-4 w-4 text-gold" />
                        {formatDate(event.startDate)}
                        {event.endDate !== event.startDate && ` – ${formatDate(event.endDate)}`}
                        , {event.time}
                      </p>
                      <p className="mt-1 flex items-center gap-2 md:justify-end">
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
    </>
  );
}
