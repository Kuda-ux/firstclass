import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Downloads | FCPS Admin",
};

export default function AdminDownloadsPage() {
  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">Downloads</h1>
      <p className="mt-2 text-muted">
        Download document management will be added in the next development phase. For now, upload documents to Supabase Storage and update <code className="rounded bg-cream px-1">lib/data.ts</code>.
      </p>
    </Container>
  );
}
