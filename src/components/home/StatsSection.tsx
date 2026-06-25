import { Search, Award, Target, TrendingUp } from "lucide-react";

const pillars = [
  { 
    icon: Search, 
    label: "Diagnóstico Preciso", 
    description: "Mapeamos os gargalos operacionais e estratégicos reais antes de propor qualquer mudança." 
  },
  { 
    icon: Target, 
    label: "Foco em Resultados", 
    description: "Metodologias voltadas para aumentar a produtividade e a previsibilidade comercial da empresa." 
  },
  { 
    icon: Award, 
    label: "Solução Sob Medida", 
    description: "Sem pacotes genéricos. Cada consultoria ou treinamento é desenhado para sua realidade." 
  },
  { 
    icon: TrendingUp, 
    label: "Implantação Prática", 
    description: "Acompanhamos a execução lado a lado com sua equipe para garantir a sustentabilidade das rotinas." 
  },
];

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Nossos Diferenciais
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Como ajudamos sua empresa a <span className="text-primary">crescer com organização</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm space-y-4 hover:border-primary/20 hover:shadow-md transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <pillar.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-base sm:text-lg text-foreground">{pillar.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}