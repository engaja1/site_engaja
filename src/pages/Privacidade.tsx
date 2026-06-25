import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

const Privacidade = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Política de Privacidade da Engaja Soluções Corporativas. Saiba como tratamos seus dados pessoais em conformidade com a LGPD."
        />
        <link rel="canonical" href="https://www.engaja.com.br/privacidade" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Política de Privacidade | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Política de Privacidade da Engaja em conformidade com a LGPD." />
        <meta property="og:url" content="https://www.engaja.com.br/privacidade" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Política de Privacidade | Engaja" />
        <meta name="twitter:description" content="Política de Privacidade da Engaja em conformidade com a LGPD." />
      </Helmet>
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.engaja.com.br/" },
          { name: "Política de Privacidade", url: "https://www.engaja.com.br/privacidade" },
        ]}
      />
      
      <Layout>
        {/* Hero */}
        <section className="relative py-10 sm:py-12 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                LGPD
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Política de <span className="text-primary">Privacidade</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate dark:prose-invert">
              <div className="bg-background border border-border/50 rounded-2xl p-6 sm:p-8 md:p-12 space-y-8">
                
                {/* Introdução */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o Titular concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao manifestar sua aceitação para com o presente termo, o Titular consente e concorda que a empresa <strong className="text-foreground">ERICK JACOBOSKI MARDONADO – M.E.</strong>, pessoa jurídica devidamente inscrita no CNPJ sob nº 20.407.032/0001-13, com sede na Nazareno Thomé, nº 65, Bairro Recanto do Bosque, na cidade de São João da Boa Vista – SP, CEP 13.874-459, nome fantasia <strong className="text-foreground">ENGAJA – DESENVOLVIMENTO HUMANO E ORGANIZACIONAL</strong>, com endereço na Nazareno Thomé, nº 65, Bairro Recanto do Bosque, na cidade de São João da Boa Vista – SP, CEP 13.874-459, doravante denominada Controladora, tome decisões referentes ao tratamento de seus dados pessoais, envolvendo operações como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração.
                  </p>
                </div>

                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Dados Pessoais</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Controladora fica autorizada a tomar decisões referentes ao tratamento e a realizar o tratamento dos seguintes dados pessoais do Titular:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Nome completo;</li>
                    <li>Nome empresarial;</li>
                    <li>Data de nascimento;</li>
                    <li>Número e imagem da Carteira de Identidade (RG);</li>
                    <li>Número e imagem do Cadastro de Pessoas Físicas (CPF);</li>
                    <li>Número e imagem da Carteira Nacional de Habilitação (CNH);</li>
                    <li>Número do Cadastro Nacional de Pessoas Jurídicas (CNPJ);</li>
                    <li>Fotografia 3×4;</li>
                    <li>Estado civil;</li>
                    <li>Nível de instrução ou escolaridade;</li>
                    <li>Endereço completo;</li>
                    <li>Números de telefone, WhatsApp e endereços de e-mail;</li>
                    <li>Banco, agência e número de contas bancárias;</li>
                    <li>Bandeira, número, validade e código de cartões de crédito;</li>
                    <li>Nome de usuário e senha específicos para uso dos serviços do Controlador;</li>
                    <li>Comunicação, verbal e escrita, mantida entre o Titular e o Controlador.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    Além disso, a Controladora fica autorizada a tomar decisões referentes ao tratamento e a realizar o tratamento dos seguintes dados inseridos pelo Titular, com a intenção de obter a prestação dos serviços ofertados pela mesma.
                  </p>
                </div>

                {/* Finalidades */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Finalidades do Tratamento dos Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O tratamento dos dados pessoais listados neste termo tem as seguintes finalidades:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Possibilitar que a Controladora identifique e entre em contato com o Titular para fins de repasse de informações;</li>
                    <li>Possibilitar que a Controladora envie ou forneça ao Titular seus produtos e serviços, de forma remunerada ou gratuita;</li>
                    <li>Possibilitar que a Controladora utilize tais dados em Pesquisas de Mercado;</li>
                    <li>Possibilitar que a Controladora utilize tais dados na inscrição, divulgação, premiação dos interessados participantes de Eventos, Prêmios ou Concursos;</li>
                    <li>Possibilitar que a Controladora utilize tais dados na elaboração de relatórios e emissão de produtos e serviços;</li>
                    <li>Possibilitar que a Controladora utilize tais dados para suas peças de Comunicação;</li>
                    <li>Possibilitar que a Controladora utilize tais dados para emissão de Notas Fiscais e documentos financeiros correlatos;</li>
                    <li>Possibilitar que a Controladora utilize tais dados para facilitar a prestação de serviços diversos além dos primariamente contratados, desde que a outra parte também demonstre interesse em contratar novos serviços;</li>
                    <li>Possibilitar que a Controladora utilize tais dados para manter banco de dados de profissionais do mercado para facilitar o contato em futuros convites para eventos;</li>
                    <li>Possibilitar que a Controladora utilize tais dados para manter banco de dados de profissionais para captação de profissionais;</li>
                    <li>Possibilitar que a Controladora compartilhe tais dados com empresas parceiras que estão em busca de profissionais.</li>
                  </ul>
                </div>

                {/* Compartilhamento */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Compartilhamento de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Controladora fica autorizada a compartilhar os dados pessoais do Titular com outros agentes de tratamento de dados, caso seja necessário para as finalidades listadas neste termo, observados os princípios e as garantias estabelecidas pela Lei nº 13.709.
                  </p>
                </div>

                {/* Segurança */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Segurança dos Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Controladora responsabiliza-se pela manutenção de medidas de segurança, técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Em conformidade ao art. 48 da Lei nº 13.709, o Controlador comunicará ao Titular e à Autoridade Nacional de Proteção de Dados (ANPD) a ocorrência de incidente de segurança que possa acarretar risco ou dano relevante ao Titular.
                  </p>
                </div>

                {/* Término */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Término do Tratamento dos Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Controladora poderá manter e tratar os dados pessoais do Titular durante todo o período em que os mesmos forem pertinentes ao alcance das finalidades listadas neste termo. Dados pessoais anonimizados, sem possibilidade de associação ao indivíduo, poderão ser mantidos por período indefinido.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O Titular poderá solicitar via e-mail ou correspondência ao Controlador, a qualquer momento, que sejam eliminados os dados pessoais não anonimizados do Titular. O Titular fica ciente de que poderá ser inviável ao Controlador continuar o fornecimento de produtos ou serviços ao Titular a partir da eliminação dos dados pessoais.
                  </p>
                </div>

                {/* Direitos do Titular */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Direitos do Titular</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    O Titular tem direito a obter da Controladora, em relação aos dados por ele tratados, a qualquer momento e mediante requisição:
                  </p>
                  <ul className="list-[upper-roman] list-inside space-y-2 text-muted-foreground">
                    <li>Confirmação da existência de tratamento;</li>
                    <li>Acesso aos dados;</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                    <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na Lei nº 13.709;</li>
                    <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, de acordo com a regulamentação da autoridade nacional, observados os segredos comercial e industrial;</li>
                    <li>Eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas no art. 16 da Lei nº 13.709;</li>
                    <li>Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
                    <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
                    <li>Revogação do consentimento, nos termos do § 5º do art. 8º da Lei nº 13.709.</li>
                  </ul>
                </div>

                {/* Revogação */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Direito de Revogação do Consentimento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Este consentimento poderá ser revogado pelo Titular, a qualquer momento, mediante solicitação via e-mail ou correspondência ao Controlador.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacidade;
