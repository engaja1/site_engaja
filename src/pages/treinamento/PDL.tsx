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
  Award,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

const PDL = () => {
  return (
    <>
      <Helmet>
        <title>PDL - Programa de Desenvolvimento de Liderança | Engaja</title>
        <meta
          name="description"
          content="Forme líderes de alto impacto, prepare sucessores e consolide a cultura de gestão da sua empresa com o PDL In Company."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento/pdl" />
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
                Programa de Desenvolvimento de Liderança
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                PDL: Programa de Desenvolvimento de Liderança
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma jornada estruturada para formar líderes preparados, desenvolver sucessores e fortalecer a cultura de liderança da sua empresa.
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
                  Sua empresa depende de poucas pessoas para liderar?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Em muitas empresas em crescimento, a liderança se concentra em um ou dois nomes. Os líderes têm níveis de maturidade muito diferentes, faltam sucessores preparados e a cultura de gestão ainda não está consolidada.
                </p>
                <p className="font-semibold text-foreground/80">
                  O resultado aparece no dia a dia: equipes desalinhadas, decisões centralizadas e um time de gestão que apaga incêndio em vez de desenvolver pessoas.
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
                  Um programa contínuo, não um treinamento pontual
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    O PDL é uma jornada estruturada de desenvolvimento de liderança, construída sob medida para a realidade da sua empresa. Diferente de um treinamento avulso, é um processo contínuo, com trilha de evolução, acompanhamento e medição de resultados ao longo do tempo.
                  </p>
                  <p>
                    O programa contempla tanto os líderes atuais quanto os profissionais com potencial para assumir posições de liderança no futuro.
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
                Como o PDL é conduzido
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Etapas que se conectam e evoluem ao longo de todo o programa:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Assessments comportamentais",
                  desc: "Mapeamento completo do perfil e da maturidade de cada líder da equipe.",
                },
                {
                  title: "Módulos personalizados",
                  desc: "Conteúdos dinâmicos definidos a partir das necessidades reais da empresa.",
                },
                {
                  title: "Planos de ação individuais",
                  desc: "Desenvolvimento prático e direto aplicado à rotina de cada participante.",
                },
                {
                  title: "Acompanhamento da evolução",
                  desc: "Medição contínua do progresso comportamental ao longo de toda a jornada.",
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
                    "Empresas com líderes em diferentes níveis de maturidade",
                    "Negócios que precisam preparar sucessores para posições-chave",
                    "Organizações que querem fortalecer a cultura de liderança",
                    "Gestores que enfrentam dificuldade na condução de equipes",
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
                  O que sua empresa ganha com o PDL
                </h3>
                <ul className="space-y-3">
                  {[
                    "Lideranças mais preparadas e seguras na gestão de pessoas",
                    "Formação de sucessores para garantir a continuidade do negócio",
                    "Cultura organizacional fortalecida",
                    "Equipes mais engajadas e produtivas",
                    "Maior sustentabilidade dos resultados ao longo do tempo",
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
                Forme os líderes que vão sustentar o crescimento da sua empresa
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                O PDL é desenhado a partir de um diagnóstico da realidade da sua liderança. Fale com a Engaja e descubra como estruturar a jornada de desenvolvimento dos seus líderes.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero desenvolver minha liderança
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

export default PDL;
