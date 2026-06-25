import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "A Engaja transformou completamente nossa gestão de pessoas. Os treinamentos personalizados fizeram toda diferença no engajamento da equipe.",
    author: "Maria Silva",
    role: "Diretora de RH",
    company: "TechCorp Brasil",
    rating: 5,
  },
  {
    quote: "A consultoria comercial nos ajudou a aumentar as vendas em 60% no primeiro ano. Metodologia clara e resultados mensuráveis.",
    author: "Carlos Santos",
    role: "CEO",
    company: "Innovare Solutions",
    rating: 5,
  },
  {
    quote: "Parceria de longa data que nos acompanha em cada fase de crescimento. Profissionalismo e comprometimento excepcionais.",
    author: "Ana Oliveira",
    role: "Gerente Geral",
    company: "Grupo Expansão",
    rating: 5,
  },
  {
    quote: "O recrutamento e seleção da Engaja nos trouxe os melhores talentos do mercado. Processo ágil e assertivo.",
    author: "Roberto Lima",
    role: "Diretor de Operações",
    company: "LogiTrans",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 relative overflow-hidden animate-fade-up">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-accent/10 flex items-center justify-center">
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>

            <div className="relative">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed mb-6 sm:mb-8 font-medium pr-12 sm:pr-0">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-base sm:text-lg">
                    {testimonials[currentIndex].author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm sm:text-base">{testimonials[currentIndex].author}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-accent w-6 sm:w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}