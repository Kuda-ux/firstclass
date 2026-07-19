import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { privacyPolicy } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | First Class Private School",
  description: "Privacy policy for First Class Private School.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect personal information."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-sm border border-soft bg-white p-8 shadow-sm">
            <p className="mb-6 rounded-sm bg-gold/10 p-4 text-sm text-charcoal">
              This is a draft policy for administrator and legal review.
            </p>
            <div>
              {privacyPolicy.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
