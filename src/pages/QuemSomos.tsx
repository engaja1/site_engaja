import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Heart, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mission, Vision, Values icons
import iconMissao from "@/assets/about/missao.png";
import iconVisao from "@/assets/about/visao.png";
import iconValores from "@/assets/about/valores.png";

// Training images
import training01 from "@/assets/training/training-01.webp";
import training02 from "@/assets/training/training-02.webp";
import training03 from "@/assets/training/training-03.webp";
import training04 from "@/assets/training/training-04.webp";
import training05 from "@/assets/training/training-05.webp";
import training06 from "@/assets/training/training-06.webp";
import training07 from "@/assets/training/training-07.webp";
import training08 from "@/assets/training/training-08.webp";
import training13 from "@/assets/training/training-13.webp";
import training14 from "@/assets/training/training-14.webp";
import training16 from "@/assets/training/training-16.webp";
import training18 from "@/assets/training/training-18.webp";
import training19 from "@/assets/training/training-19.webp";
import training21 from "@/assets/training/training-21.webp";
import training22 from "@/assets/training/training-22.webp";
import training23 from "@/assets/training/training-23.webp";
import training24 from "@/assets/training/training-24.webp";
import training25 from "@/assets/training/training-25.webp";

const trainingImages = [
  { src: training01, alt: "Equipe participando de dinâmica de grupo em treinamento corporativo — Engaja" },
  { src: training02, alt: "Palestra de liderança empresarial com colaboradores da empresa cliente — Engaja" },
  { src: training03, alt: "Imersão de desenvolvimento comportamental para equipe corporativa — Engaja" },
  { src: training04, alt: "Workshop de comunicação assertiva aplicado a líderes — Engaja" },
  { src: training05, alt: "Treinamento de vendas e negociação com equipe comercial — Engaja" },
  { src: training06, alt: "Palestra motivacional para colaboradores em evento corporativo — Engaja" },
  { src: training07, alt: "Atividade prática de trabalho em equipe durante treinamento — Engaja" },
  { src: training08, alt: "Consultoria presencial de RH com gestores de empresa cliente — Engaja" },
  { src: training13, alt: "Treinamento de gestão de tempo e produtividade para líderes — Engaja" },
  { src: training14, alt: "Facilitação de workshop de cultura organizacional para equipe — Engaja" },
  { src: training16, alt: "Formação de lideranças em programa de desenvolvimento gerencial — Engaja" },
  { src: training18, alt: "Treinamento de atendimento ao cliente com equipe de vendas — Engaja" },
  { src: training19, alt: "Dinâmica de engajamento e motivação de equipes corporativas — Engaja" },
  { src: training21, alt: "Palestra sobre inovação e gestão de mudanças para colaboradores — Engaja" },
  { src: training22, alt: "Treinamento comportamental e soft skills para líderes — Engaja" },
  { src: training23, alt: "Workshop de inteligência emocional aplicada no ambiente de trabalho — Engaja" },
  { src: training24, alt: "Imersão de desenvolvimento de equipes de alto desempenho — Engaja" },
  { src: training25, alt: "Encerramento de programa de treinamento corporativo com certificação — Engaja" },
];

const values = [
  { icon: Heart, title: "Comprometimento", description: "Dedicação total ao sucesso dos nossos clientes" },
  { icon: Award, title: "Excelência", description: "Busca constante pela qualidade em tudo que fazemos" },
  { icon: Users, title: "Parceria", description: "Relacionamentos duradouros baseados em confiança" },
  { icon: TrendingUp, title: "Inovação", description: "Sempre à frente com metodologias modernas" },
];

const timeline = [
  { year: "2005", title: "Fundação", description: "Início das atividades com foco em treinamentos corporativos" },
  { year: "2008", title: "Expansão", description: "Ampliação do portfólio com consultoria em RH" },
  { year: "2012", title: "Novos Serviços", description: "Lançamento da área de marketing e consultoria comercial" },
  { year: "2015", title: "Reconhecimento", description: "Premiação como uma das melhores consultorias do Brasil" },
  { year: "2018", title: "Transformação Digital", description: "Incorporação de soluções digitais e online" },
  { year: "2023", title: "Presente", description: "+2.800 clientes atendidos em todo o Brasil" },
];

