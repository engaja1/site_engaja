import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SolutionsSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nossas Duas Vertentes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Soluções estratégicas e personalizadas para{" "}
            <span className="text-primary">diferentes realidades empresariais</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-base text-muted-foreground leading-relaxed">
            Atuamos a partir da individualidade de cada empresa e de cada desafio, desenvolvendo soluções estratégicas e personalizadas que organizam processos, fortalecem equipes e geram resultados consistentes em diferentes contextos e segmentos.
          </p>
        </div>

        {/* 2 Vertentes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1: Consultoria */}
          <Link to="/consultoria" className="group animate-fade-up block">
            <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 card-hover overflow-hidden relative bg-card p-6 sm:p-8 flex flex-col justify-between">
              <span className="absolute -top-0 right-6 bg-accent text-accent-foreground px-3 py-1.5 rounded-b-lg text-xs font-bold shadow-md z-10">
                Soluções Sob Medida
              </span>
              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Briefcase className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Consultoria Estratégica
                    </h3>
                    <p className="text-accent font-medium text-xs sm:text-sm mt-0.5">
                      Diagnóstico & Implementação
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  Projetos consultivos exclusivos desenhados sob medida para os desafios operacionais e de crescimento da sua empresa. Atuamos de forma prática na estruturação de processos, gestão, finanças, vendas, pessoas e tecnologia.
                </p>

                {/* Sub-areas list */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold text-foreground/45 uppercase tracking-wider">
                    O que trabalhamos de forma personalizada:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Consultoria de RH</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Consultoria Financeira</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Consultoria Comercial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Recrutamento & Seleção</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Inteligência Artificial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Agência de Marketing</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-primary font-semibold text-sm mt-4 group-hover:text-accent transition-colors pt-4 border-t border-border/40">
                Conhecer Consultorias Personalizadas
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Card>
          </Link>

          {/* Card 2: Treinamento */}
          <Link to="/treinamento" className="group animate-fade-up block" style={{ animationDelay: "0.15s" }}>
            <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 card-hover overflow-hidden relative bg-card p-6 sm:p-8 flex flex-col justify-between">
              <span className="absolute -top-0 right-6 bg-accent text-accent-foreground px-3 py-1.5 rounded-b-lg text-xs font-bold shadow-md z-10">
                Mais Procurado
              </span>
              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Treinamentos Corporativos
                    </h3>
                    <p className="text-accent font-medium text-xs sm:text-sm mt-0.5">
                      Desenvolvimento & Capacitação
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                  Programas educacionais desenvolvidos sob medida para líderes e equipes, focando nas reais lacunas de competências da empresa, utilizando metodologia ativa para aplicação prática imediata.
                </p>

                {/* Sub-areas list */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold text-foreground/45 uppercase tracking-wider">
                    O que trabalhamos de forma personalizada:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Treinamentos de Liderança</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Treinamento Comercial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Imersões Práticas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Capacitação Comportamental</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Treinamentos de Vendas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Treinamentos Sob Medida</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-primary font-semibold text-sm mt-4 group-hover:text-accent transition-colors pt-4 border-t border-border/40">
                Conhecer Treinamentos Personalizados
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
