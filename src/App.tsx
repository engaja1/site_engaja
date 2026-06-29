import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { PageLoader } from "@/components/ui/page-loader";

// Admin pages
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminBlog = lazy(() => import("./pages/admin/Blog"));
const BlogEditor = lazy(() => import("./pages/admin/BlogEditor"));
const AdminLeads = lazy(() => import("./pages/admin/Leads"));

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const Consultoria = lazy(() => import("./pages/Consultoria"));
const Treinamento = lazy(() => import("./pages/Treinamento"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contato = lazy(() => import("./pages/Contato"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const Cookies = lazy(() => import("./pages/Cookies"));
const AvisoLegal = lazy(() => import("./pages/AvisoLegal"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Sub-pages lazy load
const PDL = lazy(() => import("./pages/treinamento/PDL"));
const TreinamentoLideranca = lazy(() => import("./pages/treinamento/Lideranca"));
const TreinamentoComercial = lazy(() => import("./pages/treinamento/Comercial"));
const TreinamentoVendas = lazy(() => import("./pages/treinamento/Vendas"));
const TreinamentoCapacitacao = lazy(() => import("./pages/treinamento/Capacitacao"));
const TreinamentoImersao = lazy(() => import("./pages/treinamento/Imersao"));
const TreinamentosPersonalizados = lazy(() => import("./pages/treinamento/Personalizados"));

const ConsultoriaEmpresarial = lazy(() => import("./pages/consultoria/Empresarial"));
const ConsultoriaComercial = lazy(() => import("./pages/consultoria/Comercial"));
const ConsultoriaRH = lazy(() => import("./pages/consultoria/RH"));
const ConsultoriaSistemica = lazy(() => import("./pages/consultoria/Sistemica"));
const ConsultoriaVarejo = lazy(() => import("./pages/consultoria/Varejo"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/consultoria" element={<Consultoria />} />
              <Route path="/consultoria/empresarial" element={<ConsultoriaEmpresarial />} />
              <Route path="/consultoria/comercial" element={<ConsultoriaComercial />} />
              <Route path="/consultoria/rh" element={<ConsultoriaRH />} />
              <Route path="/consultoria/sistemica" element={<ConsultoriaSistemica />} />
              <Route path="/consultoria/varejo" element={<ConsultoriaVarejo />} />
              
              <Route path="/treinamento" element={<Treinamento />} />
              <Route path="/treinamento/pdl" element={<PDL />} />
              <Route path="/treinamento/lideranca" element={<TreinamentoLideranca />} />
              <Route path="/treinamento/comercial" element={<TreinamentoComercial />} />
              <Route path="/treinamento/vendas" element={<TreinamentoVendas />} />
              <Route path="/treinamento/capacitacao" element={<TreinamentoCapacitacao />} />
              <Route path="/treinamento/imersao" element={<TreinamentoImersao />} />
              <Route path="/treinamento/personalizados" element={<TreinamentosPersonalizados />} />

              <Route path="/quem-somos" element={<QuemSomos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/privacidade" element={<Privacidade />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              {/* Admin */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/blog/novo" element={<BlogEditor />} />
              <Route path="/admin/blog/:id" element={<BlogEditor />} />
              <Route path="/admin/leads" element={<AdminLeads />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
