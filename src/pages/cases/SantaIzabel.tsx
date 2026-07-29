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

const SantaIzabelCase = () => {
  return (
    <>
      <Helmet>
        <title>Case Santa Izabel: RH estratégico na indústria | Engaja</title>
        <meta
          name="description"
          content="Como a Engaja estruturou a gestão de pessoas da Santa Izabel Agro Indústria: DHO, avaliação de desempenho, lideranças e cultura em 4 anos de parceria."
        />
        <link rel="canonical" href="https://www.engaja.com.br/cases/santa-izabel" />
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
                Case de Sucesso · Consultoria de RH
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Santa Izabel: RH estratégico na indústria
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Quatro anos de parceria estruturando a gestão de pessoas, DHO e desenvolvimento de lideranças, expandindo para estratégias comercial e de posicionamento.
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
                    A Santa Izabel Agro Indústria é uma fabricante brasileira de máquinas e implementos agrícolas que passou por um amplo processo de reestruturação, modernização industrial e investimento em tecnologia para ampliar a capacidade produtiva e fortalecer sua atuação no mercado agropecuário.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Nesse contexto de crescimento, surgiu a necessidade de consolidar uma estrutura de gestão de pessoas mais estratégica capaz de desenvolver lideranças, fortalecer a cultura organizacional e alinhar os processos de Recursos Humanos às diretrizes da matriz internacional.
                  </p>
                </div>

                <div className="bg-destructive/5 rounded-2xl p-6 sm:p-8 border border-destructive/10 space-y-4">
                  <h3 className="text-lg font-bold text-destructive">O Desafio</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Estruturar uma área de RH mais estratégica, capaz de apoiar o crescimento e elevar a maturidade da organização. O diagnóstico revelou oportunidades em frentes como:
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    {[
                      "Estruturação dos processos de Desenvolvimento Humano e Organizacional (DHO)",
                      "Implantação e fortalecimento da avaliação de desempenho",
                      "Desenvolvimento das lideranças",
                      "Fortalecimento da cultura e melhoria do clima organizacional",
                      "Adequação dos processos locais às diretrizes corporativas da matriz",
                      "Padronização de políticas, procedimentos e práticas de gestão de pessoas",
                      "Maior integração entre pessoas, estratégia e resultados",
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
                    A atuação: uma parceria estratégica, não um projeto pontual
                  </p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Há aproximadamente quatro anos a Engaja atua como consultoria estratégica em desenvolvimento organizacional na Santa Izabel, contribuindo para o fortalecimento da gestão em diferentes frentes.
                </p>
                <p>
                  Nossa atuação envolveu uma série de iniciativas integradas: desde a estruturação básica das políticas e regras corporativas até a mentoria direta das lideranças em seu desenvolvimento contínuo.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Estruturação dos processos de Desenvolvimento Humano e Organizacional (DHO)",
                  "Implantação e evolução do processo de avaliação de desempenho",
                  "Desenvolvimento contínuo das lideranças",
                  "Fortalecimento da cultura organizacional",
                  "Ações voltadas ao clima organizacional",
                  "Desenvolvimento de manuais, políticas e procedimentos internos",
                  "Apoio na adequação dos processos de RH às diretrizes corporativas da matriz",
                  "Suporte estratégico às lideranças na gestão ativa de equipes",
                ].map((act, idx) => (
                  <div key={idx} className="bg-muted/10 rounded-xl p-4 border border-border/50 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 font-medium">{act}</span>
                  </div>
                ))}
              </div>

              {/* Parceria ampliada */}
              <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10 space-y-4">
                <h3 className="font-bold text-foreground text-lg text-primary">
                  Uma parceria que se ampliou para além do RH
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Com a evolução do trabalho, a atuação da Engaja foi estendida a outras áreas da organização apoiando o desenvolvimento de estratégias de marketing, o fortalecimento do posicionamento institucional e iniciativas de desenvolvimento comercial.
                </p>
                <p className="font-semibold text-foreground/80 text-sm">
                  É a visão sistêmica na prática: pessoas, gestão e resultados tratados de forma integrada.
                </p>
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
                    Uma gestão de pessoas madura e preparada para crescer
                  </p>
                </div>
              </div>

              {/* Destaque Visual */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative space-y-2 text-center md:text-left">
                  <h3 className="text-3xl sm:text-4xl font-black text-accent leading-none">
                    4 Anos de Parceria Estratégica
                  </h3>
                  <p className="text-sm text-primary-foreground/95 font-medium max-w-xl">
                    Uma atuação integrada que começou na estruturação de RH e se expandiu para posicionamento institucional, estratégias de marketing e área comercial.
                  </p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Ao longo dos anos de parceria, a empresa consolidou uma estrutura de gestão de pessoas mais madura, preparada para sustentar seu crescimento.
                </p>
                <p>
                  A consultoria apoiou o fortalecimento da cultura, o desenvolvimento das lideranças e a consolidação de uma gestão de pessoas totalmente alinhada à estratégia da empresa. Com o amadurecimento da organização, a parceria evoluiu para novas frentes, integrando desenvolvimento organizacional, marketing e apoio comercial para construir uma empresa altamente estruturada e eficiente.
                </p>
              </div>

              <div className="bg-background rounded-2xl p-6 sm:p-8 border border-border/50 space-y-4">
                <h3 className="font-bold text-foreground text-base sm:text-lg">
                  Principais conquistas consolidadas:
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Cultura organizacional fortalecida",
                    "Lideranças mais maduras e preparadas",
                    "Processos de DHO consolidados",
                    "Implantação da cultura de avaliação de desempenho",
                    "Alinhamento total entre práticas locais e diretrizes globais da matriz",
                    "Processos de RH completamente padronizados",
                    "Melhoria na comunicação e integração entre as equipes",
                    "Estratégia de marketing e posicionamento de mercado estruturados",
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
                  Quer estruturar a gestão de pessoas da sua empresa?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                  A Consultoria de RH da Engaja começa por um diagnóstico das pessoas e dos processos da sua empresa. Fale com a gente e estruture uma gestão de pessoas à altura do seu crescimento.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base btn-glow"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quero estruturar meu RH
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

export default SantaIzabelCase;
