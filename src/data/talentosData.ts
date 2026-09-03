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
        "periodo": "Fev/2019 a abril/2020",
        "atividades": ""
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
        "cargo": "",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Avícola são Sebastião",
        "cargo": "Auxiliar de produção",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Siamp Brasil industria",
        "cargo": "Auxiliar de produção na injeção plástica",
        "periodo": "",
        "atividades": ""
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
    "atividades_ultima_experiencia": "Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\nControle de análise das etapas do processo produtivo;\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\nDefloculação de amostras;\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\nConhecimento em aparelhos laboratoriais de alta precisão;\nDeterminação de cloretos;\nDeterminação de matéria orgânica;\nAnálise de dilatação térmica da massa;\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\nControle de processos;\nCaracterização de matérias-primas;\nDeterminação de métodos;\nAnálises químicas;\nDesenvolvimento de novos produtos;\nDesenvolvimento de gráficos e pré-controles;\nAnálise de dados e auditorias;\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\nAplicação de ferramentas Lean e 5S;\nProatividade e senso de dono;\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.",
    "ferramentas_ultima_experiencia": "Dilatômetro\nSedígrafo\nPorosímetro\nAnalisador de Área Superficial BET\nEspectrofotômetro\nGlossímetro\nViscosímetro\nAgitadores\nDiluidores\nMoinhos de Massa e Esmalte\nEmpilhadeira\nExcel Avançado\nAplicação de ferramentas Lean e 5S\nAuditorias de Processo\nInglês Intermediário",
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
        "periodo": "2 meses ( 2018)",
        "atividades": ""
      },
      {
        "empresa": "LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)",
        "cargo": "Estagiário",
        "periodo": "",
        "atividades": "Métodos e Procedimentos:\n\nAcidez (Total, Volátil e Fixa);\nGrau Alcoólico Real;\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados."
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior completo",
    "curso_formacao": "Engenharia Química",
    "instituicao_ensino": "UNIFAE",
    "cursos_qualificacoes": "NR 12\nNR 35\nExcel Avançado\nLean",
    "conhecimentos": "Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade",
    "maquinas_equipamentos": "",
    "caracteristicas": "Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Líder de Laboratório\nLíder de Produção de Massa\nLíder de Produção de Esmalte",
    "regiao_interesse": "",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "5.800,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\nControle de análise das etapas do processo produtivo;\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\nDefloculação de amostras;\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\nConhecimento em aparelhos laboratoriais de alta precisão;\nDeterminação de cloretos;\nDeterminação de matéria orgânica;\nAnálise de dilatação térmica da massa;\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\nControle de processos;\nCaracterização de matérias-primas;\nDeterminação de métodos;\nAnálises químicas;\nDesenvolvimento de novos produtos;\nDesenvolvimento de gráficos e pré-controles;\nAnálise de dados e auditorias;\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\nAplicação de ferramentas Lean e 5S;\nProatividade e senso de dono;\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\nNR 35\nExcel Avançado\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "RAFAEL FRIZO ALVES\nAndradas / MG\nWhatsApp: 35991592707 | E-mail: rafaelfrizo@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos Sênior na empresa Kohler, com 2 a 5 anos na função. Vivência em Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\nControle de análise das etapas do processo produtivo;\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\nDefloculação de amostras;\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\nConhecimento em aparelhos laboratoriais de alta precisão;\nDeterminação de cloretos;\nDeterminação de matéria orgânica;\nAnálise de dilatação térmica da massa;\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\nControle de processos;\nCaracterização de matérias-primas;\nDeterminação de métodos;\nAnálises químicas;\nDesenvolvimento de novos produtos;\nDesenvolvimento de gráficos e pré-controles;\nAnálise de dados e auditorias;\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\nAplicação de ferramentas Lean e 5S;\nProatividade e senso de dono;\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: NR 12\nNR 35\nExcel Avançado\nLean. Características profissionais declaradas: Organizado(a), Proativo(a), Facilidade para aprender, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Técnico de Processos Sênior — Kohler (2 a 5 anos)\nPrincipais atividades: Análise de amostras de carga recebida, realizando pré-testes no laboratório de amostragem para verificação de umidade, resíduos, viscosidade e peso específico, realizando a respectiva caracterização;\nAbsorção de corpos de prova (fragmentos cerâmicos) utilizando porosímetro;\nResponsável pelo tratamento de efluentes da fábrica e resíduos químicos, com o objetivo de preservar o meio ambiente;\nControle de análise das etapas do processo produtivo;\nExecução de fórmulas desenvolvidas, através de pesagem e processos pré-definidos, visando ao desenvolvimento de novos produtos;\nDefloculação de amostras;\nAcompanhamento das análises do processo produtivo, avaliação diária de resultados, verificação de problemas e identificação de causa raiz;\nDeterminação instrumental do índice de azul de metileno em argilas e caulins;\nConhecimento em aparelhos laboratoriais de alta precisão;\nDeterminação de cloretos;\nDeterminação de matéria orgânica;\nAnálise de dilatação térmica da massa;\nExtração de sais solúveis de pegmatitos moídos, argilas, caulins e filitos para determinação de sulfato, cálcio e magnésio;\nDeterminação de teor de cálcio e magnésio em água e outras matérias-primas;\nControle de processos;\nCaracterização de matérias-primas;\nDeterminação de métodos;\nAnálises químicas;\nDesenvolvimento de novos produtos;\nDesenvolvimento de gráficos e pré-controles;\nAnálise de dados e auditorias;\nManuseio de equipamentos laboratoriais de alta precisão (Espectrofotômetro, Sedígrafo, Dilatômetro e Micromeritics);\nAplicação de ferramentas Lean e 5S;\nProatividade e senso de dono;\nLiderança e gestão, com experiência e domínio pleno nas áreas de laboratório, produção de massa, produção de esmalte, estação de tratamento de água e efluentes.\nFerramentas/sistemas: Dilatômetro\nSedígrafo\nPorosímetro\nAnalisador de Área Superficial BET\nEspectrofotômetro\nGlossímetro\nViscosímetro\nAgitadores\nDiluidores\nMoinhos de Massa e Esmalte\nEmpilhadeira\nExcel Avançado\nAplicação de ferramentas Lean e 5S\nAuditorias de Processo\nInglês Intermediário\n\n2. Operador de Guilhotina — TIKTak Indústria Gráfica (Agosto 2012 a junho 2022)\n\n3. Estagiário — Icasa (2 meses ( 2018))\n\n4. Estagiário — LANAGRO /Laboratório de Análise de Bebidas e Vinagres (LABV) Laboratório Federal de Defesa Agropecuária de Minas Gerais (LFDA/MG)\nPrincipais atividades: Métodos e Procedimentos:\n\nAcidez (Total, Volátil e Fixa);\nGrau Alcoólico Real;\nAçúcares Totais e Redutores: verificação do teor residual de açúcar no produto;\nExtrato Seco e Extrato Seco Reduzido: medição dos componentes sólidos não voláteis da bebida para atestar sua consistência e pureza;\nDióxido de Enxofre (Livre e Total): controle do conservante (sulfito) utilizado para evitar a oxidação bacteriana;\nAvaliação de pH e Densidade: parâmetros básicos de integridade química;\nPesquisa de Adulterantes: análise de corantes artificiais, conservantes proibidos ou excesso de metais pesados.\n\nFORMAÇÃO\nSuperior completo — Engenharia Química — UNIFAE\n\nCURSOS E QUALIFICAÇÕES\nNR 12\nNR 35\nExcel Avançado\nLean\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\n\nINFORMAÇÕES ADICIONAIS"
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
        "cargo": "Fundidor de moldes",
        "periodo": "",
        "atividades": ""
      },
      {
        "empresa": "Trabalhei em uma adega de bebidas",
        "cargo": "Entregador",
        "periodo": "",
        "atividades": ""
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
    "atividades_ultima_experiencia": "Liderar projetos\nCoordenação de equipe\nDesenvolvimento de soluções \nGestão de risco\nGestão de cronograma \nDesenvolvimento de desenhos 2d e 3d",
    "ferramentas_ultima_experiencia": "Creo parametric/ inventor/ autocad para desenhos 2d e 3d\nPFMEA\nLean\n5s",
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
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\nCoordenação de equipe\nDesenvolvimento de soluções \nGestão de risco\nGestão de cronograma \nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.",
    "curriculo_texto": "JOEL RODRIGUES DA COSTA\nPoços de caldas / MG\nWhatsApp: 35997682664 | E-mail: joeljrcrodrigues12@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Líder / Encarregado(a), Supervisor(a) / Coordenador(a), Outro, Projetista\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Produção / Operações, Qualidade, Administrativo, Liderança / Gestão. Profissional com experiência como Eng pleno de desenvolvimento de novos produtos na empresa Kohler, com 5 a 10 anos na função. Vivência em Liderar projetos\nCoordenação de equipe\nDesenvolvimento de soluções \nGestão de risco\nGestão de cronograma \nDesenvolvimento de desenhos 2d e 3d. Conhecimentos em Excel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Eng pleno de desenvolvimento de novos produtos — Kohler (5 a 10 anos)\nPrincipais atividades: Liderar projetos\nCoordenação de equipe\nDesenvolvimento de soluções \nGestão de risco\nGestão de cronograma \nDesenvolvimento de desenhos 2d e 3d\nFerramentas/sistemas: Creo parametric/ inventor/ autocad para desenhos 2d e 3d\nPFMEA\nLean\n5s\n\nFORMAÇÃO\nSuperior completo — Engenharia mecânica — Faculdade Pitagoras\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Qualidade, Outro: Autocad, power bi, inventor, creo parametric\n\nINFORMAÇÕES ADICIONAIS"
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
    "ferramentas_ultima_experiencia": "METODOLOGIAS DE GESTÃO DE PROJETOS:\nPMBOK (PMI)\nFEL\nScrum\nKanban\nPRINCE2\nWaterfall (Cascata)\nAgile\nSAFe (Scaled Agile Framework)\nDesign Thinking\n\n\nGERENCIAMENTO DE PROJETOS:\nMS Project\nTrello\nPlanner\nPrimavera P6\n\nGESTÃO ÁGIL / SCRUM:\nJira (Scrum/Kanban boards)\n\nCOMUNICAÇÃO E COLABORAÇÃO:\nMicrosoft Teams\nGoogle Workspace (Docs, Sheets, Slides)\nZoom / Google Meet\n\nANÁLISE DE DADOS / RELATÓRIOS\nExcel (avançado: tabelas dinâmicas, macros, Power Query)\nPower BI\n\nDOCUMENTAÇÃO E GESTÃO DE CONHECIMENTO\nSharePoint\nNotion\n\nGESTÃO FINANCEIRA/ORÇAMENTÁRIA DE PROJETOS\nSAP\nExcel (modelagem financeira)\n\nDIAGRAMAÇÃO E PLANEJAMENTO VISUAL\nVisio\n\nFERRAMENTAS DE ENGENHARIA CIVIL\nProjeto e Modelagem\nAutoCAD\nRevit (BIM)\nCivil 3D\nCálculo Estrutural\nTQS\n\nTopografia e Geoprocessamento\nAutoCAD Civil 3D\nQGIS\n\nFERRAMENTAS DE ENGENHARIA\nModelagem e Simulação de Processos\nFlexSim\n\nQualidade e Melhoria Contínua\nMinitab (estatística para Six Sigma)\nExcel (para, 5W2H, Ishikawa, etc.)",
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
    "curriculo_texto": "JOÃO OTÁVIO BERNARDES TORRES\nAndradas / MG\nWhatsApp: 35988013580 | E-mail: joao.b_torres@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAnalista Financeiro, Comprador(a) / Suprimentos, Técnico(a), Engenheiro(a), Supervisor(a) / Coordenador(a), Gerente\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Financeiro, Compras / Suprimentos, Tecnologia / TI, Liderança / Gestão. Profissional com experiência como Engenheiro de Projetos Sr na empresa Kohler, com 5 a 10 anos na função. Vivência em Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.. Conhecimentos em Excel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Foco em resultados, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Engenheiro de Projetos Sr — Kohler (5 a 10 anos)\nPrincipais atividades: Como gestor das áreas de Projetos e Inovação Digital fui responsável por liderar e conduzir as atividades dos dois times além de ser responsável pela gestão do portfólio dos projetos de capital e projetos digitais da empresa, também pela gestão de escopo, custos, prazos, stakeholders e comunicações. Nos últimos 5 anos gerenciamos e executamos mais de 100 projetos e um budget de aproximadamente 20 milhões de dólares.\nFerramentas/sistemas: METODOLOGIAS DE GESTÃO DE PROJETOS:\nPMBOK (PMI)\nFEL\nScrum\nKanban\nPRINCE2\nWaterfall (Cascata)\nAgile\nSAFe (Scaled Agile Framework)\nDesign Thinking\n\n\nGERENCIAMENTO DE PROJETOS:\nMS Project\nTrello\nPlanner\nPrimavera P6\n\nGESTÃO ÁGIL / SCRUM:\nJira (Scrum/Kanban boards)\n\nCOMUNICAÇÃO E COLABORAÇÃO:\nMicrosoft Teams\nGoogle Workspace (Docs, Sheets, Slides)\nZoom / Google Meet\n\nANÁLISE DE DADOS / RELATÓRIOS\nExcel (avançado: tabelas dinâmicas, macros, Power Query)\nPower BI\n\nDOCUMENTAÇÃO E GESTÃO DE CONHECIMENTO\nSharePoint\nNotion\n\nGESTÃO FINANCEIRA/ORÇAMENTÁRIA DE PROJETOS\nSAP\nExcel (modelagem financeira)\n\nDIAGRAMAÇÃO E PLANEJAMENTO VISUAL\nVisio\n\nFERRAMENTAS DE ENGENHARIA CIVIL\nProjeto e Modelagem\nAutoCAD\nRevit (BIM)\nCivil 3D\nCálculo Estrutural\nTQS\n\nTopografia e Geoprocessamento\nAutoCAD Civil 3D\nQGIS\n\nFERRAMENTAS DE ENGENHARIA\nModelagem e Simulação de Processos\nFlexSim\n\nQualidade e Melhoria Contínua\nMinitab (estatística para Six Sigma)\nExcel (para, 5W2H, Ishikawa, etc.)\n\n2. Analista de Desenvolvimento de Produtos — Kohler (mai/2019 a mar/2021)\nPrincipais atividades: Atuei diretamente na industrialização de novos produtos — desenvolvendo processos de fabricação, ferramental e equipamentos, validando protótipos e apoiando o ramp-up de produção — garantindo a conformidade com normas técnicas e certificando os critérios de qualidade para a produção em larga escala\n\nFORMAÇÃO\nPós-graduação — MBA em Gestão de Projetos — USP\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Sistemas ERP, Elétrica, Mecânica, Qualidade, Financeiro, Outro: Gestão de Projetos, Gestão de Pessoas, Gestão de custos,\n\nINFORMAÇÕES ADICIONAIS"
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
    "atividades_ultima_experiencia": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\n•\tPesquisa e desenvolvimento de novas matérias-primas;\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\n•\tFormulação de reparos a frio para louças cerâmicas;\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.",
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
        "atividades": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global."
      },
      {
        "empresa": "Kohler",
        "cargo": "Analista de Processos",
        "periodo": "05/2021 a 02/2022",
        "atividades": "•\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tCriação, controle e análise de dados de indicadores chaves;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\n•\tControle e medição de testes de queima;\n•\tLançamento e conferência de dados gerados pelo laboratório;\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      },
      {
        "empresa": "Kohler",
        "cargo": "Assistente de Laboratório",
        "periodo": "02/2020 a 08/2020",
        "atividades": "•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tControle e medição de testes de queima;\n•\tLançamento e conferência de dados gerados pelo laboratório;\n•\tTestes em linha de produção de novos produtos de massa e esmalte."
      }
    ],
    "experiencias_adicionais": "Cargo: Assistente de Controle de Processos – 02/2020 – 08/2020\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.",
    "escolaridade": "Superior completo",
    "curso_formacao": "Bacharel em Engenharia Química",
    "instituicao_ensino": "Unifae",
    "cursos_qualificacoes": "Treinamento para Liderança - Engaja - 2025\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\nGreen Belt - RL & Associados – 2017",
    "conhecimentos": "Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP",
    "maquinas_equipamentos": "",
    "caracteristicas": "Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal",
    "lideranca": "Liderança de estagiários e técnicos por 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Jundiaí, Mogi Mirim, Campinas, São João da Boa Vista, Aguaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "R$8.000",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\n•\tPesquisa e desenvolvimento de novas matérias-primas;\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\n•\tFormulação de reparos a frio para louças cerâmicas;\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.. Conhecimentos em Excel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP. Qualificações: Treinamento para Liderança - Engaja - 2025\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\nGreen Belt - RL & Associados – 2017. Características profissionais declaradas: Proativo(a), Comunicativo(a), Trabalho bem em equipe, Facilidade para aprender, Liderança, Foco em resultados, Facilidade para resolver problemas, Bom relacionamento interpessoal.",
    "curriculo_texto": "JÉSSICA CONSTANTINO\nAndradas / MG\nWhatsApp: 35991797966 | E-mail: jessicaconstantino@hotmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nEngenheiro(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Engenheiro de Processos Pleno na empresa Kohler, com 1 a 2 anos na função. Vivência em •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\n•\tPesquisa e desenvolvimento de novas matérias-primas;\n•\tFormulação, desenvolvimento e implementação de massas e esmaltes cerâmicos, com foco na avaliação e correção de cores e texturas;\n•\tControle de qualidade nos recebimentos e liberação de matérias-primas a serem utilizadas nos processos;\n•\tFormulação de reparos a frio para louças cerâmicas;\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\n•\tGestão e liderança de equipes com foco no resultado e crescimento técnico da equipe;\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\nFerramentas/sistemas: SAP, Excel, Power BI, Power Apps, Power Poing e Word\n\n2. Engenheira de Processos Júnior — Kohler (07/2022 a 03/2025)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tDesenvolvimento, implementação e otimização de novos layouts operacionais com aumento de produtividade;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tGestão de BOM (Bill of Materials) com estruturação, controle e atualização do indicador anual;\n•\tCriação, controle e análise de dados de indicadores chaves desenvolvidos com dashboards integrados utilizando Power Bi, Excel e Power Apps;\n•\tGestão financeira OPEX com controle e previsibilidade de despesas operacionais;\n•\tLiderança e execução de projetos focados em redução de custos e otimização de recursos;\n•\tNegociação, cotação e compra de suprimentos adicionais para as equipes;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global.\n\n3. Analista de Processos — Kohler (05/2021 a 02/2022)\nPrincipais atividades: •\tTratamento de não conformidades e defeitos na linha de produção, com foco na análise da causa raiz e resolução utilizando ferramentas da metodologia Lean Manufacturing e Shainin;\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tSupervisão e auditorias nos processos para garantia da qualidade e padronização do produto final;\n•\tApontamento e controle de produção;\n•\tGestão de estoque com controle de inventário, balanço de materiais e otimização dos níveis de armazenagem;\n•\tCriação, controle e análise de dados de indicadores chaves;\n•\tDesenvolvimento e apresentação de relatórios, indicadores e materiais estratégicos para o time corporativo global;\n•\tControle e medição de testes de queima;\n•\tLançamento e conferência de dados gerados pelo laboratório;\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\n4. Assistente de Laboratório — Kohler (02/2020 a 08/2020)\nPrincipais atividades: •\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos;\n•\tControle e medição de testes de queima;\n•\tLançamento e conferência de dados gerados pelo laboratório;\n•\tTestes em linha de produção de novos produtos de massa e esmalte.\n\nOutras experiências:\nCargo: Assistente de Controle de Processos – 02/2020 – 08/2020\n•\tElaboração de procedimentos operacionais padrão, implementação e padronização de novos fluxos de trabalhos.\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Unifae\n\nCURSOS E QUALIFICAÇÕES\nTreinamento para Liderança - Engaja - 2025\nMasterMind Lince (Treinamento para Liderança) - MasterMind - 2024\nGreen Belt - RL & Associados – 2017\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Atendimento ao cliente, Estoque, Produção, Qualidade, Compras, Outro: Power BI, Power Point, Power Apps, Excel, Word e SAP\n\nINFORMAÇÕES ADICIONAIS\nInglês - nível intermediário (Cursando)\nMBA em Engenharia e Gestão da Qualidade - Unifae - Concluído em 2022"
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
        "cargo": "Balconista",
        "periodo": "",
        "atividades": ""
      }
    ],
    "experiencias_adicionais": "",
    "escolaridade": "Superior completo",
    "curso_formacao": "Administração",
    "instituicao_ensino": "Anhanguera",
    "cursos_qualificacoes": "NR 1, NR 12\nExcel\nWord\nApresentação e noções básicas de Power BI\nLogística integrada empresarial\nAdministração geral\nGestão e controladoria de custos empresariais\nMinicurso relações humanas no trabalho \nProdutividade \nMinicurso inteligência emocional no trabalho de segui\nPlanejamento pessoal de ações \nPacote office \nLiderança e gestão de pessoas na prática",
    "conhecimentos": "Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture",
    "maquinas_equipamentos": "De fundição",
    "caracteristicas": "Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados",
    "lideranca": "Líder de turno 2 anos",
    "regiao_interesse": "Andradas, Poços de Caldas, Espírito Santo do Pinhal",
    "disponibilidade_horario": "Comercial, Escala",
    "pretensao_salarial": "Mínimo R$2500,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\nExcel\nWord\nApresentação e noções básicas de Power BI\nLogística integrada empresarial\nAdministração geral\nGestão e controladoria de custos empresariais\nMinicurso relações humanas no trabalho \nProdutividade \nMinicurso inteligência emocional no trabalho de segui\nPlanejamento pessoal de ações \nPacote office \nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.",
    "curriculo_texto": "FERNANDO A. ALEXANDRE\nAndradas / MG\nWhatsApp: 35997131981 | E-mail: fernandoalexandre448@gmail.com\nCNH: AB\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Motorista / Entregador(a), Auxiliar / Assistente Administrativo, Líder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão, Produção / Operações, Qualidade, Atendimento / Recepção, Serviços Gerais / Apoio, Agrícola / Campo. Profissional com experiência como Líder de turno na empresa Kohler, com 5 a 10 anos na função. Vivência em Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.. Conhecimentos em Excel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture. Qualificações: NR 1, NR 12\nExcel\nWord\nApresentação e noções básicas de Power BI\nLogística integrada empresarial\nAdministração geral\nGestão e controladoria de custos empresariais\nMinicurso relações humanas no trabalho \nProdutividade \nMinicurso inteligência emocional no trabalho de segui\nPlanejamento pessoal de ações \nPacote office \nLiderança e gestão de pessoas na prática. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Liderança, Foco em resultados.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Líder de turno — Kohler (5 a 10 anos)\nPrincipais atividades: Acompanhar produção e qualidade, desenvolvimento das equipes, apoio aos colaboradores.\nFerramentas/sistemas: Trabalha com o processo de Lean manufacture.\n\n2. Operador de máquina de fundição — Icasa (Março de 2011 a maio de 2016)\nPrincipais atividades: Destacamento de peças e acabamento.\n\n3. Zelador — Instituto de educação Alfa (Junho 2017 a outro de outubro de 2020)\nPrincipais atividades: Cuidar da manutenção e limpeza do local inclusive jardinagem.\n\n4. Balconista — C Q Sab Lanches\n\nFORMAÇÃO\nSuperior completo — Administração — Anhanguera\nEm andamento: Pós graduação em engenharia da qual e pós graduação em Lean manufacture.\n\nCURSOS E QUALIFICAÇÕES\nNR 1, NR 12\nExcel\nWord\nApresentação e noções básicas de Power BI\nLogística integrada empresarial\nAdministração geral\nGestão e controladoria de custos empresariais\nMinicurso relações humanas no trabalho \nProdutividade \nMinicurso inteligência emocional no trabalho de segui\nPlanejamento pessoal de ações \nPacote office \nLiderança e gestão de pessoas na prática\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Logística, Produção, Qualidade, Administrativo, Outro: Lean manufacture\nMáquinas/equipamentos: De fundição\n\nINFORMAÇÕES ADICIONAIS"
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
    "atividades_ultima_experiencia": "- Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.",
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
        "atividades": "- Atuação na Gestão da Qualidade Laboratorial, conforme requisitos da ABNT NBR ISO/IEC 17025:2017, com seleção, validação e implementação de POPs.\n- Execução e interpretação de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS.\n- Calibração e verificação de equipamentos laboratoriais de bancada e campo, assegurando a confiabilidade dos resultados analíticos.\n- Avaliação de reagentes, métodos de desinfecção e alternativas de tratamento de efluentes, contribuindo para a melhoria dos processos."
      },
      {
        "empresa": "MG Ambiental",
        "cargo": "Labortorista",
        "periodo": "Abril/2021 a setembro/2023",
        "atividades": "- Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações"
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
    "resumo_profissional": "Áreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.. Conhecimentos em Excel, Word, Informática, Qualidade. Características profissionais declaradas: Responsável, Pontual, Proativo(a), Comprometido(a), Trabalho bem em equipe, Facilidade para aprender, Agilidade, Facilidade para resolver problemas.",
    "curriculo_texto": "LUZIELE DIONISIO FALDA\nAndradas / MG\nWhatsApp: (35)997253903 | E-mail: luzieledionisio@gmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nTécnico(a) da Qualidade, Técnico(a), Engenheiro(a)\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Engenharia / Técnico, Qualidade, Liderança / Gestão. Profissional com experiência como Técnico de Processos na empresa Kohler, com 2 a 5 anos na função. Vivência em - Formulação, ajuste e desenvolvimento de massas cerâmicas e esmaltes, incluindo otimização de cores, desempenho e estabilidade dos produtos.\n- Desenvolvimento de projetos de redução de custos, com otimização de massas e esmaltes sem comprometer a qualidade.\n- Realização e interpretação de análises dilatométricas e reológicas, aplicando os resultados na otimização e ajuste de processos.\n- Desenvolvimento e validação de novas matérias-primas, com caracterização físico-química e avaliação de viabilidade técnica.\n- Investigação e controle de defeitos em peças acabadas, atuando na identificação de causas e implementação de ações corretivas.\n- Liderança na implantação e monitoramento do 5S, promovendo organização, padronização e eficiência nos postos de trabalho, com conquista do título de Campeão do 5S em competição interna.\n- Proposição e implementação de melhorias em processos e postos de trabalho, com foco em eficiência, qualidade e redução de desperdícios.\n- Execução de análises laboratoriais para controle de qualidade, utilizando técnicas de titulação, espectrofotometria, gravimetria, sedígrafo e área superficial.\n- Gestão do recebimento, organização e rastreabilidade de matérias-primas utilizadas nos processos de massas e esmaltes.\n- Elaboração de relatórios técnicos, atas e apresentações, garantindo registro, análise e comunicação dos resultados.\nFerramentas/sistemas: Excel, word, PowerPoint, dilatômetro, sedígrafo, área superficial\n\n2. Técnico em Química — AP Teixeira Laboratório Analítico (Outubro/2023 a janeiro/2024)\nPrincipais atividades: - Atuação na Gestão da Qualidade Laboratorial, conforme requisitos da ABNT NBR ISO/IEC 17025:2017, com seleção, validação e implementação de POPs.\n- Execução e interpretação de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS.\n- Calibração e verificação de equipamentos laboratoriais de bancada e campo, assegurando a confiabilidade dos resultados analíticos.\n- Avaliação de reagentes, métodos de desinfecção e alternativas de tratamento de efluentes, contribuindo para a melhoria dos processos.\n\n3. Labortorista — MG Ambiental (Abril/2021 a setembro/2023)\nPrincipais atividades: - Estruturação e implementação do Sistema de Gestão da Qualidade, com elaboração e revisão de procedimentos e adequação do laboratório aos requisitos da ABNT NBR ISO/IEC 17025:2017, contribuindo para a padronização e confiabilidade dos processos laboratoriais.\n- Gestão de riscos e melhoria contínua, utilizando matriz de riscos para identificação, avaliação e tratamento de potenciais não conformidades e oportunidades de melhoria.\n- Garantia da confiabilidade dos resultados analíticos, por meio da verificação de métodos, participação em Programas de Ensaio de Proficiência (PEP) e acompanhamento da calibração e checagem intermediária de equipamentos.\n- Gestão de recursos e fornecedores laboratoriais, atuando na seleção de fornecedores, aquisição de equipamentos e insumos e planejamento das necessidades do laboratório.\n- Execução e acompanhamento de análises físico-químicas de águas e efluentes, utilizando técnicas de gravimetria, titulação e espectrofotometria UV-VIS, assegurando o atendimento aos procedimentos e requisitos analíticos.\n- Atuação na investigação de não conformidades ambientais, apoiando a identificação de causas e proposição de soluções para ocorrências relacionadas ao lançamento de efluentes fora dos padrões estabelecidos.\n- Avaliação técnica de soluções para tratamento de efluentes, realizando estudos de viabilidade de técnicas de desinfecção e contribuindo para a busca de alternativas mais eficientes.\n- Controle da rastreabilidade das amostras, com apoio na coleta de efluentes, preenchimento de registros, fichas de coleta e cadeia de custódia, garantindo maior confiabilidade e organização das informações\n\nFORMAÇÃO\nSuperior completo — Bacharel em Engenharia Química — Instituto Federal do Sul de Minas - Campus Pouso Alegre\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Informática, Qualidade\nMáquinas/equipamentos: Cerra de precisão\n\nINFORMAÇÕES ADICIONAIS"
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
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.",
    "curriculo_texto": "ALEX DIAS DA SILVA\nAndradas / MG\nWhatsApp: 35997470544 | E-mail: alex_dias2021@outlook.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nAuxiliar / Ajudante de Produção, Operador(a) de Produção, Operador(a) de Máquina\nÁreas de interesse: Produção / Operações\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Produção / Operações. Profissional com experiência como Operado de máquinas (Fundidor) na empresa Kolher, com 5 a 10 anos na função. Conhecimentos em Produção, Operação de máquinas. Características profissionais declaradas: Responsável, Organizado(a), Pontual, Proativo(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Agilidade.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Operado de máquinas (Fundidor) — Kolher (5 a 10 anos)\nFerramentas/sistemas: Máquina na banca de enchimento de fazer as perças.\n\n2. Avicultura — Granja Almeida (1 ano e 5 mes)\nPrincipais atividades: Aveicutura de corte\n\n3. Cultivo de flores — Fazenda Dallas (4 anos e 2 mês)\nPrincipais atividades: Rigação\n\n4. Operador de máquinas — Kolher (8 anos)\nPrincipais atividades: Fundidor\n\nFORMAÇÃO\nFundamental completo\n\nCURSOS E QUALIFICAÇÕES\nNão informados\n\nCONHECIMENTOS PROFISSIONAIS\nProdução, Operação de máquinas\n\nINFORMAÇÕES ADICIONAIS\n"
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
    "lideranca": "Sim",
    "regiao_interesse": "Andradas , Poços de Caldas e Jundiaí",
    "disponibilidade_horario": "Comercial",
    "pretensao_salarial": "8.000,00",
    "inicio_imediato": "Sim",
    "resumo_profissional": "Áreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.",
    "curriculo_texto": "RONI DONISETI FERRAZ\nAndradas / MG\nWhatsApp: 35988385312 | E-mail: roniandradas@hotmail.com\nCNH: B\n\nOBJETIVO PROFISSIONAL\nLíder / Encarregado(a), Supervisor(a) / Coordenador(a)\nÁreas de interesse: Liderança / Gestão\n\nRESUMO PROFISSIONAL\nÁreas de interesse: Liderança / Gestão. Profissional com experiência como Supervisor produção Massa e Esmalte na empresa Kohler, com mais de 10 anos na função. Vivência em Supervisor de produção Massa, Esmalte e ETA. Conhecimentos em Excel, Word, Estoque, Produção, Operação de máquinas, Qualidade. Qualificações: Cursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica. Características profissionais declaradas: Responsável, Organizado(a), Comprometido(a), Comunicativo(a), Trabalho bem em equipe, Liderança, Atenção aos detalhes, Facilidade para resolver problemas.\n\nEXPERIÊNCIAS PROFISSIONAIS\n1. Supervisor produção Massa e Esmalte — Kohler (Mais de 10 anos)\nPrincipais atividades: Supervisor de produção Massa, Esmalte e ETA\nFerramentas/sistemas: Sistema de qualidade pré controles, metrologias de laboratório com equipamentos para liberação dos produtos.\n\n2. Laboratorio — Cerâmica Vila Rica (1998 a 2010)\nPrincipais atividades: Reologia de massa , esmalte , reparos a frio resinas e esmalte para reparos requeima\n\nFORMAÇÃO\nSuperior completo — Tecnologia em Gestão da Qualidade — Universidade Pitágoras Unopar Anhanguera\n\nCURSOS E QUALIFICAÇÕES\nCursos de liderança, espectro fotômetro , Lean Manufacturing e outros relacionados à cerâmica\n\nCONHECIMENTOS PROFISSIONAIS\nExcel, Word, Estoque, Produção, Operação de máquinas, Qualidade\nMáquinas/equipamentos: Empilhadeira, mini carregadeira\n\nINFORMAÇÕES ADICIONAIS\n"
  }
];
