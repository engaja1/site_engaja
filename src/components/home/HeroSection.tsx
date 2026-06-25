import { Link } from "react-router-dom";
import { ArrowRight, Play, TrendingUp, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-5 sm:space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm">
              <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent" />
              <span>Soluções Corporativas Práticas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Soluções sob medida para <span className="text-accent">sua empresa</span> crescer
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-primary-foreground/90 max-w-xl leading-relaxed">
              Desenvolvemos projetos e treinamentos 100% personalizados para a realidade e individualidade do seu negócio, garantindo resultados reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 btn-glow text-sm sm:text-base font-semibold h-11 sm:h-12 px-5 sm:px-6 group">
                <a href="https://wa.me/5511978153276" target="_blank" rel="noopener noreferrer">
                  <span className="flex flex-col items-center">
                    <span className="flex items-center">
                      Fale Conosco
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-[10px] sm:text-xs opacity-80 font-normal">Sem compromisso • Resposta em 24h</span>
                  </span>
                </a>
              </Button>
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6">
                <Link to="/consultoria">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Conheça Nossas Soluções
                </Link>
              </Button>
            </div>

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 sm:px-4 py-1.5 sm:py-2 rounded-full animate-pulse">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">
                Agenda limitada para {new Date().toLocaleString('pt-BR', { month: 'long' }).charAt(0).toUpperCase() + new Date().toLocaleString('pt-BR', { month: 'long' }).slice(1)}
              </span>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2 sm:pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Projetos Customizados</p>
                  <p className="text-[11px] text-primary-foreground/75">Desenhados para a sua cultura e ritmo.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Foco Prático em Resultados</p>
                  <p className="text-[11px] text-primary-foreground/75">Sem teoria excessiva, direto no seu problema.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block relative animate-fade-up stagger-2">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Abstract shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
              
              {/* Cards floating */}
              <div className="absolute top-10 left-10 bg-background rounded-2xl shadow-xl p-6 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-lg">+45%</p>
                    <p className="text-muted-foreground text-sm">Produtividade</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-10 bg-background rounded-2xl shadow-xl p-6 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-bold text-lg">98%</p>
                    <p className="text-muted-foreground text-sm">Satisfação</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-primary-foreground/20 border-dashed animate-spin" style={{ animationDuration: "30s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
}