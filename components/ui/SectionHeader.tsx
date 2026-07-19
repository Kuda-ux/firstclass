import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** "light" (default) = charcoal headings on pale/white backgrounds.
   *  "dark" = white headings on wine/burgundy backgrounds. */
  variant?: "light" | "dark";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  variant = "light",
}: SectionHeaderProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 inline-block text-sm font-semibold uppercase tracking-widest",
            isDark ? "text-gold" : "text-burgundy"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl leading-tight md:text-4xl lg:text-5xl",
          isDark ? "text-white" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            isDark ? "text-white/80" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
