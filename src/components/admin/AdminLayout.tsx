import { useLocation, useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAdminGuard } from "@/hooks/useAdminGuard";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHeader from "@/assets/logo-header.webp";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, exact: true },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Leads", href: "/admin/leads", icon: MessageSquare },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { isAdmin, loading } = useAdminGuard();
  const location = useLocation();
  const navigate = useNavigate();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin/login");
  }

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground text-sm">Verificando acesso…</div>
      </div>
    );
  }

  function isActive(href: string, exact?: boolean) {
    if (exact) return location.pathname === href;
    return location.pathname.startsWith(href);
  }

  return (
    <div className="min-h-screen flex w-full bg-muted/30">
      {/* Sidebar */}
      <aside className="w-60 min-h-screen bg-card border-r flex flex-col shrink-0">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center gap-2 group">
            <ChevronLeft className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <img src={logoHeader} alt="Engaja" className="h-7 object-contain" />
          </Link>
          <p className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">Painel Admin</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0 overflow-auto">
        {children}
      </main>
    </div>
  );
}
