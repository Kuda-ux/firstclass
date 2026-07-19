import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "News | FCPS Admin",
};

export default function AdminNewsPage() {
  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">News</h1>
      <p className="mt-2 text-muted">
        News article management will be added in the next development phase. For now, update the static content in <code className="rounded bg-cream px-1">lib/data.ts</code>.
      </p>
    </Container>
  );
}
