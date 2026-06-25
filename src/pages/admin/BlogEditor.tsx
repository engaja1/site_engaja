import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, Save, Eye, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ImageUpload } from "@/components/admin/ImageUpload";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function estimateReadTime(content: string) {
  const words = content.replace(/<[^>]+>/g, "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min de leitura`;
}

const initialState = {
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  cover_image: "",
  content: "",
  published: false,
  meta_title: "",
  meta_description: "",
  og_image: "",
  keywords: "",
};

type PostForm = typeof initialState;

export default function BlogEditor() {
  const { id } = useParams<{ id?: string }>();
  const isNew = !id || id === "novo";
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<PostForm>(initialState);
  const [slugManual, setSlugManual] = useState(false);

  const { isLoading: postLoading, data: postData } = useQuery({
    queryKey: ["admin-post", id],
    enabled: !isNew,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id!)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (postData) {
      setForm({
        title: postData.title ?? "",
        slug: postData.slug ?? "",
        category: postData.category ?? "",
        excerpt: postData.excerpt ?? "",
        cover_image: postData.cover_image ?? "",
        content: postData.content ?? "",
        published: postData.published ?? false,
        meta_title: postData.meta_title ?? "",
        meta_description: postData.meta_description ?? "",
        og_image: postData.og_image ?? "",
        keywords: postData.keywords ?? "",
      });
      setSlugManual(true);
    }
  }, [postData]);

  // Auto-generate slug from title
  useEffect(() => {
    if (!slugManual && form.title) {
      setForm((prev) => ({ ...prev, slug: slugify(form.title) }));
    }
  }, [form.title, slugManual]);

  function set(field: keyof PostForm, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const save = useMutation({
    mutationFn: async (publish?: boolean) => {
      const payload = {
        ...form,
        published: publish !== undefined ? publish : form.published,
        published_at: (publish !== undefined ? publish : form.published) ? new Date().toISOString() : null,
        author_id: (await supabase.auth.getUser()).data.user?.id ?? null,
      };

      if (isNew) {
        const { error } = await supabase.from("blog_posts").insert([payload]);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("blog_posts").update(payload).eq("id", id!);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-posts"] });
      toast({ title: isNew ? "Artigo criado!" : "Artigo atualizado!" });
      navigate("/admin/blog");
    },
    onError: (err: Error) => {
      toast({ title: "Erro ao salvar", description: err.message, variant: "destructive" });
    },
  });

  const metaTitleLen = form.meta_title.length;
  const metaDescLen = form.meta_description.length;
  const previewTitle = form.meta_title || (form.title ? `${form.title} | Blog Engaja` : "Meta Title do Artigo");
  const previewDesc = form.meta_description || form.excerpt || "A meta description que aparecerá no Google aqui...";
  const previewSlug = form.slug || "slug-do-artigo";

  if (!isNew && postLoading) {
    return (
      <AdminLayout>
        <div className="p-6 flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Carregando artigo…
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 space-y-6 max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate("/admin/blog")}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                {isNew ? "Novo Artigo" : "Editar Artigo"}
              </h1>
              <div className="flex items-center gap-2 mt-0.5">
                <Badge variant={form.published ? "default" : "secondary"} className="text-xs">
                  {form.published ? "Publicado" : "Rascunho"}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => save.mutate(false)} disabled={save.isPending}>
              {save.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
              Salvar rascunho
            </Button>
            <Button onClick={() => save.mutate(true)} disabled={save.isPending}>
              {save.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
              Publicar
            </Button>
          </div>
        </div>

        <Tabs defaultValue="conteudo">
          <TabsList>
            <TabsTrigger value="conteudo">📝 Conteúdo</TabsTrigger>
            <TabsTrigger value="seo">🔍 SEO</TabsTrigger>
          </TabsList>

          {/* ── CONTENT TAB ── */}
          <TabsContent value="conteudo" className="space-y-5 mt-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  placeholder="Título do artigo"
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug</Label>
                  <Input
                    id="slug"
                    placeholder="slug-do-artigo"
                    value={form.slug}
                    onChange={(e) => { setSlugManual(true); set("slug", slugify(e.target.value)); }}
                  />
                  <p className="text-xs text-muted-foreground">engaja.com.br/blog/{form.slug || "…"}</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoria</Label>
                  <Input
                    id="category"
                    placeholder="Ex: RH, Recrutamento, Gestão"
                    value={form.category}
                    onChange={(e) => set("category", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt / Resumo</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Breve descrição do artigo (usada nas listagens)"
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) => set("excerpt", e.target.value)}
                />
              </div>

              <ImageUpload
                label="Imagem de capa"
                hint="Recomendado: 1200×630 px para melhor exibição."
                value={form.cover_image}
                onChange={(url) => set("cover_image", url)}
                folder="covers"
                slug={form.slug}
              />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="content">Conteúdo (HTML aceito) *</Label>
                  {form.content && (
                    <span className="text-xs text-muted-foreground">{estimateReadTime(form.content)}</span>
                  )}
                </div>
                <Textarea
                  id="content"
                  placeholder="Escreva o conteúdo do artigo aqui. HTML básico é aceito (<p>, <h2>, <strong>, <ul>, <li>, <a>, etc.)"
                  rows={20}
                  className="font-mono text-sm"
                  value={form.content}
                  onChange={(e) => set("content", e.target.value)}
                />
              </div>
            </div>
          </TabsContent>

          {/* ── SEO TAB ── */}
          <TabsContent value="seo" className="space-y-6 mt-4">
            {/* Google Snippet Preview */}
            <Card className="border-2 border-dashed">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                  <Search className="h-4 w-4" />
                  Preview do snippet no Google
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-background p-4 space-y-1 font-sans">
                  <p className="text-xs text-muted-foreground">
                    engaja.com.br › blog › {previewSlug}
                  </p>
                  <p className="text-sm font-medium text-primary leading-tight" style={{ maxWidth: "600px" }}>
                    {previewTitle.length > 60 ? previewTitle.slice(0, 60) + "…" : previewTitle}
                  </p>
                  <p
                    className="text-sm text-muted-foreground leading-snug"
                    style={{ maxWidth: "600px" }}
                  >
                    {previewDesc.length > 160 ? previewDesc.slice(0, 160) + "…" : previewDesc}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="meta_title">Meta Title</Label>
                  <span className={`text-xs ${metaTitleLen > 60 ? "text-destructive" : "text-muted-foreground"}`}>
                    {metaTitleLen}/60
                  </span>
                </div>
                <Input
                  id="meta_title"
                  placeholder="Título para o Google (deixe vazio para usar o título do artigo)"
                  value={form.meta_title}
                  onChange={(e) => set("meta_title", e.target.value)}
                  maxLength={70}
                />
                <p className="text-xs text-muted-foreground">
                  Recomendado: até 60 caracteres. Se vazio, usa o título do artigo como fallback.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="meta_description">Meta Description</Label>
                  <span className={`text-xs ${metaDescLen > 160 ? "text-destructive" : "text-muted-foreground"}`}>
                    {metaDescLen}/160
                  </span>
                </div>
                <Textarea
                  id="meta_description"
                  placeholder="Descrição para o Google (deixe vazio para usar o excerpt)"
                  rows={3}
                  value={form.meta_description}
                  onChange={(e) => set("meta_description", e.target.value)}
                  maxLength={180}
                />
                <p className="text-xs text-muted-foreground">
                  Recomendado: 120–160 caracteres.
                </p>
              </div>

              <ImageUpload
                label="Open Graph Image (redes sociais)"
                hint="Tamanho ideal: 1200×630 px. Se vazio, usa a imagem de capa."
                value={form.og_image}
                onChange={(url) => set("og_image", url)}
                folder="og"
                slug={form.slug}
              />

              <div className="space-y-2">
                <Label htmlFor="keywords">Palavras-chave</Label>
                <Input
                  id="keywords"
                  placeholder="recrutamento, gestão de pessoas, RH, terceirização"
                  value={form.keywords}
                  onChange={(e) => set("keywords", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Separadas por vírgula.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
