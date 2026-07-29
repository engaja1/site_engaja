import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudySummary {
  id: string;
  tabTitle: string;
  title: string;
  subtitle: string;
  summary: string;
  highlightStat: string;
  highlightLabel: string;
  slug: string;
}

const cases: CaseStudySummary[] = [
  {
    id: "grupo-tribo",
    tabTitle: "Grupo Tribo",
    title: "Grupo Tribo",
    subtitle: "PDL: Programa de Desenvolvimento de Liderança",
    summary: "De 3 para mais de 30 lojas. Uma jornada contínua de desenvolvimento que preparou as lideranças do Grupo Tribo para sustentar a expansão da rede formando gestores, mapeando talentos e estruturando o plano de sucessão.",
    highlightStat: "10x",
    highlightLabel: "De 3 para 30+ lojas",
    slug: "grupo-tribo",
  },
  {
    id: "santa-izabel",
    tabTitle: "Santa Izabel",
    title: "Santa Izabel Agro Indústria",
    subtitle: "Consultoria de RH · Desenvolvimento Organizacional",
    summary: "Quatro anos estruturando a gestão de pessoas de uma indústria em plena expansão. Da criação do DHO e da avaliação de desempenho ao desenvolvimento de lideranças uma parceria que se ampliou para marketing e comercial.",
    highlightStat: "4 anos",
    highlightLabel: "de parceria estratégica",
    slug: "santa-izabel",
  },
  {
    id: "kometudo",
    tabTitle: "Kometudo Alimentos",
    title: "Kometudo Alimentos",
    subtitle: "Consultoria Sistêmica · Sucessão Familiar e Governança",
    summary: "Uma empresa com mais de 35 anos de história conduzindo a transição entre gerações. Quatro anos estruturando sucessão, governança, lideranças e cultura para crescer sem perder a essência familiar.",
    highlightStat: "35+ anos",
    highlightLabel: "de história consolidada",
    slug: "kometudo",
  },
];

export function CasesSection() {
  const [activeTab, setActiveTab] = useState("grupo-tribo");
  const currentCase = cases.find((c) => c.id === activeTab) || cases[0];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/40 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Cases de Sucesso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Resultados reais de quem confia na <span className="text-primary">Engaja</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Veja como ajudamos empresas de diferentes setores a organizar a gestão, capacitar equipes e destravar o crescimento sustentável.
          </p>
        </div>

        {/* Tab Triggers */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 max-w-5xl mx-auto animate-fade-up">
          {cases.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 tracking-wide shadow-sm border ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                  : "bg-background text-foreground/80 hover:bg-muted hover:text-foreground border-border/50"
              }`}
            >
              {item.tabTitle}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto animate-fade-up">
          <Card className="border-border/50 shadow-lg overflow-hidden bg-card">
            {/* Top colored line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent" />
            
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-border/40 pb-4 sm:pb-6">
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {currentCase.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                    {currentCase.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/15 text-accent-foreground font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-accent/25">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span>{currentCase.highlightLabel}</span>
                </div>
              </div>

              {/* Grid 2 Columns for Stat Highlight and Description */}
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center">
                {/* Column 1: Stat Highlight */}
                <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10 flex flex-col justify-center items-center text-center h-full min-h-[180px]">
                  <span className="text-4xl sm:text-5xl font-black text-primary leading-none">
                    {currentCase.highlightStat}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground mt-3 leading-snug">
                    {currentCase.highlightLabel}
                  </span>
                </div>

                {/* Column 2 & 3: Description and Link */}
                <div className="md:col-span-2 space-y-5">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {currentCase.summary}
                  </p>
                  
                  <div>
                    <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold group">
                      <Link to={`/cases/${currentCase.slug}`}>
                        Ver case completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Bottom CTA block in card */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                  Quer ver resultados reais como estes na operação do seu negócio?
                </p>
                <Button asChild className="bg-primary hover:bg-primary/95 text-white shadow-md w-full sm:w-auto h-11 sm:h-12 px-6">
                  <a href="https://wa.me/5519998051046" target="_blank" rel="noopener noreferrer">
                    Solicitar um Diagnóstico
                    <ArrowRight className="ml-2 h-4.5 w-4.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
