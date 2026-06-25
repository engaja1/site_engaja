import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { supabase } from "@/integrations/supabase/client";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const filteredPosts = posts?.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Artigos, dicas e insights sobre gestão empresarial, RH, marketing, vendas e desenvolvimento profissional."
        />
        <link rel="canonical" href="https://www.engaja.com.br/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Artigos, dicas e insights sobre gestão empresarial, RH e marketing." />
        <meta property="og:url" content="https://www.engaja.com.br/blog" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog | Engaja" />
        <meta name="twitter:description" content="Conteúdos para impulsionar seu negócio." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Conteúdos para impulsionar{" "}
                <span className="text-primary">seu negócio</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Artigos, dicas e insights sobre gestão empresarial, RH, marketing e desenvolvimento profissional.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar artigos..."
                  className="pl-12 h-14 bg-background"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="container">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <Skeleton className="h-48 w-full" />
                    <CardContent className="p-6 space-y-4">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : filteredPosts && filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="h-full overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 card-hover">
                      {post.cover_image && (
                        <div className="relative h-48 overflow-hidden">
                        <img
                            src={post.cover_image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                          {post.category && (
                            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          )}
                        </div>
                      )}
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {post.published_at && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(post.published_at), "dd MMM yyyy", { locale: ptBR })}
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        )}
                        <div className="flex items-center text-accent font-medium pt-2">
                          Ler mais
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {searchTerm ? "Nenhum artigo encontrado para sua busca." : "Ainda não há artigos publicados."}
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog;
