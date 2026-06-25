import { CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import iconMetodologia from "@/assets/why-choose/metodologia.png";
import iconAgilidade from "@/assets/why-choose/agilidade.png";
import iconEquipe from "@/assets/why-choose/equipe.png";
import iconParceria from "@/assets/why-choose/parceria.png";

const features = [
  {
    icon: iconMetodologia,
    title: "Metodologia Prática",
    description: "Métodos desenhados com base em diagnósticos reais, focados em gerar valor e organização imediata.",
  },
  {
    icon: iconAgilidade,
    title: "Execução Sob Medida",
    description: "Respeitamos a individualidade da sua equipe e implantamos as melhorias no ritmo certo para o negócio.",
  },
  {
    icon: iconEquipe,
    title: "Equipe de Mercado",
    description: "Consultores e facilitadores experientes que entendem a prática empresarial de diversos segmentos.",
  },
  {
    icon: iconParceria,
    title: "Acompanhamento Real",
    description: "Parceria estratégica com suporte contínuo para garantir a consolidação dos novos processos.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-up">
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Por que a Engaja?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Sua parceira estratégica para soluções <span className="text-accent">100% personalizadas</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed">
              Descartamos fórmulas prontas e pacotes padronizados. Atuamos com foco no diagnóstico do seu momento atual, entregando a solução exata que sua empresa precisa para otimizar processos e treinar pessoas.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="space-y-2 sm:space-y-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">{feature.title}</h3>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Indicators */}
          <div className="relative animate-fade-up stagger-2">
            <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-28 sm:w-32 h-28 sm:h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 bg-primary-foreground/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">Projetos Validados</p>
                    <p className="text-primary-foreground/60 text-xs sm:text-sm">Garantia de acompanhamento e homologação dos fluxos.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-primary-foreground/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">Metodologia Ativa</p>
                    <p className="text-primary-foreground/60 text-xs sm:text-sm">Foco 100% prático e focado no dia a dia da empresa.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 bg-primary-foreground/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg">Segurança Comercial</p>
                    <p className="text-primary-foreground/60 text-xs sm:text-sm">Soluções viáveis pensadas para o retorno do seu investimento.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
