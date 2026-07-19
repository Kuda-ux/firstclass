import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Events | FCPS Admin",
};

export default function AdminEventsPage() {
  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">Events</h1>
      <p className="mt-2 text-muted">
        Event and calendar management will be added in the next development phase. For now, update the static content in <code className="rounded bg-cream px-1">lib/data.ts</code>.
      </p>
    </Container>
  );
}
