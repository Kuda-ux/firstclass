import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { images } from "@/lib/data";

const lifeTiles = [
  { label: "Academics", href: "/academics", src: images.life1, desc: "Structured learning with personal attention and clear goals." },
  { label: "Sport & Athletics", href: "/student-life", src: images.life2, desc: "Team games and physical development for confident learners." },
  { label: "Clubs & Societies", href: "/student-life", src: images.life3, desc: "Creativity, curiosity and leadership beyond the classroom." },
  { label: "Boarding", href: "/boarding", src: images.life4, desc: "A home away from home — supervised, structured and warm." },
  { label: "Field Trips", href: "/student-life", src: images.life5, desc: "Educational excursions that extend classroom learning." },
  { label: "Community", href: "/student-life", src: images.life6, desc: "Events and outreach that build a caring school community." },
];

export function SchoolLife() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="School Life"
            title="A balanced life inside and outside the classroom"
            align="center"
            className="mx-auto mb-14 text-center"
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lifeTiles.map((tile, idx) => (
            <FadeIn key={tile.label} delay={idx * 0.05}>
              <Link href={tile.href} className="block">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                  <Image
                    src={tile.src}
                    alt={`${tile.label} at First Class Private School`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="font-serif text-xl text-white">{tile.label}</h3>
                    <p className="mt-1 text-sm leading-snug text-white/75 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {tile.desc}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
