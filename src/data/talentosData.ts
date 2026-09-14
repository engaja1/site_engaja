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

export const MOCK_CANDIDATES: Candidate[] = [
  {
    "id": "CV-1788205299909-felix-fernando-bertoli-junior-felix-ocat",
    "submittedAt": "31/08/2026, 16:41",
    "nome_completo": "Felix Fernando Bertoli Junior",
    "whatsapp": "35992129690",
    "email": "felix-ocat@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 32,
    "cnh": "Outra - A/D",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "31/08/2026, 16:41",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Empilhadeira",
      "Motorista / Entregador(a)",
      "Técnico(a) da Qualidade",
      "Auxiliar / Assistente Administrativo",
      "Técnico(a)",
      "Outro",
      "Matrizeiro"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Matrizeiro",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Fazer matrizes, ajustes de moldes de gesso.",
    "ferramentas_ultima_experiencia": "Ferramentas de precisão, escalas, esquadros, paquímetros, altímetros, réguas, e ferramentas manuais feitas por mim.",
    "areas_ultima_experiencia": [
      "Outros"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Agropecuária Barbosa Netos",
        "cargo": "Classificador de café",
        "periodo": "Set/2012 a julho/2018",
        "atividades": "Classificar e degustar café, e um pouco na área administrativa também."
      },
      {
        "empresa": "Refracon",
        "cargo": "Cuidar da saída e entradas de produtos",
        "periodo": "Fev/2019 a abril/2020"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Técnico",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Operador de empilhadeira",
    "caracteristicas": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria",
    "lideranca": "Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, Jundiaí",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Administrativo",
    "curriculo_texto": "Áreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo. Profissional com experiência como Matrizeiro na empresa Kohler, com 5 a 10 anos na função. Vivência em Fazer matrizes, ajustes de moldes de gesso.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria. Qualificações: Operador de empilhadeira. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788211599261-ana-luisa-santos-de-jesus-dutra-paollana",
    "submittedAt": "31/08/2026, 18:26",
    "nome_completo": "Ana Luisa Santos de Jesus Dutra",
    "whatsapp": "35999620122",
    "email": "paollana.z.x@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 28,
    "cnh": "Não",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "31/08/2026, 18:26",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Serviços Gerais",
      "Outro"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler produtos para cozinhas e banheiros ltda",
    "ultimo_cargo": "Inspetora",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Esponja peça bacia",
    "ferramentas_ultima_experiencia": "Nenhum",
    "areas_ultima_experiencia": [
      "Outros"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Aptiv",
        "cargo": "",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Avícola são Sebastião",
        "cargo": "Auxiliar de produção",
        "periodo": ""
      },
      {
        "empresa": "",
        "cargo": "Siamp Brasil industria",
        "periodo": "Auxiliar de produção na injeção plástica"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Produção",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Poços de Caldas, espírito santo do Pinhal e Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Inspetora na empresa Kohler produtos para cozinhas e banheiros ltda, com 2 a 5 anos na função. Vivência em Esponja peça bacia. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender."
  },
  {
    "id": "CV-1788262482408-rafael-frizo-alves-rafaelfrizo-gmail-com",
    "submittedAt": "01/09/2026, 08:34",
    "nome_completo": "Rafael Frizo Alves",
    "whatsapp": "35991592707",
    "email": "rafaelfrizo@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 32,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 08:34",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Técnico(a)",
      "Engenheiro(a)",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Técnico de Processos Sênior",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.",
    "ferramentas_ultima_experiencia": "Dilatômetro\r\nSedígrafo\r\nPorosímetro\r\nAnalisador de Área Superficial BET\r\nEspectrofotômetro\r\nGlossímetro\r\nViscosímetro\r\nAgitadores\r\nDiluidores\r\nMoinhos de Massa e Esmalte\r\nEmpilhadeira\r\nExcel Avançado\r\nAplicação de ferramentas Lean e 5S\r\nAuditorias de Processo\r\nInglês Intermediário",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "TIKTak Indústria Gráfica",
        "cargo": "Operador de Guilhotina",
        "periodo": "Agosto 2012 a junho 2022",
        "atividades": ""
      },
      {
        "empresa": "Icasa",
        "cargo": "Estagiário",
        "periodo": "2 meses ( 2018)"
      },
      {
        "empresa": "",
        "cargo": "LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)",
        "periodo": "Estagiário"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Métodos e Procedimentos:\r\n\r\nAcidez (Total, Volátil e Fixa);\r\nGrau Alcoólico Real;\r\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\r\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\r\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\r\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\r\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados.",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "NR 12\r\nNR 35\r\nExcel Avançado\r\nLean",
    "caracteristicas": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "lideranca": "Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\r\nNR 35\r\nExcel Avançado\r\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788263279271-adilson-roberto-de-sousa-adilsonrobertod",
    "submittedAt": "01/09/2026, 08:47",
    "nome_completo": "Adilson Roberto de Sousa",
    "whatsapp": "35 933009513",
    "email": "adilsonrobertodesousa@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 50,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 08:47",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) / Trabalhador(a) Rural"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler Produtos para cozinhas e Banheiros LTDA",
    "ultimo_cargo": "Fundidor de moldes",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Fundir moldes",
    "ferramentas_ultima_experiencia": "PONTES ROLANTES",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Trabalhei por 18 anos na Icasa fábrica de louça sanitária",
        "cargo": "Fundidor de moldes",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Trabalhei em uma adega de bebidas",
        "cargo": "Entregador",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Fundamental completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Estoque, Produção",
    "lideranca": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas ou Poços de Caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Agrícola / Campo. Profissional com experiência como Fundidor de moldes na empresa Kohler Produtos para cozinhas e Banheiros LTDA, com 5 a 10 anos na função. Vivência em Fundir moldes. Conhecimentos em Estoque, Produção. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788264260318-joel-rodrigues-da-costa-joeljrcrodrigues",
    "submittedAt": "01/09/2026, 09:04",
    "nome_completo": "Joel Rodrigues da Costa",
    "whatsapp": "35997682664",
    "email": "joeljrcrodrigues12@outlook.com",
    "cidade": "Poços de caldas",
    "estado": "MG",
    "idade": 27,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 09:04",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Engenheiro(a)",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)",
      "Outro",
      "Projetista"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Eng pleno de desenvolvimento de novos produtos",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d",
    "ferramentas_ultima_experiencia": "Creo parametric/ inventor/ autocad para desenhos 2d e 3d\r\nPFMEA\r\nLean\r\n5s",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Poços de calda, Campinas, jundiai, andradas",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788268252999-joao-otavio-bernardes-torres-joao-b-torr",
    "submittedAt": "01/09/2026, 10:10",
    "nome_completo": "João Otávio Bernardes Torres",
    "whatsapp": "35988013580",
    "email": "joao.b_torres@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 31,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 10:10",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Analista Financeiro",
      "Comprador(a) / Suprimentos",
      "Técnico(a)",
      "Engenheiro(a)",
      "Supervisor(a) / Coordenador(a)",
      "Gerente"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Engenheiro de Projetos Sr",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.",
    "ferramentas_ultima_experiencia": "METODOLOGIAS DE GESTÃO DE PROJETOS:\r\nPMBOK (PMI)\r\nFEL\r\nScrum\r\nKanban\r\nPRINCE2\r\nWaterfall (Cascata)\r\nAgile\r\nSAFe (Scaled Agile Framework)\r\nDesign Thinking\r\n\r\n\r\nGERENCIAMENTO DE PROJETOS:\r\nMS Project\r\nTrello\r\nPlanner\r\nPrimavera P6\r\n\r\nGESTÃO ÁGIL / SCRUM:\r\nJira (Scrum/Kanban boards)\r\n\r\nCOMUNICAÇÃO E COLABORAÇÃO:\r\nMicrosoft Teams\r\nGoogle Workspace (Docs, Sheets, Slides)\r\nZoom / Google Meet\r\n\r\nANÁLISE DE DADOS / RELATÓRIOS\r\nExcel (avançado: tabelas dinâmicas, macros, Power Query)\r\nPower BI\r\n\r\nDOCUMENTAÇÃO E GESTÃO DE CONHECIMENTO\r\nSharePoint\r\nNotion\r\n\r\nGESTÃO FINANCEIRA/ORÇAMENTÁRIA DE PROJETOS\r\nSAP\r\nExcel (modelagem financeira)\r\n\r\nDIAGRAMAÇÃO E PLANEJAMENTO VISUAL\r\nVisio\r\n\r\nFERRAMENTAS DE ENGENHARIA CIVIL\r\nProjeto e Modelagem\r\nAutoCAD\r\nRevit (BIM)\r\nCivil 3D\r\nCálculo Estrutural\r\nTQS\r\n\r\nTopografia e Geoprocessamento\r\nAutoCAD Civil 3D\r\nQGIS\r\n\r\nFERRAMENTAS DE ENGENHARIA\r\nModelagem e Simulação de Processos\r\nFlexSim\r\n\r\nQualidade e Melhoria Contínua\r\nMinitab (estatística para Six Sigma)\r\nExcel (para, 5W2H, Ishikawa, etc.)",
    "areas_ultima_experiencia": [
      "Financeiro",
      "Compras / Suprimentos",
      "Tecnologia / TI",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Analista de Desenvolvimento de Produtos",
        "periodo": "mai/2019 a mar/2021",
        "atividades": "Atuei diretamente na industrialização de novos produtos — desenvolvendo processos de fabricação, ferramental e equipamentos, validando protótipos e apoiando o ramp-up de produção — garantindo a conformidade com normas técnicas e certificando os critérios de qualidade para a produção em larga escala"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Pós-graduação",
    "cursos_qualificacoes": "",
    "conhecimentos": "",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,",
    "lideranca": "Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, São João da Boa Vista, Mogi Guaçu, Campinas, Pouso Alegre, Limeira, Rio Claro, Mogi Mirim",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788268333659-carlos-eduardo-de-oliveira-peres-mendes-",
    "submittedAt": "01/09/2026, 10:12",
    "nome_completo": "Carlos Eduardo de Oliveira Peres Mendes",
    "whatsapp": "35998905158",
    "email": "carlosperesmendes66@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 22,
    "cnh": "Não",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 10:12",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Auxiliar de Logística",
      "Auxiliar / Inspetor(a) da Qualidade"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Especialista",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar",
    "ferramentas_ultima_experiencia": "Trabalhava com uma máquina q fazia canal nas peças aonde esmaltação por dentro da peça",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Rr pintura",
        "cargo": "Pintor",
        "periodo": "2016 a 2021",
        "atividades": "Pintava e preparava casa"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Produção",
    "lideranca": "Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas poços de Caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão. Profissional com experiência como Especialista na empresa Kohler, com 2 a 5 anos na função. Vivência em Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar. Conhecimentos em Excel, Word, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados."
  },
  {
    "id": "CV-1788269436508-pedro-henrique-feitosa-gomes-pedrohenriq",
    "submittedAt": "01/09/2026, 10:30",
    "nome_completo": "Pedro Henrique Feitosa Gomes",
    "whatsapp": "35 9 97517660",
    "email": "pedrohenriquegosmes999@gmail.com",
    "cidade": "Andradas mg",
    "estado": "MG",
    "idade": 28,
    "cnh": "Não",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "01/09/2026, 10:30",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Auxiliar de Logística",
      "Separador(a) / Conferente",
      "Auxiliar de Expedição",
      "Auxiliar / Assistente Administrativo"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kholer",
    "ultimo_cargo": "Classificador",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Reparo de peças",
    "ferramentas_ultima_experiencia": "Instrumentos de pintura, massas e lixas",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Fundamental incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Produção, Qualidade",
    "lideranca": "Responsável, Organizado(a), Pontual",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas e Poços de Caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Classificador na empresa Kholer, com 2 a 5 anos na função. Vivência em Reparo de peças. Conhecimentos em Produção, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual."
  },
  {
    "id": "CV-1788284162678-wilson-moretti-filho-wilsonmorettifilho-",
    "submittedAt": "01/09/2026, 14:36",
    "nome_completo": "Wilson moretti filho",
    "whatsapp": "35 99816-8327",
    "email": "Wilsonmorettifilho@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 42,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 14:36",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Serviços Gerais"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Classificador",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Reparos,retoques",
    "ferramentas_ultima_experiencia": "Lixa,maquina de lixar e furar, luz de cura",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "Já trabalhei em fábrica  de móveis",
    "instituicao_ensino": "Fundamental completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Produção",
    "lideranca": "Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio. Profissional com experiência como Classificador na empresa Kohler, com 5 a 10 anos na função. Vivência em Reparos,retoques. Conhecimentos em Produção. Características profissionais declaradas: Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788287233177-jessica-constantino-jessicaconstantino-h",
    "submittedAt": "01/09/2026, 15:27",
    "nome_completo": "Jéssica Constantino",
    "whatsapp": "35991797966",
    "email": "jessicaconstantino@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 31,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 15:27",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Engenheiro(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Engenheiro de Processos Pleno",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.",
    "ferramentas_ultima_experiencia": "SAP, Excel, Power BI, Power Apps, Power Poing e Word",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Administrativo",
      "Financeiro",
      "Compras / Suprimentos",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Engenheira de Processos Júnior",
        "periodo": "07/2022 a 03/2025",
        "atividades": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global."
      },
      {
        "empresa": "Kohler",
        "cargo": "Analista de Processos",
        "periodo": "05/2021 a 02/2022"
      },
      {
        "empresa": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tCriação, controle e análise de dados de indicadores chaves;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.",
        "cargo": "Kohler",
        "periodo": "Assistente de Laboratório"
      }
    ],
    "experiencias_adicionais": "02/2020 a 08/2020",
    "escolaridade": "•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.",
    "curso_formacao": "Cargo: Assistente de Controle de Processos – 02/2020 – 08/2020\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017",
    "caracteristicas": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP",
    "lideranca": "Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Jundiaí, Mogi Mirim, Campinas, São João da Boa Vista, Aguaí",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788287917572-fernando-a-alexandre-fernandoalexandre44",
    "submittedAt": "01/09/2026, 15:38",
    "nome_completo": "Fernando A. Alexandre",
    "whatsapp": "35997131981",
    "email": "fernandoalexandre448@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 45,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 15:38",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Motorista / Entregador(a)",
      "Auxiliar / Assistente Administrativo",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Líder de turno",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.",
    "ferramentas_ultima_experiencia": "Trabalha com o processo de Lean manufacture.",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Icasa",
        "cargo": "Operador de máquina de fundição",
        "periodo": "Março de 2011 a maio de 2016",
        "atividades": "Destacamento de peças e acabamento."
      },
      {
        "empresa": "Instituto de educação Alfa",
        "cargo": "Zelador",
        "periodo": "Junho 2017 a outro de outubro de 2020"
      },
      {
        "empresa": "Cuidar da manutenção e limpeza do local inclusive jardinagem.",
        "cargo": "C Q Sab Lanches",
        "periodo": "Balconista"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "Pós graduação em engenharia da qual e pós graduação em Lean manufacture.",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática",
    "caracteristicas": "Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "pretensao_salarial": "Comercial, Escala",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados."
  },
  {
    "id": "CV-1788300951563-luziele-dionisio-falda-luzieledionisio-g",
    "submittedAt": "01/09/2026, 19:15",
    "nome_completo": "Luziele Dionisio Falda",
    "whatsapp": "(35)997253903",
    "email": "luzieledionisio@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 30,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "01/09/2026, 19:15",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Técnico(a)",
      "Engenheiro(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Técnico de Processos",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "- Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.",
    "ferramentas_ultima_experiencia": "Excel, word, PowerPoint, dilatômetro, sedígrafo, área superficial",
    "areas_ultima_experiencia": [
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "AP Teixeira Laboratório Analítico",
        "cargo": "Técnico em Química",
        "periodo": "Outubro/2023 a janeiro/2024",
        "atividades": "- Atuação na Gestão da Qualidade Laboratorial, conforme requisitos da ABNT NBR ISO/IEC 17025:2017, com seleção, validação e implementação de POPs.\r\n- Execução e interpretação de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS.\r\n- Calibração e verificação de equipamentos laboratoriais de bancada e campo, assegurando a confiabilidade dos resultados analíticos.\r\n- Avaliação de reagentes, métodos de desinfecção e alternativas de tratamento de efluentes, contribuindo para a melhoria dos processos."
      },
      {
        "empresa": "MG Ambiental",
        "cargo": "Labortorista",
        "periodo": "Abril/2021 a setembro/2023"
      },
      {
        "empresa": "- Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\r\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\r\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\r\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\r\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\r\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\r\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\r\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Informática, Qualidade",
    "lideranca": "Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "pretensao_salarial": "Comercial, 2º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788347950370-vitor-manoel-joventino-da-silva-garcia-v",
    "submittedAt": "02/09/2026, 08:19",
    "nome_completo": "Vitor Manoel Joventino da Silva Garcia",
    "whatsapp": "35997040566",
    "email": "vitormanoeljoventino@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 26,
    "cnh": "Não",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "02/09/2026, 08:19",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Estoquista / Almoxarife",
      "Separador(a) / Conferente",
      "Serviços Gerais",
      "Outro",
      "Empresa louças sanitária",
      "RETOCADOR"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler Brasil",
    "ultimo_cargo": "RETOCADOR",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Retocar peças com defeito, que vinhão de outros setores.",
    "ferramentas_ultima_experiencia": "Caneta pneumática, bico de ar, retifica.",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Ajudante de fundidor na Icasa",
        "cargo": "Ajudante de fundidor",
        "periodo": "8 meses",
        "atividades": "Trabalhei na lavita, na roça mais subir pra qualidade depois de 2 meses, só que saí antes de exercer o cargo, tava precisando de dinheiro e fui prá outra empresa"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "Mais quero começar a estudar,curso ou faculdade",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Não tenho mais pretendo começar fazer.",
    "caracteristicas": "Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Sudeste, Andradas, poços de Caldas, Pinhal, jardim",
    "pretensao_salarial": "Comercial, 1º turno, 2º turno, Qualquer horário, Escala",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio. Profissional com experiência como RETOCADOR na empresa Kohler Brasil, com 2 a 5 anos na função. Vivência em Retocar peças com defeito, que vinhão de outros setores.. Conhecimentos em Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom. Qualificações: Não tenho mais pretendo começar fazer.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados."
  },
  {
    "id": "CV-1788361335124-alex-dias-da-silva-alex-dias2021-outlook",
    "submittedAt": "02/09/2026, 12:02",
    "nome_completo": "Alex Dias da Silva",
    "whatsapp": "35997470544",
    "email": "alex_dias2021@outlook.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 34,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "02/09/2026, 12:02",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Operador(a) de Máquina"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kolher",
    "ultimo_cargo": "Operado de máquinas (Fundidor)",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "",
    "ferramentas_ultima_experiencia": "Máquina na banca de enchimento de fazer as perças.",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Granja Almeida",
        "cargo": "Avicultura",
        "periodo": "1 ano e 5 mes",
        "atividades": "Aveicutura de corte"
      },
      {
        "empresa": "Fazenda Dallas",
        "cargo": "Cultivo de flores",
        "periodo": "4 anos e 2 mês"
      },
      {
        "empresa": "Rigação",
        "cargo": "Kolher",
        "periodo": "Operador de máquinas"
      }
    ],
    "experiencias_adicionais": "8 anos",
    "escolaridade": "Fundidor",
    "curso_formacao": "",
    "instituicao_ensino": "Fundamental completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Produção, Operação de máquinas",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas, Poços de caldas,espírito do pilhal",
    "pretensao_salarial": "Comercial, 1º turno, 2º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade."
  },
  {
    "id": "CV-1788365776325-roni-doniseti-ferraz-roniandradas-hotmai",
    "submittedAt": "02/09/2026, 13:16",
    "nome_completo": "Roni Doniseti Ferraz",
    "whatsapp": "35988385312",
    "email": "roniandradas@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 44,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "02/09/2026, 13:16",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Supervisor produção Massa e Esmalte",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Supervisor de produção Massa, Esmalte e ETA",
    "ferramentas_ultima_experiencia": "Sistema de qualidade pré controles, metrologias de laboratório com equipamentos para liberação dos produtos.",
    "areas_ultima_experiencia": [
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Cerâmica Vila Rica",
        "cargo": "Laboratorio",
        "periodo": "1998 a 2010",
        "atividades": "Reologia de massa , esmalte , reparos a frio resinas e esmalte para reparos requeima"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica",
    "caracteristicas": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "lideranca": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas , Poços de Caldas e Jundiaí",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788439505760-luiz-henrique-de-souza-souzaluizhenrique",
    "submittedAt": "03/09/2026, 09:45",
    "nome_completo": "Luiz Henrique de Souza",
    "whatsapp": "35992636485",
    "email": "souzaluizhenrique32@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 31,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 09:45",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Máquina",
      "Auxiliar de Logística",
      "Estoquista / Almoxarife",
      "Operador(a) de Empilhadeira",
      "Motorista / Entregador(a)",
      "Mecânico(a) de Manutenção"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kholer",
    "ultimo_cargo": "Supervisor",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Inspecionar pecas",
    "ferramentas_ultima_experiencia": "Bancas aromatizadas",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Vendas, Logística, Produção",
    "lideranca": "Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Comercial, 1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Motorista / Transporte",
    "curriculo_texto": "Áreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas. Profissional com experiência como Supervisor na empresa Kholer, com 5 a 10 anos na função. Vivência em Inspecionar pecas. Conhecimentos em Vendas, Logística, Produção. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados."
  },
  {
    "id": "CV-1788439567833-juan-renan-carvalho-batista-juanbatista1",
    "submittedAt": "03/09/2026, 09:46",
    "nome_completo": "Juan Renan Carvalho Batista",
    "whatsapp": "35998609435",
    "email": "juanbatista1994@gmail.com",
    "cidade": "Poços de Caldas",
    "estado": "MG",
    "idade": 32,
    "cnh": "Outra - A e B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 09:46",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar de Logística",
      "Auxiliar de Expedição",
      "Técnico(a) da Qualidade",
      "Analista Administrativo",
      "Analista de RH / DP",
      "Líder / Encarregado(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Analista de PPCP",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.",
    "ferramentas_ultima_experiencia": "Excel, sistema SAP",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Administrativo",
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Icasa",
        "cargo": "Fundidor de formas",
        "periodo": "Out 2012 a set 2014",
        "atividades": "Fundir moldes em gesso."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "Administração",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Estoque, Logística, Administrativo",
    "lideranca": "Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Poços de Caldas",
    "pretensao_salarial": "Comercial, 1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Logística / Estoque / Expedição",
    "curriculo_texto": "Áreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão. Profissional com experiência como Analista de PPCP na empresa Kohler, com 1 a 2 anos na função. Vivência em Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.. Conhecimentos em Excel, Word, Estoque, Logística, Administrativo. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados."
  },
  {
    "id": "CV-1788440674423-vanderson-rodrigo-mazarini-vandersonrodr",
    "submittedAt": "03/09/2026, 10:04",
    "nome_completo": "Vanderson Rodrigo mazarini",
    "whatsapp": "35998966415",
    "email": "Vandersonrodrigo4@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 39,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:04",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Auxiliar de Logística",
      "Estoquista / Almoxarife",
      "Separador(a) / Conferente",
      "Líder / Encarregado(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Lider",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Liderar equipe e trabalhar juntos na entrega",
    "ferramentas_ultima_experiencia": "Empilhadeira paleteira eletrica",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Nr10,nr11,nr12,empilhadeira",
    "caracteristicas": "Produção, Operação de máquinas",
    "lideranca": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Lider na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe e trabalhar juntos na entrega. Conhecimentos em Produção, Operação de máquinas. Qualificações: Nr10,nr11,nr12,empilhadeira. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788440676682-israel-augusto-campos-israel32campos-gma",
    "submittedAt": "03/09/2026, 10:04",
    "nome_completo": "ISRAEL AUGUSTO CAMPOS",
    "whatsapp": "35984490490",
    "email": "israel32campos@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 46,
    "cnh": "Outra - AD",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:04",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) de Segurança do Trabalho",
      "Engenheiro(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler produtos para cozinhas e banheiros Ltda",
    "ultimo_cargo": "Técnico de segurança do trabalho",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos",
    "ferramentas_ultima_experiencia": "Sistema Soc",
    "areas_ultima_experiencia": [
      "Segurança do Trabalho"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Lavtel indústria e Comércio Ltda",
        "cargo": "Encarregado de produção",
        "periodo": "1999 a 2012",
        "atividades": "Gestão de produção \r\nGestão de pessoas"
      },
      {
        "empresa": "Kohler produtos para cozinhas e banheiros",
        "cargo": "Supervisor de EHS",
        "periodo": "2012 a 2020"
      },
      {
        "empresa": "Gestão de pessoas \r\nGestão de normas \r\nGestão de novos projetos",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Pós-graduação",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista",
    "caracteristicas": "Excel, Word, Informática, Segurança do trabalho, Compras",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Mogi mirim,Mogi Guaçu",
    "pretensao_salarial": "Comercial, 1º turno, 2º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Segurança do Trabalho. Profissional com experiência como Técnico de segurança do trabalho na empresa Kohler produtos para cozinhas e banheiros Ltda, com mais de 10 anos na função. Vivência em Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos. Conhecimentos em Excel, Word, Informática, Segurança do trabalho, Compras. Qualificações: NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788440766484-reginaldo-de-padua-paduareginaldo41-gmai",
    "submittedAt": "03/09/2026, 10:06",
    "nome_completo": "Reginaldo de Pádua",
    "whatsapp": "55 35 99257-9883",
    "email": "paduareginaldo41@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 44,
    "cnh": "A",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:06",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Supervisor",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Liderar uma equipe de produção, com foco em segurança, produção e qualidade",
    "ferramentas_ultima_experiencia": "Notebook, celular",
    "areas_ultima_experiencia": [
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Casa Geraldo",
        "cargo": "Chefe de salao",
        "periodo": "2002 até 2005, mais ou menos",
        "atividades": "Barmen, garçom, líder da equipe de salao"
      },
      {
        "empresa": "Aldeia velha",
        "cargo": "Líder dos garçons",
        "periodo": "2006 até 2010, mais ou menos"
      },
      {
        "empresa": "Garçom, caixa e líder dos garçons",
        "cargo": "Nao",
        "periodo": "Nao"
      }
    ],
    "experiencias_adicionais": "Nao",
    "escolaridade": "Nao",
    "curso_formacao": "Nao",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Gestao",
    "caracteristicas": "Excel, Informática, Estoque, Produção",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Comercial, 2º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Supervisor na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar uma equipe de produção, com foco em segurança, produção e qualidade. Conhecimentos em Excel, Informática, Estoque, Produção. Qualificações: Gestao. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados."
  },
  {
    "id": "CV-1788442009022-paulo-guilherme-miolo-gui-miolo2019-gmai",
    "submittedAt": "03/09/2026, 10:26",
    "nome_completo": "Paulo Guilherme miolo",
    "whatsapp": "35 992395726",
    "email": "Gui.miolo2019@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 48,
    "cnh": "C",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "03/09/2026, 10:26",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Vendedor(a) / Consultor(a) Comercial",
      "Suporte / TI"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohker",
    "ultimo_cargo": "Sênior",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Classificador  retocador cipeiro  brigasista meio ambiente",
    "ferramentas_ultima_experiencia": "Empilhadeira",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade",
    "lideranca": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Qualidade",
    "curriculo_texto": "Áreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI. Profissional com experiência como Sênior na empresa Kohker, com 5 a 10 anos na função. Vivência em Classificador  retocador cipeiro  brigasista meio ambiente. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788442274954-roseane-pereira-da-silva-goncalves-rosea",
    "submittedAt": "03/09/2026, 10:31",
    "nome_completo": "Roseane Pereira da Silva Gonçalves",
    "whatsapp": "35992472355",
    "email": "roseanegonalves1986@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 40,
    "cnh": "AB",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "03/09/2026, 10:31",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Preparador(a) / Regulador(a) de Máquina",
      "Estoquista / Almoxarife"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Operador de shanque",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Produção",
    "ferramentas_ultima_experiencia": "",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Qualidade",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Trabalho rural swart rosas",
        "cargo": "Produção",
        "periodo": "2003/2007",
        "atividades": "Produção de rosa"
      },
      {
        "empresa": "Sítio lagoa dourada",
        "cargo": "Produção",
        "periodo": "2007/2012"
      },
      {
        "empresa": "Produção de flores",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Técnico em contabilidade",
    "caracteristicas": "Excel",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Comercial, 1º turno, 2º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Operador de shanque na empresa Kohler, com mais de 10 anos na função. Vivência em Produção. Conhecimentos em Excel. Qualificações: Técnico em contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender."
  },
  {
    "id": "CV-1788442723275-luiz-fernando-inocencio-luizinocencio-co",
    "submittedAt": "03/09/2026, 10:38",
    "nome_completo": "Luiz Fernando inocencio",
    "whatsapp": "19 9 9999 0407",
    "email": "Luizinocencio.com.br@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 42,
    "cnh": "Outra - A D",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:38",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Separador(a) / Conferente",
      "Operador(a) de Empilhadeira",
      "Auxiliar de Expedição",
      "Motorista / Entregador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Coca cola",
    "ultimo_cargo": "Operador de empilhadeira",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Estoque",
    "ferramentas_ultima_experiencia": "Empilhadeira \r\nColetores",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Líder",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Coca cola",
        "cargo": "Operador de Empilhadeira",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Operador de Empilhadeira \r\nLiderança",
    "caracteristicas": "Estoque, Logística, Expedição, Produção",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão. Profissional com experiência como Operador de empilhadeira na empresa Coca cola, com 5 a 10 anos na função. Vivência em Estoque. Conhecimentos em Estoque, Logística, Expedição, Produção. Qualificações: Operador de Empilhadeira \r\nLiderança. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788443057603-paulo-ricardo-braz-paulo-r-b25-hotmail-c",
    "submittedAt": "03/09/2026, 10:44",
    "nome_completo": "Paulo Ricardo Braz",
    "whatsapp": "36999878867",
    "email": "paulo.r.b25@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 38,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:44",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Preparador(a) / Regulador(a) de Máquina",
      "Motorista / Entregador(a)",
      "Mecânico(a) de Manutenção"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kholer",
    "ultimo_cargo": "Tc mecânico",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "Bomba peneumunia mas tem experiência em várias áreas da mecânica",
    "ferramentas_ultima_experiencia": "De tudo um pouco",
    "areas_ultima_experiencia": [
      "Manutenção Mecânica"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Icasa",
        "cargo": "Mecânico",
        "periodo": "Fiori",
        "atividades": "Solda lixadeira pintura"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Técnico",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Vários e informática",
    "caracteristicas": "Excel, Word, Informática, Manutenção, Mecânica",
    "lideranca": "Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Qualquer cidade",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Manutenção Mecânica",
    "curriculo_texto": "Áreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal. Profissional com experiência como Tc mecânico na empresa Kholer, com 1 a 2 anos na função. Vivência em Bomba peneumunia mas tem experiência em várias áreas da mecânica. Conhecimentos em Excel, Word, Informática, Manutenção, Mecânica. Qualificações: Vários e informática. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788443087477-lucas-lourenco-caetano-lucaslourencocaet",
    "submittedAt": "03/09/2026, 10:44",
    "nome_completo": "Lucas Lourenço Caetano",
    "whatsapp": "35999859710",
    "email": "lucaslourencocaetano@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 22,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 10:44",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Estoquista / Almoxarife",
      "Operador(a) de Empilhadeira",
      "Motorista / Entregador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kholler",
    "ultimo_cargo": "Fundador operador de máquinas shanks ||",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "Fazia louças sanitárias spam bacias de colagem",
    "ferramentas_ultima_experiencia": "Torno, raspas, esponjas, manipulador etc.",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Serbet",
        "cargo": "Operador de estacionamento rotativo",
        "periodo": "21/03/2023 a 01/06/2024",
        "atividades": "Monitor as vagas e carros que estava usando o estacionamento rotativo zona azul."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade",
    "lideranca": "Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Fundador operador de máquinas shanks || na empresa Kholler, com 1 a 2 anos na função. Vivência em Fazia louças sanitárias spam bacias de colagem. Conhecimentos em Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade."
  },
  {
    "id": "CV-1788445180291-silvania-gomes-da-silva-silvaniagoms017-",
    "submittedAt": "03/09/2026, 11:19",
    "nome_completo": "Silvânia Gomes da Silva",
    "whatsapp": "35991088740",
    "email": "silvaniagoms017@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 41,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 11:19",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Líder / Encarregado(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Fundição",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Produção de louça sanitária,ex:caixa,cuba, lavatório etc.",
    "ferramentas_ultima_experiencia": "Operadora de máquina shanks.",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Rosera florada da serra",
        "cargo": "Liderança",
        "periodo": "5 anos",
        "atividades": "Organizar equipe, separar pedidos, atender clientes"
      },
      {
        "empresa": "Dephai",
        "cargo": "Ajudante de produção",
        "periodo": "2anos"
      },
      {
        "empresa": "Chicote de carro",
        "cargo": "Alstromelia lagoa dourada",
        "periodo": "Na coleta da produção e embalagem"
      }
    ],
    "experiencias_adicionais": "Roseira florada da serra",
    "escolaridade": "Colheita embalagem de rosa",
    "curso_formacao": "Tomates fonte verde \r\nColheita,e pesagem de tomate.",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Informática",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Em Andradas",
    "pretensao_salarial": "1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Fundição na empresa Kohler, com 2 a 5 anos na função. Vivência em Produção de louça sanitária,ex:caixa,cuba, lavatório etc.. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança."
  },
  {
    "id": "CV-1788446536665-ricardo-silva-santos-ricardosilvasantos1",
    "submittedAt": "03/09/2026, 11:42",
    "nome_completo": "Ricardo Silva Santos",
    "whatsapp": "35998659801",
    "email": "ricardosilvasantos1519@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 24,
    "cnh": "Não",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "03/09/2026, 11:42",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Estoquista / Almoxarife",
      "Marketing / Comunicação",
      "Suporte / TI",
      "Líder / Encarregado(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Forneiro",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.",
    "ferramentas_ultima_experiencia": "Operava o manipulador mecânico para carregar as vagonetas e utilizava o rebocador industrial para fazer a movimentação segura dessas cargas até os fornos.Além da parte operacional,usava o computador para digitar e registrar as peças no sistema da empresa",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "Informática",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.",
    "caracteristicas": "Informática, Produção",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Meu foco principal é Andradas, mas tenho total interesse e disponibilidade para trabalhar em cidades vizinhas da região, como poços de Caldas, Espírito santo do pinhal ou são João da boa vista , caso a empresa ofereça trasporte fretado ou ajuda de custo .",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI. Profissional com experiência como Forneiro na empresa Kohler, com 2 a 5 anos na função. Vivência em \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\". Conhecimentos em Informática, Produção. Qualificações: \"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\". Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788446544442-melissa-de-carvalho-reimer-melissa-reime",
    "submittedAt": "03/09/2026, 11:42",
    "nome_completo": "Melissa de Carvalho Reimer",
    "whatsapp": "19995017509",
    "email": "melissa.reimer7bb@gmail.com",
    "cidade": "Poços de Caldas",
    "estado": "MG",
    "idade": 23,
    "cnh": "B",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "03/09/2026, 11:42",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Assistente Administrativo",
      "Analista Administrativo",
      "Técnico(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler Co",
    "ultimo_cargo": "Técnica de processos",
    "tempo_ultima_funcao": "Menos de 1 ano",
    "atividades_ultima_experiencia": "- Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.",
    "ferramentas_ultima_experiencia": "SAP, EPRO, EXCEL, SKETCH UP, POWER POINT, POWER BI",
    "areas_ultima_experiencia": [
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler co",
        "cargo": "Assistente de engenharia de processos",
        "periodo": "Set/25 a jun/26",
        "atividades": "• Desenvolvimento e implementação de pré-controles e monitoramentos para a área de Esmaltação, acompanhando variáveis críticas do processo, antecipando desvios e apoiando a tomada de decisão baseada em dados.\r\n• Elaboração, revisão e atualização de SOPs (Procedimentos Operacionais Padrão), garantindo a padronização dos processos e conformidade operacional.\r\n• Gestão do OPEX de dois setores (Esmaltação e forno), realizando controle orçamentário, análise de custos e acompanhamento das previsões de fechamento mensal.\r\n• Atuação estratégica em Melhoria Contínua, promovendo a otimização de processos industriais com foco em eficiência, qualidade e produtividade.\r\n• Análise e otimização de fluxos de trabalho, identificando oportunidades para redução de desperdícios e aumento da performance operacional.\r\n• Monitoramento e gestão de KPIs, utilizando análise de dados (Excel e Power BI) para apoiar a tomada de decisão e direcionar planos de ação.\r\n• Desenvolvimento e implementação de melhorias voltadas à resolução de problemas e aumento da eficiência dos processos produtivos.\r\n• Elaboração de apresentações gerenciais com indicadores de produtividade, qualidade e yield da planta, apoiando o alinhamento estratégico da liderança.\r\n• Participação ativa em iniciativas de segurança, ergonomia, 5S e melhoria contínua, fortalecendo a cultura de excelência operacional"
      },
      {
        "empresa": "Kohler co",
        "cargo": "Estagiária de engenharia de processos",
        "periodo": "Ago/25 a set/25"
      },
      {
        "empresa": "Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos.",
        "cargo": "Kohler Co",
        "periodo": "Estagiária de almoxarifado"
      }
    ],
    "experiencias_adicionais": "Abr/24 a ago/25",
    "escolaridade": "• Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos.",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "Engenharia de produção- (anteriormente feito faculdade tecnológica de gestão da produção industrial)",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro",
    "caracteristicas": "Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo",
    "lideranca": "Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas",
    "pretensao_salarial": "1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI. Profissional com experiência como Técnica de processos na empresa Kohler Co, com menos de 1 ano na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo. Qualificações: Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro. Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788446978575-augusto-silva-pereira-augusto-sdsj-hotma",
    "submittedAt": "03/09/2026, 11:49",
    "nome_completo": "Augusto Silva Pereira",
    "whatsapp": "35920009557",
    "email": "augusto.sdsj@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 31,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 11:49",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Auxiliar de Logística",
      "Auxiliar de Expedição",
      "Líder / Encarregado(a)",
      "Serviços Gerais"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "KOHLER",
    "ultimo_cargo": "LÍDER ESMALTAÇÃO",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo",
    "ferramentas_ultima_experiencia": "Sistema AVANCE, PISTOLA DE APLICAÇÃO DE ESMALTE,",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "KOHLER",
        "cargo": "Produção de esmalte, lugar onde faz o preparo antes da aplicação",
        "periodo": "Junho 2013 à julho 2018",
        "atividades": "Fazer acerto de esmalte o preparo para levar para esmaltação e ser aplicado na peça"
      },
      {
        "empresa": "KOHLER",
        "cargo": "Esmaltador",
        "periodo": "Setembro 2018 à abril 2024"
      },
      {
        "empresa": "Fazer parte de aplicação na peça",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "",
    "maquinas_equipamentos": "",
    "caracteristicas": "Word, Informática, Produção",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "regiao_interesse": "",
    "disponibilidade_horario": "Andradas, poços de Caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão. Profissional com experiência como LÍDER ESMALTAÇÃO na empresa KOHLER, com 2 a 5 anos na função. Vivência em Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo. Conhecimentos em Word, Informática, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados."
  },
  {
    "id": "CV-1788450178796-claudio-roberto-de-paula-claudiorobertod",
    "submittedAt": "03/09/2026, 12:42",
    "nome_completo": "Cláudio Roberto de paula",
    "whatsapp": "35992040990",
    "email": "claudiorobertodepaulapaula@57gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 46,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 12:42",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kolher",
    "ultimo_cargo": "Supervisor",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Gestão de equipe ,gestão de qualidade .organização da área e planejamento",
    "ferramentas_ultima_experiencia": "",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Fiori",
        "cargo": "Fundidor",
        "periodo": "1995 a2001",
        "atividades": "Fabricacao de peças"
      },
      {
        "empresa": "Kolher",
        "cargo": "Supervisor",
        "periodo": "2001 a2026"
      },
      {
        "empresa": "Gestão de equipe ,qualidade ,,processos ,e organiza",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Word, Informática",
    "lideranca": "Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas ,poços de caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Produção / Operações. Profissional com experiência como Supervisor na empresa Kolher, com mais de 10 anos na função. Vivência em Gestão de equipe ,gestão de qualidade .organização da área e planejamento. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança."
  },
  {
    "id": "CV-1788452668231-thiago-garcia-carlin-thiago-gc266-gmail-",
    "submittedAt": "03/09/2026, 13:24",
    "nome_completo": "Thiago Garcia Carlin",
    "whatsapp": "35 9 9187 8759",
    "email": "thiago.gc266@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 38,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 13:24",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Comprador(a) / Suprimentos",
      "Supervisor(a) / Coordenador(a)",
      "Gerente"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler Produtos para cozinhas e banheiros",
    "ultimo_cargo": "Supervisor/coordenador",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Garantir que as áreas que eu fazia gestão, entregassem os resultados planejados de acordo com o plano de produção. (Almoxarifado, planejamento/compras e Kitting (produção de nacionalização de metais vendidos no Brasil)",
    "ferramentas_ultima_experiencia": "SAP, Excel, Teams, E-mail, Power Point, Power BI, aplicativos internos de controles de custos, estoques, inventário e registros de saída de materiais.",
    "areas_ultima_experiencia": [
      "Logística / Estoque / Expedição",
      "Segurança do Trabalho",
      "Contábil / Fiscal",
      "Recursos Humanos / Departamento Pessoal",
      "Compras / Suprimentos",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Exército Brasileiro",
        "cargo": "Soldado da reserva de materiais",
        "periodo": "2007 a 2012",
        "atividades": "Responsável pelo recebimento e distribuição de fardamentos e materiais diversos de utilização no pavilhão condizente."
      },
      {
        "empresa": "Marjov Comércio de roupas e calçados",
        "cargo": "Estoquista",
        "periodo": "2012 a 2015"
      },
      {
        "empresa": "Recebimento de mercadorias. \r\nLançamento de notas fiscais. \r\nArmazenagem,separação e entrega de mercadorias para as filiais da região.",
        "cargo": "Kohler Produtos para cozinhas e Banheiros",
        "periodo": "Coordenador/supervisor"
      }
    ],
    "experiencias_adicionais": "2015 a 2026",
    "escolaridade": "Coordenação das áreas de almoxarifado, Planejamento de Compras alinhado com o plano de produção e área de Kitting (recebimento e nacionalização de metais importados para o Brasil)\r\nFechamento fiscal.\r\nInventários.\r\nResponsável pelo programa de redução de custos. \r\nResponsável pela atuação de segurança nas áreas. 4anos de CIPA.\r\nResponsável pelo 5s das áreas.",
    "curso_formacao": "",
    "instituicao_ensino": "Pós-graduação",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Bacharelado em Administração. \r\nPós graduação executiva de administração de materiais e logística. \r\nLean manufacture. \r\nFature Master Plane. \r\nComunicação. \r\nLiderança corporativa. \r\nSAP. \r\nExcel avançado. \r\nInglês.",
    "caracteristicas": "Excel, Word, Informática, Estoque, Logística, Produção, Operação de máquinas, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade, Compras",
    "lideranca": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Financeiro, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos. Profissional com experiência como Supervisor/coordenador na empresa Kohler Produtos para cozinhas e banheiros, com 5 a 10 anos na função. Vivência em Garantir que as áreas que eu fazia gestão, entregassem os resultados planejados de acordo com o plano de produção. (Almoxarifado, planejamento/compras e Kitting (produção de nacionalização de metais vendidos no Brasil). Conhecimentos em Excel, Word, Informática, Estoque, Logística, Produção, Operação de máquinas, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade, Compras. Qualificações: Bacharelado em Administração. \r\nPós graduação executiva de administração de materiais e logística. \r\nLean manufacture. \r\nFature Master Plane. \r\nComunicação. \r\nLiderança corporativa. \r\nSAP. \r\nExcel avançado. \r\nInglês.. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788454470127-lucas-barbosa-reis-luca-sb-reis-hotmail-",
    "submittedAt": "03/09/2026, 13:54",
    "nome_completo": "Lucas Barbosa Reis",
    "whatsapp": "35999126802",
    "email": "luca.sb.reis@hotmail.com.br",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 37,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 13:54",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Produção",
      "Auxiliar / Assistente Administrativo",
      "Analista Administrativo",
      "Suporte / TI",
      "Supervisor(a) / Coordenador(a)",
      "Outro",
      "Modelador"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Modelador JR.",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Confecção de modelos com base em projetos. \r\nConstrução de moldes \r\nSuporte para produção nos testes\r\nMontagem e organização de cronograma",
    "ferramentas_ultima_experiencia": "Ferramentas para medição com precisão",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Outros"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Icasa - Industria Cerâmica Andradense",
        "cargo": "Matrizeiro",
        "periodo": "Jan 2008 / Jun 2018",
        "atividades": "Confecção de diversos tipos de matrizes \r\nConfecção moldes original e teste\r\nConfecção de gabaritos e suportes de poliuretano \r\nAuxiliar na confecção de moldes para alta pressão"
      },
      {
        "empresa": "Borges Materiais para Construção",
        "cargo": "Balconista/ vendedor",
        "periodo": "Jan2006/dez2007"
      },
      {
        "empresa": "Controle e reposição de estoque \r\nVendedor",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Desenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad",
    "caracteristicas": "Informática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Qualidade, Administrativo, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Modelador JR. na empresa Kohler, com 5 a 10 anos na função. Vivência em Confecção de modelos com base em projetos. \r\nConstrução de moldes \r\nSuporte para produção nos testes\r\nMontagem e organização de cronograma. Conhecimentos em Informática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos. Qualificações: Desenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788457056019-fernando-henrique-candido-nandojoaograzi",
    "submittedAt": "03/09/2026, 14:37",
    "nome_completo": "Fernando Henrique Candido",
    "whatsapp": "35992730522",
    "email": "nandojoaograzi@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 35,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 14:37",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Motorista / Entregador(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kolher",
    "ultimo_cargo": "Prototipista",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Desenvolvimento de novos produtos",
    "ferramentas_ultima_experiencia": "Máquina shanks todos os tipos de peça fundição seramica tbm manual",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Entregador",
        "cargo": "",
        "periodo": "",
        "atividades": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Fundamental incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "",
    "lideranca": "Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados, Bom relacionamento interpessoal",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Motorista / Transporte. Profissional com experiência como Prototipista na empresa Kolher, com mais de 10 anos na função. Vivência em Desenvolvimento de novos produtos. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788463365482-gabriel-tambolim-da-cunha-gabrielcunha99",
    "submittedAt": "03/09/2026, 16:22",
    "nome_completo": "Gabriel Tambolim da Cunha",
    "whatsapp": "359980838099",
    "email": "gabrielcunha9902@gmail.com",
    "cidade": "Poços de Caldas",
    "estado": "MG",
    "idade": 27,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 16:22",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Técnico(a) de Segurança do Trabalho",
      "Engenheiro(a)",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Engenheiro de Qualidade",
    "tempo_ultima_funcao": "Menos de 1 ano",
    "atividades_ultima_experiencia": "Supervisão do Laboratório de Testes da Qualidade;\r\nGestão de Calibrações de equipamentos e ferramentas;\r\nGestão de produtos importados em projetos globais\r\nPromoção de treinamentos sobre boas práticas de qualidade e controle de\r\nprocessos.\r\nMonitoramento e garantia da conformidade dos produtos.\r\nParticipação em projetos de desenvolvimento de novos produto",
    "ferramentas_ultima_experiencia": "Excel, Power BI, Power Automate, Power Apps, OPEX, Planner",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Técnico de Sistema de Gestão de Qualidade",
        "periodo": "mar/25 a jan/26",
        "atividades": "Gestão e Manutenção do SGQ na fábrica;\r\nDesenvolvimento de Aplicativo para Controle de Documentos em Power\r\nPlataform;\r\nControle e gestão de custos do setor de Qualidade (OPEX);\r\nDesenvolvimento de dashboards de KPI's em Power BI;\r\nInvestigação e resolução de defeitos no produto/processo;\r\nElaboração e aplicação de planos de ação para defeitos em Produtos\r\nInternacionais;\r\nCertificação do Processo para novos produtos/produtos obsoletos;\r\nParticipação de Desenvolvimentos de Projetos Lean;\r\nDesenvolvimento de Aplicativo Global para divulgação de melhorias e boas\r\npráticas no ambiente de trabalho (Workplace Experience);"
      },
      {
        "empresa": "Kohler",
        "cargo": "Assistente de Qualidade",
        "periodo": "jan/24 a mar/25"
      },
      {
        "empresa": "Responsável da implementação do Sistema de Gestão da Qualidade Interno\r\n– Nível 2, com foco na maturidade dos processos;\r\nAplicação de Ferramentas da Qualidade e Indicadores de Desempenho\r\n(KPI's);\r\nGestão de Auditorias de Processos (ISO 19011)\r\nTreinamento dos colaboradores em procedimentos de qualidade",
        "cargo": "Kohler",
        "periodo": "Estagiário de Qualidade"
      }
    ],
    "experiencias_adicionais": "jun/22 a jan/24",
    "escolaridade": "Realização de Testes segundo norma ABNT e ASME\r\nSuporte na implementação do Sistema de Gestão da Qualidade Interno –\r\nNível 1, estruturando os pilares da qualidade na operação\r\nSuporte no Controle de Documentos (POPs)\r\nSuporte na certificação de produtos para venda no mercado sul-americano,\r\nassegurando conformidade técnica e regulatória\r\nRelatórios de indicadores-chave de desempenho (KPI)",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "ISO 9001, ISO 19011",
    "caracteristicas": "Excel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Poços de Caldas",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Qualidade",
    "curriculo_texto": "Áreas de interesse: Qualidade, Produção / Operações, Segurança do Trabalho, Engenharia / Técnico, Liderança / Gestão. Profissional com experiência como Engenheiro de Qualidade na empresa Kohler, com menos de 1 ano na função. Vivência em Supervisão do Laboratório de Testes da Qualidade;\r\nGestão de Calibrações de equipamentos e ferramentas;\r\nGestão de produtos importados em projetos globais\r\nPromoção de treinamentos sobre boas práticas de qualidade e controle de\r\nprocessos.\r\nMonitoramento e garantia da conformidade dos produtos.\r\nParticipação em projetos de desenvolvimento de novos produto. Conhecimentos em Excel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico. Qualificações: ISO 9001, ISO 19011. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788475049456-jorge-dos-santos-js6105110-gmail-com-359",
    "submittedAt": "03/09/2026, 19:37",
    "nome_completo": "Jorge dos Santos",
    "whatsapp": "35999142354",
    "email": "js6105110@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 46,
    "cnh": "Não",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "03/09/2026, 19:37",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Outro",
      "Forneiro 2"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Forneiro 2",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Infornava peças.",
    "ferramentas_ultima_experiencia": "Na mão tudo que fazia.",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Forneiro 2",
        "periodo": "",
        "atividades": "Produção"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Fundamental incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "Não tenho",
    "caracteristicas": "",
    "lideranca": "Responsável, Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Atenção aos detalhes, Foco em resultados",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário, Escala",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações. Profissional com experiência como Forneiro 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em Infornava peças.. Qualificações: Não tenho. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Atenção aos detalhes, Foco em resultados."
  },
  {
    "id": "CV-1788522188306-ricardo-silva-brandao-ricard-brandao000-",
    "submittedAt": "04/09/2026, 08:43",
    "nome_completo": "Ricardo Silva Brandão",
    "whatsapp": "35997082286",
    "email": "ricard.brandao000@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 29,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "04/09/2026, 08:43",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "lider de produção 2",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "liderar equipe, desenvolver pessoas, balancear linha de produção para bater metas, apresentação de resultados, analisar números para tomar a melhor decisão",
    "ferramentas_ultima_experiencia": "pacote office, empilhadeira, SAP,",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "SUPERMECADOS SERRA AZUL",
        "cargo": "LIDER DE PADARIA",
        "periodo": "2019 A 2020",
        "atividades": "LIDERAR ATENDIMENTO E PRUDUÇÃO, LOGISTICA DE PEDIDDOS PARA ENTRTEGAS NAS OUTRAS REDES."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "COMPUTAÇÃO, PACOTE OFFICE E TPM",
    "caracteristicas": "Excel, Word, Informática, Logística, Expedição, Produção",
    "lideranca": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "ANDRADAS E POÇOS DE CALDAS",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como lider de produção 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em liderar equipe, desenvolver pessoas, balancear linha de produção para bater metas, apresentação de resultados, analisar números para tomar a melhor decisão. Conhecimentos em Excel, Word, Informática, Logística, Expedição, Produção. Qualificações: COMPUTAÇÃO, PACOTE OFFICE E TPM. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados."
  },
  {
    "id": "CV-1788523200673-sandra-da-silva-pereira-sandrapereirafra",
    "submittedAt": "04/09/2026, 09:00",
    "nome_completo": "Sandra da Silva Pereira",
    "whatsapp": "199",
    "email": "sandrapereirafrancisco1@hotmail.com",
    "cidade": "Espírito Santo do Pinhal",
    "estado": "SP",
    "idade": 49,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "04/09/2026, 09:00",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Outro",
      "Enfermeiro do trabalho"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler Produtos para cozinha e banheiros",
    "ultimo_cargo": "enfermeiro do trabalho",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.",
    "ferramentas_ultima_experiencia": "Computador, DEA, ambulância",
    "areas_ultima_experiencia": [
      "Segurança do Trabalho"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Aptiv manufatura",
        "cargo": "Ambulatorio ocupacional",
        "periodo": "6 anos",
        "atividades": "Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros."
      },
      {
        "empresa": "kohler produto para cozinha e Banheiros",
        "cargo": "Enfermeiro do trabalho",
        "periodo": "6 anos"
      },
      {
        "empresa": "Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.",
        "cargo": "Hospital Carolina Malheiros",
        "periodo": "tecnio de enfermagem"
      }
    ],
    "experiencias_adicionais": "2 anos e 6 meses",
    "escolaridade": "Prestar cuidados diretos aos pacientes\r\n\r\nRealizar higiene e conforto do paciente.\r\nAuxiliar na alimentação e hidratação.\r\nAuxiliar na mobilização e mudança de decúbito.\r\n\r\n✅ Verificar e registrar sinais vitais\r\n\r\nPressão arterial.\r\nTemperatura.\r\nFrequência cardíaca.\r\nFrequência respiratória.\r\nSaturação de oxigênio.\r\n\r\n✅ Administrar medicamentos\r\n\r\nConforme prescrição médica e orientação do enfermeiro.\r\nVias oral, intramuscular, subcutânea, endovenosa, entre outras habilitadas pela instituição.\r\n\r\n✅ Realizar procedimentos de enfermagem\r\n\r\nCurativos simples e complexos sob supervisão.\r\nColeta de materiais para exames.\r\nInstalação e manutenção de oxigenoterapia.\r\nControle de glicemia capilar.\r\n\r\n✅ Auxiliar em exames e procedimentos\r\n\r\nPreparar pacientes para exames.\r\nAuxiliar médicos e enfermeiros durante procedimentos.\r\nOrganizar materiais e equipamentos.\r\n\r\n✅ Registrar informações no prontuário\r\n\r\nAnotar procedimentos realizados.\r\nRegistrar sinais vitais e intercorrências.\r\nComunicar alterações no estado do paciente ao enfermeiro.\r\n\r\n✅ Atuar em situações de urgência e emergência\r\n\r\nPrestar primeiros cuidados.\r\nAuxiliar em reanimação cardiopulmonar (RCP).\r\nPreparar materiais e medicamentos de emergência.\r\n\r\n✅ Controlar materiais e equipamentos\r\n\r\nConferir estoque de materiais.\r\nOrganizar medicamentos e equipamentos.\r\nSolicitar reposições quando necessário.\r\nImportância do Técnico de Enfermagem\r\n\r\nO técnico de enfermagem é um dos profissionais que permanece mais tempo junto ao paciente, observando sua evolução, identificando alterações clínicas e contribuindo para uma assistência segura, humanizada e de qualidade.",
    "curso_formacao": "Atualmente trabalho como enfermeiro no pronto socorro do Hospital municipal de ITAPIRA SP",
    "instituicao_ensino": "Pós-graduação",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "POS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL",
    "caracteristicas": "Excel, Word, Informática, Segurança do trabalho",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, São Paulo ,Mogi Guaçu, São João da Boa Vista",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Segurança do Trabalho",
    "curriculo_texto": "Áreas de interesse: Segurança do Trabalho. Profissional com experiência como enfermeiro do trabalho na empresa Kohler Produtos para cozinha e banheiros, com 5 a 10 anos na função. Vivência em Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.. Conhecimentos em Excel, Word, Informática, Segurança do trabalho. Qualificações: POS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança."
  },
  {
    "id": "CV-1788529918792-isaias-maximiano-isaiasandradas-gmail-co",
    "submittedAt": "04/09/2026, 10:51",
    "nome_completo": "Isaias Maximiano",
    "whatsapp": "35992044693",
    "email": "isaiasandradas@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 43,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "04/09/2026, 10:51",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) da Qualidade",
      "Técnico(a)",
      "Líder / Encarregado(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Líder de produção",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Liderar equipe, ajudar a empresa a entrega as metas prevista, programar férias, ler e preencher relatórios , manter 5s do setor",
    "ferramentas_ultima_experiencia": "Esmaltação manual e esmaltação robotizada",
    "areas_ultima_experiencia": [
      "Produção / Operações"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Cerâmica Vila Rica",
        "cargo": "Esmaltador Senior",
        "periodo": "14 anos",
        "atividades": "Aplicar esmalte com pistola de alta pressão"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Técnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,",
    "caracteristicas": "Excel, Word, Informática, Vendas, Produção, Qualidade",
    "lideranca": "Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas ou região",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Qualidade, Administrativo, Atendimento / Recepção, Liderança / Gestão. Profissional com experiência como Líder de produção na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe, ajudar a empresa a entrega as metas prevista, programar férias, ler e preencher relatórios , manter 5s do setor. Conhecimentos em Excel, Word, Informática, Vendas, Produção, Qualidade. Qualificações: Técnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,. Características profissionais declaradas: Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788531683730-samuel-maximiano-samuelandradas94-gmail-",
    "submittedAt": "04/09/2026, 11:21",
    "nome_completo": "Samuel Maximiano",
    "whatsapp": "35997341431",
    "email": "samuelandradas94@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 20,
    "cnh": "A",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "04/09/2026, 11:21",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção",
      "Auxiliar de Logística",
      "Estoquista / Almoxarife",
      "Auxiliar / Assistente Contábil / Fiscal",
      "Comprador(a) / Suprimentos"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Trocador de materiais para produção",
    "tempo_ultima_funcao": "Menos de 1 ano",
    "atividades_ultima_experiencia": "Trocar ferramentas e objetos conforme preciso, delimitar trocas desnecessárias. Organizar itens em almoxarifado.",
    "ferramentas_ultima_experiencia": "Nenhum",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Serviços Gerais / Apoio"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Ajudante de produção",
        "periodo": "Julho/2025 a Junho/2026",
        "atividades": "Limpeza geral de setor, levar e trazer peças de cerâmica para fundidores, ajuda na produção manual quando necessário."
      },
      {
        "empresa": "Uniforte Supermercados",
        "cargo": "Repositor de mercadorias",
        "periodo": "Abril/2024 a Julho/2025"
      },
      {
        "empresa": "Organizar e repor mercadorias nas prateleiras, organizar paletes de produtos, checar e anotar data de validade, limpeza geral em prateleiras.",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Nivel de computação médio, e inglês médio.",
    "caracteristicas": "Informática",
    "lideranca": "Organizado(a), Proativo(a), Comprometido(a), Agilidade, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Motorista / Transporte, Contábil / Fiscal, Atendimento / Recepção, Serviços Gerais / Apoio. Profissional com experiência como Trocador de materiais para produção na empresa Kohler, com menos de 1 ano na função. Vivência em Trocar ferramentas e objetos conforme preciso, delimitar trocas desnecessárias. Organizar itens em almoxarifado.. Conhecimentos em Informática. Qualificações: Nivel de computação médio, e inglês médio.. Características profissionais declaradas: Organizado(a), Proativo(a), Comprometido(a), Agilidade, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788733636784-jaqueline-aparecida-da-silva-jaquefisilv",
    "submittedAt": "06/09/2026, 19:27",
    "nome_completo": "Jaqueline Aparecida da Silva",
    "whatsapp": "35998156573",
    "email": "jaquefisilva@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 42,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "06/09/2026, 19:27",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar de Logística",
      "Estoquista / Almoxarife",
      "Separador(a) / Conferente",
      "Auxiliar / Inspetor(a) da Qualidade",
      "Auxiliar / Assistente Administrativo",
      "Técnico(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Tecnico da laboratorio",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Analista fisico quimica de materias prima\r\nControle de insumo e estoque\r\nDesenvolvimento de materias prima\r\nControle de qualidade de materia prima\r\nResponsável pela implementação do 5s no setor\r\nPreenchimento de relatorio",
    "ferramentas_ultima_experiencia": "Sedigrafo\r\nGemini-ASE\r\nCentrifuga\r\nEspectofotometro\r\nPhmetro\r\nPaquimetro\r\nEstufas\r\nCondutivimetro\r\nAgitadores",
    "areas_ultima_experiencia": [
      "Qualidade",
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Ministerio da Agricultura-Laboratorio de analise de bebidas",
        "cargo": "Analista de laboratorio",
        "periodo": "2003-2008",
        "atividades": "Analise laboratorias por densilaçao, densidade e cromatografia"
      },
      {
        "empresa": "Supermercado Big Bom",
        "cargo": "Operadora de caixa e recebimento",
        "periodo": "2008-2012"
      },
      {
        "empresa": "Atendimento ao cliente \r\nRotinas financeiras\r\nRecebimento de mercadorias",
        "cargo": "Laboratorio Analitico LA Teixeira",
        "periodo": "Analista de laboratorio"
      }
    ],
    "experiencias_adicionais": "2013-2023",
    "escolaridade": "Realização de analise fisico-quimica em minerios\r\nAnalise de fertilizante\r\nPreparação e padronização de soluções",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Tecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura",
    "caracteristicas": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas , Poços de Caldas, Espirito Santo do Pinhal",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Tecnologia / TI",
    "curriculo_texto": "Áreas de interesse: Tecnologia / TI, Logística / Estoque / Expedição, Qualidade, Atendimento / Recepção, Engenharia / Técnico. Profissional com experiência como Tecnico da laboratorio na empresa Kohler, com 2 a 5 anos na função. Vivência em Analista fisico quimica de materias prima\r\nControle de insumo e estoque\r\nDesenvolvimento de materias prima\r\nControle de qualidade de materia prima\r\nResponsável pela implementação do 5s no setor\r\nPreenchimento de relatorio. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade. Qualificações: Tecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1788803100960-claudinei-candido-claudineic100-hotmail-",
    "submittedAt": "07/09/2026, 14:45",
    "nome_completo": "Claudinei Candido",
    "whatsapp": "35999125503",
    "email": "claudineic100@hotmail.con",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 36,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "07/09/2026, 14:45",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Inspetor(a) da Qualidade",
      "Técnico(a) da Qualidade",
      "Analista Administrativo",
      "Líder / Encarregado(a)",
      "Supervisor(a) / Coordenador(a)",
      "Gerente"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Supervisor de Produção",
    "tempo_ultima_funcao": "Mais de 10 anos",
    "atividades_ultima_experiencia": "Gestão de Pessoas \r\nGarantir segurança minha e do meu time.\r\nGarantir qualidade.\r\nGarantir entregas.\r\nGarantir baixo custos.\r\nDesenvolvimento de pessoas.\r\nResolução de problemas.",
    "ferramentas_ultima_experiencia": "Excel, Word, Power Point, visualização Power Bi, TPM, resolução de defeitos VDEP, 5s, Lean, ferramentas de qualidade.",
    "areas_ultima_experiencia": [
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Não",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "Inglês",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Nr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.",
    "caracteristicas": "Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo",
    "lideranca": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, Santo Antônio do Jardim, Espírito Santo Pinhal ( essa região atendendo maus cidades)",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Liderança / Gestão",
    "curriculo_texto": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Administrativo, Engenharia / Técnico. Profissional com experiência como Supervisor de Produção na empresa Kohler, com mais de 10 anos na função. Vivência em Gestão de Pessoas \r\nGarantir segurança minha e do meu time.\r\nGarantir qualidade.\r\nGarantir entregas.\r\nGarantir baixo custos.\r\nDesenvolvimento de pessoas.\r\nResolução de problemas.. Conhecimentos em Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo. Qualificações: Nr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788851926073-eder-candido-edercandido20166-gmail-com-",
    "submittedAt": "08/09/2026, 04:18",
    "nome_completo": "EDER CANDIDO",
    "whatsapp": "35999441309",
    "email": "edercandido20166@gmail.com",
    "cidade": "Poços de Caldas",
    "estado": "MG",
    "idade": 44,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "08/09/2026, 04:18",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Soldador(a) / Montador(a)",
      "Motorista / Entregador(a)",
      "Mecânico(a) de Manutenção"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler produtos para cozinha e banheiros",
    "ultimo_cargo": "Técnico mecânico jr",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Manutenção preventiva solda e serralheria",
    "ferramentas_ultima_experiencia": "Ferramentas manuais lixadeira máquina de solda em geral",
    "areas_ultima_experiencia": [
      "Manutenção Mecânica"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Técnico",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Solda mig eletroldo e tig tecido mecânico",
    "caracteristicas": "Manutenção, Mecânica",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Poços de caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Manutenção Mecânica",
    "curriculo_texto": "Áreas de interesse: Manutenção Mecânica, Produção / Operações, Motorista / Transporte. Profissional com experiência como Técnico mecânico jr na empresa Kohler produtos para cozinha e banheiros, com 2 a 5 anos na função. Vivência em Manutenção preventiva solda e serralheria. Conhecimentos em Manutenção, Mecânica. Qualificações: Solda mig eletroldo e tig tecido mecânico. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender."
  },
  {
    "id": "CV-1788896465825-joao-pedro-ferreira-ferrjp77-gmail-com-3",
    "submittedAt": "08/09/2026, 16:41",
    "nome_completo": "João Pedro Ferreira",
    "whatsapp": "35991253871",
    "email": "ferrjp77@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 28,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "08/09/2026, 16:41",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Inspetor(a) da Qualidade",
      "Técnico(a) da Qualidade",
      "Suporte / TI",
      "Técnico(a)",
      "Engenheiro(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "KOHLER",
    "ultimo_cargo": "Inspector",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Trabalho no desenvolvimento de novos produtos (NPI). No dia a dia eu acompanho as peças novas do começo ao fim: analiso o processo de fabricação, faço os testes funcionais e dimensionais pra ver se a peça atende às especificações e às tolerâncias de engenharia, e cuido de toda a documentação técnica (VDM), incluindo as fotos técnicas dos produtos. Já acompanhei o desenvolvimento de mais de 8 produtos novos, além do suporte a vários outros.\r\n\r\nAlém disso, sou o responsável pela parte digital do setor. A informação de produção se perdia e não tinha controle nenhum, então criei do zero um sistema de dashboards que hoje monitora tudo: consumo de matéria-prima, fundição, produtividade, custos, qualidade e entregas. Montei o banco de dados que alimenta o sistema, fiz os painéis de análise de materiais, implantei o lançamento de horas e automatizei vários controles que antes eram feitos na mão. Hoje a gerência e o PCP acompanham a operação em tempo real por ele.",
    "ferramentas_ultima_experiencia": "Instrumentos de medição para os testes dimensionais das peças e equipamentos para os testes funcionais dos produtos. Na parte de sistemas, trabalho todo dia com Power BI, Excel avançado, banco de dados e dashboards em HTML, além de programar em Python para automações e análises, e usar ferramentas de inteligência artificial no apoio ao trabalho. Também uso equipamento fotográfico para o registro técnico dos produtos novos.\r\n\r\nDa época em que trabalhei na fundição da mesma empresa, tenho experiência com moldes e formas para louça sanitária e sou operador de empilhadeira certificado.",
    "areas_ultima_experiencia": [
      "Qualidade",
      "Tecnologia / TI",
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Sandrini",
        "cargo": "Marketing e E-commerce",
        "periodo": "2022 até 2023",
        "atividades": "Na Sandrini eu trabalhava com marketing e vendas online. A empresa vendia roupas, tênis e acessórios, e eu cuidava dos anúncios nos marketplaces, principalmente no Mercado Livre. Fazia as fotos dos produtos e o tratamento das imagens pra deixar tudo apresentável nos anúncios, e também atendia os clientes, tirando dúvidas e acompanhando a venda do começo ao fim."
      },
      {
        "empresa": "KOHLER",
        "cargo": "Motorista de empilhadeira",
        "periodo": "2020 a 2022"
      },
      {
        "empresa": "Eu trabalhava na fundição, produzindo os moldes e as formas usadas na fabricação das peças de louça sanitária. Cuidava da preparação e do vazamento da massa nos moldes, acompanhando como ela se comportava até a peça ficar pronta. Foi ali que aprendi o processo cerâmico na prática.\r\n\r\nTambém era operador de empilhadeira certificado. Fazia a movimentação de materiais dentro da fábrica, o descarregamento das cargas que chegavam e a organização do estoque, sempre seguindo as normas de segurança na operação do equipamento.",
        "cargo": "Aptiv (hoje Versigent)",
        "periodo": "Operador de Produção e Máquinas"
      }
    ],
    "experiencias_adicionais": "2017 a 2020",
    "escolaridade": "Eu trabalhava na linha de produção de chicotes elétricos automotivos, operando máquina de solda ultrassônica nos circuitos. Seguia os procedimentos padronizados e as normas de qualidade e segurança da empresa, garantindo que as peças saíssem dentro do especificado.\r\n\r\nTambém atuava como Brigadista, com treinamento em primeiros socorros e resposta a emergências dentro da fábrica.",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "Engenharia de computação",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Excel Básico, Intermediário e Avançado (Fundação Bradesco); Power BI (Fundação Bradesco); Python (Fundação Bradesco); Operador de Empilhadeira; Brigadista e Primeiros Socorros; Inglês em andamento (KNN Idiomas). Cursando Bacharelado em Engenharia da Computação na UNIPINHAL, com conclusão prevista para 2026.",
    "caracteristicas": "Excel, Word, Informática, Vendas, Produção, Operação de máquinas, Qualidade, Outro: •\tPower BI \t•\tExcel (avançado) \t•\tWord \t•\tPowerPoint \t•\tPython \t•\tHTML \t•\tJava \t•\tPHP \t•\tAssembly \t•\tArduino (IDE) \t•\tBanco de dados \t•\tFerramentas de Inteligência Artificial \t•\tSoftwares de edição e tratamento de imagens",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas, Poços de Caldas, São João da Boa Vista, Espírito Santo do Pinhal, Mogi Mirim e Mogi Guaçu",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Tecnologia / TI",
    "curriculo_texto": "Áreas de interesse: Tecnologia / TI, Qualidade, Administrativo, Engenharia / Técnico. Profissional com experiência como Inspector na empresa KOHLER, com 2 a 5 anos na função. Vivência em Trabalho no desenvolvimento de novos produtos (NPI). No dia a dia eu acompanho as peças novas do começo ao fim: analiso o processo de fabricação, faço os testes funcionais e dimensionais pra ver se a peça atende às especificações e às tolerâncias de engenharia, e cuido de toda a documentação técnica (VDM), incluindo as fotos técnicas dos produtos. Já acompanhei o desenvolvimento de mais de 8 produtos novos, além do suporte a vários outros.\r\n\r\nAlém disso, sou o responsável pela parte digital do setor. A informação de produção se perdia e não tinha controle nenhum, então criei do zero um sistema de dashboards que hoje monitora tudo: consumo de matéria-prima, fundição, produtividade, custos, qualidade e entregas. Montei o banco de dados que alimenta o sistema, fiz os painéis de análise de materiais, implantei o lançamento de horas e automatizei vários controles que antes eram feitos na mão. Hoje a gerência e o PCP acompanham a operação em tempo real por ele.. Conhecimentos em Excel, Word, Informática, Vendas, Produção, Operação de máquinas, Qualidade, Outro: •\tPower BI \t•\tExcel (avançado) \t•\tWord \t•\tPowerPoint \t•\tPython \t•\tHTML \t•\tJava \t•\tPHP \t•\tAssembly \t•\tArduino (IDE) \t•\tBanco de dados \t•\tFerramentas de Inteligência Artificial \t•\tSoftwares de edição e tratamento de imagens. Qualificações: Excel Básico, Intermediário e Avançado (Fundação Bradesco); Power BI (Fundação Bradesco); Python (Fundação Bradesco); Operador de Empilhadeira; Brigadista e Primeiros Socorros; Inglês em andamento (KNN Idiomas). Cursando Bacharelado em Engenharia da Computação na UNIPINHAL, com conclusão prevista para 2026.. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788897123967-vitoria-oliveira-de-melo-vitoriamelo29-h",
    "submittedAt": "08/09/2026, 16:52",
    "nome_completo": "Vitoria Oliveira de Melo",
    "whatsapp": "11939188558",
    "email": "vitoriamelo29@hotmail.com",
    "cidade": "São Paulo",
    "estado": "SP",
    "idade": 25,
    "cnh": "AB",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "08/09/2026, 16:52",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Analista Administrativo",
      "Analista Financeiro",
      "Analista Contábil / Fiscal",
      "Supervisor(a) / Coordenador(a)",
      "Gerente"
    ],
    "tipo_trabalho": "Híbrido",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler CO.",
    "ultimo_cargo": "Analista de Controladoria Financeira",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "Atuação em Controladoria Financeira, com budget e forecast, análise\r\nde custos, despesas e orçado x realizado, suporte ao fechamento\r\ncontábil, conciliações bancárias, fluxo de caixa, pagamentos de\r\ncâmbio, análise de crédito, contas a pagar, lançamento de\r\naplicações financeiras e rendimentos, KPIs e controles internos.",
    "ferramentas_ultima_experiencia": "ERP SAP FI e Excel avançado.",
    "areas_ultima_experiencia": [
      "Administrativo",
      "Financeiro",
      "Contábil / Fiscal"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "MARINA LINHARES ARQUITETURA",
        "cargo": "Assistente Administrativo | Analista Administrativo Júnior | Analista Financeiro Pleno",
        "periodo": "04/2022 a 01/2025",
        "atividades": "Planejamento financeiro, contas a pagar e receber, conciliação\r\nbancária em ERP, emissão e controle de NF-e/NFS-e, faturamento,\r\nforecast, controle de estoque, compras, negociação com\r\nfornecedores e administração de benefícios."
      },
      {
        "empresa": "RSM BRASIL AUDITORES INDEPENDENTES",
        "cargo": "Assistente de Auditoria II",
        "periodo": "12/2021 a 03/2022"
      },
      {
        "empresa": "Atualização da matriz de riscos, acompanhamento de planos de\r\nação, elaboração de relatórios e registros no sistema Caseware,\r\napoiando processos de auditoria interna.",
        "cargo": "RSM BRASIL AUDITORES INDEPENDENTES",
        "periodo": "Assistente Administrativo"
      }
    ],
    "experiencias_adicionais": "07/2021 a 12/2021",
    "escolaridade": "Elaboração de planilhas e relatórios, formatação de documentos\r\nde auditoria e apoio às rotinas administrativas e financeiras da\r\nequipe.",
    "curso_formacao": "Auxiliar Administrativa\r\nDODUDA GASTRONOMIA 01/2021 a 07/2021\r\nFluxo de caixa, compras, estoque, emissão e lançamento de notas\r\nfiscais no sistema Colibri, conciliação bancária, admissão e\r\ndemissão de funcionários, controle de ponto, vale alimentação,\r\nvale transporte e responsável pela organização de equipes,\r\nbuscando inovação e melhorias para otimização de processos.",
    "instituicao_ensino": "Pós-graduação",
    "cursos_qualificacoes": "Controladoria e Finanças Corporativas",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Gestão Administrativa\r\nInglês\r\nGestão Financeira\r\nInteligência Artificial\r\nExcel Avançado",
    "caracteristicas": "Excel, Word, Informática, Sistemas ERP, Atendimento ao cliente, Vendas, Administrativo, Financeiro, Recursos Humanos, Contabilidade, Compras",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "São Paulo e Santo André",
    "pretensao_salarial": "Comercial, Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Financeiro",
    "curriculo_texto": "Áreas de interesse: Financeiro, Administrativo, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos, Marketing / Comunicação. Profissional com experiência como Analista de Controladoria Financeira na empresa Kohler CO., com 1 a 2 anos na função. Vivência em Atuação em Controladoria Financeira, com budget e forecast, análise\r\nde custos, despesas e orçado x realizado, suporte ao fechamento\r\ncontábil, conciliações bancárias, fluxo de caixa, pagamentos de\r\ncâmbio, análise de crédito, contas a pagar, lançamento de\r\naplicações financeiras e rendimentos, KPIs e controles internos.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Atendimento ao cliente, Vendas, Administrativo, Financeiro, Recursos Humanos, Contabilidade, Compras. Qualificações: Gestão Administrativa\r\nInglês\r\nGestão Financeira\r\nInteligência Artificial\r\nExcel Avançado. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1788959808174-henrique-terciotti-menezello-henrique-me",
    "submittedAt": "09/09/2026, 10:16",
    "nome_completo": "Henrique Terciotti Menezello",
    "whatsapp": "19991630498",
    "email": "henrique.menezello@gmail.com",
    "cidade": "Espírito Santo do Pinhal",
    "estado": "SP",
    "idade": 28,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "09/09/2026, 10:16",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Engenheiro(a)",
      "Supervisor(a) / Coordenador(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Engenheiro Pleno de Desenvolvimento de Novos Produtos",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Desenvolver protótipo de novos produtos.\r\nAnalisar ajustes e melhorias de processo/produto.\r\nRealizar testes funcionais e dimensionais de acordo com desenho técnico e normas.\r\nImplementar o produto novo na produção e treinar os colaboradores em todas as etapas do processo.\r\nDesenvolver e controlar indicadores e dashboards relacionados a qualidade, produtividade e custo.\r\nCriação de documentos como SOP, apresentações de resultados e ajustes.\r\nCondução de reunião para alinhamento de cronograma.",
    "ferramentas_ultima_experiencia": "Eu utilizava excel e Power point. Em alguns casos específicos, ultizava pastas do sharepoint como base de dados para criar dashboards no Power BI.\r\nFerramentas como CAD 2D e Solidwork utilizei muito pouco, mas tenho uma base para me desenvolver.",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Segurança do Trabalho",
      "Engenharia / Técnico",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Aptiv",
        "cargo": "Estagiário Manutenção",
        "periodo": "Jan/2018 - Fev/2019",
        "atividades": "Controle de inventário dos maquinários.\r\nCriação de um Excel para controle e tomada de decisões relacionado ao MTBF e MTTR.\r\nControle do inventário e compra de materiais.\r\nGerenciamento do cronograma de manutenções preventivas e corretivas."
      },
      {
        "empresa": "Autocam",
        "cargo": "Estagiário de Qualidade",
        "periodo": "Fev/2019 - Out/2020"
      },
      {
        "empresa": "Análises de processo e atividades relacionadas a controle da qualidade.\r\nElaboração de alertas de qualidade e checklist de produção.\r\nEstudos de Análise do Sistema de Medição (Gage R&R).\r\nParticipei de uma fase do PPAP e construção do FMEA de um novo produto para o cliente BorgWarner.\r\nControle de qualidade de recebimento.",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Superior completo",
    "cursos_qualificacoes": "Green Belt e Black Belt",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "Green Belt e Black Belt Belt andamento",
    "caracteristicas": "Excel, Word, Produção, Manutenção, Qualidade, Administrativo, Outro: Engenharia de processos e melhoria contínua",
    "lideranca": "Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Em um raio de até 100km de Espírito Santo do Pinhal",
    "pretensao_salarial": "Comercial",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro Pleno de Desenvolvimento de Novos Produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Desenvolver protótipo de novos produtos.\r\nAnalisar ajustes e melhorias de processo/produto.\r\nRealizar testes funcionais e dimensionais de acordo com desenho técnico e normas.\r\nImplementar o produto novo na produção e treinar os colaboradores em todas as etapas do processo.\r\nDesenvolver e controlar indicadores e dashboards relacionados a qualidade, produtividade e custo.\r\nCriação de documentos como SOP, apresentações de resultados e ajustes.\r\nCondução de reunião para alinhamento de cronograma.. Conhecimentos em Excel, Word, Produção, Manutenção, Qualidade, Administrativo, Outro: Engenharia de processos e melhoria contínua. Qualificações: Green Belt e Black Belt Belt andamento. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1789061579967-osmar-jose-carneiro-osmartio-26-gmail-co",
    "submittedAt": "10/09/2026, 14:32",
    "nome_completo": "Osmar José carneiro",
    "whatsapp": "35997605531",
    "email": "osmartio.26@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 38,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "10/09/2026, 14:32",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar / Ajudante de Produção",
      "Operador(a) de Produção"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "KOHLER PRODUTOS PARA COZINHAS E BANHEIROS LTDA",
    "ultimo_cargo": "Fundidor sênior",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Produção de peças e revisar peças garantindo qualidade das mesmas e liderar equipe na área de produção",
    "ferramentas_ultima_experiencia": "",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Qualidade",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "HIGIDENT DO BRASIL IND. E COM. LTDA",
        "cargo": "Alimentador de linha de produção",
        "periodo": "Maio/ 2011 a maio/ 2015",
        "atividades": "Alimentação de linha de produção e operador de máquinas"
      },
      {
        "empresa": "PETCOM TELECOMUNICAÇÕES E ENGENHARIA LTDA",
        "cargo": "Demolidor de edificações",
        "periodo": "Janeiro/ 2011 a abrir/ 2011"
      },
      {
        "empresa": "Ajudar estalar cabos de rede e câmeras de segurança",
        "cargo": "",
        "periodo": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Produção",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas, Poços de Caldas, São João da Boa Vista, Santo Antônio do jardim",
    "pretensao_salarial": "1º turno, 2º turno, 3º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações. Profissional com experiência como Fundidor sênior na empresa KOHLER PRODUTOS PARA COZINHAS E BANHEIROS LTDA, com 5 a 10 anos na função. Vivência em Produção de peças e revisar peças garantindo qualidade das mesmas e liderar equipe na área de produção. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender."
  },
  {
    "id": "CV-1789067018459-melissa-de-carvalho-reimer-melissa-reime",
    "submittedAt": "10/09/2026, 16:03",
    "nome_completo": "Melissa de Carvalho Reimer",
    "whatsapp": "19995017509",
    "email": "melissa.reimer7bb@gmail.com",
    "cidade": "Poços de caldas",
    "estado": "MG",
    "idade": 23,
    "cnh": "B",
    "veiculo_proprio": "Não",
    "area_principal_interesse": "10/09/2026, 16:03",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Técnico(a) de Segurança do Trabalho",
      "Auxiliar / Assistente Administrativo",
      "Analista Administrativo",
      "Técnico(a)",
      "Engenheiro(a)"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Não",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Técnica de processos",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "- Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.",
    "ferramentas_ultima_experiencia": "Sap, Excel, power bi, e pro, power point",
    "areas_ultima_experiencia": [
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Assistente de processos",
        "periodo": "Set/2025 a Jun/26",
        "atividades": "• Desenvolvimento e implementação de pré-controles e monitoramentos para a área de Esmaltação, acompanhando variáveis críticas do processo, antecipando desvios e apoiando a tomada de decisão baseada em dados.\r\n• Elaboração, revisão e atualização de SOPs (Procedimentos Operacionais Padrão), garantindo a padronização dos processos e conformidade operacional.\r\n• Gestão do OPEX de dois setores (Esmaltação e forno), realizando controle orçamentário, análise de custos e acompanhamento das previsões de fechamento mensal.\r\n• Atuação estratégica em Melhoria Contínua, promovendo a otimização de processos industriais com foco em eficiência, qualidade e produtividade.\r\n• Análise e otimização de fluxos de trabalho, identificando oportunidades para redução de desperdícios e aumento da performance operacional.\r\n• Monitoramento e gestão de KPIs, utilizando análise de dados (Excel e Power BI) para apoiar a tomada de decisão e direcionar planos de ação.\r\n• Desenvolvimento e implementação de melhorias voltadas à resolução de problemas e aumento da eficiência dos processos produtivos.\r\n• Elaboração de apresentações gerenciais com indicadores de produtividade, qualidade e yield da planta, apoiando o alinhamento estratégico da liderança.\r\n• Participação ativa em iniciativas de segurança, ergonomia, 5S e melhoria contínua, fortalecendo a cultura de excelência operacional"
      },
      {
        "empresa": "Kohler",
        "cargo": "Estagiaria em engenharia de processos",
        "periodo": "Ago/25 a ser/25"
      },
      {
        "empresa": "Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos.",
        "cargo": "Kohler Brazil",
        "periodo": "Estagiária de almoxarifado"
      }
    ],
    "experiencias_adicionais": "Abr/2024 a ago/25",
    "escolaridade": "• Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos.",
    "curso_formacao": "",
    "instituicao_ensino": "Superior incompleto",
    "cursos_qualificacoes": "Engenharia de produção",
    "conhecimentos": "",
    "maquinas_equipamentos": "Excel intermediário (Tetra educação) • Power Bi básico (tetra)• Empreendedorismo para o Mercado Financeiro (FGV) • Logística (FGV) • Liderança Transpessoal (PUC)",
    "caracteristicas": "Excel, Word, Produção, Segurança do trabalho",
    "lideranca": "Responsável, Proativo(a), Comunicativo(a), Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Poços de Caldas",
    "pretensao_salarial": "Comercial, 1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Engenharia / Técnico",
    "curriculo_texto": "Áreas de interesse: Engenharia / Técnico, Qualidade, Segurança do Trabalho, Administrativo, Liderança / Gestão. Profissional com experiência como Técnica de processos na empresa Kohler, com 1 a 2 anos na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Produção, Segurança do trabalho. Qualificações: Excel intermediário (Tetra educação) • Power Bi básico (tetra)• Empreendedorismo para o Mercado Financeiro (FGV) • Logística (FGV) • Liderança Transpessoal (PUC). Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1789067201290-luiz-fernando-inocencio-luizinocencio-co",
    "submittedAt": "10/09/2026, 16:06",
    "nome_completo": "Luiz Fernando inocencio",
    "whatsapp": "19 9 9999 0407",
    "email": "Luizinocencio.com.br@gmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 42,
    "cnh": "Outra - A e D",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "10/09/2026, 16:06",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Máquina",
      "Estoquista / Almoxarife",
      "Separador(a) / Conferente",
      "Operador(a) de Empilhadeira",
      "Motorista / Entregador(a)",
      "Outro",
      "A disposição para trabalhar."
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Sim",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Líder fundição",
    "tempo_ultima_funcao": "5 a 10 anos",
    "atividades_ultima_experiencia": "Garantir os processos e qualidade e cuidando da parte de segurança no trabalho.",
    "ferramentas_ultima_experiencia": "",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Kohler",
        "cargo": "Líder",
        "periodo": "7 anos",
        "atividades": "Liderança e garantir processos e qualidade"
      },
      {
        "empresa": "Coca cola",
        "cargo": "Operador de empilhadeira e logística",
        "periodo": "6 anos"
      },
      {
        "empresa": "Operador de empilhadeira",
        "cargo": "Fiori",
        "periodo": "Fundidor"
      }
    ],
    "experiencias_adicionais": "7 anos",
    "escolaridade": "Produção",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "CURSOS E TREINAMENTOS\r\nLiderança Executiva — Engaja / Kohler Co.\r\nComunicação Efetiva — Vox2you\r\nPacote Office completo - Suporte Treinamentos",
    "caracteristicas": "Estoque, Logística, Operação de máquinas",
    "lideranca": "Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Produção / Operações",
    "curriculo_texto": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão, Agrícola / Campo. Profissional com experiência como Líder fundição na empresa Kohler, com 5 a 10 anos na função. Vivência em Garantir os processos e qualidade e cuidando da parte de segurança no trabalho.. Conhecimentos em Estoque, Logística, Operação de máquinas. Qualificações: CURSOS E TREINAMENTOS\r\nLiderança Executiva — Engaja / Kohler Co.\r\nComunicação Efetiva — Vox2you\r\nPacote Office completo - Suporte Treinamentos. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas, Bom relacionamento interpessoal."
  },
  {
    "id": "CV-1789168618396-ricardo-nastrini-prado-ricardonp2-hotmai",
    "submittedAt": "11/09/2026, 20:16",
    "nome_completo": "RICARDO NASTRINI PRADO",
    "whatsapp": "35991694772",
    "email": "ricardonp2@hotmail.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 39,
    "cnh": "AB",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "11/09/2026, 20:16",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Operador(a) de Empilhadeira",
      "Motorista / Entregador(a)",
      "Auxiliar / Inspetor(a) da Qualidade",
      "Técnico(a) da Qualidade",
      "Técnico(a)"
    ],
    "tipo_trabalho": "Indiferente",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Laboratorista 4",
    "tempo_ultima_funcao": "2 a 5 anos",
    "atividades_ultima_experiencia": "Reologia, acerto de massa e testes de qualidade",
    "ferramentas_ultima_experiencia": "Empilhadeira",
    "areas_ultima_experiencia": [
      "Engenharia / Técnico"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Icasa",
        "cargo": "Classificador",
        "periodo": "2 anos",
        "atividades": "Fazia todos os serviços do setor de classificação e retoque"
      },
      {
        "empresa": "Kohler",
        "cargo": "Laboratórista 4",
        "periodo": "2 anos e 9 meses"
      },
      {
        "empresa": "Reologia, acerto de massa, testes relacionados a massa e esmalte",
        "cargo": "Prysmian group",
        "periodo": "Ajudante de extrusora"
      }
    ],
    "experiencias_adicionais": "1 ano e 10 meses",
    "escolaridade": "Auxiliar o operador da extrusora nas funções inerentes a produção de capas plásticas em cabos de média e alta tensao",
    "curso_formacao": "",
    "instituicao_ensino": "Técnico",
    "cursos_qualificacoes": "",
    "conhecimentos": "Sim",
    "maquinas_equipamentos": "Nr12, nr35\r\nCurso válido para empilhadeira e bob cat pá carregadeira",
    "caracteristicas": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Operação de máquinas, Qualidade",
    "lideranca": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Facilidade para aprender, Facilidade para resolver problemas",
    "regiao_interesse": "Não",
    "disponibilidade_horario": "Andradas ou poços de Caldas",
    "pretensao_salarial": "Qualquer horário",
    "inicio_imediato": "",
    "resumo_profissional": "Qualidade",
    "curriculo_texto": "Áreas de interesse: Qualidade, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Administrativo, Engenharia / Técnico. Profissional com experiência como Laboratorista 4 na empresa Kohler, com 2 a 5 anos na função. Vivência em Reologia, acerto de massa e testes de qualidade. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Operação de máquinas, Qualidade. Qualificações: Nr12, nr35\r\nCurso válido para empilhadeira e bob cat pá carregadeira. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Facilidade para aprender, Facilidade para resolver problemas."
  },
  {
    "id": "CV-1789401982660-tatiane-silva-bento-tatianeb1-icloud-com",
    "submittedAt": "14/09/2026, 13:06",
    "nome_completo": "Tatiane Silva Bento",
    "whatsapp": "35984673006",
    "email": "tatianeb1@icloud.com",
    "cidade": "Andradas",
    "estado": "MG",
    "idade": 32,
    "cnh": "B",
    "veiculo_proprio": "Sim",
    "area_principal_interesse": "14/09/2026, 13:06",
    "areas_adicionais_interesse": [
      "LGPD-BancoTalentos-v1-2026-08-24"
    ],
    "funcoes_interesse": [
      "Auxiliar de Logística",
      "Auxiliar / Assistente Administrativo",
      "Representante Comercial",
      "Atendimento / Recepção"
    ],
    "tipo_trabalho": "Presencial",
    "disponibilidade_turnos": "Dependendo do horário",
    "ultima_empresa": "Kohler",
    "ultimo_cargo": "Assistente de almoxarifado",
    "tempo_ultima_funcao": "1 a 2 anos",
    "atividades_ultima_experiencia": "Abastecer o almoxarifado do meu setor, ajudar meu líder e conferir a quantidade dos produtos usados",
    "ferramentas_ultima_experiencia": "Instrumentos de medição e excel",
    "areas_ultima_experiencia": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Administrativo"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
      {
        "empresa": "Siamp",
        "cargo": "Produção e liderança",
        "periodo": "2 anos",
        "atividades": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "",
    "curso_formacao": "",
    "instituicao_ensino": "Médio completo",
    "cursos_qualificacoes": "",
    "conhecimentos": "Não",
    "maquinas_equipamentos": "",
    "caracteristicas": "Excel, Informática, Vendas, Produção",
    "lideranca": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Facilidade para aprender, Liderança, Agilidade, Foco em resultados",
    "regiao_interesse": "Sim",
    "disponibilidade_horario": "Andradas",
    "pretensao_salarial": "1º turno",
    "inicio_imediato": "",
    "resumo_profissional": "Logística / Estoque / Expedição",
    "curriculo_texto": "Áreas de interesse: Logística / Estoque / Expedição, Produção / Operações, Qualidade. Profissional com experiência como Assistente de almoxarifado na empresa Kohler, com 1 a 2 anos na função. Vivência em Abastecer o almoxarifado do meu setor, ajudar meu líder e conferir a quantidade dos produtos usados. Conhecimentos em Excel, Informática, Vendas, Produção. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Facilidade para aprender, Liderança, Agilidade, Foco em resultados."
  }
];
