import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Política de Cookies da Engaja Soluções Corporativas. Saiba como utilizamos cookies em nossas aplicações."
        />
        <link rel="canonical" href="https://www.engaja.com.br/cookies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Política de Cookies | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Política de Cookies da Engaja. Saiba como utilizamos cookies." />
        <meta property="og:url" content="https://www.engaja.com.br/cookies" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Política de Cookies | Engaja" />
        <meta name="twitter:description" content="Política de Cookies da Engaja." />
      </Helmet>
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.engaja.com.br/" },
          { name: "Política de Cookies", url: "https://www.engaja.com.br/cookies" },
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
                Política de <span className="text-primary">Cookies</span>
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
                  <p className="text-muted-foreground leading-relaxed">
                    A presente Política de Cookies é um documento complementar à Política de Privacidade da empresa <strong className="text-foreground">ERICK JACOBOSKI MARDONADO – M.E.</strong>, pessoa jurídica devidamente inscrita no CNPJ sob nº 20.407.032/0001-13, com sede na Nazareno Thomé, nº 65, Bairro Recanto do Bosque, na cidade de São João da Boa Vista – SP, CEP 13.874-459, nome fantasia <strong className="text-foreground">ENGAJA – DESENVOLVIMENTO HUMANO E ORGANIZACIONAL</strong>, com endereço na Avenida Durval Nicolau, nº 2.140, sala 13, Bairro Mantiqueira, na cidade de São João da Boa Vista – SP, CEP 13.874-371, disponível neste link: <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>. Aqui, você encontrará informações objetivas e claras sobre o que são Cookies, quais Cookies utilizamos em nossas aplicações, qual papel desempenham e como configurá-los.
                  </p>
                </div>

                {/* 1. O que são Cookies */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">1. O que são Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Cookies são pequenos arquivos de texto ou fragmentos de informação que são baixados em seu computador, smartphone ou qualquer outro dispositivo com acesso à internet quando você visita nossa aplicação. Eles contêm informações sobre a sua navegação em nossas páginas e retêm apenas informações relacionadas às suas preferências.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Assim, essa página consegue armazenar e recuperar os dados sobre os seus hábitos de navegação, de forma a melhorar a experiência de uso, por exemplo. É importante frisar que eles não contêm informações pessoais específicas, como dados sensíveis ou bancários.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    O seu navegador armazena os cookies no disco rígido, mas ocupam um espaço de memória mínimo, que não afetam o desempenho do seu computador. A maioria das informações são apagadas logo ao encerrar a sessão, como você verá no próximo tópico.
                  </p>
                </div>

                {/* 1.1. Tipos de Cookies */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">1.1. Tipos de Cookies</h3>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-medium">Os cookies, quanto a seus proprietários, podem ser:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong className="text-foreground">Cookies proprietários:</strong> são cookies definidos por nós ou por terceiros em nosso nome</li>
                      <li><strong className="text-foreground">Cookies de terceiros:</strong> são cookies definidos por terceiros confiáveis em nossa aplicação</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-medium">Os cookies, quanto ao seu tempo de vida, podem ser:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong className="text-foreground">Cookies de sessão ou temporários:</strong> são cookies que expiram assim que você fecha o seu navegador, encerrando a sessão.</li>
                      <li><strong className="text-foreground">Cookies persistentes ou permanentes:</strong> são cookies que permanecem no seu dispositivo durante um período determinado ou até que você os exclua.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <p className="text-muted-foreground leading-relaxed font-medium">Os cookies, quanto a sua finalidade, podem ser:</p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong className="text-foreground">Cookies necessários:</strong> são cookies essenciais que possibilitam a navegação em nossas aplicações e o acesso a todos os recursos; sem estes, nossos serviços podem apresentar mal desempenho ou não funcionar.</li>
                      <li><strong className="text-foreground">Cookies de desempenho:</strong> são cookies que otimizam a forma que nossas aplicações funcionam, coletando informações anônimas sobre as páginas acessadas.</li>
                      <li><strong className="text-foreground">Cookies de funcionalidade:</strong> são cookies que memorizam suas preferências e escolhas (como seu nome de usuário)</li>
                      <li><strong className="text-foreground">Cookies de publicidade:</strong> são cookies que direcionam anúncios em função dos seus interesses e limitam a quantidade de vezes que o anúncio aparece.</li>
                    </ul>
                  </div>
                </div>

                {/* 2. Por que usamos Cookies */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">2. Por que usamos Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A ENGAJA utiliza Cookies para fornecer a melhor experiência de uso, tornando nossas aplicações mais fáceis e personalizadas, tendo por base suas escolhas e comportamento de navegação.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Assim, buscamos entender como você utiliza nossas aplicações e ajustar o conteúdo para torná-lo mais relevante para você, além de lembrar de suas preferências. Os Cookies participam deste processo porquanto armazenam, leem e executam os dados necessários para cumprir com o nosso objetivo.
                  </p>
                </div>

                {/* 3. Que tipo de Cookies utilizamos */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">3. Que tipo de Cookies utilizamos?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Abaixo listamos todos os Cookies que podem ser utilizados pela ENGAJA. É importante lembrar que você pode gerenciar a permissão concedida para cada Cookie em seu navegador. Além disso, uma vez que os Cookies capturam dados sobre você, aconselhamos a leitura de nossa <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
                  </p>
                </div>

                {/* 3.1. Cookies necessários */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">3.1. Cookies necessários</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Tempo</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Propriedade</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-muted-foreground">Sessão</td>
                          <td className="border border-border p-3 text-muted-foreground">Temporário</td>
                          <td className="border border-border p-3 text-muted-foreground">Proprietário</td>
                          <td className="border border-border p-3 text-muted-foreground">Mantém a sessão do usuário ativa</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3.2. Cookies de desempenho */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">3.2. Cookies de desempenho</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Tempo</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Propriedade</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-muted-foreground">Analytics</td>
                          <td className="border border-border p-3 text-muted-foreground">Permanente</td>
                          <td className="border border-border p-3 text-muted-foreground">Terceiro</td>
                          <td className="border border-border p-3 text-muted-foreground">Coleta dados anônimos de navegação</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3.3. Cookies de funcionalidade */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">3.3. Cookies de funcionalidade</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Tempo</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Propriedade</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-muted-foreground">Preferências</td>
                          <td className="border border-border p-3 text-muted-foreground">Permanente</td>
                          <td className="border border-border p-3 text-muted-foreground">Proprietário</td>
                          <td className="border border-border p-3 text-muted-foreground">Armazena preferências do usuário</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 3.4. Cookies de publicidade */}
                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">3.4. Cookies de publicidade</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Tempo</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Propriedade</th>
                          <th className="border border-border p-3 text-left font-semibold text-foreground">Descrição</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-muted-foreground">Ads</td>
                          <td className="border border-border p-3 text-muted-foreground">Permanente</td>
                          <td className="border border-border p-3 text-muted-foreground">Terceiro</td>
                          <td className="border border-border p-3 text-muted-foreground">Direciona anúncios relevantes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 4. Gerenciamento dos Cookies */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">4. Gerenciamento dos Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A instalação dos cookies está sujeita ao seu consentimento. Apesar da maioria dos navegadores estar inicialmente configurada para aceitar cookies de forma automática, você pode rever suas permissões a qualquer tempo, de forma a bloqueá-los, aceitá-los ou ativar notificações para quando alguns cookies forem enviados ao seu dispositivo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Atualmente, na primeira vez que você acessa nossas aplicações, será requerida a sua concordância com a instalação destes. Apenas após a sua aceitação eles serão ativados.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Para tanto, utilizamos um sistema de banner de informações na página inicial da ENGAJA. Dessa maneira, não apenas solicitamos sua concordância, mas também informamos que a navegação continuada em nossos sites será entendida como consentimento.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Como já dito, você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Você também pode configurá-los caso a caso. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    Você pode acessar tutoriais sobre o tema diretamente nos links abaixo:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><a href="https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Internet Explorer</a></li>
                    <li><a href="https://support.mozilla.org/pt-BR/kb/gerencie-configuracoes-de-armazenamento-local-de-s" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Firefox</a></li>
                    <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Safari</a></li>
                    <li><a href="https://support.google.com/chrome/answer/95647?hl=pt-BR" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Google Chrome</a></li>
                    <li><a href="https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Microsoft Edge</a></li>
                    <li><a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Se você usa o Opera</a></li>
                  </ul>
                </div>

                {/* 5. Disposições finais */}
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">5. Disposições finais</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Para a ENGAJA, a privacidade e confiança são fundamentais para a nossa relação com você. Estamos sempre nos atualizando para manter os mais altos padrões de segurança.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Assim, reservamo-nos o direito de alterar esta Política de Cookies a qualquer tempo. As mudanças entrarão em vigor logo após a publicação, e você será avisado.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao continuar a navegação nas nossas aplicações após essa mudança se tornar eficaz, você concorda com elas. Aconselhamos que você sempre verifique esta Política, bem como a nossa <Link to="/privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Em caso de dúvidas sobre esta Política de Cookies, entre em contato conosco pelos seguintes meios:
                  </p>
                  <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                    <p className="text-foreground"><strong>E-mail:</strong> <a href="mailto:atendimento@engaja.com.br" className="text-primary hover:underline">atendimento@engaja.com.br</a></p>
                    <p className="text-foreground"><strong>Telefones:</strong> (19) 3653-13858 / (19) 99840-6377</p>
                  </div>
                  <p className="text-muted-foreground text-sm italic">
                    Esta Política de Cookies foi atualizada pela última vez: 08/12/2020.
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

export default Cookies;
