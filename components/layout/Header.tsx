"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X, Phone, MapPin, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Boarding", href: "/boarding" },
  { label: "Student Life", href: "/student-life" },
  { label: "News & Events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
  { label: "Transport", href: "/transport" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-burgundy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-2 text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 md:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Kwekwe, Zimbabwe
            </span>
            <a
              href="tel:+263773870090"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              +263 773 870 090
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:info@firstclassprivate.ac.zw"
              className="hidden items-center gap-1.5 hover:text-gold md:flex"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              info@firstclassprivate.ac.zw
            </a>
            <Link
              href="/admissions"
              className="font-semibold text-gold hover:text-white"
            >
              Apply now
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="First Class Private School logo"
              width={120}
              height={120}
              className="h-14 w-auto object-contain lg:h-16"
              priority
            />
            <div className="hidden leading-tight sm:block">
              <span className="block font-serif text-lg font-bold text-burgundy lg:text-xl">
                First Class
              </span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                Private School
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-burgundy"
                      : "text-charcoal hover:text-burgundy"
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button as="a" href="/admissions" size="sm">
              Enquire
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-sm p-2 text-charcoal lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-soft lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded-sm px-3 py-3 text-base font-medium",
                        active
                          ? "bg-cream text-burgundy"
                          : "text-charcoal hover:bg-cream/50"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Button
                  as="a"
                  href="/admissions"
                  className="w-full"
                  size="md"
                >
                  Enquire
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
