import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { images } from "@/lib/data";
import { ClipboardCheck, FileText, Phone } from "lucide-react";

export const metadata = {
  title: "Admissions | First Class Private School",
  description: "Apply for admission to First Class Private School. Day and boarding places for ZIMSEC and Cambridge learners.",
};

const steps = [
  {
    title: "Enquire",
    description: "Complete the form below or call the school office to express interest.",
    icon: Phone,
  },
  {
    title: "Apply",
    description: "Submit the required information and documents. We will confirm receipt with a reference number.",
    icon: FileText,
  },
  {
    title: "Assessment",
    description: "The school will review your application and contact you about the next steps.",
    icon: ClipboardCheck,
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Apply for admission"
        description="Begin your child's application to First Class Private School. We will respond within a few working days."
        image={images.admissions}
      />

      <section className="bg-cream py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.title} delay={idx * 0.1}>
                  <div className="h-full rounded-sm bg-white p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Application Form"
                  title="Online admission enquiry"
                  description="Complete the form below. Fields marked by the form validation are required."
                  className="mb-8"
                />
                <AdmissionForm />
              </FadeIn>
            </div>
            <aside className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="rounded-sm border border-soft bg-cream p-6">
                  <h3 className="font-serif text-lg text-charcoal">Need help?</h3>
                  <p className="mt-2 text-sm text-muted">
                    Call or WhatsApp us for admissions assistance.
                  </p>
                  <a href="tel:+263773870090" className="mt-4 inline-block text-burgundy hover:underline">
                    +263 773 870 090
                  </a>
                </div>
              </FadeIn>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
