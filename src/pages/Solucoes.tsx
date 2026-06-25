import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import custom icons
import iconTreinamentos from "@/assets/solutions/treinamentos.png";
import iconMarketing from "@/assets/solutions/marketing.png";
import iconRH from "@/assets/solutions/rh.png";
import iconFinanceira from "@/assets/solutions/financeira.png";
import iconComercial from "@/assets/solutions/comercial.png";
import iconRecrutamento from "@/assets/solutions/recrutamento.png";
import iconIA from "@/assets/solutions/ia.png";

const solutions = [
  {
    icon: iconTreinamentos,
    title: "Treinamentos Personalizados",
    description: "Desenvolvimento de competências técnicas e comportamentais adaptados às necessidades específicas da sua empresa.",
    features: ["Liderança e Gestão", "Comunicação Assertiva", "Vendas e Negociação", "Atendimento ao Cliente"],
    href: "/solucoes/treinamentos",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: iconMarketing,
    title: "Agência de Marketing",
    description: "Estratégias digitais completas para posicionar sua marca e gerar resultados mensuráveis no mercado.",
    features: ["Marketing Digital", "Gestão de Redes Sociais", "Criação de Conteúdo", "Campanhas Publicitárias"],
    href: "/solucoes/marketing",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: iconRH,
    title: "Consultoria em RH",
    description: "Gestão estratégica de pessoas, clima organizacional e desenvolvimento de lideranças para sua empresa.",
    features: ["Clima Organizacional", "Avaliação de Desempenho", "Plano de Cargos e Salários", "Desenvolvimento de Líderes"],
    href: "/solucoes/rh",
    color: "from-green-500 to-green-600",
  },
  {
    icon: iconFinanceira,
    title: "Consultoria Financeira",
    description: "Planejamento financeiro estratégico, controle de custos e otimização de recursos empresariais.",
    features: ["Planejamento Financeiro", "Controle de Custos", "Gestão de Fluxo de Caixa", "BPO Financeiro"],
    href: "/solucoes/financeira",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: iconComercial,
    title: "Consultoria Comercial",
    description: "Estratégias de vendas eficientes, gestão comercial e técnicas avançadas de negociação.",
    features: ["Estratégia Comercial", "Gestão de Equipe de Vendas", "Técnicas de Negociação", "CRM e Processos"],
    href: "/solucoes/comercial",
    color: "from-red-500 to-red-600",
  },
  {
    icon: iconRecrutamento,
    title: "Recrutamento e Seleção",
    description: "Captação e seleção de talentos alinhados à cultura e aos objetivos estratégicos da sua organização.",
    features: ["Hunting Executivo", "Seleção por Competências", "Assessment", "Onboarding"],
    href: "/solucoes/recrutamento",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: iconIA,
    title: "Inteligência Artificial",
    description: "Implementação de soluções de inteligência artificial para automação, análise de dados e otimização de processos empresariais.",
    features: ["Diagnóstico de Maturidade Digital", "Automação de Processos (RPA)", "Análise Preditiva", "Integração de Ferramentas IA"],
    href: "/solucoes/inteligencia-artificial",
    color: "from-violet-500 to-violet-600",
  },
];

const Solucoes = () => {
  return (
    <>
      <Helmet>
        <title>Nossas Soluções | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Conheça nossas soluções em treinamentos, marketing, RH, consultoria financeira, comercial e recrutamento. Transforme sua empresa!"
        />
        <link rel="canonical" href="https://www.engaja.com.br/solucoes" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nossas Soluções | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Conheça nossas soluções em treinamentos, marketing, RH e consultoria. Transforme sua empresa!" />
        <meta property="og:url" content="https://www.engaja.com.br/solucoes" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Nossas Soluções | Engaja" />
        <meta name="twitter:description" content="Soluções corporativas completas para transformar sua empresa." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Nossas Soluções
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Soluções completas para{" "}
                <span className="text-primary">transformar sua empresa</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Oferecemos um portfólio completo de serviços para impulsionar o crescimento do seu negócio 
                e desenvolver suas equipes de forma estratégica.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="space-y-12">
              {solutions.map((solution, index) => (
                <Card
                  key={solution.title}
                  className="overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-5 gap-0">
                      {/* Icon Section */}
                      <div className={`p-8 lg:p-12 bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                        <img 
                          src={solution.icon} 
                          alt={solution.title} 
                          className="h-20 w-20 lg:h-24 lg:w-24 object-contain"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 lg:col-span-4">
                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-foreground">{solution.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                            <Button asChild className="bg-primary hover:bg-primary/90">
                              <Link to={solution.href}>
                                Saiba mais
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                          <div className="space-y-3">
                            <h3 className="font-semibold text-foreground">Principais serviços:</h3>
                            <ul className="space-y-2">
                              {solution.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-accent" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos desenvolver uma solução personalizada para as necessidades específicas da sua empresa.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-14 px-8">
              <Link to="/contato">
                Fale com um Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Solucoes;
