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

const ComercialConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria Comercial | Engaja Soluções</title>
        <meta
          name="description"
          content="Estruture seu setor comercial, defina o funil de vendas, implante CRM e garanta vendas previsíveis e consistentes."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria/comercial" />
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
                Consultoria Comercial
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Consultoria Comercial
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estruture o setor comercial, organize o funil de vendas e construa uma operação capaz de gerar vendas previsíveis e crescimento sustentável.
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
                  Suas vendas oscilam e dependem só de indicação?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Quando o comercial não tem processo definido, o resultado vira uma montanha-russa: um mês bom, outro fraco, sem previsibilidade.
                </p>
                <p className="font-semibold text-foreground/80">
                  O crescimento passa a depender de indicações ou do esforço individual de alguns vendedores e não de uma estrutura que sustente vendas de forma consistente.
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
                  Uma consultoria que estrutura toda a sua operação comercial
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    A Consultoria Comercial da Engaja organiza o setor de vendas de ponta a ponta. Mais do que treinar pessoas, estruturamos o processo que faz a área funcionar.
                  </p>
                  <p>
                    Mapeamos e organizamos o funil de vendas, implantamos CRM, definimos indicadores de performance e desenvolvemos a equipe para transformar o comercial em um motor de crescimento previsível.
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
                  title: "Diagnóstico comercial",
                  desc: "Análise profunda de como a empresa vende hoje e onde perde as principais oportunidades de conversão.",
                },
                {
                  title: "Estruturação do funil",
                  desc: "Mapeamento e organização rigorosa de todas as etapas de venda, desde a prospecção até o fechamento.",
                },
                {
                  title: "Implantação de CRM",
                  desc: "Escolha, implantação e customização da ferramenta para controlar e monitorar as oportunidades comerciais.",
                },
                {
                  title: "Definição de indicadores",
                  desc: "Métricas gerenciais claras para medir, gerir e prever a performance de vendas da equipe.",
                },
                {
                  title: "Desenvolvimento do time",
                  desc: "Capacitação in company da equipe para atuar com foco no novo processo estruturado.",
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
                    "Empresas com vendas instáveis e sem nenhuma previsibilidade",
                    "Negócios cujo crescimento depende de indicações ou de pouquíssimos vendedores",
                    "Times comerciais que atuam sem processo de vendas, CRM ou indicadores definidos",
                    "Gestores que querem transformar o comercial em uma operação profissional de alta conversão",
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
                    "Funil de vendas mapeado, organizado e altamente previsível",
                    "Ferramenta de CRM implantada e adotada pela equipe de vendas",
                    "Indicadores comerciais claros e visuais para gerenciar a performance",
                    "Menos dependência de indicações passivas e de esforços comerciais isolados",
                    "Aumento consistente da taxa de conversão e crescimento sustentável",
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
                Construa uma operação comercial que vende com previsibilidade
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A Consultoria Comercial começa por um diagnóstico da sua área de vendas. Fale com a Engaja e estruture o comercial do seu negócio.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero estruturar meu comercial
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

export default ComercialConsulting;
