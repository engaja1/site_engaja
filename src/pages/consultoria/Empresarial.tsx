import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Compass,
  Zap,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519998051046";

const EmpresarialConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria Empresarial | Engaja Soluções</title>
        <meta
          name="description"
          content="Estruture processos, responsabilidades e indicadores para obter uma gestão previsível e independente dos donos."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria/empresarial" />
      </Helmet>

      <Layout>
        {/* Navigation & Header */}
        <section className="bg-muted/30 py-6 border-b border-border/40">
          <div className="container">
            <Link
              to="/consultoria"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Consultorias
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Consultoria Empresarial
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Consultoria Empresarial
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Organize processos, indicadores e responsabilidades para transformar sua empresa em uma operação previsível e preparada para crescer.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 1: The Challenge */}
        <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto animate-fade-up">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Sua empresa cresceu, mas a gestão continua no improviso?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Quando a empresa cresce mais rápido que a sua estrutura, os processos ficam confusos, as decisões se concentram nos sócios e os resultados deixam de ser previsíveis.
                </p>
                <p className="font-semibold text-foreground/80">
                  O dia a dia vira uma sucessão de urgências, e fica difícil enxergar com clareza para onde o negócio está indo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 2: The Approach */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-indigo-900 rounded-3xl p-6 sm:p-8 md:p-12 text-primary-foreground relative overflow-hidden shadow-lg animate-fade-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Uma consultoria que estrutura a gestão da sua empresa
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    A Consultoria Empresarial da Engaja parte de um diagnóstico aprofundado da operação para identificar gargalos e estruturar a gestão de ponta a ponta.
                  </p>
                  <p>
                    Organizamos processos, definimos indicadores e estabelecemos responsabilidades claras construindo uma operação que funciona com método e com menos dependência da presença dos donos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 3: How it is conducted */}
        <section className="py-12 sm:py-16 bg-muted/20 border-t border-b border-border/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Como a consultoria é conduzida
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Frentes práticas realizadas sob medida in company:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Diagnóstico da operação",
                  desc: "Análise operacional completa para identificar os reais gargalos que travam a gestão.",
                },
                {
                  title: "Estruturação de processos",
                  desc: "Mapeamento e organização inteligente do fluxo de trabalho e das rotinas diárias.",
                },
                {
                  title: "Definição de indicadores",
                  desc: "Modelagem de métricas de desempenho e painéis (KPIs) para acompanhar e prever resultados.",
                },
                {
                  title: "Atribuição de papéis",
                  desc: "Responsabilidades claras para dar autonomia ao time e reduzir a dependência dos sócios.",
                },
                {
                  title: "Aplicação in company",
                  desc: "Trabalho prático conduzido no dia a dia, conectado à realidade física do negócio.",
                },
              ].map((step, idx) => (
                <Card key={step.title} className="border-border/50 bg-card h-full flex flex-col justify-between">
                  <CardContent className="p-5 space-y-3">
                    <span className="text-2xl font-black text-accent">{`0${idx + 1}`}</span>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm leading-snug">{step.title}</h4>
                    <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 4 & Bloco 5 Side by Side */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto animate-fade-up">
              {/* Bloco 4: Para quem é indicada */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Para quem é indicada
                </h3>
                <ul className="space-y-3">
                  {[
                    "Empresas em crescimento cuja gestão não acompanhou o ritmo da operação",
                    "Negócios onde as decisões dependem quase sempre dos sócios fundadores",
                    "Empresas com processos confusos, retrabalho e resultados pouco previsíveis",
                    "Gestores que querem profissionalizar a operação para escalar com segurança",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <Compass className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloco 5: O que sua empresa ganha */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  O que sua empresa ganha com a consultoria
                </h3>
                <ul className="space-y-3">
                  {[
                    "Processos organizados, padronizados e com desperdício mínimo",
                    "Indicadores claros e confiáveis para decisões gerenciais seguras",
                    "Gestão profissionalizada e menos dependente da presença física dos donos",
                    "Resultados operacionais mais previsíveis, consistentes e sustentáveis",
                    "Uma operação robusta e estruturada para crescer com solidez",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Bottom CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Transforme sua empresa em uma operação organizada e previsível
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A Consultoria Empresarial começa por um diagnóstico da sua operação. Fale com a Engaja e estruture a gestão do seu negócio para crescer com segurança.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero um diagnóstico
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EmpresarialConsulting;
