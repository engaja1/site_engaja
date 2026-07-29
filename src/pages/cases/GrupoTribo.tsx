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

const GrupoTriboCase = () => {
  return (
    <>
      <Helmet>
        <title>Case Grupo Tribo: de 3 a 30+ lojas com liderança | Engaja</title>
        <meta
          name="description"
          content="Como a Engaja desenvolveu as lideranças do Grupo Tribo durante a expansão de 3 para mais de 30 lojas, com programa contínuo, assessments e plano de sucessão."
        />
        <link rel="canonical" href="https://www.engaja.com.br/cases/grupo-tribo" />
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
                Case de Sucesso · Treinamento
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Grupo Tribo: de 3 a 30+ lojas com liderança
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Desenvolvimento de lideranças e estruturação de plano de sucessão para sustentar o crescimento acelerado da rede varejista.
              </p>
            </div>
          </div>
        </section>

        {/* Cenário Inicial & Desafio */}
        <section className="py-10 sm:py-14 bg-muted/20 border-t border-border/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto animate-fade-up">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  Cenário Inicial
                </h2>
                <h3 className="text-lg font-semibold text-destructive/90">
                  O desafio: crescer rápido sem perder o padrão de gestão
                </h3>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  O Grupo Tribo, rede varejista com cerca de 150 colaboradores, vivia um momento de crescimento acelerado. O desafio era preparar as lideranças para acompanhar essa expansão criando um padrão de gestão capaz de desenvolver pessoas, elevar a performance das equipes e formar novos gestores no ritmo em que a rede crescia.
                </p>
                <p className="font-semibold text-foreground/80">
                  Mais do que treinar líderes pontualmente, era preciso construir uma cultura de desenvolvimento contínuo: fortalecer competências de gestão e estruturar um plano de sucessão que identificasse e preparasse talentos internos para as futuras posições de liderança.
                </p>
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
                    A solução: um programa de liderança que evoluiu junto com a empresa
                  </p>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Há vários anos a Engaja atua como parceira estratégica do Grupo Tribo no desenvolvimento das suas lideranças. Ao longo dessa jornada, construímos um programa contínuo de capacitação, totalmente adaptado às necessidades da empresa e às diferentes fases do seu crescimento.
                </p>
                <p>
                  Os treinamentos foram conduzidos em múltiplos formatos — imersões presenciais, encontros online e capacitações específicas para líderes e equipes de loja — com cargas horárias de 1 a 8 horas, sempre alinhadas ao objetivo de cada etapa.
                </p>
                <p>
                  Além da formação técnica e comportamental, aplicamos ferramentas de Assessment para mapear talentos, identificar potencial de liderança, compreender perfis comportamentais e direcionar planos de desenvolvimento individualizados — tornando a capacitação muito mais estratégica e assertiva.
                </p>
              </div>

              <div className="bg-muted/10 rounded-2xl p-6 sm:p-8 border border-border/50 space-y-4">
                <h3 className="font-bold text-foreground text-lg">
                  Uma jornada de desenvolvimento contínuo
                </h3>
                <p className="text-muted-foreground text-sm">
                  O projeto foi estruturado para acompanhar a evolução da empresa ao longo dos anos, contemplando diferentes frentes:
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    "Desenvolvimento de gerentes e futuras lideranças",
                    "Mapeamento comportamental por meio de Assessments",
                    "Formação das equipes comerciais e operacionais das lojas",
                    "Desenvolvimento de competências de gestão de pessoas",
                    "Fortalecimento da cultura de performance",
                    "Preparação de profissionais para novas oportunidades de crescimento interno",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="h-4.5 w-4.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                    O impacto do projeto apareceu tanto na evolução das pessoas quanto no crescimento da organização
                  </p>
                </div>
              </div>

              {/* Destaque Visual */}
              <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex flex-col md:flex-row items-center md:justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-3xl sm:text-4xl font-black text-accent leading-none">
                      De 3 para mais de 30 lojas
                    </h3>
                    <p className="text-sm text-primary-foreground/90 font-medium max-w-lg">
                      Expansão expressiva da operação durante o período de parceria estratégica com a Engaja.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm sm:text-base text-muted-foreground space-y-6 leading-relaxed">
                <p>
                  Durante a parceria, o Grupo Tribo expandiu sua operação de 3 para mais de 30 lojas — um crescimento que exigiu uma estrutura de liderança cada vez mais preparada.
                </p>
                <p>
                  O investimento contínuo no desenvolvimento das equipes contribuiu diretamente para o fortalecimento das lideranças em todos os níveis, gerando novas oportunidades de crescimento interno por meio do plano de sucessão estruturado.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Fortalecimento das lideranças em todos os níveis",
                  "Criação de oportunidades reais de crescimento interno",
                  "Gestores mais preparados para conduzir equipes de alta performance",
                  "Evolução da excelência operacional das lojas",
                  "Desenvolvimento das competências comerciais das equipes",
                  "Melhoria direta dos resultados em vendas",
                  "Consolidação de uma cultura voltada ao desenvolvimento e à performance",
                ].map((result, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-4 border border-border/50 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 font-medium">{result}</span>
                  </div>
                ))}
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
                  Sua empresa está crescendo mais rápido que a sua liderança?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
                  O desenvolvimento de líderes da Engaja é construído a partir da realidade e do momento de cada empresa. Fale com a gente e estruture a liderança que vai sustentar o seu crescimento.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base btn-glow"
                  >
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Quero desenvolver minha liderança
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/20 text-white hover:bg-white/10 font-bold h-12 sm:h-14 px-8 text-sm sm:text-base"
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

export default GrupoTriboCase;
