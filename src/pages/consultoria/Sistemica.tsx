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

const WHATSAPP_LINK = "https://wa.me/5519998051046";

const SistemicaConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria Sistêmica | Engaja Soluções</title>
        <meta
          name="description"
          content="Uma imersão integrada em todos os setores da sua empresa para erradicar as causas reais dos gargalos e liberar o crescimento."
        />
        <link rel="canonical" href="https://www.engaja.com.br/consultoria/sistemica" />
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
                Consultoria Sistêmica
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Consultoria Sistêmica
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma imersão completa em todas as áreas da empresa para identificar as causas reais dos problemas e entregar soluções integradas e personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 2: The Challenge */}
        <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto animate-fade-up">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Você sente que algo trava a empresa, mas não sabe exatamente o quê?
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Os resultados não vêm como deveriam, mas é difícil apontar a origem. Comercial, RH, financeiro e processos parecem afetar uns aos outros, e cada problema resolvido faz surgir outro em outro lugar.
                </p>
                <p className="font-semibold text-foreground/80">
                  Quando os gargalos estão espalhados e conectados, tratar uma área isolada não resolve — só alivia o sintoma.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 3: The Approach */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-indigo-900 rounded-3xl p-6 sm:p-8 md:p-12 text-primary-foreground relative overflow-hidden shadow-lg animate-fade-up">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Uma visão completa do negócio, não de uma área isolada
                </h3>
                <div className="space-y-4 text-sm sm:text-base text-primary-foreground/90 leading-relaxed">
                  <p>
                    A Consultoria Sistêmica da Engaja é a nossa atuação mais profunda e abrangente. Em vez de olhar para um setor específico, fazemos uma imersão em todas as áreas da empresa para entender como elas se influenciam.
                  </p>
                  <p>
                    O objetivo é encontrar as causas reais dos problemas e não apenas os sintomas para construir soluções integradas que destravem o negócio como um todo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 4: How it is conducted */}
        <section className="py-12 sm:py-16 bg-muted/20 border-t border-b border-border/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Como a consultoria é conduzida
              </h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                Frentes integradas de diagnóstico e modelagem sistêmica:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto animate-fade-up">
              {[
                {
                  title: "Imersão completa",
                  desc: "Análise profunda e integrada de absolutamente todas as áreas operacionais e de retaguarda da empresa.",
                },
                {
                  title: "Identificação das causas",
                  desc: "Investigação minuciosa e técnica da real origem dos problemas corporativos, e não apenas de seus sintomas.",
                },
                {
                  title: "Visão das interconexões",
                  desc: "Mapeamento e entendimento claro de como os setores comercial, RH, financeiro e operacional se afetam.",
                },
                {
                  title: "Soluções integradas",
                  desc: "Criação de um plano de ação estratégico personalizado que conecta organicamente todas as frentes.",
                },
                {
                  title: "Aplicação in company",
                  desc: "Trabalho prático conduzido de forma próxima, presencial e dentro da realidade diária da empresa.",
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

        {/* Bloco 5: What your company wins */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-up space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
                O que sua empresa ganha com a consultoria
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Clareza sobre os reais desafios",
                    desc: "Visibilidade completa dos gargalos estruturais e do que de fato impede o crescimento.",
                  },
                  {
                    title: "Ataque às causas raiz",
                    desc: "Solução definitiva dos problemas em sua origem, evitando retrabalhos ou soluções temporárias.",
                  },
                  {
                    title: "Plano integrado de aceleração",
                    desc: "Um roteiro coerente de melhorias que sincroniza comercial, RH, financeiro e processos.",
                  },
                  {
                    title: "Soluções conectadas",
                    desc: "Decisões que consideram o impacto sistêmico na empresa toda, otimizando a produtividade global.",
                  },
                  {
                    title: "Decisões financeiras e operacionais mais seguras",
                    desc: "Certeza técnica sobre onde investir capital, foco e energia para obter o melhor retorno.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-5 bg-muted/20 rounded-2xl border border-border/40">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{item.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Bottom CTA */}
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Tenha clareza total sobre o que trava o seu negócio
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A Consultoria Sistêmica começa por uma imersão completa na sua empresa. Fale com a Engaja e descubra as causas reais por trás dos seus resultados.
              </p>
              <div className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 btn-glow text-sm sm:text-base"
                >
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero um diagnóstico completo
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

export default SistemicaConsulting;
