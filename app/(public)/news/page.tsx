import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images, newsItems, newsImages } from "@/lib/data";
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
  description: "Latest news, notices and stories from First Class Private School.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Latest news"
        description="Updates, notices and stories from First Class Private School. Click any poster to view it larger."
        image={images.aboutGrid2}
      />

      {/* News articles */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Recent News"
              title="News articles"
              className="mb-10"
            />
          </FadeIn>
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
        </Container>
      </section>

      {/* News poster gallery */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Notices & Posters"
              title="Latest news posters"
              align="center"
              className="mx-auto mb-12 text-center"
            />
          </FadeIn>
          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {newsImages.map((src, idx) => (
              <FadeIn key={src} delay={(idx % 8) * 0.04} className="break-inside-avoid">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-sm shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`FCPS news poster ${idx + 1}`}
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
          {newsImages.length === 0 && (
            <p className="text-center text-muted">No news posters available.</p>
          )}
        </Container>
      </section>
    </>
  );
}
