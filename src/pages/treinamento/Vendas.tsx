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

const VendasTraining = () => {
  return (
    <>
      <Helmet>
        <title>Treinamento de Vendas | Engaja Soluções</title>
        <meta
          name="description"
          content="Capacite seus vendedores com técnicas de vendas consultivas, negociação e gestão de carteira para aumentar conversões."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento/vendas" />
      </Helmet>

      <Layout>
        {/* Navigation & Header */}
        <section className="bg-muted/30 py-6 border-b border-border/40">
          <div className="container">
            <Link
              to="/treinamento"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Treinamentos
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Treinamento de Vendas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Treinamento de Vendas
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desenvolva vendedores mais preparados em vendas consultivas, negociação e relacionamento para converter mais e construir uma carteira de clientes sólida.
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
                  Seu vendedor perde negócios que deveriam ser fechados?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Oportunidades bem encaminhadas se perdem na hora decisiva: uma negociação mal conduzida, um fechamento inseguro ou um relacionamento que não foi cultivado.
                </p>
                <p className="font-semibold text-foreground/80">
                  Quando o vendedor não domina a técnica de venda, a empresa deixa dinheiro na mesa mesmo com bons produtos e boas oportunidades.
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
                  Um treinamento focado na performance do vendedor
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    O Treinamento de Vendas da Engaja prepara vendedores com técnicas modernas de vendas consultivas, negociação e gestão de carteira.
                  </p>
                  <p>
                    O foco está em desenvolver a habilidade individual de vender com consistência: entender a necessidade do cliente, conduzir a negociação com segurança e transformar contatos em relacionamentos de longo prazo.
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
                Como o treinamento é conduzido
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Frente prática focada na performance comercial diária:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Vendas consultivas",
                  desc: "Técnica focada em entender a real necessidade do cliente e vender valor, não preço.",
                },
                {
                  title: "Negociação e fechamento",
                  desc: "Condução e controle da venda de forma segura até a assinatura do contrato.",
                },
                {
                  title: "Gestão de carteira",
                  desc: "Técnicas de relacionamento e fidelização para vender recorrentemente para o mesmo cliente.",
                },
                {
                  title: "Aplicação in company",
                  desc: "Treinamento presencial 100% customizado ao seu produto e perfil de comprador.",
                },
              ].map((step, idx) => (
                <Card key={step.title} className="border-border/50 bg-card h-full flex flex-col justify-between">
                  <CardContent className="p-6 space-y-3">
                    <span className="text-3xl font-black text-accent">{`0${idx + 1}`}</span>
                    <h4 className="font-bold text-foreground text-sm sm:text-base">{step.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{step.desc}</p>
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
              {/* Bloco 4: Para quem é indicado */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Para quem é indicado
                </h3>
                <ul className="space-y-3">
                  {[
                    "Vendedores que perdem oportunidades na negociação ou no fechamento",
                    "Times que precisam evoluir da venda reativa para a venda consultiva",
                    "Empresas que querem fortalecer o relacionamento e a fidelização de clientes",
                    "Vendedores que precisam aproveitar melhor a carteira que já têm",
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
                  O que sua empresa ganha com o treinamento
                </h3>
                <ul className="space-y-3">
                  {[
                    "Vendedores mais confiantes e preparados para negociar com margens saudáveis",
                    "Mais oportunidades convertidas em vendas de forma recorrente",
                    "Relacionamento comercial muito mais forte e duradouro com os clientes",
                    "Melhor aproveitamento da carteira existente (vendas adicionais / cross-sell)",
                    "Resultados comerciais mais consistentes e previsíveis a médio prazo",
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
                Prepare seus vendedores para converter mais e fidelizar clientes
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                O Treinamento de Vendas é construído a partir da realidade do seu produto e dos seus clientes. Fale com a Engaja e desenvolva um time de vendas mais preparado.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero desenvolver meus vendedores
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

export default VendasTraining;
