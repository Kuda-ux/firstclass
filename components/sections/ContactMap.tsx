import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteSettings } from "@/lib/data";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function ContactMap() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeader
              eyebrow="Visit Us"
              title="Contact and location"
              description="Our school office is open during office hours. We welcome parents to call, email or visit for a tour."
            />
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-burgundy">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal">Address</h3>
                  <p className="text-muted">{siteSettings.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-burgundy">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal">Phone</h3>
                  <div className="flex flex-col gap-1 text-muted">
                    {siteSettings.phones.map((p) => (
                      <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-burgundy">
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-burgundy">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal">Office Hours</h3>
                  <p className="text-muted">
                    Monday – Friday: {siteSettings.officeHours.weekday}
                    <br />
                    Saturday: {siteSettings.officeHours.saturday}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-burgundy">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-charcoal">Email</h3>
                  <a href={`mailto:${siteSettings.email}`} className="text-muted hover:text-burgundy">
                    {siteSettings.email}
                  </a>
                </div>
              </div>
            </div>
            <Button as="a" href="/contact" className="mt-8">
              Send a message
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative h-80 w-full overflow-hidden rounded-sm border border-soft md:h-96 lg:h-full lg:min-h-[420px]">
              <iframe
                title="First Class Private School location"
                src={siteSettings.mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
