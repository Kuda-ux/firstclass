import Image from "next/image";
import { Container } from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  variant?: "light" | "dark";
  image?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  variant = "dark",
  image,
}: PageHeaderProps) {
  const isDark = variant === "dark" || !!image;
  return (
    <section
      className={
        image
          ? "relative flex min-h-[45vh] items-center overflow-hidden text-white md:min-h-[50vh]"
          : isDark
            ? "bg-wine py-20 text-white md:py-28"
            : "bg-cream py-20 md:py-28"
      }
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-wine/95 via-wine/75 to-wine/60" />
        </div>
      )}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-gold">
              {eyebrow}
            </span>
          )}
          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p
              className={`mt-4 text-lg leading-relaxed ${
                isDark ? "text-white/90" : "text-muted"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
