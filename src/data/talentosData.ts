import { KOHLER_CANDIDATES } from "./kohlerTalentosData";
import { ENGAJA_CANDIDATES } from "./engajaTalentosData";

export interface CandidateExperience {
  empresa: string;
  cargo: string;
  periodo?: string;
  tempo?: string;
  atividades?: string;
  ferramentas?: string;
  areas?: string[];
}

export interface Candidate {
  id: string;
  nome_completo: string;
  whatsapp: string;
  email: string;
  cidade: string;
  estado: string;
  idade: number;
  cnh: string;
  cnh_outra?: string;
  veiculo_proprio: 'Sim' | 'Não';
  area_principal_interesse: string;
  areas_adicionais_interesse?: string[];
  funcoes_interesse: string[];
  funcao_interesse_outro?: string;
  tipo_trabalho: 'Presencial' | 'Híbrido' | 'Remoto' | 'Indiferente';
  disponibilidade_turnos: 'Sim' | 'Não' | 'Dependendo do horário';
  
  // Última experiência
  ultima_empresa?: string;
  ultimo_cargo?: string;
  tempo_ultima_funcao?: string;
  atividades_ultima_experiencia?: string;
  ferramentas_ultima_experiencia?: string;
  areas_ultima_experiencia?: string[];

  // Experiências Anteriores
  possui_outras_experiencias?: 'Sim' | 'Não';
  experiencias_anteriores?: CandidateExperience[];
  experiencias_adicionais?: string;

  // Informações Complementares da Planilha
  escolaridade?: string;
  curso_formacao?: string;
  instituicao_ensino?: string;
  cursos_qualificacoes?: string;
  conhecimentos?: string;
  maquinas_equipamentos?: string;
  caracteristicas?: string;
  lideranca?: string;
  regiao_interesse?: string;
  disponibilidade_horario?: string;
  pretensao_salarial?: string;
  inicio_imediato?: string;
  resumo_profissional?: string;
  curriculo_texto?: string;

  submittedAt?: string;
}

export interface AreaOption {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const AREAS_LIST: AreaOption[] = [
  { id: "producao_operacoes", name: "Produção / Operações", iconName: "Factory", description: "Processos produtivos, operação de máquinas e chão de fábrica." },
  { id: "logistica_estoque_expedicao", name: "Logística / Estoque / Expedição", iconName: "Boxes", description: "Armazenamento, movimentação de cargas e controle de estoque." },
  { id: "motorista_transporte", name: "Motorista / Transporte", iconName: "Truck", description: "Transporte de cargas, entregas e gestão de frotas." },
  { id: "manutencao_mecanica", name: "Manutenção Mecânica", iconName: "Wrench", description: "Reparo e manutenção preventiva/corretiva mecânica." },
  { id: "manutencao_eletrica", name: "Manutenção Elétrica / Eletromecânica", iconName: "Zap", description: "Sistemas elétricos industriais e eletromecânica." },
  { id: "qualidade", name: "Qualidade", iconName: "ShieldCheck", description: "Inspeção, auditoria de processos e controle de qualidade." },
  { id: "seguranca_trabalho", name: "Segurança do Trabalho", iconName: "HardHat", description: "Prevenção de acidentes, normas regulamentadoras e EHS." },
  { id: "administrativo", name: "Administrativo", iconName: "FileText", description: "Rotinas de escritório, fluxo de documentos e suporte corporativo." },
  { id: "financeiro", name: "Financeiro", iconName: "DollarSign", description: "Contas a pagar/receber, tesouraria e planejamento financeiro." },
  { id: "contabil_fiscal", name: "Contábil / Fiscal", iconName: "Calculator", description: "Escrituração contábil, impostos e obrigações fiscais." },
  { id: "recursos_humanos_dp", name: "Recursos Humanos / Departamento Pessoal", iconName: "Users", description: "Recrutamento, gestão de pessoas, folha e subsistemas de RH." },
  { id: "compras_suprimentos", name: "Compras / Suprimentos", iconName: "ShoppingCart", description: "Cotações, negociação com fornecedores e procurement." },
  { id: "comercial_vendas", name: "Comercial / Vendas", iconName: "TrendingUp", description: "Prospecção, vendas internas/externas e negociação." },
  { id: "atendimento_recepcao", name: "Atendimento / Recepção", iconName: "PhoneCall", description: "Recepção de clientes, atendimento telefônico e suporte." },
  { id: "marketing_comunicacao", name: "Marketing / Comunicação", iconName: "Megaphone", description: "Branding, redes sociais, inteligência de mercado e eventos." },
  { id: "tecnologia_ti", name: "Tecnologia / TI", iconName: "Laptop", description: "Infraestrutura, suporte técnico, desenvolvimento e dados." },
  { id: "engenharia_tecnico", name: "Engenharia / Técnico", iconName: "Cpu", description: "Projetos técnicos, engenharia de processos e utilidades." },
  { id: "lideranca_gestao", name: "Liderança / Gestão", iconName: "Award", description: "Gestão de equipes, supervisão, coordenação e gerência." },
  { id: "servicos_gerais_apoio", name: "Serviços Gerais / Apoio", iconName: "Sparkles", description: "Conservação, limpeza, portaria e apoio operacional." },
  { id: "agricola_campo", name: "Agrícola / Campo", iconName: "Wheat", description: "Operações agrícolas, cultivo, manejo de campo e agronegócio." },
  { id: "ceramista_modelador", name: "Ceramista / Modelador", iconName: "Layers", description: "Confecção de moldes, matrizes, modelagem cerâmica e louças sanitárias." }
];

// Re-exporta os dois bancos de dados
export { KOHLER_CANDIDATES } from "./kohlerTalentosData";
export { ENGAJA_CANDIDATES } from "./engajaTalentosData";

/**
 * Base unificada: todos os currículos (Engaja + Kohler).
 * Novos currículos da Engaja aparecem primeiro, seguidos pelos da Kohler.
 */
export const ALL_CANDIDATES: Candidate[] = [
  ...ENGAJA_CANDIDATES,
  ...KOHLER_CANDIDATES,
];

// Compatibilidade retroativa
export const MOCK_CANDIDATES: Candidate[] = ALL_CANDIDATES;

/**
 * Retorna os candidatos correspondentes ao login ativo:
 * - "kohler": apenas os currículos da Kohler (trancado com 59 candidatos)
 * - "engaja": todos os currículos (Engaja + Kohler)
 */
export function getCandidatesForTenant(tenant: "engaja" | "kohler"): Candidate[] {
  if (tenant === "kohler") {
    return KOHLER_CANDIDATES;
  }
  return ALL_CANDIDATES;
}
