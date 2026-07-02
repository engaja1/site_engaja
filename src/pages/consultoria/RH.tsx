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
  CheckCircle2,
  Users,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5519998051046";

const RHConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria de RH e Recrutamento | Engaja Soluções</title>
        <meta
          name="description"
          content="Estruture os processos de Recursos Humanos, reduza rotatividade e contrate talentos com perfil técnico e comportamental ideal."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria/rh" />
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
                Consultoria de RH
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Consultoria de RH
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Estruture os processos de Recursos Humanos, fortaleça a cultura e desenvolva pessoas mais engajadas, produtivas e alinhadas aos objetivos da empresa.
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
                  Sua empresa tem dificuldade para atrair, desenvolver e reter talentos?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Equipes desengajadas, conflitos internos e falta de alinhamento drenam energia e comprometem os resultados.
                </p>
                <p className="font-semibold text-foreground/80">
                  Quando o RH não está estruturado, a empresa contrata errado, perde bons profissionais e convive com uma cultura que não sustenta o crescimento.
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
                  Uma consultoria que estrutura o RH e fortalece a cultura
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    A Consultoria de RH da Engaja organiza os processos de Recursos Humanos e fortalece a base de pessoas da sua empresa.
                  </p>
                  <p>
                    Estruturamos rotinas de RH, desenvolvemos lideranças, fortalecemos a cultura organizacional e implantamos ferramentas que elevam o desempenho das equipes — sempre conectados à realidade do negócio.
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
                Cinco pilares de estruturação de pessoas in company:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Diagnóstico de RH",
                  desc: "Análise profunda dos processos atuais de gestão de pessoas, fit cultural e clima da empresa.",
                },
                {
                  title: "Estruturação de rotinas",
                  desc: "Organização estruturada de todas as rotinas e fluxos operacionais de Recursos Humanos.",
                },
                {
                  title: "Desenvolvimento de líderes",
                  desc: "Preparo dos gestores e gerentes com competências práticas para conduzir pessoas.",
                },
                {
                  title: "Fortalecimento da cultura",
                  desc: "Alinhamento de valores, comportamentos desejados e dinâmicas internas.",
                },
                {
                  title: "Ferramentas de performance",
                  desc: "Implantação de instrumentos de acompanhamento e aumento de desempenho das equipes.",
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
                    "Empresas com dificuldade crônica para contratar e reter talentos",
                    "Negócios com equipes desengajadas ou conflitos internos recorrentes",
                    "Organizações que precisam estruturar a área de Recursos Humanos do zero",
                    "Gestores que querem alinhar o comportamento das pessoas aos objetivos do negócio",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                      <Compass className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloco 5: O que sua empresa ganha */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  O que sua empresa ganha com a consultoria
                </h3>
                <ul className="space-y-3">
                  {[
                    "Processos de RH totalmente organizados e padronizados",
                    "Cultura organizacional visivelmente mais forte, clara e alinhada",
                    "Lideranças preparadas e seguras para gerir e motivar pessoas",
                    "Equipes engajadas, produtivas e integradas",
                    "Menos rotatividade indesejada (turnover) e maior retenção de talentos",
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

        {/* Bloco 6: Recrutamento e Seleção */}
        <section className="py-12 sm:py-16 bg-muted/20 border-t border-b border-border/30">
          <div className="container">
            <div className="max-w-5xl mx-auto bg-card rounded-3xl p-6 sm:p-8 md:p-12 border border-border/60 shadow-md animate-fade-up">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent-foreground border border-accent/25">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Recrutamento e Seleção</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Contratar errado custa caro: gera retrabalho, eleva custos e derruba a produtividade da equipe.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Como parte da nossa atuação em RH, conduzimos todo o processo de recrutamento e seleção com metodologia estruturada, avaliação comportamental e análise de aderência técnica e cultural.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-medium text-foreground/85">
                    Assim, você contrata profissionais mais alinhados ao perfil da vaga e à cultura da empresa, reduzindo a rotatividade e fortalecendo o time desde a porta de entrada.
                  </p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10 space-y-4">
                  <h4 className="font-bold text-foreground text-base sm:text-lg">
                    Com o recrutamento e seleção da Engaja, sua empresa:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Contrata com mais assertividade e menos tentativa e erro",
                      "Avalia candidatos por perfil comportamental, não só por currículo",
                      "Garante aderência técnica e cultural total à vaga",
                      "Reduz a rotatividade e os custos de uma contratação errada",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4.5 w-4.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 7: Bottom CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Como a Engaja pode ajudar o seu RH
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Escolha o ponto de partida ideal para a sua empresa: estruturar toda a área de Recursos Humanos ou contar com a Engaja para uma contratação mais assertiva.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/95 text-white font-bold h-12 w-full sm:w-auto"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero estruturar meu RH
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 w-full sm:w-auto btn-glow"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Quero contratar com a Engaja
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

export default RHConsulting;
