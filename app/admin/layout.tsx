import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const metadata = {
  title: "Admin | First Class Private School",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-cream">
      <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto bg-charcoal p-6 text-white">
        <Link href="/admin" className="block font-serif text-xl text-gold">
          FCPS Admin
        </Link>
        <nav className="mt-8 flex flex-col gap-1">
          {[
            { label: "Dashboard", href: "/admin" },
            { label: "Applications", href: "/admin/applications" },
            { label: "Enquiries", href: "/admin/enquiries" },
            { label: "Transport", href: "/admin/transport" },
            { label: "News", href: "/admin/news" },
            { label: "Events", href: "/admin/events" },
            { label: "Downloads", href: "/admin/downloads" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-12">
          <LogoutButton />
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}
