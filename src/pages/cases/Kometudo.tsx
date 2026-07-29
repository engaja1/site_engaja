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
  TrendingUp,
  CheckCircle2,
  Bookmark,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519998051046";

const KometudoCase = () => {
  return (
    <>
      <Helmet>
        <title>Case Kometudo: sucessão familiar e governança | Engaja</title>
        <meta
          name="description"
          content="Como a Engaja conduziu a sucessão familiar da Kometudo Alimentos e estruturou governança, diretoria e cultura para sustentar uma nova fase de crescimento."
        />
        <link rel="canonical" href="https://www.engaja.com.br/cases/kometudo" />
      </Helmet>

      <Layout>
        {/* Navigation & Header */}
        <section className="bg-muted/30 py-6 border-b border-border/40">
          <div className="container">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a Home
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-6 text-center animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                Case de Sucesso · Sucessão Familiar & Governança
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Kometudo: sucessão familiar e governança
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estruturação da transição geracional, implantação de governança corporativa e reposicionamento estratégico na indústria de alimentos com 35+ anos de mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Cenário Inicial & Desafio */}
        <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                    Cenário Inicial
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Com mais de 35 anos de trajetória, a Kometudo Alimentos consolidou-se como referência no beneficiamento e na comercialização de arroz e feijão, investindo continuamente em qualidade, tecnologia e inovação.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Ao iniciar uma nova fase de sua história, a empresa enfrentava o desafio mais importante da vida de qualquer organização familiar: a transição entre gerações. Mais do que preparar novos dirigentes, era preciso estruturar a gestão para garantir continuidade, preservar os valores construídos ao longo dos anos e criar as condições para sustentar o crescimento futuro.
                  </p>
                  <p className="font-semibold text-foreground/80 text-sm">
                    Foi nesse contexto que a Engaja iniciou um trabalho de consultoria e mentoria que segue em desenvolvimento há aproximadamente quatro anos.
                  </p>
                </div>

                <div className="bg-destructive/5 rounded-2xl p-6 sm:p-8 border border-destructive/10 space-y-4">
                  <h3 className="text-lg font-bold text-destructive">O Desafio</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    O projeto nasceu com foco na sucessão familiar, mas o diagnóstico revelou oportunidades que envolviam praticamente toda a organização:
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      "Conduzir a transição da gestão familiar de forma estruturada",
                      "Desenvolver as novas lideranças da organização",
                      "Organizar a estrutura administrativa",
                      "Definir papéis, responsabilidades e níveis de autonomia",
                      "Fortalecer a governança corporativa",
                      "Implantar processos gerenciais e uma cultura organizacional mais consistente",
                      "Apoiar decisões estratégicas de posicionamento de marca e crescimento",
                    ].map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atuação da Engaja */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border/20">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Bookmark className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Atuação da Engaja
                  </h2>
                  <p className="text-accent font-semibold text-sm">
                    A atuação: parceira estratégica da diretoria em uma transformação completa
                  </p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Ao longo da consultoria, a Engaja atuou lado a lado com a diretoria, apoiando tanto a evolução da gestão quanto o desenvolvimento do negócio. O projeto foi desenhado sob medida para equilibrar a modernização dos processos com a preservação dos valores familiares históricos.
                </p>
                <p>
                  Durante todo o projeto, a consultoria acompanhou as principais decisões estratégicas da organização garantindo que o crescimento fosse sustentado por uma estrutura de gestão sólida e preparada para o futuro.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Mentoria completa para o processo de sucessão familiar",
                  "Desenvolvimento da nova diretoria e fortalecimento da liderança executiva",
                  "Reestruturação completa da área administrativa",
                  "Definição de papéis, responsabilidades e fluxos formais de decisão",
                  "Implantação de rotinas de gestão e acompanhamento integrado",
                  "Desenvolvimento da cultura organizacional direcionada a resultados",
                  "Fortalecimento prático da governança corporativa",
                  "Apoio estratégico nas decisões de mercado e no posicionamento da marca",
                  "Desenvolvimento da área de marketing e fortalecimento institucional",
                  "Acompanhamento da expansão operacional e do amadurecimento da gestão",
                ].map((act, idx) => (
                  <div key={idx} className="bg-muted/10 rounded-xl p-4 border border-border/50 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 font-medium">{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resultados Alcançados */}
        <section className="py-12 sm:py-16 bg-muted/20 border-t border-b border-border/30">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-up">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Resultado Alcançado
                  </h2>
                  <p className="text-accent font-semibold text-sm">
                    O resultado: uma empresa maior, mais estruturada e fiel à própria essência
                  </p>
                </div>
              </div>

              {/* Destaque Visual */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative space-y-2 text-center md:text-left">
                  <h3 className="text-3xl sm:text-4xl font-black text-accent leading-none">
                    Sucessão Consolidada & Expansão Fabril
                  </h3>
                  <p className="text-sm text-primary-foreground/95 font-medium max-w-xl">
                    Quatro anos de parceria contínua com expansão operacional, consolidação de market share e melhoria consistente nas margens de lucro.
                  </p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  A evolução apareceu tanto na organização interna quanto na capacidade de expansão do negócio. O fortalecimento da governança, da cultura, das lideranças e do posicionamento estratégico criou as bases sólidas para uma nova etapa de expansão.
                </p>
                <p>
                  Isso permitiu ampliar consideravelmente a operação, expandir a estrutura física da fábrica, fortalecer o posicionamento da marca e aumentar a competitividade em um mercado altamente dinâmico, preservando a essência familiar da Kometudo.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border/50 space-y-4">
                <h3 className="font-bold text-foreground text-base sm:text-lg">
                  Resultados consolidados em 4 anos:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Consolidação completa do processo de sucessão familiar",
                    "Nova diretoria altamente estruturada e alinhada",
                    "Lideranças maduras e governança corporativa operante",
                    "Cultura organizacional alinhada aos objetivos de mercado",
                    "Aumento da integração entre as áreas e melhoria operacional",
                    "Expansão física e tecnológica da estrutura fabril",
                    "Marca fortalecida e novo posicionamento de mercado consolidado",
                    "Ampliação do portfólio com novos produtos comerciais (feijão)",
                    "Aumento expressivo do market share regional",
                    "Melhoria real das margens de lucro orientada por dados",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="h-4.5 w-4.5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-indigo-900 p-8 md:p-12 lg:p-16 text-center shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative animate-fade-up max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                  Sua empresa está pronta para a próxima geração?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                  A sucessão é o momento em que uma empresa familiar decide o próprio futuro. A Engaja conduz esse processo com método, do diagnóstico à consolidação da nova gestão. Fale com a gente.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base btn-glow"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quero um diagnóstico da minha empresa
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="hero"
                    size="lg"
                    className="font-bold h-12 sm:h-14 px-8 text-sm sm:text-base"
                  >
                    <Link to="/">
                      Ver outros cases
                    </Link>
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

export default KometudoCase;
