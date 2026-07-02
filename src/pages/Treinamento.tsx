import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Crown,
  Users,
  Target,
  ShoppingCart,
  GraduationCap,
  Zap,
  Sliders,
  ArrowRight,
  MessageCircle,
  Clock,
  Compass,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519998051046";

const trainingPrograms = [
  {
    icon: Crown,
    title: "PDL - Programa de Desenvolvimento de Liderança",
    description: "Uma jornada estruturada para formar líderes e preparar sucessores. Com assessments, módulos personalizados e acompanhamento contínuo, o PDL desenvolve a maturidade de gestão e fortalece a cultura de liderança da empresa ao longo do tempo.",
    ctaText: "Conhecer o PDL",
    href: "/treinamento/pdl",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Treinamento de Liderança",
    description: "Capacitação prática para líderes que precisam engajar equipes, dar feedbacks, cobrar resultados e lidar com conflitos. Desenvolvemos as competências essenciais para transformar gestores em líderes que inspiram e entregam.",
    ctaText: "Saber mais",
    href: "/treinamento/lideranca",
    color: "from-indigo-600 to-purple-600",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Target,
    title: "Treinamento Comercial",
    description: "Estruture a performance do seu time de vendas. Desenvolvemos técnicas de prospecção, negociação e gestão do processo comercial para equipes que conhecem o produto, mas precisam vender com mais método e consistência.",
    ctaText: "Saber mais",
    href: "/treinamento/comercial",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: ShoppingCart,
    title: "Treinamento de Vendas",
    description: "Foco direto na conversão. Capacitamos vendedores em vendas consultivas, negociação e gestão de carteira, fortalecendo o relacionamento com o cliente e aumentando a taxa de fechamento.",
    ctaText: "Saber mais",
    href: "/treinamento/vendas",
    color: "from-pink-600 to-rose-600",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Capacitação",
    description: "Desenvolvimento de competências técnicas e comportamentais sob medida. Ideal para empresas que têm equipes com potencial, mas precisam elevar conhecimento e habilidades para entregar mais resultados.",
    ctaText: "Saber mais",
    href: "/treinamento/capacitacao",
    color: "from-rose-600 to-orange-600",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: Zap,
    title: "Treinamento Imersão",
    description: "Experiências intensivas e altamente práticas para desenvolver competências em pouco tempo. Indicado quando a empresa precisa acelerar o aprendizado e gerar aplicação imediata diante de um desafio ou objetivo específico.",
    ctaText: "Saber mais",
    href: "/treinamento/imersao",
    color: "from-orange-600 to-amber-600",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Sliders,
    title: "Treinamentos Personalizados",
    description: "Sua empresa tem um desafio que nenhum treinamento de prateleira resolve. Construímos conteúdos sob medida a partir dos objetivos, da cultura e da realidade da sua organização com aplicabilidade imediata.",
    ctaText: "Saber mais",
    href: "/treinamento/personalizados",
    color: "from-amber-600 to-yellow-600",
    bgColor: "bg-amber-500/10",
  },
];

const journeySteps = [
  {
    step: "1",
    title: "Diagnóstico e Alinhamento Estratégico",
    description: "Briefing do desafio real diretamente com a diretoria para mapear as principais dores.",
  },
  {
    step: "2",
    title: "Mapeamento e Assessments",
    description: "Avaliação comportamental e técnica da equipe para identificar lacunas de competência.",
  },
  {
    step: "3",
    title: "Desenho de Conteúdo Sob Medida",
    description: "Customização completa dos materiais e dinâmicas focados na cultura e rotina da empresa.",
  },
  {
    step: "4",
    title: "Facilitação In Company",
    description: "Aplicação presencial dos treinamentos através de metodologias ativas e simulações práticas.",
  },
  {
    step: "5",
    title: "Definição de Planos de Ação",
    description: "Criação de compromissos individuais com metas claras de aplicação no dia a dia operacional.",
  },
  {
    step: "6",
    title: "Mensuração de KPIs e Impacto",
    description: "Avaliação contínua da evolução das métricas de retenção e resultados de performance.",
  },
];

const Treinamento = () => {
  return (
    <>
      <Helmet>
        <title>Treinamentos Corporativos In Company | Engaja Soluções</title>
        <meta
          name="description"
          content="Treinamentos corporativos sob medida para equipes e líderes. Programas de liderança, vendas, comerciais e capacitações de alta performance."
        />
        <link rel="canonical" href="https://www.engaja.com.br/treinamento" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-primary text-primary-foreground">
          {/* Background shapes */}
          <div className="absolute inset-0 hero-gradient opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />
          
          <div className="container relative">
            <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                In Company
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Treinamentos que desenvolvem pessoas e <span className="text-accent">impulsionam resultados</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Equipes bem preparadas são o que separam empresas que crescem das que travam. Nossos treinamentos são desenhados sob medida e aplicados in company, conectados à realidade do seu negócio para que o aprendizado vire resultado na rotina, não só na sala de aula.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Proposta
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-up">
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
                Nossos Programas
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
                Programas de capacitação sob medida para seu time
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {trainingPrograms.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 card-hover flex flex-col justify-between overflow-hidden bg-card"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="p-6 sm:p-8 space-y-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                        {item.title}
                      </h3>
                      {/* Description */}
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Footer / Link */}
                    <div className="p-6 sm:p-8 pt-0 border-t border-border/30 mt-auto">
                      <Button asChild variant="link" className="text-primary hover:text-accent p-0 font-bold group text-sm">
                        <Link to={item.href}>
                          {item.ctaText}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/30 border-t border-b border-border/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up">
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
                Metodologia
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
                A jornada de transformação Engaja In Company
              </h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">
                Como estruturamos e aplicamos nossos treinamentos para garantir a aplicação prática imediata.
              </p>
            </div>

            {/* Stepper Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto animate-fade-up">
              {journeySteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-black flex items-center justify-center flex-shrink-0 text-lg shadow-sm">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pós Treinamento Box */}
            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/10 shadow-sm animate-fade-up">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground uppercase tracking-wider">
                    Pós Treinamento
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Acompanhamento contínuo e checkpoints de fixação para garantir que o aprendizado vire rotina definitiva, consolidando novos comportamentos e sustentando resultados na operação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-indigo-900 p-8 md:p-12 lg:p-16 text-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative animate-fade-up max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Pronto para transformar sua equipe?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                  Solicite uma proposta personalizada de treinamento in company e veja como podemos construir juntos o próximo nível de maturidade e resultados da sua empresa.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base btn-glow"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Solicitar uma proposta de treinamento
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Treinamento;
