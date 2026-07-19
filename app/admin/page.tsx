import { Container } from "@/components/ui/Container";
import { supabaseAdmin } from "@/lib/supabase/admin";

async function getCounts() {
  if (!supabaseAdmin) return null;
  const [admissions, contacts, transport] = await Promise.all([
    supabaseAdmin
      .from("admission_applications")
      .select("*", { count: "exact", head: true }),
    supabaseAdmin
      .from("general_enquiries")
      .select("*", { count: "exact", head: true }),
    supabaseAdmin
      .from("transport_enquiries")
      .select("*", { count: "exact", head: true }),
  ]);
  return {
    admissions: admissions.count ?? 0,
    contacts: contacts.count ?? 0,
    transport: transport.count ?? 0,
  };
}

export default async function AdminDashboardPage() {
  const counts = await getCounts();

  const cards = [
    { label: "Admission applications", value: counts?.admissions ?? "—" },
    { label: "General enquiries", value: counts?.contacts ?? "—" },
    { label: "Transport enquiries", value: counts?.transport ?? "—" },
  ];

  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">Dashboard</h1>
      <p className="mt-2 text-muted">
        Manage enquiries, applications and content from one place.
      </p>

      {!counts && (
        <div className="mt-6 rounded-sm border border-gold/30 bg-gold/10 p-4 text-charcoal">
          Supabase is not configured. Forms will be accepted but not stored until the environment variables are set and migrations are run.
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-sm border border-soft bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-muted">{card.label}</p>
            <p className="mt-2 font-serif text-4xl text-burgundy">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-sm border border-soft bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-serif text-xl text-charcoal">Administration setup</h2>
        <ul className="list-inside list-disc space-y-2 text-muted">
          <li>Connect the Supabase project using the variables in .env.local.</li>
          <li>Run the migrations in supabase/migrations.</li>
          <li>Create an admin user in Supabase Auth and add a row to user_roles.</li>
          <li>Use this dashboard to review enquiries; full CMS features are in the next development phase.</li>
        </ul>
      </div>
    </Container>
  );
}
