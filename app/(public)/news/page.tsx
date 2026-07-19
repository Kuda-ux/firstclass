import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images, newsItems } from "@/lib/data";
import { Calendar } from "lucide-react";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-ZW", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const metadata = {
  title: "News | First Class Private School",
  description: "Latest news and notices from First Class Private School.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Latest news"
        description="Updates, notices and stories from First Class Private School."
        image={images.aboutGrid2}
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 0.05}>
                <article className="h-full rounded-sm border border-soft bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy">
                    <Calendar className="h-4 w-4" />
                    {item.category}
                  </div>
                  <h2 className="mt-3 font-serif text-2xl text-charcoal">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted">{formatDate(item.date)}</p>
                  <p className="mt-4 text-muted">{item.excerpt}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          {newsItems.length === 0 && (
            <p className="text-center text-muted">No news items available.</p>
          )}
        </Container>
      </section>
    </>
  );
}
