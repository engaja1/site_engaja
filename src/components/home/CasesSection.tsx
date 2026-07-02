import { useState } from "react";
import { AlertCircle, ShieldAlert, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: string;
  tabTitle: string;
  industry: string;
  scenario: string;
  action: string;
  result: string;
  indicator: string;
}

const cases: CaseStudy[] = [
  {
    id: "industria",
    tabTitle: "Indústria Metalúrgica",
    industry: "Indústria de Manufatura",
    scenario: "Linha de produção com gargalos operacionais frequentes, falta de padronização nos turnos de trabalho, desperdício de matéria-prima elevado e ausência de indicadores chaves (KPIs) para mensurar o desempenho dos operadores no dia a dia.",
    action: "Mapeamento completo do fluxo produtivo in company, cronoanálise de todas as etapas de fabricação, implantação de painéis de gestão visual (Lean Manufacturing) e treinamento prático de lideranças de linha para acompanhamento de metas operacionais.",
    result: "Aumento de 28% na produtividade global dos equipamentos (OEE) e redução de 40% no desperdício de matéria-prima nas linhas produtivas.",
    indicator: "Aumento de 28% na produtividade",
  },
  {
    id: "distribuidora",
    tabTitle: "Distribuidora de Alimentos",
    industry: "Comércio & Distribuição",
    scenario: "Vendas altamente instáveis, dependentes do humor do mercado e sem previsibilidade de receita. A equipe externa de vendas atuava de forma reativa, sem roteirização clara de visitas e sem uso estruturado de ferramenta de CRM, centralizando todo o histórico de clientes em agendas individuais.",
    action: "Mapeamento e estruturação de todo o funil de vendas, implantação e customização completa de CRM de vendas, definição de indicadores comerciais por vendedor e treinamento comercial in company com técnicas práticas de negociação e prospecção ativa.",
    result: "Crescimento de 35% no faturamento comercial em 8 meses e aumento de 22% no ticket médio das vendas realizadas pela equipe comercial.",
    indicator: "+35% de Faturamento Comercial",
  },
  {
    id: "varejo",
    tabTitle: "Rede de Varejo",
    industry: "Varejo de Bens de Consumo",
    scenario: "Descontrole severo de estoque com quebras constantes (falta de produto no ponto de venda) e simultaneamente excesso de itens parados de baixa rotação. O atendimento nas lojas físicas carecia de padronização, gerando perdas na taxa de conversão diária.",
    action: "Revisão sistêmica do fluxo de entrada e saída de mercadorias, implementação de rotina de inventário rotativo, estruturação do manual de padronização de atendimento da marca e aplicação prática de workshops de vendas e experiência de compra com equipes de loja.",
    result: "Redução de 18% no capital imobilizado em estoque e aumento de 15% na taxa média de conversão de clientes no ponto de venda.",
    indicator: "-18% de Estoque Parado",
  },
  {
    id: "tecnologia",
    tabTitle: "Empresa de Tecnologia",
    industry: "Serviços de Tecnologia",
    scenario: "Turnover (rotatividade) elevado superior a 30% ao ano, provocando perda de conhecimento técnico, custos altos de contratação e desalinhamento cultural nas equipes de engenharia. Líderes técnicos foram promovidos mas não possuíam preparo em gestão de pessoas.",
    action: "Estruturação das políticas internas de Recursos Humanos com planos de carreira claros (cargos e salários), implantação de rotinas estruturadas de avaliação de desempenho e aplicação do Programa de Desenvolvimento de Liderança (PDL) focado em feedback e engajamento de equipes.",
    result: "Queda expressiva de 65% na taxa de turnover corporativo em 12 meses e melhoria no índice de satisfação interna (eNPS) de 12 para 68 pontos.",
    indicator: "Queda de 65% no Turnover",
  },
  {
    id: "saude",
    tabTitle: "Clínicas de Saúde",
    industry: "Prestação de Serviços de Saúde",
    scenario: "Descentralização de gestão inexistente, onde todas as decisões operacionais e financeiras dependiam exclusivamente da presença dos sócios fundadores. Processos administrativos manuais confusos, gerando atrasos no atendimento e glosas financeiras.",
    action: "Diagnóstico sistêmico completo em todas as áreas, mapeamento de processos administrativos e financeiros, definição de níveis de alçada decisória com organograma funcional estruturado, recrutamento de gestores-chave e acompanhamento contínuo da operação.",
    result: "Descentralização total da rotina diária (redução de 80% do tempo dos sócios focado em operação) e aumento de 24% na rentabilidade líquida do negócio.",
    indicator: "Liberação de 80% do tempo dos sócios",
  },
];

