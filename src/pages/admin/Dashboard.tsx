import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FileText, MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function AdminDashboard() {
  const { data: counts, isLoading } = useQuery({
    queryKey: ["admin-counts"],
    queryFn: async () => {
      const [posts, publishedPosts, leads] = await Promise.all([
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("published", true),
        supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
      ]);
      return {
        totalPosts: posts.count ?? 0,
        publishedPosts: publishedPosts.count ?? 0,
        leads: leads.count ?? 0,
      };
    },
  });

  const { data: recentLeads, isLoading: leadsLoading } = useQuery({
    queryKey: ["admin-recent-leads"],
    queryFn: async () => {
      const { data } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);
      return data ?? [];
    },
  });

  const statCards = [
    {
      label: "Artigos publicados",
      value: isLoading ? "—" : `${counts?.publishedPosts} / ${counts?.totalPosts}`,
      icon: FileText,
      sub: "total de artigos",
    },
    {
      label: "Leads recebidos",
      value: isLoading ? "—" : counts?.leads,
      icon: MessageSquare,
      sub: "formulário de contato",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Visão geral do site Engaja</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((card) => (
            <Card key={card.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.label}</CardTitle>
                <card.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-16" />
                ) : (
                  <div className="text-3xl font-bold text-foreground">{card.value}</div>
                )}
                <p className="text-xs text-muted-foreground mt-1">{card.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent leads */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Últimos leads recebidos</CardTitle>
          </CardHeader>
          <CardContent>
            {leadsLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
              </div>
            ) : recentLeads?.length === 0 ? (
              <p className="text-sm text-muted-foreground">Nenhum lead ainda.</p>
            ) : (
              <div className="divide-y">
                {recentLeads?.map((lead) => (
                  <div key={lead.id} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{lead.name}</p>
                      <p className="text-xs text-muted-foreground">{lead.email} {lead.company ? `· ${lead.company}` : ""}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {lead.created_at
                        ? format(new Date(lead.created_at), "dd/MM/yyyy", { locale: ptBR })
                        : "—"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
