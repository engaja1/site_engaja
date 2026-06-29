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

const WHATSAPP_LINK = "https://wa.me/5511978153276";

const Capacitacao = () => {
  return (
    <>
      <Helmet>
        <title>Treinamento de Capacitação | Engaja Soluções</title>
        <meta
          name="description"
          content="Desenvolva competências técnicas e comportamentais sob medida para sua equipe entregar mais resultados."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento/capacitacao" />
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
                Treinamento de Capacitação
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Treinamento de Capacitação
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desenvolva as competências técnicas e comportamentais que sua equipe precisa para entregar mais resultados no dia a dia.
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
                  Sua equipe tem potencial, mas não entrega o que poderia?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Em muitas empresas, os colaboradores têm vontade e capacidade, mas faltam conhecimentos e habilidades específicas para alcançar um nível mais alto de desempenho.
                </p>
                <p className="font-semibold text-foreground/80">
                  Esse gap aparece na produtividade, na qualidade da entrega e na dificuldade de acompanhar o crescimento e as exigências do negócio.
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
                  Um treinamento sob medida para elevar o nível da sua equipe
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    O Treinamento de Capacitação da Engaja é desenhado para desenvolver, de forma personalizada, as competências mais importantes para a realidade da sua empresa.
                  </p>
                  <p>
                    Trabalhamos tanto as habilidades técnicas quanto as comportamentais — sempre a partir das necessidades concretas do negócio, não de um conteúdo genérico de prateleira.
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
                Etapas estruturadas com foco em aplicabilidade na rotina:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Levantamento de necessidades",
                  desc: "Identificação precisa das competências específicas que faltam na equipe.",
                },
                {
                  title: "Conteúdo personalizado",
                  desc: "Desenho e desenvolvimento das habilidades prioritárias comportamentais ou técnicas.",
                },
                {
                  title: "Aplicação prática",
                  desc: "Dinâmicas com foco 100% voltado a transferir o aprendizado para o dia a dia.",
                },
                {
                  title: "Condução in company",
                  desc: "Treinamento presencial conectado à cultura e realidade da empresa.",
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
                    "Empresas com equipes que têm potencial, mas precisam evoluir tecnicamente",
                    "Times que precisam acompanhar o crescimento e as novas exigências do negócio",
                    "Gestores que querem elevar a produtividade e a qualidade das entregas",
                    "Organizações que buscam desenvolver competências específicas com foco prático",
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
                    "Profissionais muito mais preparados, qualificados e produtivos",
                    "Equipes alinhadas com as necessidades e objetivos reais do negócio",
                    "Mais qualidade, controle e consistência nas entregas do dia a dia",
                    "Desenvolvimento de competências técnicas e comportamentais alinhadas",
                    "Maior aproveitamento e valorização do potencial interno existente na equipe",
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
                Eleve o nível da sua equipe com um treinamento sob medida
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                O Treinamento de Capacitação é construído a partir das necessidades reais da sua empresa. Fale com a Engaja e desenvolva o potencial do seu time.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero capacitar minha equipe
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

export default Capacitacao;