export function CasesSection() {
  const [activeTab, setActiveTab] = useState("industria");
  const currentCase = cases.find((c) => c.id === activeTab) || cases[0];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/40 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
            Cases de Sucesso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Resultados reais de quem confia na <span className="text-primary">Engaja</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            Veja como ajudamos empresas de diferentes setores a organizar a gestão, capacitar equipes e destravar o crescimento sustentável.
          </p>
        </div>

        {/* Tab Triggers */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 max-w-5xl mx-auto animate-fade-up">
          {cases.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 tracking-wide shadow-sm border ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]"
                  : "bg-background text-foreground/80 hover:bg-muted hover:text-foreground border-border/50"
              }`}
            >
              {item.tabTitle}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto animate-fade-up">
          <Card className="border-border/50 shadow-lg overflow-hidden bg-card">
            {/* Top colored line */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent" />
            
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-border/40 pb-4 sm:pb-6">
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {currentCase.industry}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                    {currentCase.tabTitle}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 bg-accent/15 text-accent-foreground font-bold text-xs sm:text-sm px-4 py-2 rounded-full border border-accent/25">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  <span>{currentCase.indicator}</span>
                </div>
              </div>

              {/* Grid 3 Columns */}
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                {/* Column 1: Cenário Inicial */}
                <div className="bg-destructive/5 rounded-2xl p-5 sm:p-6 border border-destructive/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-destructive">
                      <ShieldAlert className="h-5 w-5 flex-shrink-0" />
                      <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider">
                        Cenário Inicial
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {currentCase.scenario}
                    </p>
                  </div>
                  <div className="text-[10px] text-destructive/70 font-semibold mt-4">
                    O desafio de gestão antes da Engaja
                  </div>
                </div>

                {/* Column 2: Atuação da Engaja */}
                <div className="bg-primary/5 rounded-2xl p-5 sm:p-6 border border-primary/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider">
                        Atuação da Engaja
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {currentCase.action}
                    </p>
                  </div>
                  <div className="text-[10px] text-primary/70 font-semibold mt-4">
                    Diagnóstico, estruturação e implementação in company
                  </div>
                </div>

                {/* Column 3: Resultado alcançado */}
                <div className="bg-accent/5 rounded-2xl p-5 sm:p-6 border border-accent/10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 text-accent-foreground">
                      <TrendingUp className="h-5 w-5 flex-shrink-0 text-accent" />
                      <h4 className="font-bold text-sm sm:text-base uppercase tracking-wider">
                        Resultado Alcançado
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-medium">
                      {currentCase.result}
                    </p>
                  </div>
                  <div className="text-[10px] text-accent/70 font-semibold mt-4">
                    Indicador concreto alcançado in company
                  </div>
                </div>
              </div>

              {/* Bottom CTA block in card */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                  Quer ver resultados reais como estes na operação do seu negócio?
                </p>
                <Button asChild className="bg-primary hover:bg-primary/95 text-white shadow-md w-full sm:w-auto h-11 sm:h-12 px-6">
                  <a href="https://wa.me/5519998051046" target="_blank" rel="noopener noreferrer">
                    Solicitar um Diagnóstico
                    <ArrowRight className="ml-2 h-4.5 w-4.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
