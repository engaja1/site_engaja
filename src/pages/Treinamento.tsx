import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Crown,
  Target,
  Zap,
  GraduationCap,
  ShoppingCart,
  Puzzle,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Cog,
  ClipboardList,
  ChevronRight,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

interface TrainingService {
  icon: LucideIcon;
  title: string;
  resultado: string;
  oQueE: string;
  comoFunciona: string[];
  oQueTrabalhamos: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const services: TrainingService[] = [
  {
    icon: Crown,
    title: "Treinamento de Liderança",
    resultado:
      "Líderes preparados para inspirar pessoas, gerenciar conflitos e bater metas.",
    oQueE:
      "Desenvolvimento prático de habilidades de gestão, comunicação assertiva, feedback construtivo e delegação eficiente.",
    comoFunciona: [
      "Alinhamento de Desafios",
      "Conteúdo Prático",
      "Simulações Reais",
      "Plano de Acompanhamento",
    ],
    oQueTrabalhamos:
      "Liderança situacional, inteligência emocional, resolução de conflitos, feedbacks e gestão de equipes.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Target,
    title: "Treinamento Comercial & Vendas",
    resultado:
      "Equipe comercial preparada para prospectar com inteligência e fechar mais negócios.",
    oQueE:
      "Técnicas práticas de vendas consultivas, negociação de alto impacto, prospecção ativa e contorno de objeções no dia a dia.",
    comoFunciona: [
      "Diagnóstico Comercial",
      "Capacitação Prática",
      "Roleplay (Simulações)",
      "Acompanhamento em Campo",
    ],
    oQueTrabalhamos:
      "Prospecção (Inbound/Outbound), técnicas de fechamento, contorno de objeções e gestão de funil comercial.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Zap,
    title: "Imersões Comportamentais (Soft Skills)",
    resultado:
      "Alinhamento cultural rápido, engajamento e melhoria imediata no clima da equipe.",
    oQueE:
      "Dinâmicas intensivas focadas em comunicação assertiva, inteligência emocional, trabalho em equipe e protagonismo.",
    comoFunciona: [
      "Briefing do Clima",
      "Imersão Prática",
      "Dinâmicas de Grupo",
      "Consolidação",
    ],
    oQueTrabalhamos:
      "Comunicação não-violenta, cooperação de equipes, empatia, inteligência emocional e resolução ágil de problemas.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: GraduationCap,
    title: "Capacitação Operacional & Técnica",
    resultado:
      "Equipe alinhada com as novas ferramentas, processos e padrões de qualidade da empresa.",
    oQueE:
      "Treinamentos específicos para garantir a execução correta de rotinas, novos softwares e padrões operacionais (POPs).",
    comoFunciona: [
      "Levantamento de Padrões",
      "Material Didático",
      "Treinamento Prático",
      "Avaliação de Retenção",
    ],
    oQueTrabalhamos:
      "Ferramentas digitais, padrões operacionais, segurança da informação e rotinas operacionais/administrativas.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Users,
    title: "Atendimento & Sucesso do Cliente",
    resultado:
      "Clientes fidelizados, aumento de recompra e NPS (satisfação) nas alturas.",
    oQueE:
      "Capacitação focada na jornada do cliente, desde o primeiro contato até o pós-venda, garantindo um atendimento encantador.",
    comoFunciona: [
      "Mapeamento da Jornada",
      "Padronização de Roteiros",
      "Treinamento Prático",
      "Auditoria de Atendimento",
    ],
    oQueTrabalhamos:
      "Customer Success (CS), suporte ágil, técnicas de escuta ativa, pós-venda e resolução de reclamações.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Puzzle,
    title: "Outros Treinamentos (Sob Medida)",
    resultado:
      "Soluções educacionais desenhadas do zero para o desafio exato da sua empresa.",
    oQueE:
      "Criação de programas personalizados com base no diagnóstico do momento da sua equipe, garantindo relevância máxima.",
    comoFunciona: [
      "Diagnóstico de Gargalos",
      "Criação do Programa",
      "Treinamento Exclusivo",
      "Acompanhamento",
    ],
    oQueTrabalhamos:
      "Conteúdos customizados conforme a necessidade, desafios específicos e cultura do cliente.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
];

/* ------------------------------------------------------------------ */
/*  Stepper – horizontal visual timeline for "Como funciona"           */
/* ------------------------------------------------------------------ */
const StepTimeline = ({
  steps,
  color,
}: {
  steps: string[];
  color: string;
}) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0 w-full overflow-x-auto py-2">
    {steps.map((step, i) => (
      <div key={i} className="flex items-center gap-2 sm:gap-0 min-w-0">
        {/* Step */}
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${color} text-white flex items-center justify-center text-sm font-bold shadow-lg`}
          >
            {i + 1}
          </div>
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            {step}
          </span>
        </div>

        {/* Arrow between steps */}
        {i < steps.length - 1 && (
          <ChevronRight className="hidden sm:block flex-shrink-0 h-5 w-5 text-muted-foreground/40 mx-2" />
        )}
      </div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page Component                                                      */
/* ------------------------------------------------------------------ */
const Treinamento = () => {
  return (
    <>
      <Helmet>
        <title>
          Treinamentos Corporativos | Engaja Soluções Corporativas
        </title>
        <meta
          name="description"
          content="Treinamentos corporativos personalizados em liderança, vendas, imersão e capacitação. Desenvolva sua equipe com a Engaja."
        />
        <link
          rel="canonical"
          href="https://www.engaja.com.br/treinamentos"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Treinamentos Corporativos | Engaja Soluções Corporativas"
        />
        <meta
          property="og:description"
          content="Treinamentos corporativos personalizados em liderança, vendas, imersão e capacitação. Desenvolva sua equipe com a Engaja."
        />
        <meta
          property="og:url"
          content="https://www.engaja.com.br/treinamentos"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.engaja.com.br/og-image.jpg"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta
          property="og:site_name"
          content="Engaja Soluções Corporativas"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Treinamentos Corporativos | Engaja"
        />
        <meta
          name="twitter:description"
          content="Treinamentos corporativos personalizados para desenvolver sua equipe e impulsionar resultados."
        />
      </Helmet>

      <Layout>
        {/* ============================================================ */}
        {/*  HERO                                                        */}
        {/* ============================================================ */}
        <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Treinamentos Corporativos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Desenvolva sua equipe com{" "}
                <span className="text-accent">treinamentos</span> que
                transformam resultados
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Programas personalizados de alto impacto para liderança,
                vendas, capacitação e desenvolvimento organizacional.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-14 px-8 text-base"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale com um Especialista
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SERVICES GRID                                                */}
        {/* ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-28 bg-background">
          <div className="container">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Nossos Treinamentos
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Conheça nossas soluções em{" "}
                <span className="text-primary">treinamento</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Cada programa é construído a partir do diagnóstico da sua
                empresa, garantindo relevância e aplicabilidade.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Card
                    key={service.title}
                    className={`overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-up group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      {/* Card Header – always visible */}
                      <div className="grid lg:grid-cols-[auto_1fr] gap-0">
                        {/* Icon column */}
                        <div
                          className={`p-6 sm:p-8 lg:p-10 bg-gradient-to-br ${service.color} flex items-center justify-center lg:w-40`}
                        >
                          <Icon className="h-12 w-12 lg:h-14 lg:w-14 text-white" />
                        </div>

                        {/* Content column */}
                        <div className="p-6 sm:p-8">
                          {/* Title & tagline */}
                          <div className="mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                              {service.title}
                            </h3>
                            <p className="text-accent font-medium text-sm sm:text-base">
                              {service.resultado}
                            </p>
                          </div>

                          {/* Accordion sections */}
                          <Accordion
                            type="multiple"
                            className="w-full"
                          >
                            {/* O que é */}
                            <AccordionItem
                              value="o-que-e"
                              className="border-border/40"
                            >
                              <AccordionTrigger className="text-foreground hover:no-underline py-3 text-sm sm:text-base">
                                <span className="flex items-center gap-2">
                                  <BookOpen className="h-4 w-4 text-primary" />
                                  O que é
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {service.oQueE}
                              </AccordionContent>
                            </AccordionItem>

                            {/* Como funciona */}
                            <AccordionItem
                              value="como-funciona"
                              className="border-border/40"
                            >
                              <AccordionTrigger className="text-foreground hover:no-underline py-3 text-sm sm:text-base">
                                <span className="flex items-center gap-2">
                                  <Cog className="h-4 w-4 text-primary" />
                                  Como funciona
                                </span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <StepTimeline
                                  steps={service.comoFunciona}
                                  color={service.color}
                                />
                              </AccordionContent>
                            </AccordionItem>

                            {/* O que trabalhamos */}
                            <AccordionItem
                              value="o-que-trabalhamos"
                              className="border-border/40"
                            >
                              <AccordionTrigger className="text-foreground hover:no-underline py-3 text-sm sm:text-base">
                                <span className="flex items-center gap-2">
                                  <ClipboardList className="h-4 w-4 text-primary" />
                                  O que trabalhamos
                                </span>
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                {service.oQueTrabalhamos}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          {/* CTA */}
                          <div className="mt-5">
                            <Button
                              asChild
                              className="bg-primary hover:bg-primary/90"
                            >
                              <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <MessageCircle className="mr-2 h-4 w-4" />
                                Quero esse treinamento
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  BOTTOM CTA                                                   */}
        {/* ============================================================ */}
        <section className="py-12 sm:py-16 lg:py-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-8 md:p-12 lg:p-16 text-center">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative animate-fade-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Pronto para transformar sua equipe?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Converse com um especialista da Engaja e descubra o
                  treinamento ideal para os desafios e objetivos do seu
                  negócio. Vamos construir juntos o próximo nível da sua
                  equipe.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-14 px-8 text-base"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Treinamento;
