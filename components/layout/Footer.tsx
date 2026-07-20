import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { siteSettings } from "@/lib/data";

const footerLinks = [
  { label: "About Us",       href: "/about" },
  { label: "Academics",      href: "/academics" },
  { label: "Admissions",     href: "/admissions" },
  { label: "Boarding",       href: "/boarding" },
  { label: "News & Events",  href: "/news" },
  { label: "Gallery",        href: "/gallery" },
  { label: "Downloads",      href: "/downloads" },
  { label: "Transport",      href: "/transport" },
  { label: "Contact",        href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use",   href: "/terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-charcoal text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
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
            <p className="mt-4 text-sm italic leading-relaxed text-white/70">
              {siteSettings.motto} &mdash; I am not led, I lead.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/50">
              {siteSettings.tagline}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/40">
              {siteSettings.registration}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {siteSettings.address}
              </li>
              {siteSettings.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="break-all hover:text-white"
                >
                  {siteSettings.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
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

          {/* Office hours */}
          <div>
            <h3 className="mb-4 font-serif text-lg text-gold">Office Hours</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <span className="block text-white/50">Monday &ndash; Friday</span>
                  <span className="text-white/90">{siteSettings.officeHours.weekday}</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div>
                  <span className="block text-white/50">Saturday</span>
                  <span className="text-white/90">{siteSettings.officeHours.saturday}</span>
                </div>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              All communication to be addressed to the Principal.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-sm text-white/60">
          &copy; {new Date().getFullYear()} First Class Private School. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
