import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Eye, Download } from "lucide-react";

type Lead = Record<string, string | null>;

function exportToCSV(leads: Lead[]) {
  const headers = ["Nome", "E-mail", "Telefone", "Empresa", "Origem", "Data", "Mensagem"];
  const rows = leads.map((lead) => [
    lead.name ?? "",
    lead.email ?? "",
    lead.phone ?? "",
    lead.company ?? "",
    lead.source ?? "",
    lead.created_at
      ? format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })
      : "",
    lead.message ?? "",
  ]);

  const escape = (v: string) => `"${v.replace(/"/g, '""')}"`;
  const csv = [headers.map(escape), ...rows.map((r) => r.map(escape))].map((r) => r.join(";")).join("\n");
  const bom = "\uFEFF"; // UTF-8 BOM para abrir corretamente no Excel
  const blob = new Blob([bom + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `leads_${format(new Date(), "yyyy-MM-dd")}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function AdminLeads() {
  const [selected, setSelected] = useState<null | Lead>(null);

  const { data: leads, isLoading } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Lead[];
    },
  });

  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground text-sm mt-1">Submissões dos formulários de contato</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            disabled={!leads || leads.length === 0}
            onClick={() => leads && exportToCSV(leads)}
          >
            <Download className="h-4 w-4 mr-2" />
            Exportar CSV
          </Button>
        </div>

        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Data</TableHead>
                <TableHead className="text-right">Mensagem</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                [...Array(5)].map((_, i) => (
                  <TableRow key={i}>
                    {[...Array(6)].map((_, j) => (
                      <TableCell key={j}><Skeleton className="h-5 w-full" /></TableCell>
                    ))}
                  </TableRow>
                ))
              ) : leads?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                    Nenhum lead recebido ainda.
                  </TableCell>
                </TableRow>
              ) : leads?.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="text-muted-foreground">{lead.email}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {lead.source ? (
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent-foreground border border-accent/20">
                        {lead.source}
                      </span>
                    ) : "—"}
                  </TableCell>
                  <TableCell className="text-muted-foreground">{lead.phone ?? "—"}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {lead.created_at
                      ? format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })
                      : "—"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelected(lead)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Mensagem de {selected?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-muted-foreground">
              <span><strong className="text-foreground">E-mail:</strong> {selected?.email}</span>
              <span><strong className="text-foreground">Telefone:</strong> {selected?.phone ?? "—"}</span>
              <span><strong className="text-foreground">Origem:</strong> {selected?.source ?? "—"}</span>
              <span><strong className="text-foreground">Empresa:</strong> {selected?.company ?? "—"}</span>
              <span><strong className="text-foreground">Data:</strong>{" "}
                {selected?.created_at
                  ? format(new Date(selected.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })
                  : "—"}
              </span>
            </div>
            <div className="bg-muted rounded-md p-3 text-foreground leading-relaxed whitespace-pre-wrap">
              {selected?.message}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}
