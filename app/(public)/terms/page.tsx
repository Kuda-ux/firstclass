import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { termsOfUse } from "@/lib/data";

export const metadata = {
  title: "Terms of Use | First Class Private School",
  description: "Terms of use for the First Class Private School website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that govern use of this website."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl rounded-sm border border-soft bg-white p-8 shadow-sm">
            <p className="mb-6 rounded-sm bg-gold/10 p-4 text-sm text-charcoal">
              This is a draft for administrator and legal review.
            </p>
            <div>
              {termsOfUse.split("\n\n").map((para, i) => (
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
