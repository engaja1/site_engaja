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
  { id: "agricola_campo", name: "Agrícola / Campo", iconName: "Wheat", description: "Operações agrícolas, cultivo, manejo de campo e agronegócio." }
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
    "area_principal_interesse": "Administrativo",
    "areas_adicionais_interesse": [
      "Motorista / Transporte",
      "Qualidade",
      "Tecnologia / TI",
      "Agrícola / Campo"
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
    "escolaridade": "Técnico",
    "curso_formacao": "Administração e Agropecuária",
    "instituicao_ensino": "ETEC DR.CAROLINO DA MOTTA E SILVA",
    "cursos_qualificacoes": "Operador de empilhadeira",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal",
    "lideranca": "Não",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, Jundiaí",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "4.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo. Profissional com experiência como Matrizeiro na empresa Kohler, com 5 a 10 anos na função. Vivência em Fazer matrizes, ajustes de moldes de gesso.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria. Qualificações: Operador de empilhadeira. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal.",
    "curriculo_texto": "FELIX FERNANDO BERTOLI JUNIOR\nAndradas / MG\nWhatsApp: 35992129690 | E-mail: felix-ocat@hotmail.com\nCNH: Outra - A/D\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Empilhadeira, Motorista / Entregador(a), Técnico(a) da Qualidade, Auxiliar / Assistente Administrativo, Técnico(a), Outro, Matrizeiro\nÁreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo. Profissional com experiência como Matrizeiro na empresa Kohler, com 5 a 10 anos na função. Vivência em Fazer matrizes, ajustes de moldes de gesso.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria. Qualificações: Operador de empilhadeira. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Matrizeiro — Kohler (5 a 10 anos)\nPrincipais atividades: Fazer matrizes, ajustes de moldes de gesso.\nFerramentas/sistemas: Ferramentas de precisão, escalas, esquadros, paquímetros, altímetros, réguas, e ferramentas manuais feitas por mim.\n\n2. Classificador de café — Agropecuária Barbosa Netos (Set/2012 a julho/2018)\nPrincipais atividades: Classificar e degustar café, e um pouco na área administrativa também.\n\n3. Cuidar da saída e entradas de produtos — Refracon (Fev/2019 a abril/2020)\n\nFORMAÇÃO\nTécnico — Administração e Agropecuária — ETEC DR.CAROLINO DA MOTTA E SILVA\n\nCURSOS E QUALIFICAÇÕES\nOperador de empilhadeira\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição"
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
        "cargo": ""
      },
      {
        "empresa": "Avícola são Sebastião",
        "cargo": "Auxiliar de produção"
      },
      {
        "empresa": "Siamp Brasil industria",
        "cargo": "Auxiliar de produção na injeção plástica"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Médio completo",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Produção",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "lideranca": "Não",
    "regiao_interesse": "Poços de Caldas, espírito santo do Pinhal e Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Inspetora na empresa Kohler produtos para cozinhas e banheiros ltda, com 2 a 5 anos na função. Vivência em Esponja peça bacia. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.",
    "curriculo_texto": "ANA LUISA SANTOS DE JESUS DUTRA\nAndradas / MG\nWhatsApp: 35999620122 | E-mail: paollana.z.x@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Serviços Gerais, Outro\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Inspetora na empresa Kohler produtos para cozinhas e banheiros ltda, com 2 a 5 anos na função. Vivência em Esponja peça bacia. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Inspetora — Kohler produtos para cozinhas e banheiros ltda (2 a 5 anos)\nPrincipais atividades: Esponja peça bacia\nFerramentas/sistemas: Nenhum\n\n2. Aptiv\n\n3. Auxiliar de produção — Avícola são Sebastião\n\n4. Auxiliar de produção na injeção plástica — Siamp Brasil industria\n\nFORMAÇÃO\nMédio completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "Agosto 2012 a junho 2022"
      },
      {
        "empresa": "Icasa",
        "cargo": "Estagiário",
        "periodo": "2 meses ( 2018)"
      },
      {
        "empresa": "LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)",
        "cargo": "Estagiário",
        "atividades": "Métodos e Procedimentos:\r\n\r\nAcidez (Total, Volátil e Fixa);\r\nGrau Alcoólico Real;\r\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\r\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\r\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\r\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\r\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia Química",
    "instituicao_ensino": "UNIFAE",
    "cursos_qualificacoes": "NR 12\r\nNR 35\r\nExcel Avançado\r\nLean",
    "conhecimentos": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "maquinas_equipamentos": "",
    "caracteristicas": "Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Líder de Laboratório\r\nLíder de Produção de Massa\r\nLíder de Produção de Esmalte",
    "regiao_interesse": "",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "5.800,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\r\nNR 35\r\nExcel Avançado\r\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "RAFAEL FRIZO ALVES\nAndradas / MG\nWhatsApp: 35991592707 | E-mail: rafaelfrizo@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\r\nNR 35\r\nExcel Avançado\r\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de Processos Sênior — Kohler (2 a 5 anos)\nPrincipais atividades: Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.\nFerramentas/sistemas: Dilatômetro\r\nSedígrafo\r\nPorosímetro\r\nAnalisador de Área Superficial BET\r\nEspectrofotômetro\r\nGlossímetro\r\nViscosímetro\r\nAgitadores\r\nDiluidores\r\nMoinhos de Massa e Esmalte\r\nEmpilhadeira\r\nExcel Avançado\r\nAplicação de ferramentas Lean e 5S\r\nAuditorias de Processo\r\nInglês Intermediário\n\n2. Operador de Guilhotina — TIKTak Indústria Gráfica (Agosto 2012 a junho 2022)\n\n3. Estagiário — Icasa (2 meses ( 2018))\n\n4. Estagiário — LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)\nPrincipais atividades: Métodos e Procedimentos:\r\n\r\nAcidez (Total, Volátil e Fixa);\r\nGrau Alcoólico Real;\r\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\r\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\r\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\r\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\r\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados.\n\nFORMAÇÃO\nSuperior completo — Engenharia Química — UNIFAE\n\nCURSOS E QUALIFICAÇÕES\nNR 12\r\nNR 35\r\nExcel Avançado\r\nLean\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Agrícola / Campo"
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
        "cargo": "Fundidor de moldes"
      },
      {
        "empresa": "Trabalhei em uma adega de bebidas",
        "cargo": "Entregador"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Fundamental completo",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Estoque, Produção",
    "maquinas_equipamentos": "Pontes rolantes",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "lideranca": "Não",
    "regiao_interesse": "Andradas ou Poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "1.621 a 3.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Agrícola / Campo. Profissional com experiência como Fundidor de moldes na empresa Kohler Produtos para cozinhas e Banheiros LTDA, com 5 a 10 anos na função. Vivência em Fundir moldes. Conhecimentos em Estoque, Produção. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.",
    "curriculo_texto": "ADILSON ROBERTO DE SOUSA\nAndradas / MG\nWhatsApp: 35 933009513 | E-mail: adilsonrobertodesousa@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) / Trabalhador(a) Rural\nÁreas de interesse: Produção / Operações, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Agrícola / Campo. Profissional com experiência como Fundidor de moldes na empresa Kohler Produtos para cozinhas e Banheiros LTDA, com 5 a 10 anos na função. Vivência em Fundir moldes. Conhecimentos em Estoque, Produção. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundidor de moldes — Kohler Produtos para cozinhas e Banheiros LTDA (5 a 10 anos)\nPrincipais atividades: Fundir moldes\nFerramentas/sistemas: PONTES ROLANTES\n\n2. Fundidor de moldes — Trabalhei por 18 anos na Icasa fábrica de louça sanitária\n\n3. Entregador — Trabalhei em uma adega de bebidas\n\nFORMAÇÃO\nFundamental completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nEstoque, Produção\nMáquinas/equipamentos: Pontes rolantes\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Administrativo",
      "Liderança / Gestão"
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
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia mecânica",
    "instituicao_ensino": "Faculdade Pitagoras",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "lideranca": "No cargo de eng pleno, precisava liderar meu projeto, com isso precisava liderar as pessoas envolvidas nesse projeto para que eu conseguisse entregar dentro do prazo e com isso foi 4anos",
    "regiao_interesse": "Poços de calda, Campinas, jundiai, andradas",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "6.850",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.",
    "curriculo_texto": "JOEL RODRIGUES DA COSTA\nPoços de caldas / MG\nWhatsApp: 35997682664 | E-mail: joeljrcrodrigues12@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a), Outro, Projetista\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Eng pleno de desenvolvimento de novos produtos — Kohler (5 a 10 anos)\nPrincipais atividades: Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d\nFerramentas/sistemas: Creo parametric/ inventor/ autocad para desenhos 2d e 3d\r\nPFMEA\r\nLean\r\n5s\n\nFORMAÇÃO\nSuperior completo — Engenharia mecânica — Faculdade Pitagoras\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Financeiro",
      "Compras / Suprimentos",
      "Tecnologia / TI",
      "Liderança / Gestão"
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
    "escolaridade": "Pós-graduação",
    "curso_formacao": "MBA em Gestão de Projetos",
    "instituicao_ensino": "USP",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "Líder das área de Projetos e área de Inovação Digital. Por 5 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, São João da Boa Vista, Mogi Guaçu, Campinas, Pouso Alegre, Limeira, Rio Claro, Mogi Mirim",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "9500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "JOÃO OTÁVIO BERNARDES TORRES\nAndradas / MG\nWhatsApp: 35988013580 | E-mail: joao.b_torres@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAnalista Financeiro, Comprador(a) / Suprimentos, Técnico(a), Engenheiro(a), Supervisor(a) / Coordenador(a), Gerente\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Projetos Sr — Kohler (5 a 10 anos)\nPrincipais atividades: Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.\nFerramentas/sistemas: METODOLOGIAS DE GESTÃO DE PROJETOS:\r\nPMBOK (PMI)\r\nFEL\r\nScrum\r\nKanban\r\nPRINCE2\r\nWaterfall (Cascata)\r\nAgile\r\nSAFe (Scaled Agile Framework)\r\nDesign Thinking\r\n\r\n\r\nGERENCIAMENTO DE PROJETOS:\r\nMS Project\r\nTrello\r\nPlanner\r\nPrimavera P6\r\n\r\nGESTÃO ÁGIL / SCRUM:\r\nJira (Scrum/Kanban boards)\r\n\r\nCOMUNICAÇÃO E COLABORAÇÃO:\r\nMicrosoft Teams\r\nGoogle Workspace (Docs, Sheets, Slides)\r\nZoom / Google Meet\r\n\r\nANÁLISE DE DADOS / RELATÓRIOS\r\nExcel (avançado: tabelas dinâmicas, macros, Power Query)\r\nPower BI\r\n\r\nDOCUMENTAÇÃO E GESTÃO DE CONHECIMENTO\r\nSharePoint\r\nNotion\r\n\r\nGESTÃO FINANCEIRA/ORÇAMENTÁRIA DE PROJETOS\r\nSAP\r\nExcel (modelagem financeira)\r\n\r\nDIAGRAMAÇÃO E PLANEJAMENTO VISUAL\r\nVisio\r\n\r\nFERRAMENTAS DE ENGENHARIA CIVIL\r\nProjeto e Modelagem\r\nAutoCAD\r\nRevit (BIM)\r\nCivil 3D\r\nCálculo Estrutural\r\nTQS\r\n\r\nTopografia e Geoprocessamento\r\nAutoCAD Civil 3D\r\nQGIS\r\n\r\nFERRAMENTAS DE ENGENHARIA\r\nModelagem e Simulação de Processos\r\nFlexSim\r\n\r\nQualidade e Melhoria Contínua\r\nMinitab (estatística para Six Sigma)\r\nExcel (para, 5W2H, Ishikawa, etc.)\n\n2. Analista de Desenvolvimento de Produtos — Kohler (mai/2019 a mar/2021)\nPrincipais atividades: Atuei diretamente na industrialização de novos produtos — desenvolvendo processos de fabricação, ferramental e equipamentos, validando protótipos e apoiando o ramp-up de produção — garantindo a conformidade com normas técnicas e certificando os critérios de qualidade para a produção em larga escala\n\nFORMAÇÃO\nPós-graduação — MBA em Gestão de Projetos — USP\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Liderança / Gestão"
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
    "escolaridade": "Médio incompleto",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Produção",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "lideranca": "Especialista praticamente um líder tomava conta de 5 pessoas",
    "regiao_interesse": "Andradas poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão. Profissional com experiência como Especialista na empresa Kohler, com 2 a 5 anos na função. Vivência em Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar. Conhecimentos em Excel, Word, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.",
    "curriculo_texto": "CARLOS EDUARDO DE OLIVEIRA PERES MENDES\nAndradas / MG\nWhatsApp: 35998905158 | E-mail: carlosperesmendes66@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Auxiliar / Inspetor(a) da Qualidade\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão. Profissional com experiência como Especialista na empresa Kohler, com 2 a 5 anos na função. Vivência em Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar. Conhecimentos em Excel, Word, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Especialista — Kohler (2 a 5 anos)\nPrincipais atividades: Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar\nFerramentas/sistemas: Trabalhava com uma máquina q fazia canal nas peças aonde esmaltação por dentro da peça\n\n2. Pintor — Rr pintura (2016 a 2021)\nPrincipais atividades: Pintava e preparava casa\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição"
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
    "escolaridade": "Fundamental incompleto",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Produção, Qualidade",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual",
    "lideranca": "Não",
    "regiao_interesse": "Andradas e Poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Classificador na empresa Kholer, com 2 a 5 anos na função. Vivência em Reparo de peças. Conhecimentos em Produção, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual.",
    "curriculo_texto": "PEDRO HENRIQUE FEITOSA GOMES\nAndradas mg / MG\nWhatsApp: 35 9 97517660 | E-mail: pedrohenriquegosmes999@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Separador(a) / Conferente, Auxiliar de Expedição, Auxiliar / Assistente Administrativo\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Classificador na empresa Kholer, com 2 a 5 anos na função. Vivência em Reparo de peças. Conhecimentos em Produção, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Classificador — Kholer (2 a 5 anos)\nPrincipais atividades: Reparo de peças\nFerramentas/sistemas: Instrumentos de pintura, massas e lixas\n\nFORMAÇÃO\nFundamental incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Serviços Gerais / Apoio"
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
    "experiencias_adicionais": "Já trabalhei em fábrica  de móveis",
    "escolaridade": "Fundamental completo",
    "curso_formacao": "",
    "instituicao_ensino": "E estadual Alcides mosconi",
    "cursos_qualificacoes": "",
    "conhecimentos": "Produção",
    "maquinas_equipamentos": "",
    "caracteristicas": "Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal",
    "lideranca": "Não",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "",
    "pretensao_salarial": "3.500,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio. Profissional com experiência como Classificador na empresa Kohler, com 5 a 10 anos na função. Vivência em Reparos,retoques. Conhecimentos em Produção. Características profissionais declaradas: Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal.",
    "curriculo_texto": "WILSON MORETTI FILHO\nAndradas / MG\nWhatsApp: 35 99816-8327 | E-mail: Wilsonmorettifilho@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Serviços Gerais\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio. Profissional com experiência como Classificador na empresa Kohler, com 5 a 10 anos na função. Vivência em Reparos,retoques. Conhecimentos em Produção. Características profissionais declaradas: Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Classificador — Kohler (5 a 10 anos)\nPrincipais atividades: Reparos,retoques\nFerramentas/sistemas: Lixa,maquina de lixar e furar, luz de cura\n\nOutras experiências:\nJá trabalhei em fábrica  de móveis\n\nFORMAÇÃO\nFundamental completo — E estadual Alcides mosconi\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "05/2021 a 02/2022",
        "atividades": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tCriação, controle e análise de dados de indicadores chaves;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      },
      {
        "empresa": "Kohler",
        "cargo": "Assistente de Laboratório",
        "periodo": "02/2020 a 08/2020",
        "atividades": "•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      }
    ],
    "experiencias_adicionais": "Cargo: Assistente de Controle de Processos – 02/2020 – 08/2020\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.",
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel em Engenharia Química",
    "instituicao_ensino": "Unifae",
    "cursos_qualificacoes": "Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP",
    "maquinas_equipamentos": "",
    "caracteristicas": "Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Liderança de estagiários e técnicos por 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Jundiaí, Mogi Mirim, Campinas, São João da Boa Vista, Aguaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "R$8.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "JÉSSICA CONSTANTINO\nAndradas / MG\nWhatsApp: 35991797966 | E-mail: jessicaconstantino@hotmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Processos Pleno — Kohler (1 a 2 anos)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\nFerramentas/sistemas: SAP, Excel, Power BI, Power Apps, Power Poing e Word\n\n2. Engenheira de Processos Júnior — Kohler (07/2022 a 03/2025)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\n\n3. Analista de Processos — Kohler (05/2021 a 02/2022)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tCriação, controle e análise de dados de indicadores chaves;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\n4. Assistente de Laboratório — Kohler (02/2020 a 08/2020)\nPrincipais atividades: •\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\nOutras experiências:\nCargo: Assistente de Controle de Processos – 02/2020 – 08/2020\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Unifae\n\nCURSOS E QUALIFICAÇÕES\nTreinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP\n\nINFORMAÇÕES ADICIONAIS\nInglês - nível intermediário (Cursando)\r\nMBA em Engenharia e Gestão da Qualidade - Unifae - Concluído em 2022"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Atendimento / Recepção",
      "Serviços Gerais / Apoio",
      "Agrícola / Campo"
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
        "periodo": "Junho 2017 a outro de outubro de 2020",
        "atividades": "Cuidar da manutenção e limpeza do local inclusive jardinagem."
      },
      {
        "empresa": "C Q Sab Lanches",
        "cargo": "Balconista"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior completo",
    "curso_formacao": "Administração",
    "instituicao_ensino": "Anhanguera",
    "cursos_qualificacoes": "NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática",
    "conhecimentos": "Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture",
    "maquinas_equipamentos": "De fundição",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados",
    "lideranca": "Líder de turno 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "disponibilidade_horario": "Comercial, Escala",
    "pretensao_salarial": "Mínimo R$2500,00",
    "inicio_imediato": "",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.",
    "curriculo_texto": "FERNANDO A. ALEXANDRE\nAndradas / MG\nWhatsApp: 35997131981 | E-mail: fernandoalexandre448@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Motorista / Entregador(a), Auxiliar / Assistente Administrativo, Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Líder de turno — Kohler (5 a 10 anos)\nPrincipais atividades: Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.\nFerramentas/sistemas: Trabalha com o processo de Lean manufacture.\n\n2. Operador de máquina de fundição — Icasa (Março de 2011 a maio de 2016)\nPrincipais atividades: Destacamento de peças e acabamento.\n\n3. Zelador — Instituto de educação Alfa (Junho 2017 a outro de outubro de 2020)\nPrincipais atividades: Cuidar da manutenção e limpeza do local inclusive jardinagem.\n\n4. Balconista — C Q Sab Lanches\n\nFORMAÇÃO\nSuperior completo — Administração — Anhanguera\nEm andamento: Pós graduação em engenharia da qual e pós graduação em Lean manufacture.\n\nCURSOS E QUALIFICAÇÕES\nNR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture\nMáquinas/equipamentos: De fundição\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "Abril/2021 a setembro/2023",
        "atividades": "- Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\r\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\r\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\r\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\r\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\r\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\r\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\r\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel em Engenharia Química",
    "instituicao_ensino": "Instituto Federal do Sul de Minas - Campus Pouso Alegre",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Informática, Qualidade",
    "maquinas_equipamentos": "Cerra de precisão",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "lideranca": "Não",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "disponibilidade_horario": "Comercial, 2º turno",
    "pretensao_salarial": "R$ 3700,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.",
    "curriculo_texto": "LUZIELE DIONISIO FALDA\nAndradas / MG\nWhatsApp: (35)997253903 | E-mail: luzieledionisio@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de Processos — Kohler (2 a 5 anos)\nPrincipais atividades: - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.\nFerramentas/sistemas: Excel, word, PowerPoint, dilatômetro, sedígrafo, área superficial\n\n2. Técnico em Química — AP Teixeira Laboratório Analítico (Outubro/2023 a janeiro/2024)\nPrincipais atividades: - Atuação na Gestão da Qualidade Laboratorial, conforme requisitos da ABNT NBR ISO/IEC 17025:2017, com seleção, validação e implementação de POPs.\r\n- Execução e interpretação de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS.\r\n- Calibração e verificação de equipamentos laboratoriais de bancada e campo, assegurando a confiabilidade dos resultados analíticos.\r\n- Avaliação de reagentes, métodos de desinfecção e alternativas de tratamento de efluentes, contribuindo para a melhoria dos processos.\n\n3. Labortorista — MG Ambiental (Abril/2021 a setembro/2023)\nPrincipais atividades: - Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\r\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\r\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\r\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\r\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\r\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\r\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\r\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Instituto Federal do Sul de Minas - Campus Pouso Alegre\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Qualidade\nMáquinas/equipamentos: Cerra de precisão\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Serviços Gerais / Apoio"
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
    "escolaridade": "Médio completo",
    "curso_formacao": "Não tenho",
    "instituicao_ensino": "Escolar DR Alcides Mosconi",
    "cursos_qualificacoes": "Não tenho mais pretendo começar fazer.",
    "conhecimentos": "Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom",
    "maquinas_equipamentos": "Caneta pneumática bico de ar retifica",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "lideranca": "Não",
    "regiao_interesse": "Sudeste, Andradas, poços de Caldas, Pinhal, jardim",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno, Qualquer horário, Escala",
    "pretensao_salarial": "1.900 a 2.300",
    "inicio_imediato": "Não",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio. Profissional com experiência como RETOCADOR na empresa Kohler Brasil, com 2 a 5 anos na função. Vivência em Retocar peças com defeito, que vinhão de outros setores.. Conhecimentos em Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom. Qualificações: Não tenho mais pretendo começar fazer.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.",
    "curriculo_texto": "VITOR MANOEL JOVENTINO DA SILVA GARCIA\nAndradas / MG\nWhatsApp: 35997040566 | E-mail: vitormanoeljoventino@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Estoquista / Almoxarife, Separador(a) / Conferente, Serviços Gerais, Outro, Empresa louças sanitária, RETOCADOR\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio. Profissional com experiência como RETOCADOR na empresa Kohler Brasil, com 2 a 5 anos na função. Vivência em Retocar peças com defeito, que vinhão de outros setores.. Conhecimentos em Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom. Qualificações: Não tenho mais pretendo começar fazer.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. RETOCADOR — Kohler Brasil (2 a 5 anos)\nPrincipais atividades: Retocar peças com defeito, que vinhão de outros setores.\nFerramentas/sistemas: Caneta pneumática, bico de ar, retifica.\n\n2. Ajudante de fundidor — Ajudante de fundidor na Icasa (8 meses)\nPrincipais atividades: Trabalhei na lavita, na roça mais subir pra qualidade depois de 2 meses, só que saí antes de exercer o cargo, tava precisando de dinheiro e fui prá outra empresa\n\nFORMAÇÃO\nMédio completo — Não tenho — Escolar DR Alcides Mosconi\n\nCURSOS E QUALIFICAÇÕES\nNão tenho mais pretendo começar fazer.\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Outro: Trabalho em restaurante, ou bar , como barmem e garçom\nMáquinas/equipamentos: Caneta pneumática bico de ar retifica\n\nINFORMAÇÕES ADICIONAIS\nNão"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [],
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
        "periodo": "4 anos e 2 mês",
        "atividades": "Rigação"
      },
      {
        "empresa": "Kolher",
        "cargo": "Operador de máquinas",
        "periodo": "8 anos",
        "atividades": "Fundidor"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Fundamental completo",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Produção, Operação de máquinas",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade",
    "lideranca": "Não",
    "regiao_interesse": "Andradas, Poços de caldas,espírito do pilhal",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "pretensao_salarial": "",
    "inicio_imediato": "",
    "resumo_profissional": "Áreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.",
    "curriculo_texto": "ALEX DIAS DA SILVA\nAndradas / MG\nWhatsApp: 35997470544 | E-mail: alex_dias2021@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina\nÁreas de interesse: Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operado de máquinas (Fundidor) — Kolher (5 a 10 anos)\nFerramentas/sistemas: Máquina na banca de enchimento de fazer as perças.\n\n2. Avicultura — Granja Almeida (1 ano e 5 mes)\nPrincipais atividades: Aveicutura de corte\n\n3. Cultivo de flores — Fazenda Dallas (4 anos e 2 mês)\nPrincipais atividades: Rigação\n\n4. Operador de máquinas — Kolher (8 anos)\nPrincipais atividades: Fundidor\n\nFORMAÇÃO\nFundamental completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Operação de máquinas\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [],
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
    "escolaridade": "Superior completo",
    "curso_formacao": "Tecnologia em Gestão da Qualidade",
    "instituicao_ensino": "Universidade Pitágoras Unopar Anhanguera",
    "cursos_qualificacoes": "Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica",
    "conhecimentos": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "maquinas_equipamentos": "Empilhadeira, mini carregadeira",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas",
    "lideranca": "Líder e supervisão  11 anos",
    "regiao_interesse": "Andradas , Poços de Caldas e Jundiaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "8.000,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.",
    "curriculo_texto": "RONI DONISETI FERRAZ\nAndradas / MG\nWhatsApp: 35988385312 | E-mail: roniandradas@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nLíder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor produção Massa e Esmalte — Kohler (Mais de 10 anos)\nPrincipais atividades: Supervisor de produção Massa, Esmalte e ETA\nFerramentas/sistemas: Sistema de qualidade pré controles, metrologias de laboratório com equipamentos para liberação dos produtos.\n\n2. Laboratorio — Cerâmica Vila Rica (1998 a 2010)\nPrincipais atividades: Reologia de massa , esmalte , reparos a frio resinas e esmalte para reparos requeima\n\nFORMAÇÃO\nSuperior completo — Tecnologia em Gestão da Qualidade — Universidade Pitágoras Unopar Anhanguera\n\nCURSOS E QUALIFICAÇÕES\nCursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\nMáquinas/equipamentos: Empilhadeira, mini carregadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Motorista / Transporte",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Manutenção Mecânica",
      "Qualidade",
      "Comercial / Vendas"
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
    "possui_outras_experiencias": "",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "Médio incompleto",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Vendas, Logística, Produção",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados",
    "lideranca": "Supervisor de produção 3anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 1º turno",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas. Profissional com experiência como Supervisor na empresa Kholer, com 5 a 10 anos na função. Vivência em Inspecionar pecas. Conhecimentos em Vendas, Logística, Produção. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados.",
    "curriculo_texto": "LUIZ HENRIQUE DE SOUZA\nAndradas / MG\nWhatsApp: 35992636485 | E-mail: souzaluizhenrique32@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Máquina, Auxiliar de Logística, Estoquista / Almoxarife, Operador(a) de Empilhadeira, Motorista / Entregador(a), Mecânico(a) de Manutenção\nÁreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas. Profissional com experiência como Supervisor na empresa Kholer, com 5 a 10 anos na função. Vivência em Inspecionar pecas. Conhecimentos em Vendas, Logística, Produção. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kholer (5 a 10 anos)\nPrincipais atividades: Inspecionar pecas\nFerramentas/sistemas: Bancas aromatizadas\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nVendas, Logística, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Logística / Estoque / Expedição",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Administrativo",
      "Recursos Humanos / Departamento Pessoal",
      "Liderança / Gestão"
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
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Administração",
    "instituicao_ensino": "Uninter",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Estoque, Logística, Administrativo",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "lideranca": "Não",
    "regiao_interesse": "Poços de Caldas",
    "disponibilidade_horario": "Comercial, 1º turno",
    "pretensao_salarial": "3.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão. Profissional com experiência como Analista de PPCP na empresa Kohler, com 1 a 2 anos na função. Vivência em Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.. Conhecimentos em Excel, Word, Estoque, Logística, Administrativo. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.",
    "curriculo_texto": "JUAN RENAN CARVALHO BATISTA\nPoços de Caldas / MG\nWhatsApp: 35998609435 | E-mail: juanbatista1994@gmail.com\nCNH: Outra - A e B\n\nOBJETIVO PROFISSIONAL\nAuxiliar de Logística, Auxiliar de Expedição, Técnico(a) da Qualidade, Analista Administrativo, Analista de RH / DP, Líder / Encarregado(a)\nÁreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão. Profissional com experiência como Analista de PPCP na empresa Kohler, com 1 a 2 anos na função. Vivência em Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.. Conhecimentos em Excel, Word, Estoque, Logística, Administrativo. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Analista de PPCP — Kohler (1 a 2 anos)\nPrincipais atividades: Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.\nFerramentas/sistemas: Excel, sistema SAP\n\n2. Fundidor de formas — Icasa (Out 2012 a set 2014)\nPrincipais atividades: Fundir moldes em gesso.\n\nFORMAÇÃO\nSuperior incompleto — Administração — Uninter\nEm andamento: Administração\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Logística, Administrativo\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Qualidade"
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
    "escolaridade": "Médio incompleto",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "Nr10,nr11,nr12,empilhadeira",
    "conhecimentos": "Produção, Operação de máquinas",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas",
    "lideranca": "Lider 15 anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Lider na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe e trabalhar juntos na entrega. Conhecimentos em Produção, Operação de máquinas. Qualificações: Nr10,nr11,nr12,empilhadeira. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas.",
    "curriculo_texto": "VANDERSON RODRIGO MAZARINI\nAndradas / MG\nWhatsApp: 35998966415 | E-mail: Vandersonrodrigo4@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Operador(a) de Máquina, Auxiliar de Logística, Estoquista / Almoxarife, Separador(a) / Conferente, Líder / Encarregado(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Lider na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe e trabalhar juntos na entrega. Conhecimentos em Produção, Operação de máquinas. Qualificações: Nr10,nr11,nr12,empilhadeira. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Lider — Kohler (Mais de 10 anos)\nPrincipais atividades: Liderar equipe e trabalhar juntos na entrega\nFerramentas/sistemas: Empilhadeira paleteira eletrica\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNr10,nr11,nr12,empilhadeira\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Operação de máquinas\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Segurança do Trabalho"
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
        "periodo": "2012 a 2020",
        "atividades": "Gestão de pessoas \r\nGestão de normas \r\nGestão de novos projetos"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Pós-graduação",
    "curso_formacao": "Engenharia de segurança do trabalho",
    "instituicao_ensino": "Faculdade DellVale",
    "cursos_qualificacoes": "NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista",
    "conhecimentos": "Excel, Word, Informática, Segurança do trabalho, Compras",
    "maquinas_equipamentos": "Equipamentos de avaliação ambiental",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal",
    "lideranca": "Encarregado de produção 13 anos\r\nSupervisor de EHS 1 ano",
    "regiao_interesse": "Andradas, Poços de Caldas, Mogi mirim,Mogi Guaçu",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "pretensao_salarial": "6.000 a 15.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Segurança do Trabalho. Profissional com experiência como Técnico de segurança do trabalho na empresa Kohler produtos para cozinhas e banheiros Ltda, com mais de 10 anos na função. Vivência em Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos. Conhecimentos em Excel, Word, Informática, Segurança do trabalho, Compras. Qualificações: NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal.",
    "curriculo_texto": "ISRAEL AUGUSTO CAMPOS\nAndradas / MG\nWhatsApp: 35984490490 | E-mail: israel32campos@gmail.com\nCNH: Outra - AD\n\nOBJETIVO PROFISSIONAL\nTécnico(a) de Segurança do Trabalho, Engenheiro(a)\nÁreas de interesse: Engenharia / Técnico, Segurança do Trabalho\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Segurança do Trabalho. Profissional com experiência como Técnico de segurança do trabalho na empresa Kohler produtos para cozinhas e banheiros Ltda, com mais de 10 anos na função. Vivência em Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos. Conhecimentos em Excel, Word, Informática, Segurança do trabalho, Compras. Qualificações: NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de segurança do trabalho — Kohler produtos para cozinhas e banheiros Ltda (Mais de 10 anos)\nPrincipais atividades: Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos\nFerramentas/sistemas: Sistema Soc\n\n2. Encarregado de produção — Lavtel indústria e Comércio Ltda (1999 a 2012)\nPrincipais atividades: Gestão de produção \r\nGestão de pessoas\n\n3. Supervisor de EHS — Kohler produtos para cozinhas e banheiros (2012 a 2020)\nPrincipais atividades: Gestão de pessoas \r\nGestão de normas \r\nGestão de novos projetos\n\nFORMAÇÃO\nPós-graduação — Engenharia de segurança do trabalho — Faculdade DellVale\n\nCURSOS E QUALIFICAÇÕES\nNR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Segurança do trabalho, Compras\nMáquinas/equipamentos: Equipamentos de avaliação ambiental\n\nINFORMAÇÕES ADICIONAIS\nTenho cursos adicionais voltado para área de perícia trabalhista."
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Motorista / Transporte"
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
        "periodo": "2006 até 2010, mais ou menos",
        "atividades": "Garçom, caixa e líder dos garçons"
      },
      {
        "empresa": "Nao",
        "cargo": "Nao",
        "periodo": "Nao",
        "atividades": "Nao"
      }
    ],
    "experiencias_adicionais": "Nao",
    "escolaridade": "Médio completo",
    "curso_formacao": "Garçom, barrem, gestão",
    "instituicao_ensino": "Senac",
    "cursos_qualificacoes": "Gestao",
    "conhecimentos": "Excel, Informática, Estoque, Produção",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados",
    "lideranca": "Líder de esmaltação 8 anos, supervisor de fluxo e inspeção 7 anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 2º turno",
    "pretensao_salarial": "No meu último projeto, minha remuneração era de 9,000 mais benefícios, mas vejo o valor da oportunidade e estou disposto a negociar conforme a proposta de benefícios",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Supervisor na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar uma equipe de produção, com foco em segurança, produção e qualidade. Conhecimentos em Excel, Informática, Estoque, Produção. Qualificações: Gestao. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados.",
    "curriculo_texto": "REGINALDO DE PÁDUA\nAndradas / MG\nWhatsApp: 55 35 99257-9883 | E-mail: paduareginaldo41@gmail.com\nCNH: A\n\nOBJETIVO PROFISSIONAL\nLíder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Supervisor na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar uma equipe de produção, com foco em segurança, produção e qualidade. Conhecimentos em Excel, Informática, Estoque, Produção. Qualificações: Gestao. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kohler (Mais de 10 anos)\nPrincipais atividades: Liderar uma equipe de produção, com foco em segurança, produção e qualidade\nFerramentas/sistemas: Notebook, celular\n\n2. Chefe de salao — Casa Geraldo (2002 até 2005, mais ou menos)\nPrincipais atividades: Barmen, garçom, líder da equipe de salao\n\n3. Líder dos garçons — Aldeia velha (2006 até 2010, mais ou menos)\nPrincipais atividades: Garçom, caixa e líder dos garçons\n\n4. Nao — Nao (Nao)\nPrincipais atividades: Nao\n\nOutras experiências:\nNao\n\nFORMAÇÃO\nMédio completo — Garçom, barrem, gestão — Senac\n\nCURSOS E QUALIFICAÇÕES\nGestao\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Informática, Estoque, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Qualidade",
    "areas_adicionais_interesse": [
      "Administrativo",
      "Contábil / Fiscal",
      "Tecnologia / TI"
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
    "possui_outras_experiencias": "",
    "experiencias_anteriores": [],
    "experiencias_adicionais": "",
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Ciências contabeis",
    "instituicao_ensino": "Anhanguera",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "",
    "regiao_interesse": "",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "",
    "inicio_imediato": "",
    "resumo_profissional": "Áreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI. Profissional com experiência como Sênior na empresa Kohker, com 5 a 10 anos na função. Vivência em Classificador  retocador cipeiro  brigasista meio ambiente. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "PAULO GUILHERME MIOLO\nAndradas / MG\nWhatsApp: 35 992395726 | E-mail: Gui.miolo2019@gmail.com\nCNH: C\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Vendedor(a) / Consultor(a) Comercial, Suporte / TI\nÁreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI. Profissional com experiência como Sênior na empresa Kohker, com 5 a 10 anos na função. Vivência em Classificador  retocador cipeiro  brigasista meio ambiente. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Sênior — Kohker (5 a 10 anos)\nPrincipais atividades: Classificador  retocador cipeiro  brigasista meio ambiente\nFerramentas/sistemas: Empilhadeira\n\nFORMAÇÃO\nSuperior incompleto — Ciências contabeis — Anhanguera\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade"
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
        "periodo": "2007/2012",
        "atividades": "Produção de flores"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Médio completo",
    "curso_formacao": "Técnico em contabilidade",
    "instituicao_ensino": "Senc",
    "cursos_qualificacoes": "Técnico em contabilidade",
    "conhecimentos": "Excel",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "lideranca": "Não",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "pretensao_salarial": "3000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Operador de shanque na empresa Kohler, com mais de 10 anos na função. Vivência em Produção. Conhecimentos em Excel. Qualificações: Técnico em contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.",
    "curriculo_texto": "ROSEANE PEREIRA DA SILVA GONÇALVES\nAndradas / MG\nWhatsApp: 35992472355 | E-mail: roseanegonalves1986@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina, Preparador(a) / Regulador(a) de Máquina, Estoquista / Almoxarife\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Operador de shanque na empresa Kohler, com mais de 10 anos na função. Vivência em Produção. Conhecimentos em Excel. Qualificações: Técnico em contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operador de shanque — Kohler (Mais de 10 anos)\nPrincipais atividades: Produção\n\n2. Produção — Trabalho rural swart rosas (2003/2007)\nPrincipais atividades: Produção de rosa\n\n3. Produção — Sítio lagoa dourada (2007/2012)\nPrincipais atividades: Produção de flores\n\nFORMAÇÃO\nMédio completo — Técnico em contabilidade — Senc\n\nCURSOS E QUALIFICAÇÕES\nTécnico em contabilidade\n\nCONHECIMENTOS PROFISSIONAIS\nExcel\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Liderança / Gestão"
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
        "cargo": "Líder"
      },
      {
        "empresa": "Coca cola",
        "cargo": "Operador de Empilhadeira"
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Médio completo",
    "curso_formacao": "Operador de Empilhadeira",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "Operador de Empilhadeira \r\nLiderança",
    "conhecimentos": "Estoque, Logística, Expedição, Produção",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal",
    "lideranca": "Líder\r\n6 anos",
    "regiao_interesse": "",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão. Profissional com experiência como Operador de empilhadeira na empresa Coca cola, com 5 a 10 anos na função. Vivência em Estoque. Conhecimentos em Estoque, Logística, Expedição, Produção. Qualificações: Operador de Empilhadeira \r\nLiderança. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal.",
    "curriculo_texto": "LUIZ FERNANDO INOCENCIO\nAndradas / MG\nWhatsApp: 19 9 9999 0407 | E-mail: Luizinocencio.com.br@gmail.com\nCNH: Outra - A D\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Operador(a) de Máquina, Separador(a) / Conferente, Operador(a) de Empilhadeira, Auxiliar de Expedição, Motorista / Entregador(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão. Profissional com experiência como Operador de empilhadeira na empresa Coca cola, com 5 a 10 anos na função. Vivência em Estoque. Conhecimentos em Estoque, Logística, Expedição, Produção. Qualificações: Operador de Empilhadeira \r\nLiderança. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operador de empilhadeira — Coca cola (5 a 10 anos)\nPrincipais atividades: Estoque\nFerramentas/sistemas: Empilhadeira \r\nColetores\n\n2. Líder — Kohler\n\n3. Operador de Empilhadeira — Coca cola\n\nFORMAÇÃO\nMédio completo — Operador de Empilhadeira\n\nCURSOS E QUALIFICAÇÕES\nOperador de Empilhadeira \r\nLiderança\n\nCONHECIMENTOS PROFISSIONAIS\nEstoque, Logística, Expedição, Produção\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Manutenção Mecânica",
    "areas_adicionais_interesse": [
      "Motorista / Transporte",
      "Contábil / Fiscal",
      "Recursos Humanos / Departamento Pessoal"
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
    "escolaridade": "Técnico",
    "curso_formacao": "Tc mecânico",
    "instituicao_ensino": "Etec",
    "cursos_qualificacoes": "Vários e informática",
    "conhecimentos": "Excel, Word, Informática, Manutenção, Mecânica",
    "maquinas_equipamentos": "Máquina pesada",
    "caracteristicas": "Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Não",
    "regiao_interesse": "Qualquer cidade",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal. Profissional com experiência como Tc mecânico na empresa Kholer, com 1 a 2 anos na função. Vivência em Bomba peneumunia mas tem experiência em várias áreas da mecânica. Conhecimentos em Excel, Word, Informática, Manutenção, Mecânica. Qualificações: Vários e informática. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "PAULO RICARDO BRAZ\nAndradas / MG\nWhatsApp: 36999878867 | E-mail: paulo.r.b25@hotmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nPreparador(a) / Regulador(a) de Máquina, Motorista / Entregador(a), Mecânico(a) de Manutenção\nÁreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal. Profissional com experiência como Tc mecânico na empresa Kholer, com 1 a 2 anos na função. Vivência em Bomba peneumunia mas tem experiência em várias áreas da mecânica. Conhecimentos em Excel, Word, Informática, Manutenção, Mecânica. Qualificações: Vários e informática. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Tc mecânico — Kholer (1 a 2 anos)\nPrincipais atividades: Bomba peneumunia mas tem experiência em várias áreas da mecânica\nFerramentas/sistemas: De tudo um pouco\n\n2. Mecânico — Icasa (Fiori)\nPrincipais atividades: Solda lixadeira pintura\n\nFORMAÇÃO\nTécnico — Tc mecânico — Etec\n\nCURSOS E QUALIFICAÇÕES\nVários e informática\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Manutenção, Mecânica\nMáquinas/equipamentos: Máquina pesada\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte"
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
    "escolaridade": "Médio incompleto",
    "curso_formacao": "",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade",
    "lideranca": "Não",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Fundador operador de máquinas shanks || na empresa Kholler, com 1 a 2 anos na função. Vivência em Fazia louças sanitárias spam bacias de colagem. Conhecimentos em Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade.",
    "curriculo_texto": "LUCAS LOURENÇO CAETANO\nAndradas / MG\nWhatsApp: 35999859710 | E-mail: lucaslourencocaetano@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina, Estoquista / Almoxarife, Operador(a) de Empilhadeira, Motorista / Entregador(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Fundador operador de máquinas shanks || na empresa Kholler, com 1 a 2 anos na função. Vivência em Fazia louças sanitárias spam bacias de colagem. Conhecimentos em Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundador operador de máquinas shanks || — Kholler (1 a 2 anos)\nPrincipais atividades: Fazia louças sanitárias spam bacias de colagem\nFerramentas/sistemas: Torno, raspas, esponjas, manipulador etc.\n\n2. Operador de estacionamento rotativo — Serbet (21/03/2023 a 01/06/2024)\nPrincipais atividades: Monitor as vagas e carros que estava usando o estacionamento rotativo zona azul.\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nAtendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Liderança / Gestão",
      "Serviços Gerais / Apoio",
      "Agrícola / Campo"
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
        "periodo": "2anos",
        "atividades": "Chicote de carro"
      },
      {
        "empresa": "Alstromelia lagoa dourada",
        "cargo": "Na coleta da produção e embalagem",
        "periodo": "Roseira florada da serra",
        "atividades": "Colheita embalagem de rosa"
      }
    ],
    "experiencias_adicionais": "Tomates fonte verde \r\nColheita,e pesagem de tomate.",
    "escolaridade": "Médio completo",
    "curso_formacao": "Liderança computação básica",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "",
    "conhecimentos": "Excel, Word, Informática",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança",
    "lideranca": "Na roseira no campo e no barracão",
    "regiao_interesse": "Em Andradas",
    "disponibilidade_horario": "1º turno",
    "pretensao_salarial": "Uns 2,500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Fundição na empresa Kohler, com 2 a 5 anos na função. Vivência em Produção de louça sanitária,ex:caixa,cuba, lavatório etc.. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.",
    "curriculo_texto": "SILVÂNIA GOMES DA SILVA\nAndradas / MG\nWhatsApp: 35991088740 | E-mail: silvaniagoms017@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Líder / Encarregado(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Fundição na empresa Kohler, com 2 a 5 anos na função. Vivência em Produção de louça sanitária,ex:caixa,cuba, lavatório etc.. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundição — Kohler (2 a 5 anos)\nPrincipais atividades: Produção de louça sanitária,ex:caixa,cuba, lavatório etc.\nFerramentas/sistemas: Operadora de máquina shanks.\n\n2. Liderança — Rosera florada da serra (5 anos)\nPrincipais atividades: Organizar equipe, separar pedidos, atender clientes\n\n3. Ajudante de produção — Dephai (2anos)\nPrincipais atividades: Chicote de carro\n\n4. Na coleta da produção e embalagem — Alstromelia lagoa dourada (Roseira florada da serra)\nPrincipais atividades: Colheita embalagem de rosa\n\nOutras experiências:\nTomates fonte verde \r\nColheita,e pesagem de tomate.\n\nFORMAÇÃO\nMédio completo — Liderança computação básica\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Marketing / Comunicação",
      "Tecnologia / TI"
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
    "escolaridade": "Médio completo",
    "curso_formacao": "Atualmente estou fazendo um curso de informática",
    "instituicao_ensino": "",
    "cursos_qualificacoes": "Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.",
    "conhecimentos": "Informática, Produção",
    "maquinas_equipamentos": "Tenho experiência prática na operação de fornos industriais de alta temperatura, manipulador mecânico para o carregamento de cargas e rebocador industrial para a movimentação de vagonetas.Além disso, opero o computador para a digitação,registro e controle de fluxo de peças no sistema de produção.",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "lideranca": "Não",
    "regiao_interesse": "Meu foco principal é Andradas, mas tenho total interesse e disponibilidade para trabalhar em cidades vizinhas da região, como poços de Caldas, Espírito santo do pinhal ou são João da boa vista , caso a empresa ofereça trasporte fretado ou ajuda de custo .",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "No momento, não tenho um valor fixo fechado.Estou aberto a entender a proposta da empresa para o cargo e agradeço se puderem avaliar meu perfil dentro da tabela salarial praticada por vocês para essa função.",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI. Profissional com experiência como Forneiro na empresa Kohler, com 2 a 5 anos na função. Vivência em \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\". Conhecimentos em Informática, Produção. Qualificações: \"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\". Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.",
    "curriculo_texto": "RICARDO SILVA SANTOS\nAndradas / MG\nWhatsApp: 35998659801 | E-mail: ricardosilvasantos1519@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nEstoquista / Almoxarife, Marketing / Comunicação, Suporte / TI, Líder / Encarregado(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI. Profissional com experiência como Forneiro na empresa Kohler, com 2 a 5 anos na função. Vivência em \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\". Conhecimentos em Informática, Produção. Qualificações: \"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\". Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Forneiro — Kohler (2 a 5 anos)\nPrincipais atividades: \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\"\nFerramentas/sistemas: \"Operava o manipulador mecânico para carregar as vagonetas e utilizava o rebocador industrial para fazer a movimentação segura dessas cargas até os fornos.Além da parte operacional,usava o computador para digitar e registrar as peças no sistema da empresa\"\n\nFORMAÇÃO\nMédio completo — Atualmente estou fazendo um curso de informática\nEm andamento: Informática\n\nCURSOS E QUALIFICAÇÕES\n\"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\"\n\nCONHECIMENTOS PROFISSIONAIS\nInformática, Produção\nMáquinas/equipamentos: Tenho experiência prática na operação de fornos industriais de alta temperatura, manipulador mecânico para o carregamento de cargas e rebocador industrial para a movimentação de vagonetas.Além disso, opero o computador para a digitação,registro e controle de fluxo de peças no sistema de produção.\n\nINFORMAÇÕES ADICIONAIS\n\"Gostaria de destacar minha facilidade para trabalhar em equipe e meu forte compromisso com a segurança e a organização do ambiente de trabalho.Por ter trabalhado diretamente com fornos industriais e cargas pesadas, entendo perfeitamente a importância de seguir regras rígidas,usar EPIs corretamente e manter a atenção total para garantir que a produção flua sem acidentes.\""
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Administrativo",
      "Tecnologia / TI"
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
        "periodo": "Ago/25 a set/25",
        "atividades": "Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos."
      },
      {
        "empresa": "Kohler Co",
        "cargo": "Estagiária de almoxarifado",
        "periodo": "Abr/24 a ago/25",
        "atividades": "• Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Engenharia de produção",
    "instituicao_ensino": "Universidade federal de Alfenas",
    "cursos_qualificacoes": "Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro",
    "conhecimentos": "Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo",
    "maquinas_equipamentos": "",
    "caracteristicas": "Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "Realizava apenas a gestão do estagiário da área por 11 meses",
    "regiao_interesse": "Andradas, Poços de Caldas",
    "disponibilidade_horario": "1º turno",
    "pretensao_salarial": "R$3500,00 - disponível para negociar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI. Profissional com experiência como Técnica de processos na empresa Kohler Co, com menos de 1 ano na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo. Qualificações: Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro. Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "MELISSA DE CARVALHO REIMER\nPoços de Caldas / MG\nWhatsApp: 19995017509 | E-mail: melissa.reimer7bb@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Assistente Administrativo, Analista Administrativo, Técnico(a)\nÁreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI. Profissional com experiência como Técnica de processos na empresa Kohler Co, com menos de 1 ano na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo. Qualificações: Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro. Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnica de processos — Kohler Co (Menos de 1 ano)\nPrincipais atividades: - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.\nFerramentas/sistemas: SAP, EPRO, EXCEL, SKETCH UP, POWER POINT, POWER BI\n\n2. Assistente de engenharia de processos — Kohler co (Set/25 a jun/26)\nPrincipais atividades: • Desenvolvimento e implementação de pré-controles e monitoramentos para a área de Esmaltação, acompanhando variáveis críticas do processo, antecipando desvios e apoiando a tomada de decisão baseada em dados.\r\n• Elaboração, revisão e atualização de SOPs (Procedimentos Operacionais Padrão), garantindo a padronização dos processos e conformidade operacional.\r\n• Gestão do OPEX de dois setores (Esmaltação e forno), realizando controle orçamentário, análise de custos e acompanhamento das previsões de fechamento mensal.\r\n• Atuação estratégica em Melhoria Contínua, promovendo a otimização de processos industriais com foco em eficiência, qualidade e produtividade.\r\n• Análise e otimização de fluxos de trabalho, identificando oportunidades para redução de desperdícios e aumento da performance operacional.\r\n• Monitoramento e gestão de KPIs, utilizando análise de dados (Excel e Power BI) para apoiar a tomada de decisão e direcionar planos de ação.\r\n• Desenvolvimento e implementação de melhorias voltadas à resolução de problemas e aumento da eficiência dos processos produtivos.\r\n• Elaboração de apresentações gerenciais com indicadores de produtividade, qualidade e yield da planta, apoiando o alinhamento estratégico da liderança.\r\n• Participação ativa em iniciativas de segurança, ergonomia, 5S e melhoria contínua, fortalecendo a cultura de excelência operacional\n\n3. Estagiária de engenharia de processos — Kohler co (Ago/25 a set/25)\nPrincipais atividades: Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos.\n\n4. Estagiária de almoxarifado — Kohler Co (Abr/24 a ago/25)\nPrincipais atividades: • Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos.\n\nFORMAÇÃO\nSuperior incompleto — Engenharia de produção — Universidade federal de Alfenas\nEm andamento: Engenharia de produção- (anteriormente feito faculdade tecnológica de gestão da produção industrial)\n\nCURSOS E QUALIFICAÇÕES\nExcel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo\n\nINFORMAÇÕES ADICIONAIS\nPossuo rápida adaptação a habilidade de aprendizado, meu maior foco é resultado e construção de um ambiente bom de trabalho"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
        "Logística / Estoque / Expedição",
        "Qualidade",
        "Liderança / Gestão"
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
            "periodo": "Setembro 2018 à abril 2024",
            "atividades": "Fazer parte de aplicação na peça"
        }
    ],
    "escolaridade": "Médio incompleto",
    "curso_formacao": "Espanhol, só não conclui",
    "instituicao_ensino": "KNN",
    "conhecimentos": "Word, Informática, Produção",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "lideranca": "Líder de produção, por mais de 2 anos",
    "regiao_interesse": "Andradas, poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "3000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão. Profissional com experiência como LÍDER ESMALTAÇÃO na empresa KOHLER, com 2 a 5 anos na função. Vivência em Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo. Conhecimentos em Word, Informática, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.",
    "curriculo_texto": "AUGUSTO SILVA PEREIRA\nAndradas / MG\nWhatsApp: 35920009557 | E-mail: augusto.sdsj@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Auxiliar de Expedição, Líder / Encarregado(a), Serviços Gerais\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão. Profissional com experiência como LÍDER ESMALTAÇÃO na empresa KOHLER, com 2 a 5 anos na função. Vivência em Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo. Conhecimentos em Word, Informática, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. LÍDER ESMALTAÇÃO — KOHLER (2 a 5 anos)\nPrincipais atividades: Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo\nFerramentas/sistemas: Sistema AVANCE, PISTOLA DE APLICAÇÃO DE ESMALTE,\n\n2. Produção de esmalte, lugar onde faz o preparo antes da aplicação — KOHLER (Junho 2013 à julho 2018)\nPrincipais atividades: Fazer acerto de esmalte o preparo para levar para esmaltação e ser aplicado na peça\n\n3. Esmaltador — KOHLER (Setembro 2018 à abril 2024)\nPrincipais atividades: Fazer parte de aplicação na peça\n\nFORMAÇÃO\nMédio incompleto — Espanhol, só não conclui — KNN\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nWord, Informática, Produção\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS\nTenho curso básico de informática também"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
        "Produção / Operações"
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
            "periodo": "2001 a2026",
            "atividades": "Gestão de equipe ,qualidade ,,processos ,e organiza"
        }
    ],
    "escolaridade": "Médio completo",
    "conhecimentos": "Excel, Word, Informática",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança",
    "lideranca": "Supervisor de área \nDesde 2012",
    "regiao_interesse": "Andradas ,poços de caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações. Profissional com experiência como Supervisor na empresa Kolher, com mais de 10 anos na função. Vivência em Gestão de equipe ,gestão de qualidade .organização da área e planejamento. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança.",
    "curriculo_texto": "CLÁUDIO ROBERTO DE PAULA\nAndradas / MG\nWhatsApp: 35992040990 | E-mail: claudiorobertodepaulapaula@57gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nSupervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações. Profissional com experiência como Supervisor na empresa Kolher, com mais de 10 anos na função. Vivência em Gestão de equipe ,gestão de qualidade .organização da área e planejamento. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kolher (Mais de 10 anos)\nPrincipais atividades: Gestão de equipe ,gestão de qualidade .organização da área e planejamento\n\n2. Fundidor — Fiori (1995 a2001)\nPrincipais atividades: Fabricacao de peças\n\n3. Supervisor — Kolher (2001 a2026)\nPrincipais atividades: Gestão de equipe ,qualidade ,,processos ,e organiza\n\nFORMAÇÃO\nMédio completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
        "Logística / Estoque / Expedição",
        "Financeiro",
        "Contábil / Fiscal",
        "Recursos Humanos / Departamento Pessoal",
        "Compras / Suprimentos"
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
    "atividades_ultima_experiencia": "Garantir produção, qualidade, desenvolvimento de pessoas na área de acabamento.",
    "ferramentas_ultima_experiencia": "Sistema avance, excel",
    "areas_ultima_experiencia": [
        "Produção / Operações",
        "Logística / Estoque / Expedição",
        "Qualidade",
        "Liderança / Gestão"
    ],
    "possui_outras_experiencias": "Sim",
    "experiencias_anteriores": [
        {
            "empresa": "Icasa",
            "cargo": "Supervisor/coordenador",
            "periodo": "Março 2008 até março 2018",
            "atividades": "Acabamento final e esmaltação"
        }
    ],
    "escolaridade": "Médio completo",
    "curso_formacao": "Técnico contabilidade",
    "instituicao_ensino": "Etec dr Carolino da mota e Silva",
    "cursos_qualificacoes": "Pacote office, Green belt, liderança 360, fmea, CEP, 5s.",
    "conhecimentos": "Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Compras, Contabilidade",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Supervisor de produção por 16 anos",
    "regiao_interesse": "Andradas e região",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Financeiro, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos. Profissional com experiência como Supervisor/coordenador na empresa Kohler Produtos para cozinhas e banheiros, com 5 a 10 anos na função. Vivência em Garantir produção, qualidade, desenvolvimento de pessoas na área de acabamento.. Conhecimentos em Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Compras, Contabilidade. Qualificações: Pacote office, Green belt, liderança 360, fmea, CEP, 5s.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "THIAGO GARCIA CARLIN\nAndradas / MG\nWhatsApp: 35 9 9187 8759 | E-mail: thiago.gc266@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nComprador(a) / Suprimentos, Supervisor(a) / Coordenador(a), Gerente\nÁreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Financeiro, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Financeiro, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos. Profissional com experiência como Supervisor/coordenador na empresa Kohler Produtos para cozinhas e banheiros, com 5 a 10 anos na função. Vivência em Garantir produção, qualidade, desenvolvimento de pessoas na área de acabamento.. Conhecimentos em Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Compras, Contabilidade. Qualificações: Pacote office, Green belt, liderança 360, fmea, CEP, 5s.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor/coordenador — Kohler Produtos para cozinhas e banheiros (5 a 10 anos)\nPrincipais atividades: Garantir produção, qualidade, desenvolvimento de pessoas na área de acabamento.\nFerramentas/sistemas: Sistema avance, excel\n\n2. Supervisor/coordenador — Icasa (Março 2008 até março 2018)\nPrincipais atividades: Acabamento final e esmaltação\n\nFORMAÇÃO\nMédio completo — Técnico contabilidade — Etec dr Carolino da mota e Silva\n\nCURSOS E QUALIFICAÇÕES\nPacote office, Green belt, liderança 360, fmea, CEP, 5s.\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Compras, Contabilidade\n\nINFORMAÇÕES ADICIONAIS"
}
,
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
    "area_principal_interesse": "Administrativo",
    "areas_adicionais_interesse": [
      "Motorista / Transporte",
      "Qualidade",
      "Tecnologia / TI",
      "Agrícola / Campo"
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
    "escolaridade": "Técnico",
    "curso_formacao": "Administração e Agropecuária",
    "instituicao_ensino": "ETEC DR.CAROLINO DA MOTTA E SILVA",
    "cursos_qualificacoes": "Operador de empilhadeira",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, Jundiaí",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "4.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo. Profissional com experiência como Matrizeiro na empresa Kohler, com 5 a 10 anos na função. Vivência em Fazer matrizes, ajustes de moldes de gesso.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria. Qualificações: Operador de empilhadeira. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal.",
    "curriculo_texto": "FELIX FERNANDO BERTOLI JUNIOR\nAndradas / MG\nWhatsApp: 35992129690 | E-mail: felix-ocat@hotmail.com\nCNH: Outra - A/D\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Empilhadeira, Motorista / Entregador(a), Técnico(a) da Qualidade, Auxiliar / Assistente Administrativo, Técnico(a), Outro, Matrizeiro\nÁreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Administrativo, Motorista / Transporte, Qualidade, Tecnologia / TI, Agrícola / Campo. Profissional com experiência como Matrizeiro na empresa Kohler, com 5 a 10 anos na função. Vivência em Fazer matrizes, ajustes de moldes de gesso.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria. Qualificações: Operador de empilhadeira. Características profissionais declaradas: Organizado(a), Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Agilidade, Atenção aos detalhes, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Matrizeiro — Kohler (5 a 10 anos)\nPrincipais atividades: Fazer matrizes, ajustes de moldes de gesso.\nFerramentas/sistemas: Ferramentas de precisão, escalas, esquadros, paquímetros, altímetros, réguas, e ferramentas manuais feitas por mim.\n\n2. Classificador de café — Agropecuária Barbosa Netos (Set/2012 a julho/2018)\nPrincipais atividades: Classificar e degustar café, e um pouco na área administrativa também.\n\n3. Cuidar da saída e entradas de produtos — Refracon (Fev/2019 a abril/2020)\n\nFORMAÇÃO\nTécnico — Administração e Agropecuária — ETEC DR.CAROLINO DA MOTTA E SILVA\n\nCURSOS E QUALIFICAÇÕES\nOperador de empilhadeira\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Qualidade, Administrativo, Outro: Matrizaria\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição"
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
        "cargo": ""
      },
      {
        "empresa": "Avícola são Sebastião",
        "cargo": "Auxiliar de produção"
      },
      {
        "empresa": "Siamp Brasil industria",
        "cargo": "Auxiliar de produção na injeção plástica"
      }
    ],
    "escolaridade": "Médio completo",
    "conhecimentos": "Produção",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Poços de Caldas, espírito santo do Pinhal e Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Inspetora na empresa Kohler produtos para cozinhas e banheiros ltda, com 2 a 5 anos na função. Vivência em Esponja peça bacia. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.",
    "curriculo_texto": "ANA LUISA SANTOS DE JESUS DUTRA\nAndradas / MG\nWhatsApp: 35999620122 | E-mail: paollana.z.x@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Serviços Gerais, Outro\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Inspetora na empresa Kohler produtos para cozinhas e banheiros ltda, com 2 a 5 anos na função. Vivência em Esponja peça bacia. Conhecimentos em Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Inspetora — Kohler produtos para cozinhas e banheiros ltda (2 a 5 anos)\nPrincipais atividades: Esponja peça bacia\nFerramentas/sistemas: Nenhum\n\n2. Aptiv\n\n3. Auxiliar de produção — Avícola são Sebastião\n\n4. Auxiliar de produção na injeção plástica — Siamp Brasil industria\n\nFORMAÇÃO\nMédio completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "Agosto 2012 a junho 2022"
      },
      {
        "empresa": "Icasa",
        "cargo": "Estagiário",
        "periodo": "2 meses ( 2018)"
      },
      {
        "empresa": "LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)",
        "cargo": "Estagiário",
        "atividades": "Métodos e Procedimentos:\r\n\r\nAcidez (Total, Volátil e Fixa);\r\nGrau Alcoólico Real;\r\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\r\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\r\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\r\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\r\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados."
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia Química",
    "instituicao_ensino": "UNIFAE",
    "cursos_qualificacoes": "NR 12\r\nNR 35\r\nExcel Avançado\r\nLean",
    "conhecimentos": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "caracteristicas": "Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Líder de Laboratório\r\nLíder de Produção de Massa\r\nLíder de Produção de Esmalte",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "5.800,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\r\nNR 35\r\nExcel Avançado\r\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "RAFAEL FRIZO ALVES\nAndradas / MG\nWhatsApp: 35991592707 | E-mail: rafaelfrizo@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\r\nNR 35\r\nExcel Avançado\r\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de Processos Sênior — Kohler (2 a 5 anos)\nPrincipais atividades: Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\r\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\r\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\r\nControle de análise das etapas do processo produtivo;\r\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\r\nDefloculação de amostras;\r\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\r\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\r\nConhecimento em aparelhos laboratoriais de alta precisão;\r\nDeterminação de cloretos;\r\nDeterminação de matéria orgânica;\r\nAnálise de dilatação térmica da massa;\r\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\r\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\r\nControle de processos;\r\nCaracterização de matérias-primas;\r\nDeterminação de métodos;\r\nAnálises químicas;\r\nDesenvolvimento de novos produtos;\r\nDesenvolvimento de gráficos e pré-controles;\r\nAnálise de dados e auditorias;\r\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\r\nAplicação de ferramentas Lean e 5S;\r\nProatividade e senso de dono;\r\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.\nFerramentas/sistemas: Dilatômetro\r\nSedígrafo\r\nPorosímetro\r\nAnalisador de Área Superficial BET\r\nEspectrofotômetro\r\nGlossímetro\r\nViscosímetro\r\nAgitadores\r\nDiluidores\r\nMoinhos de Massa e Esmalte\r\nEmpilhadeira\r\nExcel Avançado\r\nAplicação de ferramentas Lean e 5S\r\nAuditorias de Processo\r\nInglês Intermediário\n\n2. Operador de Guilhotina — TIKTak Indústria Gráfica (Agosto 2012 a junho 2022)\n\n3. Estagiário — Icasa (2 meses ( 2018))\n\n4. Estagiário — LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)\nPrincipais atividades: Métodos e Procedimentos:\r\n\r\nAcidez (Total, Volátil e Fixa);\r\nGrau Alcoólico Real;\r\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\r\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\r\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\r\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\r\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados.\n\nFORMAÇÃO\nSuperior completo — Engenharia Química — UNIFAE\n\nCURSOS E QUALIFICAÇÕES\nNR 12\r\nNR 35\r\nExcel Avançado\r\nLean\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Agrícola / Campo"
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
        "cargo": "Fundidor de moldes"
      },
      {
        "empresa": "Trabalhei em uma adega de bebidas",
        "cargo": "Entregador"
      }
    ],
    "escolaridade": "Fundamental completo",
    "conhecimentos": "Estoque, Produção",
    "maquinas_equipamentos": "Pontes rolantes",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "regiao_interesse": "Andradas ou Poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "1.621 a 3.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Agrícola / Campo. Profissional com experiência como Fundidor de moldes na empresa Kohler Produtos para cozinhas e Banheiros LTDA, com 5 a 10 anos na função. Vivência em Fundir moldes. Conhecimentos em Estoque, Produção. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.",
    "curriculo_texto": "ADILSON ROBERTO DE SOUSA\nAndradas / MG\nWhatsApp: 35 933009513 | E-mail: adilsonrobertodesousa@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) / Trabalhador(a) Rural\nÁreas de interesse: Produção / Operações, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Agrícola / Campo. Profissional com experiência como Fundidor de moldes na empresa Kohler Produtos para cozinhas e Banheiros LTDA, com 5 a 10 anos na função. Vivência em Fundir moldes. Conhecimentos em Estoque, Produção. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundidor de moldes — Kohler Produtos para cozinhas e Banheiros LTDA (5 a 10 anos)\nPrincipais atividades: Fundir moldes\nFerramentas/sistemas: PONTES ROLANTES\n\n2. Fundidor de moldes — Trabalhei por 18 anos na Icasa fábrica de louça sanitária\n\n3. Entregador — Trabalhei em uma adega de bebidas\n\nFORMAÇÃO\nFundamental completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nEstoque, Produção\nMáquinas/equipamentos: Pontes rolantes\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Administrativo",
      "Liderança / Gestão"
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
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia mecânica",
    "instituicao_ensino": "Faculdade Pitagoras",
    "conhecimentos": "Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "lideranca": "No cargo de eng pleno, precisava liderar meu projeto, com isso precisava liderar as pessoas envolvidas nesse projeto para que eu conseguisse entregar dentro do prazo e com isso foi 4anos",
    "regiao_interesse": "Poços de calda, Campinas, jundiai, andradas",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "6.850",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.",
    "curriculo_texto": "JOEL RODRIGUES DA COSTA\nPoços de caldas / MG\nWhatsApp: 35997682664 | E-mail: joeljrcrodrigues12@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a), Outro, Projetista\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Eng pleno de desenvolvimento de novos produtos — Kohler (5 a 10 anos)\nPrincipais atividades: Liderar projetos\r\nCoordenação de equipe\r\nDesenvolvimento de soluções \r\nGestão de risco\r\nGestão de cronograma \r\nDesenvolvimento de desenhos 2d e 3d\nFerramentas/sistemas: Creo parametric/ inventor/ autocad para desenhos 2d e 3d\r\nPFMEA\r\nLean\r\n5s\n\nFORMAÇÃO\nSuperior completo — Engenharia mecânica — Faculdade Pitagoras\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Financeiro",
      "Compras / Suprimentos",
      "Tecnologia / TI",
      "Liderança / Gestão"
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
    "escolaridade": "Pós-graduação",
    "curso_formacao": "MBA em Gestão de Projetos",
    "instituicao_ensino": "USP",
    "conhecimentos": "Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "Líder das área de Projetos e área de Inovação Digital. Por 5 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal, São João da Boa Vista, Mogi Guaçu, Campinas, Pouso Alegre, Limeira, Rio Claro, Mogi Mirim",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "9500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "JOÃO OTÁVIO BERNARDES TORRES\nAndradas / MG\nWhatsApp: 35988013580 | E-mail: joao.b_torres@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAnalista Financeiro, Comprador(a) / Suprimentos, Técnico(a), Engenheiro(a), Supervisor(a) / Coordenador(a), Gerente\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Projetos Sr — Kohler (5 a 10 anos)\nPrincipais atividades: Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.\nFerramentas/sistemas: METODOLOGIAS DE GESTÃO DE PROJETOS:\r\nPMBOK (PMI)\r\nFEL\r\nScrum\r\nKanban\r\nPRINCE2\r\nWaterfall (Cascata)\r\nAgile\r\nSAFe (Scaled Agile Framework)\r\nDesign Thinking\r\n\r\n\r\nGERENCIAMENTO DE PROJETOS:\r\nMS Project\r\nTrello\r\nPlanner\r\nPrimavera P6\r\n\r\nGESTÃO ÁGIL / SCRUM:\r\nJira (Scrum/Kanban boards)\r\n\r\nCOMUNICAÇÃO E COLABORAÇÃO:\r\nMicrosoft Teams\r\nGoogle Workspace (Docs, Sheets, Slides)\r\nZoom / Google Meet\r\n\r\nANÁLISE DE DADOS / RELATÓRIOS\r\nExcel (avançado: tabelas dinâmicas, macros, Power Query)\r\nPower BI\r\n\r\nDOCUMENTAÇÃO E GESTÃO DE CONHECIMENTO\r\nSharePoint\r\nNotion\r\n\r\nGESTÃO FINANCEIRA/ORÇAMENTÁRIA DE PROJETOS\r\nSAP\r\nExcel (modelagem financeira)\r\n\r\nDIAGRAMAÇÃO E PLANEJAMENTO VISUAL\r\nVisio\r\n\r\nFERRAMENTAS DE ENGENHARIA CIVIL\r\nProjeto e Modelagem\r\nAutoCAD\r\nRevit (BIM)\r\nCivil 3D\r\nCálculo Estrutural\r\nTQS\r\n\r\nTopografia e Geoprocessamento\r\nAutoCAD Civil 3D\r\nQGIS\r\n\r\nFERRAMENTAS DE ENGENHARIA\r\nModelagem e Simulação de Processos\r\nFlexSim\r\n\r\nQualidade e Melhoria Contínua\r\nMinitab (estatística para Six Sigma)\r\nExcel (para, 5W2H, Ishikawa, etc.)\n\n2. Analista de Desenvolvimento de Produtos — Kohler (mai/2019 a mar/2021)\nPrincipais atividades: Atuei diretamente na industrialização de novos produtos — desenvolvendo processos de fabricação, ferramental e equipamentos, validando protótipos e apoiando o ramp-up de produção — garantindo a conformidade com normas técnicas e certificando os critérios de qualidade para a produção em larga escala\n\nFORMAÇÃO\nPós-graduação — MBA em Gestão de Projetos — USP\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Liderança / Gestão"
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
    "escolaridade": "Médio incompleto",
    "conhecimentos": "Excel, Word, Produção",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "lideranca": "Especialista praticamente um líder tomava conta de 5 pessoas",
    "regiao_interesse": "Andradas poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão. Profissional com experiência como Especialista na empresa Kohler, com 2 a 5 anos na função. Vivência em Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar. Conhecimentos em Excel, Word, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.",
    "curriculo_texto": "CARLOS EDUARDO DE OLIVEIRA PERES MENDES\nAndradas / MG\nWhatsApp: 35998905158 | E-mail: carlosperesmendes66@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Auxiliar / Inspetor(a) da Qualidade\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Liderança / Gestão. Profissional com experiência como Especialista na empresa Kohler, com 2 a 5 anos na função. Vivência em Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar. Conhecimentos em Excel, Word, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Especialista — Kohler (2 a 5 anos)\nPrincipais atividades: Garantir segurança,qualidade, produção, responder pela qualidade pelos defeitos e tomar conta da equipe com 5 pessoas da linha mostra os defeitos q sai do forno para equipe e orientar como ia melhorar\nFerramentas/sistemas: Trabalhava com uma máquina q fazia canal nas peças aonde esmaltação por dentro da peça\n\n2. Pintor — Rr pintura (2016 a 2021)\nPrincipais atividades: Pintava e preparava casa\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição"
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
    "escolaridade": "Fundamental incompleto",
    "conhecimentos": "Produção, Qualidade",
    "caracteristicas": "Responsável, Organizado(a), Pontual",
    "regiao_interesse": "Andradas e Poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Classificador na empresa Kholer, com 2 a 5 anos na função. Vivência em Reparo de peças. Conhecimentos em Produção, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual.",
    "curriculo_texto": "PEDRO HENRIQUE FEITOSA GOMES\nAndradas mg / MG\nWhatsApp: 35 9 97517660 | E-mail: pedrohenriquegosmes999@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Separador(a) / Conferente, Auxiliar de Expedição, Auxiliar / Assistente Administrativo\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição. Profissional com experiência como Classificador na empresa Kholer, com 2 a 5 anos na função. Vivência em Reparo de peças. Conhecimentos em Produção, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Classificador — Kholer (2 a 5 anos)\nPrincipais atividades: Reparo de peças\nFerramentas/sistemas: Instrumentos de pintura, massas e lixas\n\nFORMAÇÃO\nFundamental incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Serviços Gerais / Apoio"
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
    "experiencias_adicionais": "Já trabalhei em fábrica  de móveis",
    "escolaridade": "Fundamental completo",
    "instituicao_ensino": "E estadual Alcides mosconi",
    "conhecimentos": "Produção",
    "caracteristicas": "Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal",
    "lideranca": "Nao",
    "regiao_interesse": "Andradas",
    "pretensao_salarial": "3.500,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio. Profissional com experiência como Classificador na empresa Kohler, com 5 a 10 anos na função. Vivência em Reparos,retoques. Conhecimentos em Produção. Características profissionais declaradas: Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal.",
    "curriculo_texto": "WILSON MORETTI FILHO\nAndradas / MG\nWhatsApp: 35 99816-8327 | E-mail: Wilsonmorettifilho@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Serviços Gerais\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Serviços Gerais / Apoio. Profissional com experiência como Classificador na empresa Kohler, com 5 a 10 anos na função. Vivência em Reparos,retoques. Conhecimentos em Produção. Características profissionais declaradas: Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Classificador — Kohler (5 a 10 anos)\nPrincipais atividades: Reparos,retoques\nFerramentas/sistemas: Lixa,maquina de lixar e furar, luz de cura\n\nOutras experiências:\nJá trabalhei em fábrica  de móveis\n\nFORMAÇÃO\nFundamental completo — E estadual Alcides mosconi\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "05/2021 a 02/2022",
        "atividades": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tCriação, controle e análise de dados de indicadores chaves;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      },
      {
        "empresa": "Kohler",
        "cargo": "Assistente de Laboratório",
        "periodo": "02/2020 a 08/2020",
        "atividades": "•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      }
    ],
    "experiencias_adicionais": "Cargo: Assistente de Controle de Processos – 02/2020 – 08/2020\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.",
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel em Engenharia Química",
    "instituicao_ensino": "Unifae",
    "cursos_qualificacoes": "Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP",
    "caracteristicas": "Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Liderança de estagiários e técnicos por 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Jundiaí, Mogi Mirim, Campinas, São João da Boa Vista, Aguaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "R$8.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "JÉSSICA CONSTANTINO\nAndradas / MG\nWhatsApp: 35991797966 | E-mail: jessicaconstantino@hotmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Processos Pleno — Kohler (1 a 2 anos)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tPesquisa e desenvolvimento de novas matérias-primas;\r\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\r\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\r\n•\tFormulação de reparos a frio para louças cerâmicas;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\nFerramentas/sistemas: SAP, Excel, Power BI, Power Apps, Power Poing e Word\n\n2. Engenheira de Processos Júnior — Kohler (07/2022 a 03/2025)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\r\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\r\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\r\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\r\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\n\n3. Analista de Processos — Kohler (05/2021 a 02/2022)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\r\n•\tApontamento e controle de produção;\r\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\r\n•\tCriação, controle e análise de dados de indicadores chaves;\r\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\n4. Assistente de Laboratório — Kohler (02/2020 a 08/2020)\nPrincipais atividades: •\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\r\n•\tControle e medição de testes de queima;\r\n•\tLançamento e conferência de dados gerados pelo laboratório;\r\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\nOutras experiências:\nCargo: Assistente de Controle de Processos – 02/2020 – 08/2020\r\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Unifae\n\nCURSOS E QUALIFICAÇÕES\nTreinamento para Liderança - Engaja - 2025\r\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\r\nGreen Belt - RL & Associados – 2017\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP\n\nINFORMAÇÕES ADICIONAIS\nInglês - nível intermediário (Cursando)\r\nMBA em Engenharia e Gestão da Qualidade - Unifae - Concluído em 2022"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Atendimento / Recepção",
      "Serviços Gerais / Apoio",
      "Agrícola / Campo"
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
        "periodo": "Junho 2017 a outro de outubro de 2020",
        "atividades": "Cuidar da manutenção e limpeza do local inclusive jardinagem."
      },
      {
        "empresa": "C Q Sab Lanches",
        "cargo": "Balconista"
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Administração",
    "instituicao_ensino": "Anhanguera",
    "cursos_qualificacoes": "NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática",
    "conhecimentos": "Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture",
    "maquinas_equipamentos": "De fundição",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados",
    "lideranca": "Líder de turno 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "disponibilidade_horario": "Comercial, Escala",
    "pretensao_salarial": "Mínimo R$2500,00",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.",
    "curriculo_texto": "FERNANDO A. ALEXANDRE\nAndradas / MG\nWhatsApp: 35997131981 | E-mail: fernandoalexandre448@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Motorista / Entregador(a), Auxiliar / Assistente Administrativo, Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Líder de turno — Kohler (5 a 10 anos)\nPrincipais atividades: Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.\nFerramentas/sistemas: Trabalha com o processo de Lean manufacture.\n\n2. Operador de máquina de fundição — Icasa (Março de 2011 a maio de 2016)\nPrincipais atividades: Destacamento de peças e acabamento.\n\n3. Zelador — Instituto de educação Alfa (Junho 2017 a outro de outubro de 2020)\nPrincipais atividades: Cuidar da manutenção e limpeza do local inclusive jardinagem.\n\n4. Balconista — C Q Sab Lanches\n\nFORMAÇÃO\nSuperior completo — Administração — Anhanguera\nEm andamento: Pós graduação em engenharia da qual e pós graduação em Lean manufacture.\n\nCURSOS E QUALIFICAÇÕES\nNR 1, NR 12\r\nExcel\r\nWord\r\nApresentação e noções básicas de Power BI\r\nLogística integrada empresarial\r\nAdministração geral\r\nGestão e controladoria de custos empresariais\r\nMinicurso relações humanas no trabalho \r\nProdutividade \r\nMinicurso inteligência emocional no trabalho de segui\r\nPlanejamento pessoal de ações \r\nPacote office \r\nLiderança e gestão de pessoas na prática\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture\nMáquinas/equipamentos: De fundição\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "Abril/2021 a setembro/2023",
        "atividades": "- Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\r\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\r\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\r\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\r\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\r\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\r\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\r\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações"
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel em Engenharia Química",
    "instituicao_ensino": "Instituto Federal do Sul de Minas - Campus Pouso Alegre",
    "conhecimentos": "Excel, Word, Informática, Qualidade",
    "maquinas_equipamentos": "Cerra de precisão",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "disponibilidade_horario": "Comercial, 2º turno",
    "pretensao_salarial": "R$ 3700,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.",
    "curriculo_texto": "LUZIELE DIONISIO FALDA\nAndradas / MG\nWhatsApp: (35)997253903 | E-mail: luzieledionisio@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de Processos — Kohler (2 a 5 anos)\nPrincipais atividades: - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\r\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\r\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\r\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\r\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\r\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\r\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\r\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\r\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\r\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.\nFerramentas/sistemas: Excel, word, PowerPoint, dilatômetro, sedígrafo, área superficial\n\n2. Técnico em Química — AP Teixeira Laboratório Analítico (Outubro/2023 a janeiro/2024)\nPrincipais atividades: - Atuação na Gestão da Qualidade Laboratorial, conforme requisitos da ABNT NBR ISO/IEC 17025:2017, com seleção, validação e implementação de POPs.\r\n- Execução e interpretação de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS.\r\n- Calibração e verificação de equipamentos laboratoriais de bancada e campo, assegurando a confiabilidade dos resultados analíticos.\r\n- Avaliação de reagentes, métodos de desinfecção e alternativas de tratamento de efluentes, contribuindo para a melhoria dos processos.\n\n3. Labortorista — MG Ambiental (Abril/2021 a setembro/2023)\nPrincipais atividades: - Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\r\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\r\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\r\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\r\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\r\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\r\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\r\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Instituto Federal do Sul de Minas - Campus Pouso Alegre\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Qualidade\nMáquinas/equipamentos: Cerra de precisão\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Serviços Gerais / Apoio"
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
    "escolaridade": "Médio completo",
    "curso_formacao": "Não tenho",
    "instituicao_ensino": "Escolar DR Alcides Mosconi",
    "cursos_qualificacoes": "Não tenho mais pretendo começar fazer.",
    "conhecimentos": "Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom",
    "maquinas_equipamentos": "Caneta pneumática bico de ar retifica",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "lideranca": "Mas já me indicaram.",
    "regiao_interesse": "Sudeste, Andradas, poços de Caldas, Pinhal, jardim",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno, Qualquer horário, Escala",
    "pretensao_salarial": "1.900 a 2.300",
    "inicio_imediato": "Não",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio. Profissional com experiência como RETOCADOR na empresa Kohler Brasil, com 2 a 5 anos na função. Vivência em Retocar peças com defeito, que vinhão de outros setores.. Conhecimentos em Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom. Qualificações: Não tenho mais pretendo começar fazer.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.",
    "curriculo_texto": "VITOR MANOEL JOVENTINO DA SILVA GARCIA\nAndradas / MG\nWhatsApp: 35997040566 | E-mail: vitormanoeljoventino@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Estoquista / Almoxarife, Separador(a) / Conferente, Serviços Gerais, Outro, Empresa louças sanitária, RETOCADOR\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Serviços Gerais / Apoio. Profissional com experiência como RETOCADOR na empresa Kohler Brasil, com 2 a 5 anos na função. Vivência em Retocar peças com defeito, que vinhão de outros setores.. Conhecimentos em Produção, Outro: Trabalho em restaurante, ou bar , como barmem e garçom. Qualificações: Não tenho mais pretendo começar fazer.. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. RETOCADOR — Kohler Brasil (2 a 5 anos)\nPrincipais atividades: Retocar peças com defeito, que vinhão de outros setores.\nFerramentas/sistemas: Caneta pneumática, bico de ar, retifica.\n\n2. Ajudante de fundidor — Ajudante de fundidor na Icasa (8 meses)\nPrincipais atividades: Trabalhei na lavita, na roça mais subir pra qualidade depois de 2 meses, só que saí antes de exercer o cargo, tava precisando de dinheiro e fui prá outra empresa\n\nFORMAÇÃO\nMédio completo — Não tenho — Escolar DR Alcides Mosconi\n\nCURSOS E QUALIFICAÇÕES\nNão tenho mais pretendo começar fazer.\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Outro: Trabalho em restaurante, ou bar , como barmem e garçom\nMáquinas/equipamentos: Caneta pneumática bico de ar retifica\n\nINFORMAÇÕES ADICIONAIS\nNão"
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
    "area_principal_interesse": "Produção / Operações",
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
        "periodo": "4 anos e 2 mês",
        "atividades": "Rigação"
      },
      {
        "empresa": "Kolher",
        "cargo": "Operador de máquinas",
        "periodo": "8 anos",
        "atividades": "Fundidor"
      }
    ],
    "escolaridade": "Fundamental completo",
    "conhecimentos": "Produção, Operação de máquinas",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade",
    "regiao_interesse": "Andradas, Poços de caldas,espírito do pilhal",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "resumo_profissional": "Áreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.",
    "curriculo_texto": "ALEX DIAS DA SILVA\nAndradas / MG\nWhatsApp: 35997470544 | E-mail: alex_dias2021@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina\nÁreas de interesse: Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operado de máquinas (Fundidor) — Kolher (5 a 10 anos)\nFerramentas/sistemas: Máquina na banca de enchimento de fazer as perças.\n\n2. Avicultura — Granja Almeida (1 ano e 5 mes)\nPrincipais atividades: Aveicutura de corte\n\n3. Cultivo de flores — Fazenda Dallas (4 anos e 2 mês)\nPrincipais atividades: Rigação\n\n4. Operador de máquinas — Kolher (8 anos)\nPrincipais atividades: Fundidor\n\nFORMAÇÃO\nFundamental completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Operação de máquinas\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
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
    "escolaridade": "Superior completo",
    "curso_formacao": "Tecnologia em Gestão da Qualidade",
    "instituicao_ensino": "Universidade Pitágoras Unopar Anhanguera",
    "cursos_qualificacoes": "Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica",
    "conhecimentos": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "maquinas_equipamentos": "Empilhadeira, mini carregadeira",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas",
    "lideranca": "Líder e supervisão  11 anos",
    "regiao_interesse": "Andradas , Poços de Caldas e Jundiaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "8.000,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.",
    "curriculo_texto": "RONI DONISETI FERRAZ\nAndradas / MG\nWhatsApp: 35988385312 | E-mail: roniandradas@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nLíder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor produção Massa e Esmalte — Kohler (Mais de 10 anos)\nPrincipais atividades: Supervisor de produção Massa, Esmalte e ETA\nFerramentas/sistemas: Sistema de qualidade pré controles, metrologias de laboratório com equipamentos para liberação dos produtos.\n\n2. Laboratorio — Cerâmica Vila Rica (1998 a 2010)\nPrincipais atividades: Reologia de massa , esmalte , reparos a frio resinas e esmalte para reparos requeima\n\nFORMAÇÃO\nSuperior completo — Tecnologia em Gestão da Qualidade — Universidade Pitágoras Unopar Anhanguera\n\nCURSOS E QUALIFICAÇÕES\nCursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\nMáquinas/equipamentos: Empilhadeira, mini carregadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Motorista / Transporte",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Manutenção Mecânica",
      "Qualidade",
      "Comercial / Vendas"
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
    "escolaridade": "Médio incompleto",
    "conhecimentos": "Vendas, Logística, Produção",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados",
    "lideranca": "Supervisor de produção 3anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 1º turno",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas. Profissional com experiência como Supervisor na empresa Kholer, com 5 a 10 anos na função. Vivência em Inspecionar pecas. Conhecimentos em Vendas, Logística, Produção. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados.",
    "curriculo_texto": "LUIZ HENRIQUE DE SOUZA\nAndradas / MG\nWhatsApp: 35992636485 | E-mail: souzaluizhenrique32@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Máquina, Auxiliar de Logística, Estoquista / Almoxarife, Operador(a) de Empilhadeira, Motorista / Entregador(a), Mecânico(a) de Manutenção\nÁreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Motorista / Transporte, Produção / Operações, Logística / Estoque / Expedição, Manutenção Mecânica, Qualidade, Comercial / Vendas. Profissional com experiência como Supervisor na empresa Kholer, com 5 a 10 anos na função. Vivência em Inspecionar pecas. Conhecimentos em Vendas, Logística, Produção. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kholer (5 a 10 anos)\nPrincipais atividades: Inspecionar pecas\nFerramentas/sistemas: Bancas aromatizadas\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nVendas, Logística, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Logística / Estoque / Expedição",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Administrativo",
      "Recursos Humanos / Departamento Pessoal",
      "Liderança / Gestão"
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
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Administração",
    "instituicao_ensino": "Uninter",
    "conhecimentos": "Excel, Word, Estoque, Logística, Administrativo",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados",
    "regiao_interesse": "Poços de Caldas",
    "disponibilidade_horario": "Comercial, 1º turno",
    "pretensao_salarial": "3.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão. Profissional com experiência como Analista de PPCP na empresa Kohler, com 1 a 2 anos na função. Vivência em Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.. Conhecimentos em Excel, Word, Estoque, Logística, Administrativo. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.",
    "curriculo_texto": "JUAN RENAN CARVALHO BATISTA\nPoços de Caldas / MG\nWhatsApp: 35998609435 | E-mail: juanbatista1994@gmail.com\nCNH: Outra - A e B\n\nOBJETIVO PROFISSIONAL\nAuxiliar de Logística, Auxiliar de Expedição, Técnico(a) da Qualidade, Analista Administrativo, Analista de RH / DP, Líder / Encarregado(a)\nÁreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Logística / Estoque / Expedição, Qualidade, Administrativo, Recursos Humanos / Departamento Pessoal, Liderança / Gestão. Profissional com experiência como Analista de PPCP na empresa Kohler, com 1 a 2 anos na função. Vivência em Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.. Conhecimentos em Excel, Word, Estoque, Logística, Administrativo. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Analista de PPCP — Kohler (1 a 2 anos)\nPrincipais atividades: Programar produção e embalagem de produtos, movimentação entre depósitos de produção e faturamento, inventário cíclico e geral da planta, recebimento e entrada de produtos importados econtrole de produtos devolvidos.\nFerramentas/sistemas: Excel, sistema SAP\n\n2. Fundidor de formas — Icasa (Out 2012 a set 2014)\nPrincipais atividades: Fundir moldes em gesso.\n\nFORMAÇÃO\nSuperior incompleto — Administração — Uninter\nEm andamento: Administração\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Logística, Administrativo\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Qualidade"
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
    "escolaridade": "Médio incompleto",
    "cursos_qualificacoes": "Nr10,nr11,nr12,empilhadeira",
    "conhecimentos": "Produção, Operação de máquinas",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas",
    "lideranca": "Lider 15 anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Lider na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe e trabalhar juntos na entrega. Conhecimentos em Produção, Operação de máquinas. Qualificações: Nr10,nr11,nr12,empilhadeira. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas.",
    "curriculo_texto": "VANDERSON RODRIGO MAZARINI\nAndradas / MG\nWhatsApp: 35998966415 | E-mail: Vandersonrodrigo4@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Operador(a) de Máquina, Auxiliar de Logística, Estoquista / Almoxarife, Separador(a) / Conferente, Líder / Encarregado(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Lider na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe e trabalhar juntos na entrega. Conhecimentos em Produção, Operação de máquinas. Qualificações: Nr10,nr11,nr12,empilhadeira. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Lider — Kohler (Mais de 10 anos)\nPrincipais atividades: Liderar equipe e trabalhar juntos na entrega\nFerramentas/sistemas: Empilhadeira paleteira eletrica\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNr10,nr11,nr12,empilhadeira\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Operação de máquinas\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Segurança do Trabalho"
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
        "periodo": "2012 a 2020",
        "atividades": "Gestão de pessoas \r\nGestão de normas \r\nGestão de novos projetos"
      }
    ],
    "escolaridade": "Pós-graduação",
    "curso_formacao": "Engenharia de segurança do trabalho",
    "instituicao_ensino": "Faculdade DellVale",
    "cursos_qualificacoes": "NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista",
    "conhecimentos": "Excel, Word, Informática, Segurança do trabalho, Compras",
    "maquinas_equipamentos": "Equipamentos de avaliação ambiental",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal",
    "lideranca": "Encarregado de produção 13 anos\r\nSupervisor de EHS 1 ano",
    "regiao_interesse": "Andradas, Poços de Caldas, Mogi mirim,Mogi Guaçu",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "pretensao_salarial": "6.000 a 15.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Segurança do Trabalho. Profissional com experiência como Técnico de segurança do trabalho na empresa Kohler produtos para cozinhas e banheiros Ltda, com mais de 10 anos na função. Vivência em Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos. Conhecimentos em Excel, Word, Informática, Segurança do trabalho, Compras. Qualificações: NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal.",
    "curriculo_texto": "ISRAEL AUGUSTO CAMPOS\nAndradas / MG\nWhatsApp: 35984490490 | E-mail: israel32campos@gmail.com\nCNH: Outra - AD\n\nOBJETIVO PROFISSIONAL\nTécnico(a) de Segurança do Trabalho, Engenheiro(a)\nÁreas de interesse: Engenharia / Técnico, Segurança do Trabalho\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Segurança do Trabalho. Profissional com experiência como Técnico de segurança do trabalho na empresa Kohler produtos para cozinhas e banheiros Ltda, com mais de 10 anos na função. Vivência em Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos. Conhecimentos em Excel, Word, Informática, Segurança do trabalho, Compras. Qualificações: NR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de segurança do trabalho — Kohler produtos para cozinhas e banheiros Ltda (Mais de 10 anos)\nPrincipais atividades: Gestão de normas de segurança \r\nGestão de não conformidade e inspeção \r\nAplicação de treinamentos\nFerramentas/sistemas: Sistema Soc\n\n2. Encarregado de produção — Lavtel indústria e Comércio Ltda (1999 a 2012)\nPrincipais atividades: Gestão de produção \r\nGestão de pessoas\n\n3. Supervisor de EHS — Kohler produtos para cozinhas e banheiros (2012 a 2020)\nPrincipais atividades: Gestão de pessoas \r\nGestão de normas \r\nGestão de novos projetos\n\nFORMAÇÃO\nPós-graduação — Engenharia de segurança do trabalho — Faculdade DellVale\n\nCURSOS E QUALIFICAÇÕES\nNR 12\r\nNR 35 \r\nNR 33\r\nInstrutor de Brigadista\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Segurança do trabalho, Compras\nMáquinas/equipamentos: Equipamentos de avaliação ambiental\n\nINFORMAÇÕES ADICIONAIS\nTenho cursos adicionais voltado para área de perícia trabalhista."
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Logística / Estoque / Expedição",
      "Motorista / Transporte"
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
        "periodo": "2006 até 2010, mais ou menos",
        "atividades": "Garçom, caixa e líder dos garçons"
      },
      {
        "empresa": "Nao",
        "cargo": "Nao",
        "periodo": "Nao",
        "atividades": "Nao"
      }
    ],
    "experiencias_adicionais": "Nao",
    "escolaridade": "Médio completo",
    "curso_formacao": "Garçom, barrem, gestão",
    "instituicao_ensino": "Senac",
    "cursos_qualificacoes": "Gestao",
    "conhecimentos": "Excel, Informática, Estoque, Produção",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados",
    "lideranca": "Líder de esmaltação 8 anos, supervisor de fluxo e inspeção 7 anos",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 2º turno",
    "pretensao_salarial": "No meu último projeto, minha remuneração era de 9,000 mais benefícios, mas vejo o valor da oportunidade e estou disposto a negociar conforme a proposta de benefícios",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Supervisor na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar uma equipe de produção, com foco em segurança, produção e qualidade. Conhecimentos em Excel, Informática, Estoque, Produção. Qualificações: Gestao. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados.",
    "curriculo_texto": "REGINALDO DE PÁDUA\nAndradas / MG\nWhatsApp: 55 35 99257-9883 | E-mail: paduareginaldo41@gmail.com\nCNH: A\n\nOBJETIVO PROFISSIONAL\nLíder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Supervisor na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar uma equipe de produção, com foco em segurança, produção e qualidade. Conhecimentos em Excel, Informática, Estoque, Produção. Qualificações: Gestao. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Facilidade para aprender, Agilidade, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kohler (Mais de 10 anos)\nPrincipais atividades: Liderar uma equipe de produção, com foco em segurança, produção e qualidade\nFerramentas/sistemas: Notebook, celular\n\n2. Chefe de salao — Casa Geraldo (2002 até 2005, mais ou menos)\nPrincipais atividades: Barmen, garçom, líder da equipe de salao\n\n3. Líder dos garçons — Aldeia velha (2006 até 2010, mais ou menos)\nPrincipais atividades: Garçom, caixa e líder dos garçons\n\n4. Nao — Nao (Nao)\nPrincipais atividades: Nao\n\nOutras experiências:\nNao\n\nFORMAÇÃO\nMédio completo — Garçom, barrem, gestão — Senac\n\nCURSOS E QUALIFICAÇÕES\nGestao\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Informática, Estoque, Produção\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Qualidade",
    "areas_adicionais_interesse": [
      "Administrativo",
      "Contábil / Fiscal",
      "Tecnologia / TI"
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
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Ciências contabeis",
    "instituicao_ensino": "Anhanguera",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade",
    "caracteristicas": "Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas",
    "disponibilidade_horario": "Qualquer horário",
    "resumo_profissional": "Áreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI. Profissional com experiência como Sênior na empresa Kohker, com 5 a 10 anos na função. Vivência em Classificador  retocador cipeiro  brigasista meio ambiente. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "PAULO GUILHERME MIOLO\nAndradas / MG\nWhatsApp: 35 992395726 | E-mail: Gui.miolo2019@gmail.com\nCNH: C\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Vendedor(a) / Consultor(a) Comercial, Suporte / TI\nÁreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Qualidade, Administrativo, Contábil / Fiscal, Tecnologia / TI. Profissional com experiência como Sênior na empresa Kohker, com 5 a 10 anos na função. Vivência em Classificador  retocador cipeiro  brigasista meio ambiente. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Sênior — Kohker (5 a 10 anos)\nPrincipais atividades: Classificador  retocador cipeiro  brigasista meio ambiente\nFerramentas/sistemas: Empilhadeira\n\nFORMAÇÃO\nSuperior incompleto — Ciências contabeis — Anhanguera\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Vendas, Estoque, Logística, Expedição, Produção, Operação de máquinas, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Recursos Humanos, Contabilidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade"
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
        "periodo": "2007/2012",
        "atividades": "Produção de flores"
      }
    ],
    "escolaridade": "Médio completo",
    "curso_formacao": "Técnico em contabilidade",
    "instituicao_ensino": "Senc",
    "cursos_qualificacoes": "Técnico em contabilidade",
    "conhecimentos": "Excel",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Comercial, 1º turno, 2º turno",
    "pretensao_salarial": "3000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Operador de shanque na empresa Kohler, com mais de 10 anos na função. Vivência em Produção. Conhecimentos em Excel. Qualificações: Técnico em contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.",
    "curriculo_texto": "ROSEANE PEREIRA DA SILVA GONÇALVES\nAndradas / MG\nWhatsApp: 35992472355 | E-mail: roseanegonalves1986@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina, Preparador(a) / Regulador(a) de Máquina, Estoquista / Almoxarife\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como Operador de shanque na empresa Kohler, com mais de 10 anos na função. Vivência em Produção. Conhecimentos em Excel. Qualificações: Técnico em contabilidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operador de shanque — Kohler (Mais de 10 anos)\nPrincipais atividades: Produção\n\n2. Produção — Trabalho rural swart rosas (2003/2007)\nPrincipais atividades: Produção de rosa\n\n3. Produção — Sítio lagoa dourada (2007/2012)\nPrincipais atividades: Produção de flores\n\nFORMAÇÃO\nMédio completo — Técnico em contabilidade — Senc\n\nCURSOS E QUALIFICAÇÕES\nTécnico em contabilidade\n\nCONHECIMENTOS PROFISSIONAIS\nExcel\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte",
      "Liderança / Gestão"
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
        "cargo": "Líder"
      },
      {
        "empresa": "Coca cola",
        "cargo": "Operador de Empilhadeira"
      }
    ],
    "escolaridade": "Médio completo",
    "curso_formacao": "Operador de Empilhadeira",
    "cursos_qualificacoes": "Operador de Empilhadeira \r\nLiderança",
    "conhecimentos": "Estoque, Logística, Expedição, Produção",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal",
    "lideranca": "Líder\r\n6 anos",
    "disponibilidade_horario": "Qualquer horário",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão. Profissional com experiência como Operador de empilhadeira na empresa Coca cola, com 5 a 10 anos na função. Vivência em Estoque. Conhecimentos em Estoque, Logística, Expedição, Produção. Qualificações: Operador de Empilhadeira \r\nLiderança. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal.",
    "curriculo_texto": "LUIZ FERNANDO INOCENCIO\nAndradas / MG\nWhatsApp: 19 9 9999 0407 | E-mail: Luizinocencio.com.br@gmail.com\nCNH: Outra - A D\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Operador(a) de Máquina, Separador(a) / Conferente, Operador(a) de Empilhadeira, Auxiliar de Expedição, Motorista / Entregador(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte, Liderança / Gestão. Profissional com experiência como Operador de empilhadeira na empresa Coca cola, com 5 a 10 anos na função. Vivência em Estoque. Conhecimentos em Estoque, Logística, Expedição, Produção. Qualificações: Operador de Empilhadeira \r\nLiderança. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operador de empilhadeira — Coca cola (5 a 10 anos)\nPrincipais atividades: Estoque\nFerramentas/sistemas: Empilhadeira \r\nColetores\n\n2. Líder — Kohler\n\n3. Operador de Empilhadeira — Coca cola\n\nFORMAÇÃO\nMédio completo — Operador de Empilhadeira\n\nCURSOS E QUALIFICAÇÕES\nOperador de Empilhadeira \r\nLiderança\n\nCONHECIMENTOS PROFISSIONAIS\nEstoque, Logística, Expedição, Produção\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Manutenção Mecânica",
    "areas_adicionais_interesse": [
      "Motorista / Transporte",
      "Contábil / Fiscal",
      "Recursos Humanos / Departamento Pessoal"
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
    "escolaridade": "Técnico",
    "curso_formacao": "Tc mecânico",
    "instituicao_ensino": "Etec",
    "cursos_qualificacoes": "Vários e informática",
    "conhecimentos": "Excel, Word, Informática, Manutenção, Mecânica",
    "maquinas_equipamentos": "Máquina pesada",
    "caracteristicas": "Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "regiao_interesse": "Qualquer cidade",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal. Profissional com experiência como Tc mecânico na empresa Kholer, com 1 a 2 anos na função. Vivência em Bomba peneumunia mas tem experiência em várias áreas da mecânica. Conhecimentos em Excel, Word, Informática, Manutenção, Mecânica. Qualificações: Vários e informática. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "PAULO RICARDO BRAZ\nAndradas / MG\nWhatsApp: 36999878867 | E-mail: paulo.r.b25@hotmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nPreparador(a) / Regulador(a) de Máquina, Motorista / Entregador(a), Mecânico(a) de Manutenção\nÁreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Manutenção Mecânica, Motorista / Transporte, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal. Profissional com experiência como Tc mecânico na empresa Kholer, com 1 a 2 anos na função. Vivência em Bomba peneumunia mas tem experiência em várias áreas da mecânica. Conhecimentos em Excel, Word, Informática, Manutenção, Mecânica. Qualificações: Vários e informática. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Tc mecânico — Kholer (1 a 2 anos)\nPrincipais atividades: Bomba peneumunia mas tem experiência em várias áreas da mecânica\nFerramentas/sistemas: De tudo um pouco\n\n2. Mecânico — Icasa (Fiori)\nPrincipais atividades: Solda lixadeira pintura\n\nFORMAÇÃO\nTécnico — Tc mecânico — Etec\n\nCURSOS E QUALIFICAÇÕES\nVários e informática\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Manutenção, Mecânica\nMáquinas/equipamentos: Máquina pesada\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Motorista / Transporte"
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
    "escolaridade": "Médio incompleto",
    "conhecimentos": "Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Fundador operador de máquinas shanks || na empresa Kholler, com 1 a 2 anos na função. Vivência em Fazia louças sanitárias spam bacias de colagem. Conhecimentos em Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade.",
    "curriculo_texto": "LUCAS LOURENÇO CAETANO\nAndradas / MG\nWhatsApp: 35999859710 | E-mail: lucaslourencocaetano@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina, Estoquista / Almoxarife, Operador(a) de Empilhadeira, Motorista / Entregador(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Motorista / Transporte. Profissional com experiência como Fundador operador de máquinas shanks || na empresa Kholler, com 1 a 2 anos na função. Vivência em Fazia louças sanitárias spam bacias de colagem. Conhecimentos em Atendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundador operador de máquinas shanks || — Kholler (1 a 2 anos)\nPrincipais atividades: Fazia louças sanitárias spam bacias de colagem\nFerramentas/sistemas: Torno, raspas, esponjas, manipulador etc.\n\n2. Operador de estacionamento rotativo — Serbet (21/03/2023 a 01/06/2024)\nPrincipais atividades: Monitor as vagas e carros que estava usando o estacionamento rotativo zona azul.\n\nFORMAÇÃO\nMédio incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nAtendimento ao cliente, Vendas, Produção, Operação de máquinas, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Liderança / Gestão",
      "Serviços Gerais / Apoio",
      "Agrícola / Campo"
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
        "periodo": "2anos",
        "atividades": "Chicote de carro"
      },
      {
        "empresa": "Alstromelia lagoa dourada",
        "cargo": "Na coleta da produção e embalagem",
        "periodo": "Roseira florada da serra",
        "atividades": "Colheita embalagem de rosa"
      }
    ],
    "experiencias_adicionais": "Tomates fonte verde \r\nColheita,e pesagem de tomate.",
    "escolaridade": "Médio completo",
    "curso_formacao": "Liderança computação básica",
    "conhecimentos": "Excel, Word, Informática",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança",
    "lideranca": "Na roseira no campo e no barracão",
    "regiao_interesse": "Em Andradas",
    "disponibilidade_horario": "1º turno",
    "pretensao_salarial": "Uns 2,500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Fundição na empresa Kohler, com 2 a 5 anos na função. Vivência em Produção de louça sanitária,ex:caixa,cuba, lavatório etc.. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.",
    "curriculo_texto": "SILVÂNIA GOMES DA SILVA\nAndradas / MG\nWhatsApp: 35991088740 | E-mail: silvaniagoms017@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Líder / Encarregado(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Fundição na empresa Kohler, com 2 a 5 anos na função. Vivência em Produção de louça sanitária,ex:caixa,cuba, lavatório etc.. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Fundição — Kohler (2 a 5 anos)\nPrincipais atividades: Produção de louça sanitária,ex:caixa,cuba, lavatório etc.\nFerramentas/sistemas: Operadora de máquina shanks.\n\n2. Liderança — Rosera florada da serra (5 anos)\nPrincipais atividades: Organizar equipe, separar pedidos, atender clientes\n\n3. Ajudante de produção — Dephai (2anos)\nPrincipais atividades: Chicote de carro\n\n4. Na coleta da produção e embalagem — Alstromelia lagoa dourada (Roseira florada da serra)\nPrincipais atividades: Colheita embalagem de rosa\n\nOutras experiências:\nTomates fonte verde \r\nColheita,e pesagem de tomate.\n\nFORMAÇÃO\nMédio completo — Liderança computação básica\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Marketing / Comunicação",
      "Tecnologia / TI"
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
    "escolaridade": "Médio completo",
    "curso_formacao": "Atualmente estou fazendo um curso de informática",
    "cursos_qualificacoes": "Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.",
    "conhecimentos": "Informática, Produção",
    "maquinas_equipamentos": "Tenho experiência prática na operação de fornos industriais de alta temperatura, manipulador mecânico para o carregamento de cargas e rebocador industrial para a movimentação de vagonetas.Além disso, opero o computador para a digitação,registro e controle de fluxo de peças no sistema de produção.",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas",
    "regiao_interesse": "Meu foco principal é Andradas, mas tenho total interesse e disponibilidade para trabalhar em cidades vizinhas da região, como poços de Caldas, Espírito santo do pinhal ou são João da boa vista , caso a empresa ofereça trasporte fretado ou ajuda de custo .",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "No momento, não tenho um valor fixo fechado.Estou aberto a entender a proposta da empresa para o cargo e agradeço se puderem avaliar meu perfil dentro da tabela salarial praticada por vocês para essa função.",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI. Profissional com experiência como Forneiro na empresa Kohler, com 2 a 5 anos na função. Vivência em Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.. Conhecimentos em Informática, Produção. Qualificações: Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.",
    "curriculo_texto": "RICARDO SILVA SANTOS\nAndradas / MG\nWhatsApp: 35998659801 | E-mail: ricardosilvasantos1519@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nEstoquista / Almoxarife, Marketing / Comunicação, Suporte / TI, Líder / Encarregado(a)\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Marketing / Comunicação, Tecnologia / TI. Profissional com experiência como Forneiro na empresa Kohler, com 2 a 5 anos na função. Vivência em \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\". Conhecimentos em Informática, Produção. Qualificações: \"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\". Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Forneiro — Kohler (2 a 5 anos)\nPrincipais atividades: \"Atuei na operação de fornos industriais e na movimentação de materiais.Era responsável pelo carregamento de vagonetas ultilizando o manipulador mecânico,garantindo o abastecimento contínuo da linha de produção e seguindo rigorosamente as normas de segurança da empresa.\"\nFerramentas/sistemas: \"Operava o manipulador mecânico para carregar as vagonetas e utilizava o rebocador industrial para fazer a movimentação segura dessas cargas até os fornos.Além da parte operacional,usava o computador para digitar e registrar as peças no sistema da empresa\"\n\nFORMAÇÃO\nMédio completo — Atualmente estou fazendo um curso de informática\nEm andamento: Informática\n\nCURSOS E QUALIFICAÇÕES\n\"Tenho o ensino médio completo.Minha Maior qualificação é a experiência prática que ganhei no dia a dia da produção,operando equipamentos como o manipulador, o rebocador e utilizando o computador para o controle de peças.\"\n\nCONHECIMENTOS PROFISSIONAIS\nInformática, Produção\nMáquinas/equipamentos: Tenho experiência prática na operação de fornos industriais de alta temperatura, manipulador mecânico para o carregamento de cargas e rebocador industrial para a movimentação de vagonetas.Além disso, opero o computador para a digitação,registro e controle de fluxo de peças no sistema de produção.\n\nINFORMAÇÕES ADICIONAIS\n\"Gostaria de destacar minha facilidade para trabalhar em equipe e meu forte compromisso com a segurança e a organização do ambiente de trabalho.Por ter trabalhado diretamente com fornos industriais e cargas pesadas, entendo perfeitamente a importância de seguir regras rígidas,usar EPIs corretamente e manter a atenção total para garantir que a produção flua sem acidentes.\""
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
    "area_principal_interesse": "Engenharia / Técnico",
    "areas_adicionais_interesse": [
      "Administrativo",
      "Tecnologia / TI"
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
        "periodo": "Ago/25 a set/25",
        "atividades": "Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos."
      },
      {
        "empresa": "Kohler Co",
        "cargo": "Estagiária de almoxarifado",
        "periodo": "Abr/24 a ago/25",
        "atividades": "• Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos."
      }
    ],
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Engenharia de produção",
    "instituicao_ensino": "Universidade federal de Alfenas",
    "cursos_qualificacoes": "Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro",
    "conhecimentos": "Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo",
    "caracteristicas": "Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "Realizava apenas a gestão do estagiário da área por 11 meses",
    "regiao_interesse": "Andradas, Poços de Caldas",
    "disponibilidade_horario": "1º turno",
    "pretensao_salarial": "R$3500,00 - disponível para negociar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI. Profissional com experiência como Técnica de processos na empresa Kohler Co, com menos de 1 ano na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo. Qualificações: Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro. Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "MELISSA DE CARVALHO REIMER\nPoços de Caldas / MG\nWhatsApp: 19995017509 | E-mail: melissa.reimer7bb@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Assistente Administrativo, Analista Administrativo, Técnico(a)\nÁreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Administrativo, Tecnologia / TI. Profissional com experiência como Técnica de processos na empresa Kohler Co, com menos de 1 ano na função. Vivência em - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.. Conhecimentos em Excel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo. Qualificações: Excel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro. Características profissionais declaradas: Responsável, Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnica de processos — Kohler Co (Menos de 1 ano)\nPrincipais atividades: - Atuação no acompanhamento, análise e melhoria dos processos produtivos, com suporte direto à operação e à gestão e análise de indicadores da área.\r\n- Participação em reuniões entre todas as áreas, treinamentos e rotinas operacionais, contribuindo com análises e auditorias para tomada de decisão.\r\n- Realização de cronoanálises, estudos de tempo e acompanhamento de tempos de ciclo, buscando ganhos de produtividade e eficiência.\r\n- Participação no programa TPM e acompanhamento da rotina operacional de 2 robôs de esmaltação.\r\n- Suporte direto à operação na identificação, desenvolvimento e implementação de melhorias.\r\n- Análise de causas de defeitos, realização de testes baseados na metodologia VDEP e validação de soluções com foco na redução de perdas e melhoria da qualidade.\r\n- +45 melhorias realizadas em 6 meses junto ao time, atuando na identificação de oportunidades e implementação das ações.\r\n- Desenvolvimento de relatórios, apresentações, diagramas de concentração, dashboards e indicadores para acompanhamento dos processos.\r\n- Participação em projetos de redução de custos e consumo de recursos, envolvendo energia, gás, água e diesel.\r\n- Atuação em iniciativas de 5S, segurança, ergonomia, produtividade e redução de defeitos, contribuindo para uma evolução de 60% no resultado de 5S.\r\n- Acompanhamento de OPEX de dois setores, apoiando o controle e análise dos custos operacionais.\r\n- Participação em análises relacionadas a rendimento, layout de enfornamento e eficiência dos processos de produção.\r\n- Atuação com foco em melhoria contínua, eficiência operacional, qualidade, redução de perdas e desenvolvimento de processos.\nFerramentas/sistemas: SAP, EPRO, EXCEL, SKETCH UP, POWER POINT, POWER BI\n\n2. Assistente de engenharia de processos — Kohler co (Set/25 a jun/26)\nPrincipais atividades: • Desenvolvimento e implementação de pré-controles e monitoramentos para a área de Esmaltação, acompanhando variáveis críticas do processo, antecipando desvios e apoiando a tomada de decisão baseada em dados.\r\n• Elaboração, revisão e atualização de SOPs (Procedimentos Operacionais Padrão), garantindo a padronização dos processos e conformidade operacional.\r\n• Gestão do OPEX de dois setores (Esmaltação e forno), realizando controle orçamentário, análise de custos e acompanhamento das previsões de fechamento mensal.\r\n• Atuação estratégica em Melhoria Contínua, promovendo a otimização de processos industriais com foco em eficiência, qualidade e produtividade.\r\n• Análise e otimização de fluxos de trabalho, identificando oportunidades para redução de desperdícios e aumento da performance operacional.\r\n• Monitoramento e gestão de KPIs, utilizando análise de dados (Excel e Power BI) para apoiar a tomada de decisão e direcionar planos de ação.\r\n• Desenvolvimento e implementação de melhorias voltadas à resolução de problemas e aumento da eficiência dos processos produtivos.\r\n• Elaboração de apresentações gerenciais com indicadores de produtividade, qualidade e yield da planta, apoiando o alinhamento estratégico da liderança.\r\n• Participação ativa em iniciativas de segurança, ergonomia, 5S e melhoria contínua, fortalecendo a cultura de excelência operacional\n\n3. Estagiária de engenharia de processos — Kohler co (Ago/25 a set/25)\nPrincipais atividades: Atuação como estagiária de engenharia de processos do forno:\r\n• Análise e otimização de processos produtivos, identificando oportunidades de melhoria contínua e aumento da eficiência operacional.\r\n• Monitoramento e análise de KPIs, apoiando a tomada de decisão por meio de indicadores de desempenho.\r\n• Gestão e sustentação do programa 5S, promovendo organização, padronização e segurança no ambiente produtivo.\r\n• Elaboração de apresentações de yield e produtividade para reuniões gerenciais, transformando dados em informações para suporte à liderança.\r\n• Atuação direta no chão de fábrica, realizando análise de processos, coleta de dados.\r\n• Aplicação de conceitos de Lean Manufacturing e melhoria contínua em projetos de otimização de processos.\n\n4. Estagiária de almoxarifado — Kohler Co (Abr/24 a ago/25)\nPrincipais atividades: • Gestão do fluxo de documentos fiscais (entrada e saída), assegurando conformidade e acuracidade dos processos.\r\n• Controle de estoque por meio da metodologia Kanban, contribuindo para maior eficiência logística e redução de lead time.\r\n• Liderança de área do programa 5S, fortalecendo a organização e a produtividade do almoxarifado.\r\n• Interface com Compras e Produção para alinhamento do fluxo de materiais e programação de entregas, garantindo o abastecimento das linhas.\r\n• Recebimento, conferência e movimentação de materiais com foco na confiabilidade dos estoques.\r\n• Gestão de estoque no SAP e participação ativa em projetos de melhoria contínua e otimização de processos.\n\nFORMAÇÃO\nSuperior incompleto — Engenharia de produção — Universidade federal de Alfenas\nEm andamento: Engenharia de produção- (anteriormente feito faculdade tecnológica de gestão da produção industrial)\n\nCURSOS E QUALIFICAÇÕES\nExcel, power bi, liderança e empreendedorismo, comunicação e oratória, gestão e mercado financeiro\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Atendimento ao cliente, Produção, Segurança do trabalho, Administrativo\n\nINFORMAÇÕES ADICIONAIS\nPossuo rápida adaptação a habilidade de aprendizado, meu maior foco é resultado e construção de um ambiente bom de trabalho"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Liderança / Gestão"
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
        "periodo": "Setembro 2018 à abril 2024",
        "atividades": "Fazer parte de aplicação na peça"
      }
    ],
    "escolaridade": "Médio incompleto",
    "curso_formacao": "Espanhol, só não conclui",
    "instituicao_ensino": "KNN",
    "conhecimentos": "Word, Informática, Produção",
    "maquinas_equipamentos": "Empilhadeira",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados",
    "lideranca": "Líder de produção, por mais de 2 anos",
    "regiao_interesse": "Andradas, poços de Caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "3000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão. Profissional com experiência como LÍDER ESMALTAÇÃO na empresa KOHLER, com 2 a 5 anos na função. Vivência em Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo. Conhecimentos em Word, Informática, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.",
    "curriculo_texto": "AUGUSTO SILVA PEREIRA\nAndradas / MG\nWhatsApp: 35920009557 | E-mail: augusto.sdsj@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Auxiliar de Expedição, Líder / Encarregado(a), Serviços Gerais\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Logística / Estoque / Expedição, Qualidade, Liderança / Gestão. Profissional com experiência como LÍDER ESMALTAÇÃO na empresa KOHLER, com 2 a 5 anos na função. Vivência em Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo. Conhecimentos em Word, Informática, Produção. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. LÍDER ESMALTAÇÃO — KOHLER (2 a 5 anos)\nPrincipais atividades: Liderar uma equipe de 8 pessoas, lançar parte de produção, manter qualidade da peças. Acompanhar parte de aplicação do esmaltados, acompanhar no sistema avance peças que tava saindo na parte de classificação analisar defeito e corrigí-lo\nFerramentas/sistemas: Sistema AVANCE, PISTOLA DE APLICAÇÃO DE ESMALTE,\n\n2. Produção de esmalte, lugar onde faz o preparo antes da aplicação — KOHLER (Junho 2013 à julho 2018)\nPrincipais atividades: Fazer acerto de esmalte o preparo para levar para esmaltação e ser aplicado na peça\n\n3. Esmaltador — KOHLER (Setembro 2018 à abril 2024)\nPrincipais atividades: Fazer parte de aplicação na peça\n\nFORMAÇÃO\nMédio incompleto — Espanhol, só não conclui — KNN\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nWord, Informática, Produção\nMáquinas/equipamentos: Empilhadeira\n\nINFORMAÇÕES ADICIONAIS\nTenho curso básico de informática também"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações"
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
        "periodo": "2001 a2026",
        "atividades": "Gestão de equipe ,qualidade ,,processos ,e organiza"
      }
    ],
    "escolaridade": "Médio completo",
    "conhecimentos": "Excel, Word, Informática",
    "caracteristicas": "Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança",
    "lideranca": "Supervisor de área \r\nDesde 2012",
    "regiao_interesse": "Andradas ,poços de caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "A combinar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações. Profissional com experiência como Supervisor na empresa Kolher, com mais de 10 anos na função. Vivência em Gestão de equipe ,gestão de qualidade .organização da área e planejamento. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança.",
    "curriculo_texto": "CLÁUDIO ROBERTO DE PAULA\nAndradas / MG\nWhatsApp: 35992040990 | E-mail: claudiorobertodepaulapaula@57gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nSupervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações. Profissional com experiência como Supervisor na empresa Kolher, com mais de 10 anos na função. Vivência em Gestão de equipe ,gestão de qualidade .organização da área e planejamento. Conhecimentos em Excel, Word, Informática. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor — Kolher (Mais de 10 anos)\nPrincipais atividades: Gestão de equipe ,gestão de qualidade .organização da área e planejamento\n\n2. Fundidor — Fiori (1995 a2001)\nPrincipais atividades: Fabricacao de peças\n\n3. Supervisor — Kolher (2001 a2026)\nPrincipais atividades: Gestão de equipe ,qualidade ,,processos ,e organiza\n\nFORMAÇÃO\nMédio completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Logística / Estoque / Expedição, Financeiro, Contábil / Fiscal, Recursos Humanos / Departamento Pessoal, Compras / Suprimentos",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Financeiro",
      "Contábil / Fiscal",
      "Recursos Humanos / Departamento Pessoal",
      "Compras / Suprimentos"
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
    "atividades_ultima_experiencia": "Ga",
    "possui_outras_experiencias": "Não"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Administrativo",
      "Financeiro",
      "Compras / Suprimentos",
      "Tecnologia / TI",
      "Liderança / Gestão"
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
        "periodo": "Jan2006/dez2007",
        "atividades": "Controle e reposição de estoque \r\nVendedor"
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel Sistemas de Informação",
    "instituicao_ensino": "Unifeob",
    "cursos_qualificacoes": "Desenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad",
    "conhecimentos": "Informática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos",
    "maquinas_equipamentos": "Empilhadeira \r\nPonte rolante \r\nEquipamentos de medição",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal",
    "lideranca": "Líder de equipe de um novo projeto por 1 mês no México",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "Compatível com mercado",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Qualidade, Administrativo, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Modelador JR. na empresa Kohler, com 5 a 10 anos na função. Vivência em Confecção de modelos com base em projetos. \r\nConstrução de moldes \r\nSuporte para produção nos testes\r\nMontagem e organização de cronograma. Conhecimentos em Informática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos. Qualificações: Desenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal.",
    "curriculo_texto": "LUCAS BARBOSA REIS\nAndradas / MG\nWhatsApp: 35999126802 | E-mail: luca.sb.reis@hotmail.com.br\nCNH: B\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Auxiliar / Assistente Administrativo, Analista Administrativo, Suporte / TI, Supervisor(a) / Coordenador(a), Outro, Modelador\nÁreas de interesse: Produção / Operações, Qualidade, Administrativo, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Qualidade, Administrativo, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Modelador JR. na empresa Kohler, com 5 a 10 anos na função. Vivência em Confecção de modelos com base em projetos. \r\nConstrução de moldes \r\nSuporte para produção nos testes\r\nMontagem e organização de cronograma. Conhecimentos em Informática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos. Qualificações: Desenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Modelador JR. — Kohler (5 a 10 anos)\nPrincipais atividades: Confecção de modelos com base em projetos. \r\nConstrução de moldes \r\nSuporte para produção nos testes\r\nMontagem e organização de cronograma\nFerramentas/sistemas: Ferramentas para medição com precisão\n\n2. Matrizeiro — Icasa - Industria Cerâmica Andradense (Jan 2008 / Jun 2018)\nPrincipais atividades: Confecção de diversos tipos de matrizes \r\nConfecção moldes original e teste\r\nConfecção de gabaritos e suportes de poliuretano \r\nAuxiliar na confecção de moldes para alta pressão\n\n3. Balconista/ vendedor — Borges Materiais para Construção (Jan2006/dez2007)\nPrincipais atividades: Controle e reposição de estoque \r\nVendedor\n\nFORMAÇÃO\nSuperior completo — Bacharel Sistemas de Informação — Unifeob\n\nCURSOS E QUALIFICAÇÕES\nDesenho técnico \r\nMecânica industrial\r\nInformática básica \r\nLiderança para gestão de pessoas \r\nInteligência emocional\r\nNoções Básicas de AutoCad\n\nCONHECIMENTOS PROFISSIONAIS\nInformática, Atendimento ao cliente, Vendas, Produção, Elétrica, Mecânica, Recursos Humanos\nMáquinas/equipamentos: Empilhadeira \r\nPonte rolante \r\nEquipamentos de medição\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Motorista / Transporte"
    ],
    "funcoes_interesse": [
      "Operador(a) de Produção",
      "Operador(a) de Máquina",
      "Motorista / Entregador(a)"
    ],
    "tipo_trabalho": "Presencial",
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
        "cargo": ""
      }
    ],
    "escolaridade": "Fundamental incompleto",
    "maquinas_equipamentos": "Máquina fundição seramica",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados, Bom relacionamento interpessoal",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "Negociar",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Motorista / Transporte. Profissional com experiência como Prototipista na empresa Kolher, com mais de 10 anos na função. Vivência em Desenvolvimento de novos produtos. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados, Bom relacionamento interpessoal.",
    "curriculo_texto": "FERNANDO HENRIQUE CANDIDO\nAndradas / MG\nWhatsApp: 35992730522 | E-mail: nandojoaograzi@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nOperador(a) de Produção, Operador(a) de Máquina, Motorista / Entregador(a)\nÁreas de interesse: Produção / Operações, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Motorista / Transporte. Profissional com experiência como Prototipista na empresa Kolher, com mais de 10 anos na função. Vivência em Desenvolvimento de novos produtos. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Foco em resultados, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Prototipista — Kolher (Mais de 10 anos)\nPrincipais atividades: Desenvolvimento de novos produtos\nFerramentas/sistemas: Máquina shanks todos os tipos de peça fundição seramica tbm manual\n\n2. Entregador\n\nFORMAÇÃO\nFundamental incompleto\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nNão informados\nMáquinas/equipamentos: Máquina fundição seramica\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Qualidade",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Segurança do Trabalho",
      "Engenharia / Técnico",
      "Liderança / Gestão"
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
        "periodo": "jan/24 a mar/25",
        "atividades": "Responsável da implementação do Sistema de Gestão da Qualidade Interno\r\n– Nível 2, com foco na maturidade dos processos;\r\nAplicação de Ferramentas da Qualidade e Indicadores de Desempenho\r\n(KPI's);\r\nGestão de Auditorias de Processos (ISO 19011)\r\nTreinamento dos colaboradores em procedimentos de qualidade"
      },
      {
        "empresa": "Kohler",
        "cargo": "Estagiário de Qualidade",
        "periodo": "jun/22 a jan/24",
        "atividades": "Realização de Testes segundo norma ABNT e ASME\r\nSuporte na implementação do Sistema de Gestão da Qualidade Interno –\r\nNível 1, estruturando os pilares da qualidade na operação\r\nSuporte no Controle de Documentos (POPs)\r\nSuporte na certificação de produtos para venda no mercado sul-americano,\r\nassegurando conformidade técnica e regulatória\r\nRelatórios de indicadores-chave de desempenho (KPI)"
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia Química",
    "instituicao_ensino": "UNIFAL",
    "cursos_qualificacoes": "ISO 9001, ISO 19011",
    "conhecimentos": "Excel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico",
    "caracteristicas": "Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Bom relacionamento interpessoal",
    "lideranca": "Supervisão do Laboratório de Qualidade - menos de 1 ano",
    "regiao_interesse": "Poços de Caldas",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "6000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Qualidade, Produção / Operações, Segurança do Trabalho, Engenharia / Técnico, Liderança / Gestão. Profissional com experiência como Engenheiro de Qualidade na empresa Kohler, com menos de 1 ano na função. Vivência em Supervisão do Laboratório de Testes da Qualidade;\r\nGestão de Calibrações de equipamentos e ferramentas;\r\nGestão de produtos importados em projetos globais\r\nPromoção de treinamentos sobre boas práticas de qualidade e controle de\r\nprocessos.\r\nMonitoramento e garantia da conformidade dos produtos.\r\nParticipação em projetos de desenvolvimento de novos produto. Conhecimentos em Excel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico. Qualificações: ISO 9001, ISO 19011. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Bom relacionamento interpessoal.",
    "curriculo_texto": "GABRIEL TAMBOLIM DA CUNHA\nPoços de Caldas / MG\nWhatsApp: 359980838099 | E-mail: gabrielcunha9902@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a) de Segurança do Trabalho, Engenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Qualidade, Produção / Operações, Segurança do Trabalho, Engenharia / Técnico, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Qualidade, Produção / Operações, Segurança do Trabalho, Engenharia / Técnico, Liderança / Gestão. Profissional com experiência como Engenheiro de Qualidade na empresa Kohler, com menos de 1 ano na função. Vivência em Supervisão do Laboratório de Testes da Qualidade;\r\nGestão de Calibrações de equipamentos e ferramentas;\r\nGestão de produtos importados em projetos globais\r\nPromoção de treinamentos sobre boas práticas de qualidade e controle de\r\nprocessos.\r\nMonitoramento e garantia da conformidade dos produtos.\r\nParticipação em projetos de desenvolvimento de novos produto. Conhecimentos em Excel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico. Qualificações: ISO 9001, ISO 19011. Características profissionais declaradas: Responsável, Organizado(a), Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Qualidade — Kohler (Menos de 1 ano)\nPrincipais atividades: Supervisão do Laboratório de Testes da Qualidade;\r\nGestão de Calibrações de equipamentos e ferramentas;\r\nGestão de produtos importados em projetos globais\r\nPromoção de treinamentos sobre boas práticas de qualidade e controle de\r\nprocessos.\r\nMonitoramento e garantia da conformidade dos produtos.\r\nParticipação em projetos de desenvolvimento de novos produto\nFerramentas/sistemas: Excel, Power BI, Power Automate, Power Apps, OPEX, Planner\n\n2. Técnico de Sistema de Gestão de Qualidade — Kohler (mar/25 a jan/26)\nPrincipais atividades: Gestão e Manutenção do SGQ na fábrica;\r\nDesenvolvimento de Aplicativo para Controle de Documentos em Power\r\nPlataform;\r\nControle e gestão de custos do setor de Qualidade (OPEX);\r\nDesenvolvimento de dashboards de KPI's em Power BI;\r\nInvestigação e resolução de defeitos no produto/processo;\r\nElaboração e aplicação de planos de ação para defeitos em Produtos\r\nInternacionais;\r\nCertificação do Processo para novos produtos/produtos obsoletos;\r\nParticipação de Desenvolvimentos de Projetos Lean;\r\nDesenvolvimento de Aplicativo Global para divulgação de melhorias e boas\r\npráticas no ambiente de trabalho (Workplace Experience);\n\n3. Assistente de Qualidade — Kohler (jan/24 a mar/25)\nPrincipais atividades: Responsável da implementação do Sistema de Gestão da Qualidade Interno\r\n– Nível 2, com foco na maturidade dos processos;\r\nAplicação de Ferramentas da Qualidade e Indicadores de Desempenho\r\n(KPI's);\r\nGestão de Auditorias de Processos (ISO 19011)\r\nTreinamento dos colaboradores em procedimentos de qualidade\n\n4. Estagiário de Qualidade — Kohler (jun/22 a jan/24)\nPrincipais atividades: Realização de Testes segundo norma ABNT e ASME\r\nSuporte na implementação do Sistema de Gestão da Qualidade Interno –\r\nNível 1, estruturando os pilares da qualidade na operação\r\nSuporte no Controle de Documentos (POPs)\r\nSuporte na certificação de produtos para venda no mercado sul-americano,\r\nassegurando conformidade técnica e regulatória\r\nRelatórios de indicadores-chave de desempenho (KPI)\n\nFORMAÇÃO\nSuperior completo — Engenharia Química — UNIFAL\n\nCURSOS E QUALIFICAÇÕES\nISO 9001, ISO 19011\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Produção, Qualidade, Segurança do trabalho, Administrativo, Financeiro, Outro: Power BI, Power Automate, Power Apps, OPEX, SAP básico\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
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
        "atividades": "Produção"
      }
    ],
    "escolaridade": "Fundamental incompleto",
    "curso_formacao": "2 do fundamental",
    "instituicao_ensino": "Colégio de Coração de Maria",
    "cursos_qualificacoes": "Não tenho",
    "maquinas_equipamentos": "Nenhuma",
    "caracteristicas": "Responsável, Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Atenção aos detalhes, Foco em resultados",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário, Escala",
    "pretensao_salarial": "2,900.00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações. Profissional com experiência como Forneiro 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em Infornava peças.. Qualificações: Não tenho. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Atenção aos detalhes, Foco em resultados.",
    "curriculo_texto": "JORGE DOS SANTOS\nAndradas / MG\nWhatsApp: 35999142354 | E-mail: js6105110@gmail.com\nCNH: Não\n\nOBJETIVO PROFISSIONAL\nOutro, Forneiro 2\nÁreas de interesse: Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações. Profissional com experiência como Forneiro 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em Infornava peças.. Qualificações: Não tenho. Características profissionais declaradas: Responsável, Pontual, Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Atenção aos detalhes, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Forneiro 2 — Kohler (5 a 10 anos)\nPrincipais atividades: Infornava peças.\nFerramentas/sistemas: Na mão tudo que fazia.\n\n2. Forneiro 2 — Kohler\nPrincipais atividades: Produção\n\nFORMAÇÃO\nFundamental incompleto — 2 do fundamental — Colégio de Coração de Maria\n\nCURSOS E QUALIFICAÇÕES\nNão tenho\n\nCONHECIMENTOS PROFISSIONAIS\nNão informados\nMáquinas/equipamentos: Nenhuma\n\nINFORMAÇÕES ADICIONAIS\nNão"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade"
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
    "escolaridade": "Superior completo",
    "curso_formacao": "TECNOLOGO GESTAO DA QUALIADAE",
    "instituicao_ensino": "UNIASSELVI",
    "cursos_qualificacoes": "COMPUTAÇÃO, PACOTE OFFICE E TPM",
    "conhecimentos": "Excel, Word, Informática, Logística, Expedição, Produção",
    "maquinas_equipamentos": "EMPILHADEIRA",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados",
    "lideranca": "LIDER DE PRODUÇÃO POR 4 ANOS",
    "regiao_interesse": "ANDRADAS E POÇOS DE CALDAS",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "5000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como lider de produção 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em liderar equipe, desenvolver pessoas, balancear linha de produção para bater metas, apresentação de resultados, analisar números para tomar a melhor decisão. Conhecimentos em Excel, Word, Informática, Logística, Expedição, Produção. Qualificações: COMPUTAÇÃO, PACOTE OFFICE E TPM. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados.",
    "curriculo_texto": "RICARDO SILVA BRANDÃO\nAndradas / MG\nWhatsApp: 35997082286 | E-mail: ricard.brandao000@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Qualidade\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Logística / Estoque / Expedição, Qualidade. Profissional com experiência como lider de produção 2 na empresa Kohler, com 5 a 10 anos na função. Vivência em liderar equipe, desenvolver pessoas, balancear linha de produção para bater metas, apresentação de resultados, analisar números para tomar a melhor decisão. Conhecimentos em Excel, Word, Informática, Logística, Expedição, Produção. Qualificações: COMPUTAÇÃO, PACOTE OFFICE E TPM. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. lider de produção 2 — Kohler (5 a 10 anos)\nPrincipais atividades: liderar equipe, desenvolver pessoas, balancear linha de produção para bater metas, apresentação de resultados, analisar números para tomar a melhor decisão\nFerramentas/sistemas: pacote office, empilhadeira, SAP,\n\n2. LIDER DE PADARIA — SUPERMECADOS SERRA AZUL (2019 A 2020)\nPrincipais atividades: LIDERAR ATENDIMENTO E PRUDUÇÃO, LOGISTICA DE PEDIDDOS PARA ENTRTEGAS NAS OUTRAS REDES.\n\nFORMAÇÃO\nSuperior completo — TECNOLOGO GESTAO DA QUALIADAE — UNIASSELVI\n\nCURSOS E QUALIFICAÇÕES\nCOMPUTAÇÃO, PACOTE OFFICE E TPM\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Logística, Expedição, Produção\nMáquinas/equipamentos: EMPILHADEIRA\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Segurança do Trabalho",
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
        "periodo": "6 anos",
        "atividades": "Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros."
      },
      {
        "empresa": "Hospital Carolina Malheiros",
        "cargo": "tecnio de enfermagem",
        "periodo": "2 anos e 6 meses",
        "atividades": "Prestar cuidados diretos aos pacientes\r\n\r\nRealizar higiene e conforto do paciente.\r\nAuxiliar na alimentação e hidratação.\r\nAuxiliar na mobilização e mudança de decúbito.\r\n\r\n✅ Verificar e registrar sinais vitais\r\n\r\nPressão arterial.\r\nTemperatura.\r\nFrequência cardíaca.\r\nFrequência respiratória.\r\nSaturação de oxigênio.\r\n\r\n✅ Administrar medicamentos\r\n\r\nConforme prescrição médica e orientação do enfermeiro.\r\nVias oral, intramuscular, subcutânea, endovenosa, entre outras habilitadas pela instituição.\r\n\r\n✅ Realizar procedimentos de enfermagem\r\n\r\nCurativos simples e complexos sob supervisão.\r\nColeta de materiais para exames.\r\nInstalação e manutenção de oxigenoterapia.\r\nControle de glicemia capilar.\r\n\r\n✅ Auxiliar em exames e procedimentos\r\n\r\nPreparar pacientes para exames.\r\nAuxiliar médicos e enfermeiros durante procedimentos.\r\nOrganizar materiais e equipamentos.\r\n\r\n✅ Registrar informações no prontuário\r\n\r\nAnotar procedimentos realizados.\r\nRegistrar sinais vitais e intercorrências.\r\nComunicar alterações no estado do paciente ao enfermeiro.\r\n\r\n✅ Atuar em situações de urgência e emergência\r\n\r\nPrestar primeiros cuidados.\r\nAuxiliar em reanimação cardiopulmonar (RCP).\r\nPreparar materiais e medicamentos de emergência.\r\n\r\n✅ Controlar materiais e equipamentos\r\n\r\nConferir estoque de materiais.\r\nOrganizar medicamentos e equipamentos.\r\nSolicitar reposições quando necessário.\r\nImportância do Técnico de Enfermagem\r\n\r\nO técnico de enfermagem é um dos profissionais que permanece mais tempo junto ao paciente, observando sua evolução, identificando alterações clínicas e contribuindo para uma assistência segura, humanizada e de qualidade."
      }
    ],
    "experiencias_adicionais": "Atualmente trabalho como enfermeiro no pronto socorro do Hospital municipal de ITAPIRA SP",
    "escolaridade": "Pós-graduação",
    "curso_formacao": "ENFERMEIRO",
    "instituicao_ensino": "UNIPINHAL",
    "cursos_qualificacoes": "POS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL",
    "conhecimentos": "Excel, Word, Informática, Segurança do trabalho",
    "maquinas_equipamentos": "EXPIROMETRO, DEA,Teste de Vedação de Respirador (Fit Test)",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança",
    "lideranca": "12 anos responsabilidades ocupacionais",
    "regiao_interesse": "Andradas, São Paulo ,Mogi Guaçu, São João da Boa Vista",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "48000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Segurança do Trabalho. Profissional com experiência como enfermeiro do trabalho na empresa Kohler Produtos para cozinha e banheiros, com 5 a 10 anos na função. Vivência em Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.. Conhecimentos em Excel, Word, Informática, Segurança do trabalho. Qualificações: POS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.",
    "curriculo_texto": "SANDRA DA SILVA PEREIRA\nEspírito Santo do Pinhal / SP\nWhatsApp: 199 | E-mail: sandrapereirafrancisco1@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nOutro, Enfermeiro do trabalho\nÁreas de interesse: Segurança do Trabalho\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Segurança do Trabalho. Profissional com experiência como enfermeiro do trabalho na empresa Kohler Produtos para cozinha e banheiros, com 5 a 10 anos na função. Vivência em Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.. Conhecimentos em Excel, Word, Informática, Segurança do trabalho. Qualificações: POS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. enfermeiro do trabalho — Kohler Produtos para cozinha e banheiros (5 a 10 anos)\nPrincipais atividades: Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.\nFerramentas/sistemas: Computador, DEA, ambulância\n\n2. Ambulatorio ocupacional — Aptiv manufatura (6 anos)\nPrincipais atividades: Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.\n\n3. Enfermeiro do trabalho — kohler produto para cozinha e Banheiros (6 anos)\nPrincipais atividades: Realizar exames e atendimentos de enfermagem\r\n\r\nAtendimento aos colaboradores.\r\nAvaliação de sinais e sintomas relacionados ao trabalho.\r\nEncaminhamento para avaliação médica quando necessário.\r\n\r\n✅ Promover ações de saúde e prevenção\r\n\r\nCampanhas de vacinação.\r\nProgramas de promoção da saúde.\r\nEducação em saúde e qualidade de vida.\r\n\r\n✅ Acompanhar a saúde ocupacional\r\n\r\nMonitoramento dos trabalhadores expostos a riscos ocupacionais.\r\nControle de doenças relacionadas ao trabalho.\r\nAcompanhamento de afastamentos e retorno ao trabalho.\r\n\r\n✅ Atuar na prevenção de acidentes\r\n\r\nIdentificação de riscos à saúde dos trabalhadores.\r\nParticipação em investigações de acidentes de trabalho.\r\nProposição de medidas preventivas.\r\n\r\n✅ Gerenciar programas de saúde ocupacional\r\n\r\nParticipação no Programa de Controle Médico de Saúde Ocupacional (PCMSO).\r\nApoio às ações previstas nas Normas Regulamentadoras (NRs).\r\nControle de indicadores de saúde ocupacional.\r\n\r\n✅ Realizar primeiros socorros\r\n\r\nAtendimento em casos de urgência e emergência na empresa.\r\nEncaminhamento adequado para serviços especializados.\r\n\r\n✅ Elaborar relatórios e registros\r\n\r\nManutenção de prontuários ocupacionais.\r\nEmissão de relatórios de enfermagem.\r\nRegistro de ocorrências e atendimentos.\r\n\r\n✅ Trabalhar em conjunto com equipes de SST\r\n\r\nIntegração com médico do trabalho, técnico de segurança, engenheiro de segurança e RH.\r\nParticipação em treinamentos e ações preventivas.\r\nCompetências do Enfermeiro do Trabalho\r\nPlanejamento de programas de saúde ocupacional.\r\nGestão de equipes de enfermagem do trabalho.\r\nEducação continuada dos trabalhadores.\r\nVigilância epidemiológica e estatística de saúde na empresa.\r\nPromoção de ambientes de trabalho saudáveis e seguros.\n\n4. tecnio de enfermagem — Hospital Carolina Malheiros (2 anos e 6 meses)\nPrincipais atividades: Prestar cuidados diretos aos pacientes\r\n\r\nRealizar higiene e conforto do paciente.\r\nAuxiliar na alimentação e hidratação.\r\nAuxiliar na mobilização e mudança de decúbito.\r\n\r\n✅ Verificar e registrar sinais vitais\r\n\r\nPressão arterial.\r\nTemperatura.\r\nFrequência cardíaca.\r\nFrequência respiratória.\r\nSaturação de oxigênio.\r\n\r\n✅ Administrar medicamentos\r\n\r\nConforme prescrição médica e orientação do enfermeiro.\r\nVias oral, intramuscular, subcutânea, endovenosa, entre outras habilitadas pela instituição.\r\n\r\n✅ Realizar procedimentos de enfermagem\r\n\r\nCurativos simples e complexos sob supervisão.\r\nColeta de materiais para exames.\r\nInstalação e manutenção de oxigenoterapia.\r\nControle de glicemia capilar.\r\n\r\n✅ Auxiliar em exames e procedimentos\r\n\r\nPreparar pacientes para exames.\r\nAuxiliar médicos e enfermeiros durante procedimentos.\r\nOrganizar materiais e equipamentos.\r\n\r\n✅ Registrar informações no prontuário\r\n\r\nAnotar procedimentos realizados.\r\nRegistrar sinais vitais e intercorrências.\r\nComunicar alterações no estado do paciente ao enfermeiro.\r\n\r\n✅ Atuar em situações de urgência e emergência\r\n\r\nPrestar primeiros cuidados.\r\nAuxiliar em reanimação cardiopulmonar (RCP).\r\nPreparar materiais e medicamentos de emergência.\r\n\r\n✅ Controlar materiais e equipamentos\r\n\r\nConferir estoque de materiais.\r\nOrganizar medicamentos e equipamentos.\r\nSolicitar reposições quando necessário.\r\nImportância do Técnico de Enfermagem\r\n\r\nO técnico de enfermagem é um dos profissionais que permanece mais tempo junto ao paciente, observando sua evolução, identificando alterações clínicas e contribuindo para uma assistência segura, humanizada e de qualidade.\n\nOutras experiências:\nAtualmente trabalho como enfermeiro no pronto socorro do Hospital municipal de ITAPIRA SP\n\nFORMAÇÃO\nPós-graduação — ENFERMEIRO — UNIPINHAL\n\nCURSOS E QUALIFICAÇÕES\nPOS GRADUAÇÃO EM ENFERMAGEM DO TRABALHO, POS GRADUAÇÃO EM SAUDE PUBLICA E SERVIÇO SOCIAL\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Segurança do trabalho\nMáquinas/equipamentos: EXPIROMETRO, DEA,Teste de Vedação de Respirador (Fit Test)\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Qualidade",
      "Administrativo",
      "Atendimento / Recepção",
      "Liderança / Gestão"
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
    "escolaridade": "Superior incompleto",
    "curso_formacao": "Bacharel em administração",
    "instituicao_ensino": "Unopar",
    "cursos_qualificacoes": "Técnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,",
    "conhecimentos": "Excel, Word, Informática, Vendas, Produção, Qualidade",
    "caracteristicas": "Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Líder de uma equipe de 20 funcionários,por 10 anos já exerci a função de supervisão do setor durante um ano cobrindo ausência do meu supervisor direto equipe de 70 pessoas",
    "regiao_interesse": "Andradas ou região",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "4000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Qualidade, Administrativo, Atendimento / Recepção, Liderança / Gestão. Profissional com experiência como Líder de produção na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe, ajudar a empresa a entrega as metas prevista, programar férias, ler e preencher relatórios , manter 5s do setor. Conhecimentos em Excel, Word, Informática, Vendas, Produção, Qualidade. Qualificações: Técnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,. Características profissionais declaradas: Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "ISAIAS MAXIMIANO\nAndradas / MG\nWhatsApp: 35992044693 | E-mail: isaiasandradas@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Líder / Encarregado(a)\nÁreas de interesse: Produção / Operações, Qualidade, Administrativo, Atendimento / Recepção, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Qualidade, Administrativo, Atendimento / Recepção, Liderança / Gestão. Profissional com experiência como Líder de produção na empresa Kohler, com mais de 10 anos na função. Vivência em Liderar equipe, ajudar a empresa a entrega as metas prevista, programar férias, ler e preencher relatórios , manter 5s do setor. Conhecimentos em Excel, Word, Informática, Vendas, Produção, Qualidade. Qualificações: Técnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,. Características profissionais declaradas: Pontual, Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Líder de produção — Kohler (Mais de 10 anos)\nPrincipais atividades: Liderar equipe, ajudar a empresa a entrega as metas prevista, programar férias, ler e preencher relatórios , manter 5s do setor\nFerramentas/sistemas: Esmaltação manual e esmaltação robotizada\n\n2. Esmaltador Senior — Cerâmica Vila Rica (14 anos)\nPrincipais atividades: Aplicar esmalte com pistola de alta pressão\n\nFORMAÇÃO\nSuperior incompleto — Bacharel em administração — Unopar\n\nCURSOS E QUALIFICAÇÕES\nTécnico em Química, curso de formação de líderes engajamento, curso das 7 ferramentas da qualidade, curso básico de informática, curso de primeiros socorros, curso de formação para brigadista, curso de combate de incêndios, curso de vídeo,\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Vendas, Produção, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Produção / Operações",
    "areas_adicionais_interesse": [
      "Motorista / Transporte",
      "Contábil / Fiscal",
      "Atendimento / Recepção",
      "Serviços Gerais / Apoio"
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
        "periodo": "Abril/2024 a Julho/2025",
        "atividades": "Organizar e repor mercadorias nas prateleiras, organizar paletes de produtos, checar e anotar data de validade, limpeza geral em prateleiras."
      }
    ],
    "escolaridade": "Médio completo",
    "cursos_qualificacoes": "Nivel de computação médio, e inglês médio.",
    "conhecimentos": "Informática",
    "caracteristicas": "Organizado(a), Proativo(a), Comprometido(a), Agilidade, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas",
    "regiao_interesse": "Andradas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "2300",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações, Motorista / Transporte, Contábil / Fiscal, Atendimento / Recepção, Serviços Gerais / Apoio. Profissional com experiência como Trocador de materiais para produção na empresa Kohler, com menos de 1 ano na função. Vivência em Trocar ferramentas e objetos conforme preciso, delimitar trocas desnecessárias. Organizar itens em almoxarifado.. Conhecimentos em Informática. Qualificações: Nivel de computação médio, e inglês médio.. Características profissionais declaradas: Organizado(a), Proativo(a), Comprometido(a), Agilidade, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "SAMUEL MAXIMIANO\nAndradas / MG\nWhatsApp: 35997341431 | E-mail: samuelandradas94@gmail.com\nCNH: A\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Auxiliar de Logística, Estoquista / Almoxarife, Auxiliar / Assistente Contábil / Fiscal, Comprador(a) / Suprimentos\nÁreas de interesse: Produção / Operações, Motorista / Transporte, Contábil / Fiscal, Atendimento / Recepção, Serviços Gerais / Apoio\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações, Motorista / Transporte, Contábil / Fiscal, Atendimento / Recepção, Serviços Gerais / Apoio. Profissional com experiência como Trocador de materiais para produção na empresa Kohler, com menos de 1 ano na função. Vivência em Trocar ferramentas e objetos conforme preciso, delimitar trocas desnecessárias. Organizar itens em almoxarifado.. Conhecimentos em Informática. Qualificações: Nivel de computação médio, e inglês médio.. Características profissionais declaradas: Organizado(a), Proativo(a), Comprometido(a), Agilidade, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Trocador de materiais para produção — Kohler (Menos de 1 ano)\nPrincipais atividades: Trocar ferramentas e objetos conforme preciso, delimitar trocas desnecessárias. Organizar itens em almoxarifado.\nFerramentas/sistemas: Nenhum\n\n2. Ajudante de produção — Kohler (Julho/2025 a Junho/2026)\nPrincipais atividades: Limpeza geral de setor, levar e trazer peças de cerâmica para fundidores, ajuda na produção manual quando necessário.\n\n3. Repositor de mercadorias — Uniforte Supermercados (Abril/2024 a Julho/2025)\nPrincipais atividades: Organizar e repor mercadorias nas prateleiras, organizar paletes de produtos, checar e anotar data de validade, limpeza geral em prateleiras.\n\nFORMAÇÃO\nMédio completo\n\nCURSOS E QUALIFICAÇÕES\nNivel de computação médio, e inglês médio.\n\nCONHECIMENTOS PROFISSIONAIS\nInformática\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Tecnologia / TI",
    "areas_adicionais_interesse": [
      "Logística / Estoque / Expedição",
      "Qualidade",
      "Atendimento / Recepção",
      "Engenharia / Técnico"
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
        "periodo": "2008-2012",
        "atividades": "Atendimento ao cliente \r\nRotinas financeiras\r\nRecebimento de mercadorias"
      },
      {
        "empresa": "Laboratorio Analitico LA Teixeira",
        "cargo": "Analista de laboratorio",
        "periodo": "2013-2023",
        "atividades": "Realização de analise fisico-quimica em minerios\r\nAnalise de fertilizante\r\nPreparação e padronização de soluções"
      }
    ],
    "escolaridade": "Superior completo",
    "curso_formacao": "Quimica Bacharel",
    "instituicao_ensino": "Anhaguera",
    "cursos_qualificacoes": "Tecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade",
    "maquinas_equipamentos": "Centrigufa\r\nAuto clave\r\nEspectofotometro\r\nPhmetro\r\nMufla\r\nEstufas\r\nBalança\r\nPaquimetro\r\nSedigrafo\r\nAgitador\r\nTurbidimetro\r\nCondutivimetro",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal",
    "lideranca": "Lider em 5s por 2 anos",
    "regiao_interesse": "Andradas , Poços de Caldas, Espirito Santo do Pinhal",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "Acima de R$ 2500,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Tecnologia / TI, Logística / Estoque / Expedição, Qualidade, Atendimento / Recepção, Engenharia / Técnico. Profissional com experiência como Tecnico da laboratorio na empresa Kohler, com 2 a 5 anos na função. Vivência em Analista fisico quimica de materias prima\r\nControle de insumo e estoque\r\nDesenvolvimento de materias prima\r\nControle de qualidade de materia prima\r\nResponsável pela implementação do 5s no setor\r\nPreenchimento de relatorio. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade. Qualificações: Tecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal.",
    "curriculo_texto": "JAQUELINE APARECIDA DA SILVA\nAndradas / MG\nWhatsApp: 35998156573 | E-mail: jaquefisilva@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar de Logística, Estoquista / Almoxarife, Separador(a) / Conferente, Auxiliar / Inspetor(a) da Qualidade, Auxiliar / Assistente Administrativo, Técnico(a)\nÁreas de interesse: Tecnologia / TI, Logística / Estoque / Expedição, Qualidade, Atendimento / Recepção, Engenharia / Técnico\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Tecnologia / TI, Logística / Estoque / Expedição, Qualidade, Atendimento / Recepção, Engenharia / Técnico. Profissional com experiência como Tecnico da laboratorio na empresa Kohler, com 2 a 5 anos na função. Vivência em Analista fisico quimica de materias prima\r\nControle de insumo e estoque\r\nDesenvolvimento de materias prima\r\nControle de qualidade de materia prima\r\nResponsável pela implementação do 5s no setor\r\nPreenchimento de relatorio. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade. Qualificações: Tecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Atenção aos detalhes, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Tecnico da laboratorio — Kohler (2 a 5 anos)\nPrincipais atividades: Analista fisico quimica de materias prima\r\nControle de insumo e estoque\r\nDesenvolvimento de materias prima\r\nControle de qualidade de materia prima\r\nResponsável pela implementação do 5s no setor\r\nPreenchimento de relatorio\nFerramentas/sistemas: Sedigrafo\r\nGemini-ASE\r\nCentrifuga\r\nEspectofotometro\r\nPhmetro\r\nPaquimetro\r\nEstufas\r\nCondutivimetro\r\nAgitadores\n\n2. Analista de laboratorio — Ministerio da Agricultura-Laboratorio de analise de bebidas (2003-2008)\nPrincipais atividades: Analise laboratorias por densilaçao, densidade e cromatografia\n\n3. Operadora de caixa e recebimento — Supermercado Big Bom (2008-2012)\nPrincipais atividades: Atendimento ao cliente \r\nRotinas financeiras\r\nRecebimento de mercadorias\n\n4. Analista de laboratorio — Laboratorio Analitico LA Teixeira (2013-2023)\nPrincipais atividades: Realização de analise fisico-quimica em minerios\r\nAnalise de fertilizante\r\nPreparação e padronização de soluções\n\nFORMAÇÃO\nSuperior completo — Quimica Bacharel — Anhaguera\n\nCURSOS E QUALIFICAÇÕES\nTecnico em quimica\r\nTecnico em logistica\r\nAssistente contabil\r\nAtendimento ao cliente\r\nHigiene na industria de alimentos\r\n5s em melhoria continua\r\nNR 12 maquinas e equipamentos\r\nNR 35 trabalho em altura\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Estoque, Qualidade\nMáquinas/equipamentos: Centrigufa\r\nAuto clave\r\nEspectofotometro\r\nPhmetro\r\nMufla\r\nEstufas\r\nBalança\r\nPaquimetro\r\nSedigrafo\r\nAgitador\r\nTurbidimetro\r\nCondutivimetro\n\nINFORMAÇÕES ADICIONAIS"
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
    "area_principal_interesse": "Liderança / Gestão",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Qualidade",
      "Administrativo",
      "Engenharia / Técnico"
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
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel Administração",
    "instituicao_ensino": "UNOPAR",
    "cursos_qualificacoes": "Nr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.",
    "conhecimentos": "Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo",
    "caracteristicas": "Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Foco em resultados, Facilidade para resolver problemas",
    "lideranca": "Líder se qualidade, Lider de Produção, Supervisor de Produção, Supervisor de Ligistica. Ao total 13 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Santo Antônio do Jardim, Espírito Santo Pinhal ( essa região atendendo maus cidades)",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "Média de 6 mil reais, mas negociável",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Administrativo, Engenharia / Técnico. Profissional com experiência como Supervisor de Produção na empresa Kohler, com mais de 10 anos na função. Vivência em Gestão de Pessoas \r\nGarantir segurança minha e do meu time.\r\nGarantir qualidade.\r\nGarantir entregas.\r\nGarantir baixo custos.\r\nDesenvolvimento de pessoas.\r\nResolução de problemas.. Conhecimentos em Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo. Qualificações: Nr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Foco em resultados, Facilidade para resolver problemas.",
    "curriculo_texto": "CLAUDINEI CANDIDO\nAndradas / MG\nWhatsApp: 035999125503 | E-mail: claudineic100@hotmail.con\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Inspetor(a) da Qualidade, Técnico(a) da Qualidade, Analista Administrativo, Líder / Encarregado(a), Supervisor(a) / Coordenador(a), Gerente\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Administrativo, Engenharia / Técnico\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Administrativo, Engenharia / Técnico. Profissional com experiência como Supervisor de Produção na empresa Kohler, com mais de 10 anos na função. Vivência em Gestão de Pessoas \r\nGarantir segurança minha e do meu time.\r\nGarantir qualidade.\r\nGarantir entregas.\r\nGarantir baixo custos.\r\nDesenvolvimento de pessoas.\r\nResolução de problemas.. Conhecimentos em Excel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo. Qualificações: Nr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.. Características profissionais declaradas: Responsável, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor de Produção — Kohler (Mais de 10 anos)\nPrincipais atividades: Gestão de Pessoas \r\nGarantir segurança minha e do meu time.\r\nGarantir qualidade.\r\nGarantir entregas.\r\nGarantir baixo custos.\r\nDesenvolvimento de pessoas.\r\nResolução de problemas.\nFerramentas/sistemas: Excel, Word, Power Point, visualização Power Bi, TPM, resolução de defeitos VDEP, 5s, Lean, ferramentas de qualidade.\n\nFORMAÇÃO\nSuperior completo — Bacharel Administração — UNOPAR\nEm andamento: Inglês\n\nCURSOS E QUALIFICAÇÕES\nNr12/Nr17 básico, TPM, 5s, Lean, Pacote Office, melhoria contínua.\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Estoque, Logística, Expedição, Produção, Qualidade, Administrativo\n\nINFORMAÇÕES ADICIONAIS\nExperiência em empresa Cerâmica de Louças Sanitárias"
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
    "area_principal_interesse": "Manutenção Mecânica",
    "areas_adicionais_interesse": [
      "Produção / Operações",
      "Motorista / Transporte"
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
    "escolaridade": "Técnico",
    "curso_formacao": "Técnico mecanica",
    "instituicao_ensino": "Unicorp",
    "cursos_qualificacoes": "Solda mig eletroldo e tig tecido mecânico",
    "conhecimentos": "Manutenção, Mecânica",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender",
    "regiao_interesse": "Poços de caldas",
    "disponibilidade_horario": "Qualquer horário",
    "pretensao_salarial": "3500",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Manutenção Mecânica, Produção / Operações, Motorista / Transporte. Profissional com experiência como Técnico mecânico jr na empresa Kohler produtos para cozinha e banheiros, com 2 a 5 anos na função. Vivência em Manutenção preventiva solda e serralheria. Conhecimentos em Manutenção, Mecânica. Qualificações: Solda mig eletroldo e tig tecido mecânico. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.",
    "curriculo_texto": "EDER CANDIDO\nPoços de Caldas / MG\nWhatsApp: 35999441309 | E-mail: edercandido20166@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nSoldador(a) / Montador(a), Motorista / Entregador(a), Mecânico(a) de Manutenção\nÁreas de interesse: Manutenção Mecânica, Produção / Operações, Motorista / Transporte\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Manutenção Mecânica, Produção / Operações, Motorista / Transporte. Profissional com experiência como Técnico mecânico jr na empresa Kohler produtos para cozinha e banheiros, com 2 a 5 anos na função. Vivência em Manutenção preventiva solda e serralheria. Conhecimentos em Manutenção, Mecânica. Qualificações: Solda mig eletroldo e tig tecido mecânico. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico mecânico jr — Kohler produtos para cozinha e banheiros (2 a 5 anos)\nPrincipais atividades: Manutenção preventiva solda e serralheria\nFerramentas/sistemas: Ferramentas manuais lixadeira máquina de solda em geral\n\nFORMAÇÃO\nTécnico — Técnico mecanica — Unicorp\n\nCURSOS E QUALIFICAÇÕES\nSolda mig eletroldo e tig tecido mecânico\n\nCONHECIMENTOS PROFISSIONAIS\nManutenção, Mecânica\n\nINFORMAÇÕES ADICIONAIS"
  }
];
