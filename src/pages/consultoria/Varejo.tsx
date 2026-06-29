import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Compass,
  Zap,
  CheckCircle2,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511978153276";

const VarejoConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria para Varejo | Engaja Soluções</title>
        <meta
          name="description"
          content="Otimize a operação da sua loja, padronize o atendimento, reduza perdas de estoque e impulsione a rentabilidade do seu varejo."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria/varejo" />
      </Helmet>

      <Layout>
        {/* Navigation & Header */}
        <section className="bg-muted/30 py-6 border-b border-border/40">
          <div className="container">
            <Link
              to="/consultoria"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Consultorias
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Consultoria para Varejo
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Consultoria para Varejo
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Aumente as vendas, melhore a experiência do cliente e ganhe mais rentabilidade com uma operação de varejo organizada e eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 1: The Challenge */}
        <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto animate-fade-up">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Sua loja vende, mas poderia render muito mais?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Muitas lojas têm movimento e faturamento, mas perdem resultado no caminho: falta controle de estoque, o atendimento não é padronizado e a gestão da equipe é improvisada.
                </p>
                <p className="font-semibold text-foreground/80">
                  São perdas que não aparecem no balcão, mas pesam na rentabilidade no fim do mês.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 2: The Approach */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-indigo-900 rounded-3xl p-6 sm:p-8 md:p-12 text-primary-foreground relative overflow-hidden shadow-lg animate-fade-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Uma consultoria feita para a realidade da sua loja
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    A Consultoria para Varejo da Engaja é voltada especificamente para a operação de lojas e pontos de venda.
                  </p>
                  <p>
                    Analisamos a operação, os processos, a jornada do cliente e os indicadores da loja para identificar onde estão as perdas e onde estão as oportunidades de crescer — sempre com foco em mais vendas e mais rentabilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 3: How it is conducted */}
        <section className="py-12 sm:py-16 bg-muted/20 border-t border-b border-border/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Como a consultoria é conduzida
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Frentes práticas focadas nas rotinas do ponto de venda:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Análise da operação",
                  desc: "Avaliação completa in loco do funcionamento diário, processos e organização da loja.",
                },
                {
                  title: "Revisão dos processos",
                  desc: "Organização estruturada do estoque, rotinas internas de reposição e manualização do atendimento.",
                },
                {
                  title: "Jornada do cliente",
                  desc: "Mapeamento e melhoria da experiência de compra física, da recepção ao pós-venda.",
                },
                {
                  title: "Indicadores da loja",
                  desc: "Métricas gerenciais para acompanhar fluxo de loja, conversão de vendas e ticket médio.",
                },
                {
                  title: "Aplicação in company",
                  desc: "Trabalho prático conduzido e homologado diretamente dentro do ponto de venda.",
                },
              ].map((step, idx) => (
                <Card key={step.title} className="border-border/50 bg-card h-full flex flex-col justify-between">
                  <CardContent className="p-5 space-y-3">
                    <span className="text-2xl font-black text-accent">{`0${idx + 1}`}</span>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm leading-snug">{step.title}</h4>
                    <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 4 & Bloco 5 Side by Side */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto animate-fade-up">
              {/* Bloco 4: Para quem é indicada */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Para quem é indicada
                </h3>
                <ul className="space-y-3">
                  {[
                    "Lojistas que vendem fisicamente, mas sentem que poderiam render muito mais margem",
                    "Varejos com dificuldade severa de controle de estoque e padronização do atendimento",
                    "Lojas onde a gestão da equipe de vendas acontece no completo improviso",
                    "Empresas de varejo que querem de fato aumentar vendas, conversão e rentabilidade",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <Compass className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloco 5: O que sua loja ganha */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  O que sua loja ganha com a consultoria
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mais vendas e maior taxa média de conversão no ponto de venda",
                    "Melhor controle de estoque, com inventários rotativos e redução de perdas",
                    "Equipe de atendimento devidamente padronizada e mais profissional",
                    "Experiência de compra muito mais positiva e fidelizadora para o cliente",
                    "Aumento direto da rentabilidade e do lucro líquido do negócio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Bottom CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Transforme sua loja em uma operação mais lucrativa
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A Consultoria para Varejo começa por uma análise da sua operação. Fale com a Engaja e descubra como vender mais e com mais rentabilidade.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero melhorar minha loja
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

export default VarejoConsulting;
