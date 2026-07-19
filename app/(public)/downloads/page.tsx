import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { downloads } from "@/lib/data";
import { FileText, Download } from "lucide-react";

export const metadata = {
  title: "Downloads | First Class Private School",
  description: "Downloadable documents from First Class Private School.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloads"
        title="Download centre"
        description="Prospectus, application forms, calendars and other school documents."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {downloads.map((doc, idx) => (
              <FadeIn key={doc.id} delay={idx * 0.05}>
                <div className="flex items-start justify-between gap-4 rounded-sm border border-soft bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-burgundy text-gold">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-charcoal">{doc.title}</h3>
                      <p className="text-sm text-muted">{doc.category} &middot; {doc.fileType} &middot; {doc.fileSize}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-soft text-muted transition-colors hover:border-burgundy hover:text-burgundy disabled:opacity-50"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Documents marked for administrator upload will be available once uploaded through the admin dashboard. Please contact the school office for copies in the meantime.
          </p>
        </Container>
      </section>
    </>
  );
}
