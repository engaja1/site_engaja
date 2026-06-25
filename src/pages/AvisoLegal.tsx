import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";

const AvisoLegal = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Aviso Legal da Engaja Soluções Corporativas. Termos e condições de uso do site."
        />
        <link rel="canonical" href="https://www.engaja.com.br/aviso-legal" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Aviso Legal | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Aviso Legal e termos de uso do site da Engaja." />
        <meta property="og:url" content="https://www.engaja.com.br/aviso-legal" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Aviso Legal | Engaja" />
        <meta name="twitter:description" content="Aviso Legal e termos de uso do site da Engaja." />
      </Helmet>
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.engaja.com.br/" },
          { name: "Aviso Legal", url: "https://www.engaja.com.br/aviso-legal" },
        ]}
      />
      
      <Layout>
        {/* Hero */}
        <section className="relative py-10 sm:py-12 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                Termos de Uso
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Aviso <span className="text-primary">Legal</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-12 lg:py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background border border-border/50 rounded-2xl p-6 sm:p-8 md:p-12 space-y-8">
                
                {/* Introdução */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    Bem-vindo ao site da ENGAJA – CONSULTORIA E TREINAMENTO
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ele é oferecido como um serviço aos nossos clientes. O conteúdo publicado é de propriedade da nossa empresa e está protegido pelas leis brasileiras de direitos autorais. Agradecemos o seu interesse em nossa empresa e pela visita em nosso site. Para garantir a qualidade desse serviço, confira as seguintes condições e as regras básicas que regem o uso do mesmo.
                  </p>
                </div>

                {/* Termos */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                      <span>Aceitação dos Termos</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      O uso do site ENGAJA – DESENVOLVIMENTO HUMANO E ORGANIZACIONAL constitui o seu conhecimento e aceitação desses termos. O acesso e a utilização são para conhecimento da nossa empresa, contratação de serviços e atendimentos, inscrição em treinamentos e cadastro de currículos.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                      <span>Maioridade e Concordância</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      O Usuário declara ser maior de 18 (dezoito) anos e que fez a leitura completa e atenta das regras deste documento, estando plenamente ciente, conferindo assim sua livre e expressa concordância com os termos aqui estipulados. Caso não esteja de acordo com estas diretivas, deverá descontinuar o seu acesso.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                      <span>Uso do Conteúdo</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      Você pode fazer download, copiar ou imprimir os elementos e as informações aqui contidas, sem modificações e somente para fins meramente informativos, não sendo permitida a utilização para fins comerciais.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                      <span>Registro e Requisitos</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      Você será obrigado a se registrar para usar alguns recursos do site como realizar compras e receber novidades da empresa. Podemos alterar os requisitos de registro sem aviso prévio.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                      <span>Responsabilidade do Usuário</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      Você concorda que será pessoalmente responsável pelo uso deste site e por toda a sua comunicação e atividades nele. A ENGAJA reserva o direito de negar o acesso deste site, a qualquer momento sem aviso prévio, por envolvimento do cliente em atividades proibidas, falta de respeito com outros usuários ou violação de outra forma dos termos de serviço.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">6</span>
                      <span>Conhecimento das Políticas</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      É de sua responsabilidade ler e familiarizar-se com todas as Políticas da ENGAJA disponíveis neste site.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">7</span>
                      <span>Aceitação Implícita</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      O acesso ou utilização do "website" implica a aceitação de todos os termos e condições.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">8</span>
                      <span>Problemas Técnicos</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      Esta empresa não será responsável por problemas, falhas ou mau funcionamento técnico, de qualquer tipo, em redes de computadores, servidores ou provedores, equipamentos de computadores, hardware ou software, ou erro, interrupção, defeito, atraso ou falha em operações ou transmissões.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">9</span>
                      <span>Isenção de Responsabilidade</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      A ENGAJA se isenta da responsabilidade por prejuízos ou danos diretos ou indiretos decorrentes do uso ou impossibilidade de uso deste site ou de outros conectados a este.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-foreground flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0">10</span>
                      <span>Atualizações</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed ml-11">
                      Este Aviso Legal pode ser atualizado a qualquer momento, por isso recomendamos o acesso periódico a esta página.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AvisoLegal;
