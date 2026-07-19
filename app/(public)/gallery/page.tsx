import fs from "fs";
import path from "path";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata = {
  title: "Gallery | First Class Private School",
  description: "A selection of photographs from life at First Class Private School.",
};

export default function GalleryPage() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const files = fs.readdirSync(imagesDir).filter((f) =>
    /\.(jpe?g|png|webp)$/i.test(f)
  );

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life at FCPS"
        description="A visual look at learning, sport, events and community life at First Class Private School."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file, idx) => (
              <FadeIn key={file} delay={idx * 0.03}>
                <div className="group relative aspect-square overflow-hidden rounded-sm bg-white shadow-sm">
                  <Image
                    src={`/images/${file}`}
                    alt={`School photograph ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          {files.length === 0 && (
            <p className="text-center text-muted">No photographs have been uploaded to the gallery yet.</p>
          )}
        </Container>
      </section>
    </>
  );
}
