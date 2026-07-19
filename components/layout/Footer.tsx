import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, MapPin, Mail } from "lucide-react";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Boarding", href: "/boarding" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Transport", href: "/transport" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-charcoal text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="First Class Private School logo"
                width={80}
                height={80}
                className="h-16 w-auto rounded-sm bg-white object-contain p-1"
              />
              <div className="leading-tight">
                <span className="block font-serif text-lg font-bold">
                  First Class
                </span>
                <span className="block text-xs font-semibold uppercase tracking-widest text-gold">
                  Private School
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Non Ducor, Duco — I am not led, I lead.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                8514/11 Mbizo, Kwekwe, Zimbabwe
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+263773870090" className="hover:text-white">
                  +263 773 870 090
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+263713687669" className="hover:text-white">
                  +263 713 687 669
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a
                  href="mailto:info@firstclassprivate.ac.zw"
                  className="hover:text-white"
                >
                  info@firstclassprivate.ac.zw
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-white/80">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Office Hours</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Monday – Friday
              <br />
              <span className="text-white/90">07:30 – 16:00</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Saturday
              <br />
              <span className="text-white/90">08:00 – 12:00</span>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} First Class Private School. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
