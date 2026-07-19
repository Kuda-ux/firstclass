import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent, images } from "@/lib/data";
import { Award, Home, BookOpen, GraduationCap } from "lucide-react";

const badges = [
  { label: "ZIMSEC", icon: BookOpen },
  { label: "Cambridge", icon: GraduationCap },
  { label: "Day & Boarding", icon: Home },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-wine text-white">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="First Class Private School life and learning"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine/95 via-wine/70 to-transparent" />
      </div>

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm">
            <Award className="h-4 w-4" />
            Non Ducor, Duco
          </span>
          <h1 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            {homeContent.hero.subhead}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button as="a" href="/admissions" size="lg">
              Apply for Admission
            </Button>
            <Button
              as="a"
              href="/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Explore Our School
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-sm bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
              >
                <b.icon className="h-4 w-4 text-gold" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
