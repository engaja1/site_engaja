import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 overflow-hidden">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-light p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-primary-foreground/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6 text-primary-foreground w-full min-w-0">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Pronto para um projeto <span className="text-accent">sob medida?</span>
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/80">
                Fale com um especialista hoje mesmo e receba um diagnóstico personalizado com soluções desenhadas especificamente para os desafios da sua empresa.
              </p>
              
              {/* Guarantee Badge */}
              <div className="flex items-start gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl w-full">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs sm:text-sm">Satisfação Garantida</p>
                  <p className="text-[10px] sm:text-xs text-primary-foreground/70">Resultados comprovados ou seu investimento de volta</p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/90">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span>Avaliação gratuita</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/90">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span>Resposta em 24h</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/90">
                  <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 lg:justify-end w-full min-w-0">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-12 sm:h-14 px-4 sm:px-8 text-sm sm:text-base font-semibold group">
                <a href="https://wa.me/5511978153276" target="_blank" rel="noopener noreferrer">
                  <span className="sm:hidden">Fale Conosco</span>
                  <span className="hidden sm:inline">Fale Conosco pelo WhatsApp</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="hero" size="lg" className="w-full h-12 sm:h-14 px-4 sm:px-8">
                <a href="https://wa.me/5511978153276" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  Entre em Contato
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
