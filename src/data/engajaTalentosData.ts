import { Candidate } from "./talentosData";

/**
 * Banco de Talentos — Engaja
 * 
 * Este arquivo contém os novos currículos adicionados para o Banco de Talentos Engaja.
 * Apenas usuários logados com a senha da Engaja têm acesso a estes candidatos
 * (além dos candidatos da Kohler).
 * 
 * Para adicionar novos currículos a partir de agora, insira-os no array abaixo.
 */
export const ENGAJA_CANDIDATES: Candidate[] = [
  {
    id: "CV-1790600000001-mariana-silva-santos-marianateste",
    submittedAt: "28/09/2026, 10:30",
    nome_completo: "Mariana Silva Santos",
    whatsapp: "35999990001",
    email: "mariana.santos.teste@engaja.com.br",
    cidade: "Andradas",
    estado: "MG",
    idade: 28,
    cnh: "B",
    veiculo_proprio: "Sim",
    area_principal_interesse: "Administrativo",
    areas_adicionais_interesse: [
      "Administrativo",
      "Recursos Humanos / Departamento Pessoal"
    ],
    funcoes_interesse: [
      "Auxiliar / Assistente Administrativo",
      "Auxiliar / Assistente de RH / DP"
    ],
    tipo_trabalho: "Presencial",
    disponibilidade_turnos: "Não",
    ultima_empresa: "Engaja Soluções",
    ultimo_cargo: "Assistente Administrativo",
    tempo_ultima_funcao: "1 a 2 anos",
    atividades_ultima_experiencia: "Rotinas administrativas, atendimento, elaboração de relatórios e suporte operacional.",
    areas_ultima_experiencia: ["Administrativo"],
    possui_outras_experiencias: "Não",
    experiencias_anteriores: [],
    escolaridade: "Superior completo",
    curso_formacao: "Administração",
    instituicao_ensino: "UNIFAE",
    cursos_qualificacoes: "Pacote Office, Atendimento ao Cliente",
    conhecimentos: "Excel, Word, Atendimento ao cliente, Administrativo",
    caracteristicas: "Responsável, Organizado(a), Pontual, Proativo(a), Comunicativo(a), Trabalho bem em equipe",
    regiao_interesse: "Andradas, Poços de Caldas, São João da Boa Vista",
    disponibilidade_horario: "Comercial",
    pretensao_salarial: "A combinar",
    inicio_imediato: "Sim",
    resumo_profissional: "Áreas de interesse: Administrativo, Recursos Humanos / Departamento Pessoal. Profissional com experiência em rotinas administrativas, suporte e atendimento ao cliente.",
    curriculo_texto: "MARIANA SILVA SANTOS\nAndradas / MG\nWhatsApp: 35999990001 | E-mail: mariana.santos.teste@engaja.com.br\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Assistente Administrativo, Auxiliar / Assistente de RH / DP\nÁreas de interesse: Administrativo, Recursos Humanos / Departamento Pessoal\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Administrativo, Recursos Humanos / Departamento Pessoal. Profissional com experiência em rotinas administrativas, suporte e atendimento ao cliente.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Assistente Administrativo — Engaja Soluções (1 a 2 anos)\nPrincipais atividades: Rotinas administrativas, atendimento, elaboração de relatórios e suporte operacional.\n\nFORMAÇÃO\nSuperior completo — Administração — UNIFAE\n\nCURSOS E QUALIFICAÇÕES\nPacote Office, Atendimento ao Cliente\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Atendimento ao cliente, Administrativo\n\nINFORMAÇÕES ADICIONAIS"
  }
];
