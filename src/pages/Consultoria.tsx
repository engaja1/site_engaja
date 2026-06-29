import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  TrendingUp,
  Users,
  Network,
  Store,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

const consultingPrograms = [
  {
    icon: Building2,
    title: "Consultoria Empresarial",
    description: "Para empresas onde os processos são confusos, as decisões dependem dos sócios e os resultados são imprevisíveis. Estruturamos processos, indicadores e responsabilidades para transformar a operação em uma gestão eficiente e preparada para crescer com segurança.",
    ctaText: "Saber mais",
    href: "/consultoria/empresarial",
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Consultoria Comercial",
    description: "Vendas que oscilam e crescimento que depende só de indicação ou do esforço individual dos vendedores. Organizamos o funil de vendas, implantamos CRM, definimos indicadores e desenvolvemos a equipe para gerar vendas previsíveis e crescimento sustentável.",
    ctaText: "Saber mais",
    href: "/consultoria/comercial",
    color: "from-cyan-600 to-teal-600",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Users,
    title: "Consultoria de RH",
    description: "Dificuldade para contratar, desenvolver e reter talentos, com equipes desengajadas e desalinhadas. Estruturamos os processos de Recursos Humanos, fortalecemos a cultura e desenvolvemos lideranças para ter pessoas mais produtivas e alinhadas aos objetivos do negócio.",
    ctaText: "Saber mais",
    href: "/consultoria/rh",
    color: "from-teal-600 to-emerald-600",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Network,
    title: "Consultoria Sistêmica",
    description: "Quando você sabe que há problemas, mas não consegue identificar onde estão os gargalos. Fazemos uma imersão completa em todas as áreas — comercial, RH, financeiro e processos — para encontrar as causas reais e entregar soluções integradas e personalizadas.",
    ctaText: "Saber mais",
    href: "/consultoria/sistemica",
    color: "from-emerald-600 to-green-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Store,
    title: "Consultoria para Varejo",
    description: "Sua loja vende, mas poderia render muito mais. Analisamos operação, processos, jornada do cliente e indicadores para melhorar o controle de estoque, padronizar o atendimento e aumentar vendas, rentabilidade e experiência do cliente.",
    ctaText: "Saber mais",
    href: "/consultoria/varejo",
    color: "from-green-600 to-lime-600",
    bgColor: "bg-green-500/10",
  },
];

const journeySteps = [
  {
    step: "1",
    title: "Diagnóstico e Imersão Aprofundada",
    description: "Mapeamento completo da realidade, rotinas, relatórios e fluxos operacionais atuais.",
  },
  {
    step: "2",
    title: "Desenho da Nova Estrutura",
    description: "Modelagem teórica de novos processos, funis comerciais, organogramas e políticas de controle.",
  },
  {
    step: "3",
    title: "Definição de Indicadores e KPIs",
    description: "Mapeamento e estabelecimento de painéis de medição e metas claras para cada setor.",
  },
  {
    step: "4",
    title: "Implantação Assistida In Company",
    description: "Colocação em prática dos novos fluxos junto ao time, acompanhando a execução presencialmente.",
  },
  {
    step: "5",
    title: "Capacitação da Equipe",
    description: "Treinamento prático das pessoas nos novos padrões de processos e ferramentas recomendadas.",
  },
  {
    step: "6",
    title: "Passagem de Bastão e Autonomia",
    description: "Auditoria final e consolidação do modelo de gestão para operação sustentável e independente.",
  },
];

const Consultoria = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria Empresarial e Estratégica | Engaja Soluções</title>
        <meta
          name="description"
          content="Consultoria de gestão empresarial, comercial, RH, sistêmica e para varejo. Organize processos e prepare seu negócio para crescer."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria" />
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
                Consultoria empresarial que organiza a gestão e <span className="text-accent">prepara a empresa para crescer</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Toda empresa em crescimento chega a um ponto em que a estrutura precisa acompanhar o ritmo da operação. Nossas consultorias partem de um diagnóstico aprofundado do seu negócio para estruturar processos, indicadores e pessoas construindo uma gestão previsível, organizada e menos dependente dos sócios.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicitar Diagnóstico
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Programs Grid */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-fade-up">
              <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
                Nossas Frentes
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
                Frentes de atuação em consultoria prática
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {consultingPrograms.map((item, index) => {
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
                Como nossa consultoria atua diretamente na estruturação do seu negócio.
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

            {/* Pós Consultoria Box */}
            <div className="mt-8 sm:mt-12 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-6 sm:p-8 lg:p-10 border border-primary/10 shadow-sm animate-fade-up">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground uppercase tracking-wider">
                    Pós Consultoria
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Suporte contínuo de governança corporativa e checkpoints periódicos para auditar os resultados, garantindo a sustentação e evolução definitiva da nova rotina operacional estruturada.
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
                  Pronto para estruturar sua gestão?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                  Solicite um diagnóstico completo da sua operação in company e descubra como tornar seus processos organizados, eficientes e independentes.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base btn-glow"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Solicitar um diagnóstico
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

export default Consultoria;
