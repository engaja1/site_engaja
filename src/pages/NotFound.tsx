import { Helmet } from "react-helmet-async";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Página não encontrada | Engaja Soluções Corporativas</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] py-24 text-center px-4">
          <span className="text-8xl font-bold text-primary/20 select-none">404</span>
          <h1 className="mt-4 text-3xl font-bold text-foreground">Página não encontrada</h1>
          <p className="mt-3 text-muted-foreground max-w-md">
            A página que você está procurando não existe ou foi movida. Verifique o endereço ou volte ao início.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Ir para o início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
              <span className="cursor-pointer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </span>
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
