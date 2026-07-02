import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-16">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-48 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const postUrl = `https://www.engaja.com.br/blog/${post.slug}`;

  // SEO fields with fallbacks
  const seoTitle = (post as Record<string, unknown>).meta_title as string | undefined;
  const seoDesc = (post as Record<string, unknown>).meta_description as string | undefined;
  const ogImage = (post as Record<string, unknown>).og_image as string | undefined;
  const keywords = (post as Record<string, unknown>).keywords as string | undefined;

  const pageTitle = seoTitle ? `${seoTitle}` : `${post.title} | Blog Engaja`;
  const pageDesc = seoDesc || post.excerpt || post.title;
  const ogImg = ogImage || post.cover_image;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={postUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        {ogImg && <meta property="og:image" content={ogImg} />}
        <meta property="article:published_time" content={post.published_at || post.created_at || ""} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        {ogImg && <meta name="twitter:image" content={ogImg} />}
      </Helmet>
      
      <ArticleSchema
        title={post.title}
        description={pageDesc}
        url={postUrl}
        image={ogImg || undefined}
        datePublished={post.published_at || post.created_at || new Date().toISOString()}
        dateModified={post.updated_at || undefined}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.engaja.com.br/" },
          { name: "Blog", url: "https://www.engaja.com.br/blog" },
          { name: post.title, url: postUrl },
        ]}
      />
      
      <Layout>
        <article className="py-16 lg:py-24">
          <div className="container max-w-4xl">
            {/* Back button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Link>

            {/* Header */}
            <header className="mb-12 animate-fade-up">
              {post.category && (
                <span className="inline-block bg-accent/10 text-accent text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  {post.category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                {post.published_at && (
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {format(new Date(post.published_at), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </span>
                )}
                <button
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                  Compartilhar
                </button>
              </div>
            </header>

            {/* Cover Image */}
            {post.cover_image && (
              <div className="mb-12 rounded-2xl overflow-hidden animate-fade-up stagger-1">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none animate-fade-up stagger-2
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                prose-blockquote:border-accent prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />

            {/* CTA */}
            <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12 text-center animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Quer transformar o seu quadro de colaboradores?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Fale com nossos especialistas e descubra como a Engaja pode ajudar sua empresa a alcançar resultados extraordinários.
              </p>
              <Button asChild size="lg" className="h-14 px-10 text-base font-semibold">
                <a
                  href="https://wa.me/5519998051046?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Engaja."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FALE COM UM CONSULTOR
                </a>
              </Button>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default BlogPost;