const QuemSomos = () => {
  return (
    <>
      <Helmet>
        <title>Quem Somos | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Conheça a história da Engaja: mais de 18 anos transformando empresas e pessoas através de soluções corporativas personalizadas."
        />
        <link rel="canonical" href="https://www.engaja.com.br/quem-somos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quem Somos | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Conheça a história da Engaja: mais de 18 anos transformando empresas e pessoas." />
        <meta property="og:url" content="https://www.engaja.com.br/quem-somos" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Quem Somos | Engaja" />
        <meta name="twitter:description" content="Mais de 18 anos transformando empresas através de soluções corporativas." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider">
                  Quem Somos
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Parceria estratégica para <span className="text-primary">sua empresa</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A Engaja apoia empresas na estruturação de processos, otimização de gestão e capacitação de equipes de forma integrada. Atuamos com base em diagnósticos práticos, sem pacotes genéricos ou soluções pré-fabricadas. Desenhamos cada projeto sob medida para responder exatamente aos desafios da sua realidade e acelerar seus resultados.
                </p>
              </div>
              <div className="relative animate-fade-up stagger-2">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-6 text-primary-foreground space-y-4">
                  <h3 className="text-lg font-bold border-b border-white/20 pb-2">Nosso Compromisso</h3>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Diagnóstico Técnico:</strong> Entendimento aprofundado dos processos internos antes de propor soluções.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Metodologia Ativa:</strong> Treinamentos dinâmicos focados no dia a dia da equipe.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span><strong>Projetos Sob Medida:</strong> Descarte de fórmulas prontas e foco absoluto no seu momento.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-border/50 animate-fade-up">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden">
                    <img src={iconMissao} alt="Missão" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Missão</h2>
                  <p className="text-muted-foreground">
                    Transformar empresas e pessoas através de soluções corporativas inovadoras e personalizadas,
                    gerando resultados sustentáveis e valor para todos os stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 animate-fade-up stagger-1">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden">
                    <img src={iconVisao} alt="Visão" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Visão</h2>
                  <p className="text-muted-foreground">
                    Ser reconhecida como a principal referência em soluções corporativas do Brasil,
                    destacando-se pela excelência e inovação em nossos serviços.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 animate-fade-up stagger-2">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden">
                    <img src={iconValores} alt="Valores" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Valores</h2>
                  <p className="text-muted-foreground">
                    Ética, transparência, comprometimento, excelência e respeito às pessoas
                    guiam todas as nossas ações e relacionamentos.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-border/50 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultura Engaja */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Nossa Cultura
              </span>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  A Cultura Engaja: <span className="text-primary">Humanidade, Propósito e Transformação</span>
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                A cultura organizacional da Engaja é fundamentada em um princípio claro e poderoso: o cuidado humano como pilar central de todas as suas ações. Com o lema "De pessoa para pessoa, o cuidado humano está no jeito Engaja de ser!", a empresa estabelece uma abordagem que transcende o convencional, posicionando a empatia e a compaixão como forças motrizes para o desenvolvimento de pessoas e negócios. Essa filosofia se reflete em cada aspecto da organização, desde a sua liderança e equipe até a entrega de soluções personalizadas e de alta performance.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex items-center gap-4">
                <Heart className="h-8 w-8 text-accent flex-shrink-0" fill="currentColor" />
                <p className="text-foreground font-semibold text-lg italic">
                  "De pessoa para pessoa, o cuidado humano está no jeito Engaja de ser!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Uma história de <span className="text-primary">sucesso e crescimento</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />

              <div className="space-y-8 lg:space-y-0">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`lg:flex items-center gap-8 animate-fade-up ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                      <div className="bg-background rounded-2xl border border-border/50 p-6 inline-block">
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                        <h3 className="font-bold text-foreground text-xl mt-1">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex w-8 h-8 rounded-full bg-accent items-center justify-center flex-shrink-0 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-accent-foreground" />
                    </div>
                    <div className="lg:w-1/2" />
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Training Gallery */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Nossa Atuação na Prática
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa atuação na prática,{" "}
                <span className="text-primary">junto às empresas</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Registros reais das nossas imersões, treinamentos e palestras realizadas com clientes de diferentes segmentos em todo o Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trainingImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-muted animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default QuemSomos;
