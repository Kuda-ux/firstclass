import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeIn } from "@/components/animations/FadeIn";
import { AdmissionForm } from "@/components/forms/AdmissionForm";
import { admissionsContent, siteSettings, images } from "@/lib/data";
import { ClipboardCheck, FileText, Phone, Banknote, Shirt, BookOpen } from "lucide-react";

export const metadata = {
  title: "Admissions | First Class Private School",
  description:
    "2027 fees, uniform list, Form 1 entry requirements and how to apply to First Class Private School, Kwekwe.",
};

const stepIcons = [Phone, FileText, ClipboardCheck];

export default function AdmissionsPage() {
  const { fees, uniforms, entryRequirements, otherRequirements, steps } = admissionsContent;

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Apply for admission"
        description={admissionsContent.intro}
        image={images.admissions}
      />

      {/* ── How to apply ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="How to Apply"
              title="Three simple steps"
              align="center"
              className="mx-auto mb-12 text-center"
            />
          </FadeIn>
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <FadeIn key={step.title} delay={idx * 0.1}>
                  <div className="h-full rounded-sm bg-white p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Fee schedule ─────────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow={`${fees.year} Fees`}
              title="Requirements & fee schedule"
              description="All amounts are in United States Dollars (USD). All communication should be addressed to the Principal."
              className="mb-10"
            />
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Fee table */}
            <FadeIn delay={0.05}>
              <div className="overflow-hidden rounded-sm border border-soft shadow-sm">
                <div className="bg-burgundy px-6 py-4">
                  <h3 className="font-serif text-lg text-white">Charges (USD)</h3>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-soft bg-cream">
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">Item</th>
                      <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-charcoal">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-soft bg-white">
                    {fees.items.map((item) => (
                      <tr key={item.label} className="hover:bg-cream/60 transition-colors">
                        <td className="px-6 py-3 text-sm text-charcoal">{item.label}</td>
                        <td className="px-6 py-3 text-right text-sm font-semibold text-burgundy">
                          ${item.amount}
                        </td>
                        <td className="px-6 py-3 text-xs text-muted">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="border-t border-soft bg-cream px-6 py-4">
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-charcoal">First-term total — Day Student</span>
                    <span className="text-sm font-bold text-burgundy">${fees.firstTermTotals.dayStudent}</span>
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span className="text-sm font-semibold text-charcoal">First-term total — Boarding Student</span>
                    <span className="text-sm font-bold text-burgundy">${fees.firstTermTotals.boardingStudent}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Entry requirements + other requirements */}
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="rounded-sm border border-soft bg-cream p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-gold">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal">{entryRequirements.heading}</h3>
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-burgundy">Documents</p>
                  <ul className="mb-4 space-y-1.5">
                    {entryRequirements.documents.map((doc) => (
                      <li key={doc} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-burgundy">Stationery</p>
                  <ul className="space-y-1.5">
                    {entryRequirements.stationery.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="rounded-sm border border-soft bg-cream p-6 shadow-sm">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-burgundy">
                    Other Requirements
                  </p>
                  <ul className="space-y-1.5">
                    {otherRequirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-sm text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-burgundy" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Uniform list ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-24">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Uniform Package"
              title="What the uniform payment covers"
              description={uniforms.note}
              className="mb-10"
            />
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="overflow-hidden rounded-sm border border-soft shadow-sm">
              <div className="flex items-center gap-3 bg-burgundy px-6 py-4">
                <Shirt className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-lg text-white">Full uniform list</h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-soft sm:grid-cols-3 md:grid-cols-4">
                {uniforms.items.map((row, idx) => (
                  <div
                    key={row.item}
                    className={`flex flex-col gap-0.5 px-5 py-4 ${idx % 2 === 0 ? "bg-white" : "bg-cream/50"}`}
                  >
                    <span className="text-sm font-medium text-charcoal">{row.item}</span>
                    {row.boardersQty && (
                      <span className="text-xs text-muted">{row.boardersQty}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Bank details + enquiry form ───────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeIn>
                <SectionHeader
                  eyebrow="Enquiry Form"
                  title="Online admission enquiry"
                  description="Complete the form below and we will respond within a few working days."
                  className="mb-8"
                />
                <AdmissionForm />
              </FadeIn>
            </div>

            <aside className="space-y-6">
              {/* Bank details */}
              <FadeIn delay={0.05}>
                <div className="rounded-sm border border-soft bg-cream p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-burgundy text-gold">
                      <Banknote className="h-4 w-4" />
                    </div>
                    <h3 className="font-serif text-lg text-charcoal">Bank Details ({siteSettings.bank.currency})</h3>
                  </div>
                  <dl className="space-y-2 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Bank</dt>
                      <dd className="text-charcoal">{siteSettings.bank.name}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Branch</dt>
                      <dd className="text-charcoal">{siteSettings.bank.branch}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Account Name</dt>
                      <dd className="text-charcoal">{siteSettings.bank.accountName}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Account Number</dt>
                      <dd className="font-mono text-charcoal">{siteSettings.bank.accountNumber}</dd>
                    </div>
                  </dl>
                </div>
              </FadeIn>

              {/* Contact */}
              <FadeIn delay={0.1}>
                <div className="rounded-sm border border-soft bg-cream p-6 shadow-sm">
                  <h3 className="font-serif text-lg text-charcoal">Need help?</h3>
                  <p className="mt-2 text-sm text-muted">
                    Call or WhatsApp us for admissions assistance. All communication should be addressed to the Principal.
                  </p>
                  {siteSettings.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="mt-2 block text-burgundy hover:underline"
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${siteSettings.email}`}
                    className="mt-1 block text-sm text-muted hover:text-burgundy hover:underline"
                  >
                    {siteSettings.email}
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
