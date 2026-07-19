import { Container } from "@/components/ui/Container";
import { supabaseAdmin } from "@/lib/supabase/admin";
import type { TransportEnquiry } from "@/lib/types";

export const metadata = {
  title: "Transport Enquiries | FCPS Admin",
};

export default async function AdminTransportPage() {
  const result = supabaseAdmin
    ? await supabaseAdmin
        .from("transport_enquiries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50)
    : { data: [] as TransportEnquiry[] };

  const enquiries = (result.data ?? []) as TransportEnquiry[];

  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">Transport Enquiries</h1>
      <p className="mt-2 text-muted">Bus-hire and transport requests.</p>
      {!supabaseAdmin && (
        <p className="mt-4 rounded-sm bg-gold/10 p-4 text-charcoal">
          Supabase is not configured. Connect the database to view live transport enquiries.
        </p>
      )}
      <div className="mt-6 space-y-4">
        {enquiries.map((enq) => (
          <div key={enq.id} className="rounded-sm border border-soft bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="font-medium text-charcoal">{enq.full_name}</span>
              <span>&middot;</span>
              <span>{enq.journey_type}</span>
              <span>&middot;</span>
              <span>{new Date(enq.created_at).toLocaleDateString("en-ZW")}</span>
            </div>
            <p className="mt-2 text-muted">
              {enq.pickup} to {enq.destination} on {enq.travel_date} ({enq.passengers} passengers)
            </p>
          </div>
        ))}
        {enquiries.length === 0 && (
          <p className="text-muted">No transport enquiries yet.</p>
        )}
      </div>
    </Container>
  );
}
