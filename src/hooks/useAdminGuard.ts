import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

async function checkAdminRole(userId: string): Promise<boolean> {
  const { data } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();
  return !!data;
}

export function useAdminGuard() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function checkAdmin() {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        navigate("/admin/login");
        return;
      }

      const admin = await checkAdminRole(session.user.id);

      if (!mounted) return;

      if (!admin) {
        navigate("/admin/login");
        return;
      }

      setIsAdmin(true);
      setLoading(false);
    }

    checkAdmin();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin/login");
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [navigate]);

  return { isAdmin, loading };
}
