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

const Personalizados = () => {
  return (
    <>
      <Helmet>
        <title>Treinamentos Personalizados | Engaja Soluções</title>
        <meta
          name="description"
          content="Desenvolvimento de programas educacionais corporativos sob medida para a realidade, cultura e desafios do seu negócio."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento/personalizados" />
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
                Treinamentos Personalizados
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Treinamentos Personalizados
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conteúdos construídos sob medida para os desafios específicos da sua empresa a partir da sua realidade, da sua cultura e dos seus objetivos.
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
                  Seu desafio é específico demais para um treinamento pronto?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Nem todo desafio cabe em um treinamento padrão. Cada empresa tem uma cultura, um mercado e objetivos próprios e, muitas vezes, soluções genéricas não conversam com a realidade do negócio.
                </p>
                <p className="font-semibold text-foreground/80">
                  Quando o treinamento não considera o seu contexto, o aprendizado não se conecta à prática e o investimento se perde.
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
                  Um treinamento desenhado exclusivamente para a sua empresa
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    Os Treinamentos Personalizados da Engaja são construídos do zero, considerando os objetivos, a cultura e a realidade da sua organização.
                  </p>
                  <p>
                    Em vez de adaptar um conteúdo de prateleira, partimos do seu desafio real para desenvolver um treinamento que faz sentido para o seu time e gera aplicabilidade imediata.
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
                Como o treinamento é construído
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Processo de co-criação in company para relevância total:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Entendimento do desafio",
                  desc: "Imersão detalhada nos objetivos específicos, na cultura e no contexto da empresa.",
                },
                {
                  title: "Desenho sob medida",
                  desc: "Criação de um conteúdo e material exclusivos para a realidade do time.",
                },
                {
                  title: "Foco em aplicabilidade",
                  desc: "Treinamento totalmente orientado à prática e aos processos de trabalho.",
                },
                {
                  title: "Condução in company",
                  desc: "Execução presencial conectada diretamente à rotina da equipe local.",
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
                    "Empresas com desafios específicos que treinamentos genéricos não atendem",
                    "Negócios que querem um conteúdo alinhado à sua cultura e aos seus objetivos",
                    "Gestores que buscam aplicabilidade real, e não teoria padronizada",
                    "Organizações que precisam desenvolver competências muito particulares",
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
                    "Conteúdo 100% alinhado à realidade técnica e comercial do seu negócio",
                    "Maior engajamento da equipe, por fazer total sentido para o dia a dia",
                    "Aplicabilidade imediata dos aprendizados na operação",
                    "Soluções eficazes para desafios que nenhum treinamento pronto resolve",
                    "Impacto real, mensurável e duradouro nos resultados da empresa",
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
                Tem um desafio específico? A gente constrói o treinamento certo para ele
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Os Treinamentos Personalizados começam por uma conversa sobre o seu desafio. Fale com a Engaja e desenvolva uma solução sob medida para a sua empresa.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero um treinamento sob medida
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

export default Personalizados;
