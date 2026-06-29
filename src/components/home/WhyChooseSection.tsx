import { CheckCircle2, Building, Users, Target, ShieldCheck } from "lucide-react";

export function WhyChooseSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-6 animate-fade-up">
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Por que a Engaja?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Metodologia própria para profissionalizar e <span className="text-accent">escalar negócios</span>
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
              <p>
                A Engaja é uma consultoria de gestão e desenvolvimento empresarial que já estruturou mais de 2.800 empresas dos setores de indústria, comércio, varejo e serviços. Ao longo dessa trajetória, consolidamos uma metodologia própria para profissionalizar negócios em crescimento e prepará-los para escalar com solidez.
              </p>
              <p>
                Nossa atuação vai além de treinamentos pontuais: trabalhamos a empresa de forma integrada: gestão, pessoas, processos e performance.
              </p>
              <p>
                Não trabalhamos com soluções padronizadas. Cada projeto começa por um diagnóstico criterioso da empresa, que revela onde estão os reais gargalos e orienta a construção de uma solução personalizada.
              </p>
              <p>
                Essa abordagem conecta consultoria empresarial, de RH e comercial ao desenvolvimento de líderes e equipes, com aplicação direta na operação. O resultado é uma empresa mais organizada, previsível e preparada para crescer com o suporte de uma consultoria que atua em São João da Boa Vista e toda a região.
              </p>
            </div>
          </div>

          {/* Visual Indicators / Stats */}
          <div className="relative animate-fade-up lg:pl-4">
            <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary-foreground/10">
              <div className="absolute -top-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-28 sm:w-32 h-28 sm:h-32 bg-primary-foreground/10 rounded-full blur-2xl" />
              
              <div className="relative space-y-6">
                <div className="text-center pb-6 border-b border-primary-foreground/10">
                  <p className="text-4xl sm:text-5xl font-black text-accent">+2.800</p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80 uppercase tracking-wider mt-1 font-semibold">
                    Empresas estruturadas
                  </p>
                  <p className="text-[11px] sm:text-xs text-primary-foreground/60 mt-0.5">
                    Indústria, Comércio, Varejo e Serviços
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Building className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base">Atuação Integrada</p>
                      <p className="text-primary-foreground/60 text-xs sm:text-sm">Gestão, pessoas, processos e performance trabalhando em conjunto.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Target className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base">Diagnóstico Criterioso</p>
                      <p className="text-primary-foreground/60 text-xs sm:text-sm">Identificação dos gargalos reais para construir soluções personalizadas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base">Presença Regional</p>
                      <p className="text-primary-foreground/60 text-xs sm:text-sm">Suporte próximo e atuação ativa em São João da Boa Vista e região.</p>
                    </div>
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
