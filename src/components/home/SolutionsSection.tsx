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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Card 1: Consultoria */}
          <Link to="/consultoria" className="group animate-fade-up block">
            <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 card-hover overflow-hidden relative bg-card p-6 sm:p-8 flex flex-col justify-between">
              <span className="absolute -top-0 right-6 bg-accent text-accent-foreground px-3 py-1.5 rounded-b-lg text-xs font-bold shadow-md z-10">
                Gestão & Processos
              </span>
              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Briefcase className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Consultoria
                    </h3>
                    <p className="text-accent font-medium text-xs sm:text-sm mt-0.5">
                      Diagnóstico & Estrutura
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground text-sm sm:text-base mb-6 space-y-4 leading-relaxed">
                  <p>
                    Empresas em crescimento chegam a um ponto em que a estrutura de gestão não acompanha mais o ritmo da operação. Decisões se concentram nos sócios, os processos perdem consistência e os resultados deixam de ser previsíveis.
                  </p>
                  <p>
                    Nossas consultorias partem de um diagnóstico aprofundado da operação para estruturar processos, indicadores e responsabilidades construindo uma gestão capaz de crescer com previsibilidade e menos dependência da presença dos donos.
                  </p>
                  <p className="text-xs sm:text-sm italic font-medium text-foreground/70">
                    Todo o trabalho é conduzido in company, conectado à realidade e à rotina da empresa.
                  </p>
                </div>

                {/* Sub-areas list */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold text-foreground/45 uppercase tracking-wider">
                    Principais frentes de consultoria:
                  </h4>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Consultoria Comercial:</strong> estruturação do funil de vendas, CRM e indicadores para um crescimento previsível</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Consultoria Empresarial:</strong> organização de processos, gestão e indicadores de desempenho</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Consultoria de RH:</strong> atração, desenvolvimento e retenção de talentos</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-primary font-semibold text-sm mt-4 group-hover:text-accent transition-colors pt-4 border-t border-border/40">
                Conhecer Consultorias
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Card>
          </Link>

          {/* Card 2: Treinamento */}
          <Link to="/treinamento" className="group animate-fade-up block" style={{ animationDelay: "0.15s" }}>
            <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500 card-hover overflow-hidden relative bg-card p-6 sm:p-8 flex flex-col justify-between">
              <span className="absolute -top-0 right-6 bg-accent text-accent-foreground px-3 py-1.5 rounded-b-lg text-xs font-bold shadow-md z-10">
                Capacitação Prática
              </span>
              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <GraduationCap className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      Treinamento
                    </h3>
                    <p className="text-accent font-medium text-xs sm:text-sm mt-0.5">
                      Liderança & Vendas
                    </p>
                  </div>
                </div>

                <div className="text-muted-foreground text-sm sm:text-base mb-6 space-y-4 leading-relaxed">
                  <p>
                    Equipes sem método e líderes despreparados comprometem diretamente os resultados em produtividade, em vendas e no engajamento das pessoas.
                  </p>
                  <p>
                    Nossos programas de liderança, vendas e capacitação são desenhados sob medida e orientados à prática. As equipes desenvolvem competências aplicáveis ao dia a dia, com impacto direto na operação, sem conteúdo genérico e sem teoria descolada da realidade do negócio.
                  </p>
                </div>

                {/* Sub-areas list */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-semibold text-foreground/45 uppercase tracking-wider">
                    Principais programas de treinamento:
                  </h4>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>PDL:</strong> Programa de Desenvolvimento de Liderança jornada estruturada de formação de líderes e sucessores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Treinamento de Liderança:</strong> desenvolvimento de competências para engajar equipes e gerar resultados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Treinamento Comercial:</strong> técnicas de prospecção, negociação e fechamento para times de vendas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center text-primary font-semibold text-sm mt-4 group-hover:text-accent transition-colors pt-4 border-t border-border/40">
                Conhecer Treinamentos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
