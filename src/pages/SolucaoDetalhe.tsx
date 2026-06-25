import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

// Import custom icons
import iconTreinamentos from "@/assets/solutions/treinamentos.png";
import iconMarketing from "@/assets/solutions/marketing.png";
import iconRH from "@/assets/solutions/rh.png";
import iconFinanceira from "@/assets/solutions/financeira.png";
import iconComercial from "@/assets/solutions/comercial.png";
import iconRecrutamento from "@/assets/solutions/recrutamento.png";
import iconIA from "@/assets/solutions/ia.png";

const solutionsData: Record<string, {
  icon: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  services: string[];
  color: string;
  bgColor: string;
}> = {
  treinamentos: {
    icon: iconTreinamentos,
    title: "Treinamentos Personalizados",
    description: "Desenvolvimento de treinamentos estratégicos e personalizados, construídos a partir da realidade de cada empresa.",
    longDescription: "Desenvolvemos treinamentos estratégicos e personalizados, construídos a partir da realidade, dos objetivos e dos desafios específicos de cada empresa, com foco em competências técnicas, comportamentais e aplicação prática no dia a dia. Nossa metodologia ativa garante a absorção do conteúdo e resultados mensuráveis.",
    benefits: [
      "Aumento da produtividade em até 45%",
      "Melhoria no clima organizacional",
      "Desenvolvimento de lideranças",
      "Redução de turnover",
      "Padronização de processos",
      "Equipes mais engajadas",
    ],
    services: [
      "Liderança e Gestão de Equipes",
      "Comunicação Assertiva",
      "Técnicas de Vendas e Negociação",
      "Atendimento ao Cliente de Excelência",
      "Gestão do Tempo e Produtividade",
      "Trabalho em Equipe",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  marketing: {
    icon: iconMarketing,
    title: "Agência de Marketing",
    description: "Estratégias de marketing estratégicas e personalizadas, alinhadas aos objetivos do negócio.",
    longDescription: "Desenvolvemos estratégias de marketing estratégicas e personalizadas, alinhadas aos objetivos do negócio, ao posicionamento da marca e ao contexto de mercado, com foco em crescimento, visibilidade e resultados mensuráveis. Trabalhamos com métricas claras para garantir o retorno do seu investimento.",
    benefits: [
      "Aumento de visibilidade online",
      "Geração de leads qualificados",
      "Fortalecimento de marca",
      "ROI mensurável",
      "Presença digital estratégica",
      "Engajamento com público-alvo",
    ],
    services: [
      "Marketing Digital Estratégico",
      "Gestão de Redes Sociais",
      "Criação de Conteúdo",
      "Campanhas de Mídia Paga",
      "SEO e Performance",
      "Branding e Identidade Visual",
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
  rh: {
    icon: iconRH,
    title: "Consultoria em RH",
    description: "Consultoria estratégica e personalizada em gestão de pessoas.",
    longDescription: "Oferecemos consultoria estratégica e personalizada em gestão de pessoas, atuando em temas como clima organizacional, cultura, processos de RH e desenvolvimento de lideranças, de acordo com a realidade e os desafios de cada empresa. Nosso objetivo é fortalecer sua equipe e impulsionar resultados.",
    benefits: [
      "Melhoria no clima organizacional",
      "Redução de turnover",
      "Aumento de produtividade",
      "Lideranças mais preparadas",
      "Processos de RH otimizados",
      "Cultura organizacional fortalecida",
    ],
    services: [
      "Diagnóstico de Clima Organizacional",
      "Avaliação de Desempenho",
      "Plano de Cargos e Salários",
      "Desenvolvimento de Líderes",
      "Programas de Engajamento",
      "Gestão por Competências",
    ],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
  },
  financeira: {
    icon: iconFinanceira,
    title: "Consultoria Financeira",
    description: "Consultoria financeira estratégica e personalizada para otimização de recursos.",
    longDescription: "Oferecemos consultoria financeira estratégica e personalizada, com foco em organização financeira, controle de custos, análise de indicadores e otimização de recursos, considerando o cenário e os objetivos específicos de cada negócio. Também oferecemos serviços de BPO Financeiro para terceirização de processos como contas a pagar/receber, conciliação e relatórios gerenciais.",
    benefits: [
      "Maior controle financeiro",
      "Redução de custos operacionais",
      "Melhor fluxo de caixa",
      "Decisões baseadas em dados",
      "Aumento de lucratividade",
      "Sustentabilidade financeira",
    ],
    services: [
      "Planejamento Financeiro Estratégico",
      "Controle e Redução de Custos",
      "Gestão de Fluxo de Caixa",
      "Análise de Viabilidade",
      "Reestruturação Financeira",
      "Dashboard de Indicadores",
      "BPO Financeiro (Contas a Pagar/Receber)",
      "Conciliação e Relatórios Gerenciais",
    ],
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-500/10",
  },
  comercial: {
    icon: iconComercial,
    title: "Consultoria Comercial",
    description: "Consultoria comercial estratégica e personalizada para estruturação de processos de vendas.",
    longDescription: "Oferecemos consultoria comercial estratégica e personalizada, voltada para estruturação de processos de vendas, gestão comercial, posicionamento de ofertas e desenvolvimento de equipes, sempre alinhada à realidade do mercado e do negócio. Resultados consistentes e crescimento sustentável.",
    benefits: [
      "Aumento nas vendas",
      "Processos comerciais otimizados",
      "Equipe de vendas capacitada",
      "Melhores taxas de conversão",
      "Fidelização de clientes",
      "Crescimento sustentável",
    ],
    services: [
      "Estratégia Comercial",
      "Gestão de Equipe de Vendas",
      "Técnicas de Negociação",
      "Implementação de CRM",
      "Processos de Vendas",
      "Indicadores Comerciais",
    ],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
  },
  recrutamento: {
    icon: iconRecrutamento,
    title: "Recrutamento e Seleção",
    description: "Processos de recrutamento e seleção estratégicos e personalizados.",
    longDescription: "Desenvolvemos processos de recrutamento e seleção estratégicos e personalizados, focados na identificação de talentos alinhados à cultura, aos valores e às necessidades específicas de cada empresa. Utilizamos metodologias avançadas para garantir contratações assertivas.",
    benefits: [
      "Contratações mais assertivas",
      "Redução de turnover",
      "Economia de tempo e recursos",
      "Candidatos qualificados",
      "Fit cultural garantido",
      "Processo ágil e eficiente",
    ],
    services: [
      "Hunting Executivo",
      "Seleção por Competências",
      "Assessment Center",
      "Onboarding Estruturado",
      "Employer Branding",
      "Banco de Talentos",
    ],
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
  },
  "inteligencia-artificial": {
    icon: iconIA,
    title: "Inteligência Artificial",
    description: "Implementação de soluções de IA para automação e otimização de processos empresariais.",
    longDescription: "Implementamos soluções de Inteligência Artificial personalizadas para automatizar processos, analisar dados e otimizar operações. Nossa abordagem estratégica considera a maturidade digital da sua empresa, identificando as melhores oportunidades de aplicação de IA para gerar resultados tangíveis e vantagem competitiva.",
    benefits: [
      "Automação de processos repetitivos",
      "Análise preditiva de dados",
      "Redução de custos operacionais",
      "Tomada de decisão mais ágil",
      "Experiência do cliente aprimorada",
      "Vantagem competitiva no mercado",
    ],
    services: [
      "Diagnóstico de Maturidade Digital",
      "Automação de Processos (RPA)",
      "Chatbots e Assistentes Virtuais",
      "Análise Preditiva e BI",
      "Machine Learning Aplicado",
      "Integração de APIs de IA",
    ],
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
  },
};

const SolucaoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = slug ? solutionsData[slug] : null;

  if (!solution) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Solução não encontrada</h1>
          <Button asChild>
            <Link to="/solucoes">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ver Todas as Soluções
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Helmet>
        <title>{solution.title} | Engaja Soluções Corporativas</title>
        <meta name="description" content={solution.description} />
        <link rel="canonical" href={`https://www.engaja.com.br/solucoes/${slug}`} />
        <meta property="og:title" content={`${solution.title} | Engaja Soluções Corporativas`} />
        <meta property="og:description" content={solution.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.engaja.com.br/solucoes/${slug}`} />
        <meta property="og:image" content="https://www.engaja.com.br/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Engaja Soluções Corporativas" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${solution.title} | Engaja Soluções Corporativas`} />
        <meta name="twitter:description" content={solution.description} />
        <meta name="twitter:image" content="https://www.engaja.com.br/og-image.jpg" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-10`} />
          <div className="container relative">
            <Link
              to="/solucoes"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar às Soluções
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className={`w-20 h-20 rounded-2xl ${solution.bgColor} flex items-center justify-center p-3`}>
                  <img 
                    src={solution.icon} 
                    alt={solution.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{solution.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{solution.longDescription}</p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-14 px-8">
                  <Link to="/contato">
                    Solicite uma Avaliação com Especialistas
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <Card className="border-border/50 animate-fade-up stagger-1">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-foreground mb-6">Principais Benefícios</h2>
                  <ul className="space-y-4">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                O que oferecemos
              </h2>
              <p className="text-muted-foreground">
                Confira os principais serviços incluídos nesta solução.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.services.map((service, index) => (
                <Card
                  key={service}
                  className="border-border/50 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{service}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-light p-8 md:p-12 lg:p-16 text-center">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Vamos entender a realidade da sua empresa?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Converse com um especialista e descubra quais soluções estratégicas e personalizadas fazem mais sentido para os desafios e objetivos do seu negócio.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow h-14 px-8">
                  <Link to="/contato">
                    Falar com Especialista
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SolucaoDetalhe;
