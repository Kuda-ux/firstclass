import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { ContactForm } from "@/components/forms/ContactForm";
import { images, siteSettings } from "@/lib/data";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const metadata = {
  title: "Contact | First Class Private School",
  description: "Contact First Class Private School in Kwekwe, Zimbabwe.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Visit our office, call us or send a message. We are happy to answer your questions."
        image={images.contact}
      />

      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-sm border border-soft bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal">Address</h3>
                    <p className="text-muted">{siteSettings.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-sm border border-soft bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
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
                <div className="flex items-start gap-4 rounded-sm border border-soft bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
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
                <div className="flex items-start gap-4 rounded-sm border border-soft bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
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
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-sm border border-soft bg-white p-6 shadow-sm">
                <h2 className="mb-6 font-serif text-2xl text-charcoal">Send us a message</h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
