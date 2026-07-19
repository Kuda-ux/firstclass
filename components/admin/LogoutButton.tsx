"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/admin/login");
      }}
      className="w-full rounded-sm border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
    >
      Log out
    </button>
  );
}
