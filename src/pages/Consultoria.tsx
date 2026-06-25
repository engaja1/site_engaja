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
  Building2,
  Users,
  TrendingUp,
  Network,
  Store,
  Bot,
  Workflow,
  BarChart3,
  Database,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Cog,
  ClipboardList,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

interface ConsultoriaService {
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

const services: ConsultoriaService[] = [
  {
    icon: Building2,
    title: "Consultoria Empresarial",
    resultado:
      "Organização, processos claros e crescimento previsível para sua empresa.",
    oQueE:
      "Diagnóstico completo e estruturação de rotinas, processos, metas e governança para empresas que cresceram, mas perderam o controle da gestão.",
    comoFunciona: [
      "Diagnóstico Organizacional",
      "Identificação de Gargalos",
      "Plano de Ação",
      "Implementação",
      "Acompanhamento",
    ],
    oQueTrabalhamos:
      "Planejamento estratégico, mapeamento de processos, KPIs (indicadores), gestão por metas e estrutura de cargos.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Users,
    title: "Consultoria de RH",
    resultado:
      "Equipes engajadas, produtivas e alinhadas às metas do negócio.",
    oQueE:
      "Estruturação completa do departamento de RH e atração de talentos (Recrutamento e Seleção), fortalecendo a cultura interna e reduzindo a rotatividade.",
    comoFunciona: [
      "Diagnóstico de RH",
      "Alinhamento de Perfil",
      "Triagem & Seleção",
      "Implantação de Processos",
      "Acompanhamento",
    ],
    oQueTrabalhamos:
      "Cargos e salários, avaliação de desempenho, pesquisa de clima, onboarding, recrutamento e seleção (hunting) e cultura empresarial.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Comercial",
    resultado:
      "Vendas previsíveis, funil otimizado e equipe comercial de alta conversão.",
    oQueE:
      "Estruturação do processo de vendas do diagnóstico ao fechamento, implantação de CRM e treinamento prático de prospecção e negociação.",
    comoFunciona: [
      "Diagnóstico Comercial",
      "Funil de Vendas",
      "Implantação de CRM",
      "Treinamento de Equipe",
      "Acompanhamento",
    ],
    oQueTrabalhamos:
      "CRM, processos de vendas (Inbound/Outbound), metas comerciais, roteiros de abordagem e acompanhamento de funil.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Network,
    title: "Consultoria Sistêmica",
    resultado:
      "Visão 360° do seu negócio para tomada de decisões estratégicas rápidas.",
    oQueE:
      "Imersão integrada em todas as áreas (Comercial, RH, Operações e Financeiro) para identificar e eliminar os gargalos que travam o crescimento do negócio.",
    comoFunciona: [
      "Imersão Inicial",
      "Diagnóstico Integrado",
      "Plano de Ação Ágil",
      "Execução Coordenada",
      "Monitoramento",
    ],
    oQueTrabalhamos:
      "Análise integrada de processos, dinâmicas organizacionais, alinhamento de lideranças e eficiência operacional.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Store,
    title: "Consultoria Varejo",
    resultado:
      "Aumento de vendas, melhor experiência de compra e maior rentabilidade na loja.",
    oQueE:
      "Ajuste fino da operação de varejo, desde o layout e atendimento na loja até o treinamento de equipes de vendas e controle de metas diárias.",
    comoFunciona: [
      "Diagnóstico de Loja",
      "Definição de KPIs",
      "Padronização de Processos",
      "Treinamento da Equipe",
      "Auditoria",
    ],
    oQueTrabalhamos:
      "Experiência do cliente, atendimento receptivo, metas de loja, produtividade de equipe e técnicas de conversão no ponto de venda.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Bot,
    title: "Consultoria em Agentes de IA",
    resultado:
      "Atendimento e suporte 24/7 com agentes inteligentes e autônomos.",
    oQueE:
      "Criação de assistentes virtuais de Inteligência Artificial personalizados com dados da sua empresa para automatizar suporte, triagem de leads e tarefas técnicas.",
    comoFunciona: [
      "Mapeamento de Casos",
      "Treinamento do Modelo",
      "Integração com APIs",
      "Testes Práticos",
      "Ativação",
    ],
    oQueTrabalhamos:
      "Modelos de Linguagem (LLMs), engenharia de prompt, bases de conhecimento locais (RAG) e integrações de chat.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Workflow,
    title: "Consultoria em Automação de Processos",
    resultado:
      "Eliminação de tarefas repetitivas e ganho imediato de tempo e eficiência.",
    oQueE:
      "Integração de sistemas e criação de fluxos de trabalho automatizados que rodam sozinhos, conectando planilhas, CRM, ERP e e-mails de forma inteligente.",
    comoFunciona: [
      "Mapeamento do Fluxo",
      "Desenho da Automação",
      "Integração de Ferramentas",
      "Testes",
      "Liberação",
    ],
    oQueTrabalhamos:
      "N8N, Webhooks, APIs, automação de e-mails, sincronização de cadastros e relatórios automáticos.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: BarChart3,
    title: "Consultoria em Análise de Dados",
    resultado:
      "Decisões baseadas em fatos reais e dashboards dinâmicos atualizados em tempo real.",
    oQueE:
      "Coleta, tratamento e modelagem dos dados financeiros, operacionais e de vendas da sua empresa para criar relatórios visuais inteligentes.",
    comoFunciona: [
      "Mapeamento de Fontes",
      "Extração e Limpeza (ETL)",
      "Modelagem de KPIs",
      "Desenho do Dashboard",
      "Treinamento",
    ],
    oQueTrabalhamos:
      "Power BI, modelagem de dados, análise de KPIs, monitoramento de vendas e dashboards gerenciais.",
    color: "from-primary to-primary-light",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/10",
  },
  {
    icon: Database,
    title: "Consultoria em Digitalização e Organização de Dados",
    resultado:
      "Informações centralizadas, arquivos seguros em nuvem e fim das planilhas perdidas.",
    oQueE:
      "Organização completa de arquivos, migração para a nuvem e estruturação de pastas para que sua equipe encontre qualquer dado em segundos.",
    comoFunciona: [
      "Auditoria de Arquivos",
      "Arquitetura em Nuvem",
      "Migração",
      "Controle de Acessos",
      "Padronização",
    ],
    oQueTrabalhamos:
      "Google Workspace, Microsoft 365, políticas de segurança de dados (LGPD), permissões de acesso e saneamento de planilhas.",
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
const Consultoria = () => {
  return (
    <>
      <Helmet>
        <title>
          Consultoria Empresarial | Engaja Soluções Corporativas
        </title>
        <meta
          name="description"
          content="Consultoria empresarial, de RH, comercial, sistêmica, varejo, IA e análise de dados. Soluções personalizadas para o crescimento sustentável da sua empresa."
        />
        <link
          rel="canonical"
          href="https://www.engaja.com.br/consultoria"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Consultoria Empresarial | Engaja Soluções Corporativas"
        />
        <meta
          property="og:description"
          content="Consultoria empresarial, de RH, comercial, sistêmica, varejo, IA e análise de dados. Soluções personalizadas para o crescimento sustentável da sua empresa."
        />
        <meta
          property="og:url"
          content="https://www.engaja.com.br/consultoria"
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
          content="Consultoria Empresarial | Engaja"
        />
        <meta
          name="twitter:description"
          content="Soluções em consultoria empresarial, RH, comercial, IA e dados para impulsionar resultados."
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
                Consultoria Especializada
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Soluções em{" "}
                <span className="text-accent">consultoria</span> para
                transformar sua empresa
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Diagnóstico, estratégia e implementação personalizada em
                gestão, RH, comercial, varejo, IA e dados.
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
                Nossas Consultorias
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Conheça nossas soluções em{" "}
                <span className="text-primary">consultoria</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Cada projeto é construído a partir do diagnóstico da sua
                empresa, garantindo relevância, aplicabilidade e resultados
                consistentes.
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
                                Quero essa consultoria
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
                  Pronto para transformar sua empresa?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Converse com um especialista da Engaja e descubra a
                  consultoria ideal para os desafios e objetivos do seu
                  negócio. Vamos construir juntos o próximo nível da sua
                  empresa.
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

export default Consultoria;
