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
  Users,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

const Lideranca = () => {
  return (
    <>
      <Helmet>
        <title>Treinamento de Liderança | Engaja Soluções</title>
        <meta
          name="description"
          content="Desenvolva líderes preparados para engajar equipes, dar feedbacks, cobrar resultados e conduzir pessoas com segurança."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento/lideranca" />
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
                Treinamento de Liderança
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Treinamento de Liderança
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desenvolva líderes preparados para engajar equipes, dar feedbacks, cobrar resultados e conduzir pessoas com segurança.
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
                  Seus líderes foram promovidos, mas estão preparados para liderar?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  É comum que bons técnicos virem gestores sem nunca terem sido preparados para isso. Aí surgem as dificuldades: feedbacks que não acontecem, conflitos mal conduzidos, equipes desengajadas e metas que não saem do papel.
                </p>
                <p className="font-semibold text-foreground/80">
                  Quando a liderança não está preparada, o resultado da equipe inteira fica comprometido.
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
                  Um treinamento prático, focado no que o líder vive no dia a dia
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    O Treinamento de Liderança da Engaja é uma capacitação direta e aplicável, voltada para desenvolver as competências essenciais de quem conduz pessoas.
                  </p>
                  <p>
                    A partir de diagnósticos comportamentais e dinâmicas práticas, trabalhamos as situações reais que o líder enfrenta na rotina — não conceitos genéricos de gestão.
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
                Abordagem metodológica aplicada diretamente na rotina:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Diagnóstico comportamental",
                  desc: "Identificação do perfil e dos pontos de desenvolvimento de cada líder.",
                },
                {
                  title: "Treinamento prático",
                  desc: "Situações reais de liderança trabalhadas em dinâmicas aplicáveis.",
                },
                {
                  title: "Plano de desenvolvimento",
                  desc: "Direcionamentos individuais para a evolução contínua na liderança.",
                },
                {
                  title: "Aplicação in company",
                  desc: "Conteúdo 100% conectado à realidade e à rotina da sua empresa.",
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
                    "Líderes recém-promovidos que precisam se preparar para a função",
                    "Gestores com dificuldade para dar feedback e cobrar resultados",
                    "Empresas com equipes desengajadas ou conflitos internos recorrentes",
                    "Times de liderança que precisam de um alinhamento prático e objetivo",
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
                    "Líderes mais seguros para conduzir e engajar equipes",
                    "Feedbacks mais frequentes e bem estruturados",
                    "Conflitos resolvidos com mais maturidade",
                    "Equipes mais alinhadas e produtivas",
                    "Melhora direta no clima e nos resultados do time",
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
                Prepare seus líderes para entregar resultado através das pessoas
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                O Treinamento de Liderança é construído a partir da realidade da sua equipe. Fale com a Engaja e desenvolva líderes mais preparados e confiantes.
              </p>
              <div className="pt-2 space-y-4">
                <div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quero treinar minha liderança
                    </a>
                  </Button>
                </div>
                <div>
                  <Link
                    to="/treinamento/pdl"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors mt-2"
                  >
                    Busca um desenvolvimento contínuo e de longo prazo? Conheça o PDL
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Lideranca;
