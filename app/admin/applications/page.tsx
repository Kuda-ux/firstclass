import { Container } from "@/components/ui/Container";
import { supabaseAdmin } from "@/lib/supabase/admin";
import type { ApplicationRecord } from "@/lib/types";

export const metadata = {
  title: "Applications | FCPS Admin",
};

export default async function ApplicationsPage() {
  const result = supabaseAdmin
    ? await supabaseAdmin
        .from("admission_applications")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50)
    : { data: [] as ApplicationRecord[] };

  const applications = (result.data ?? []) as ApplicationRecord[];

  return (
    <Container>
      <h1 className="font-serif text-3xl text-charcoal">Applications</h1>
      <p className="mt-2 text-muted">Admission enquiries received through the website.</p>
      {!supabaseAdmin && (
        <p className="mt-4 rounded-sm bg-gold/10 p-4 text-charcoal">
          Supabase is not configured. Connect the database to view live applications.
        </p>
      )}
      <div className="mt-6 overflow-x-auto rounded-sm border border-soft bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream text-charcoal">
            <tr>
              <th className="px-4 py-3">Reference</th>
              <th className="px-4 py-3">Learner</th>
              <th className="px-4 py-3">Grade</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id} className="border-t border-soft">
                <td className="px-4 py-3 font-medium">{app.reference}</td>
                <td className="px-4 py-3">{app.learner_name}</td>
                <td className="px-4 py-3">{app.grade_applying}</td>
                <td className="px-4 py-3">{app.phone}</td>
                <td className="px-4 py-3">{app.status}</td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-center text-muted" colSpan={5}>
                  No applications yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
