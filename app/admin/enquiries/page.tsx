import { Container } from "@/components/ui/Container";
import { supabaseAdmin } from "@/lib/supabase/admin";
import type { GeneralEnquiry } from "@/lib/types";

export const metadata = {
  title: "Enquiries | FCPS Admin",
};

export default async function EnquiriesPage() {
  const result = supabaseAdmin
    ? await supabaseAdmin
        .from("general_enquiries")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50)
    : { data: [] as GeneralEnquiry[] };

  const enquiries = (result.data ?? []) as GeneralEnquiry[];

  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">General Enquiries</h1>
      <p className="mt-2 text-muted">Messages sent through the contact form.</p>
      {!supabaseAdmin && (
        <p className="mt-4 rounded-sm bg-gold/10 p-4 text-charcoal">
          Supabase is not configured. Connect the database to view live enquiries.
        </p>
      )}
      <div className="mt-6 space-y-4">
        {enquiries.map((enq) => (
          <div key={enq.id} className="rounded-sm border border-soft bg-white p-4 shadow-sm">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="font-medium text-charcoal">{enq.name}</span>
              <span>&middot;</span>
              <span>{enq.email || enq.phone}</span>
              <span>&middot;</span>
              <span>{new Date(enq.created_at).toLocaleDateString("en-ZW")}</span>
            </div>
            <h3 className="mt-1 font-serif text-lg text-charcoal">{enq.subject}</h3>
            <p className="mt-2 text-muted">{enq.message}</p>
          </div>
        ))}
        {enquiries.length === 0 && (
          <p className="text-muted">No enquiries yet.</p>
        )}
      </div>
    </Container>
  );
}
