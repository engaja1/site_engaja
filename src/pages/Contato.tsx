import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { BreadcrumbSchema } from "@/components/seo/StructuredData";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["R. Nazareno Thomé, 65", "Parque Colina da Mantiqueira", "São João da Boa Vista - SP, 13874-459"],
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    details: ["(19) 3631-3858", "(11) 97815-3276"],
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["engaja.treinamento@gmail.com"],
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda a Sexta", "8h às 17h"],
  },
];

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Engaja Soluções Corporativas</title>
        <meta
          name="description"
          content="Entre em contato com a Engaja. Solicite uma proposta ou tire suas dúvidas sobre nossos serviços de consultoria e treinamentos."
        />
        <link rel="canonical" href="https://www.engaja.com.br/contato" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contato | Engaja Soluções Corporativas" />
        <meta property="og:description" content="Entre em contato com a Engaja. Solicite uma proposta ou tire suas dúvidas sobre nossos serviços." />
        <meta property="og:url" content="https://www.engaja.com.br/contato" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contato | Engaja" />
        <meta name="twitter:description" content="Entre em contato com a Engaja para solicitar uma proposta personalizada." />
      </Helmet>
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.engaja.com.br/" },
          { name: "Contato", url: "https://www.engaja.com.br/contato" },
        ]}
      />
      
      <Layout>
        {/* Hero */}
        <section className="relative py-10 sm:py-12 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient opacity-5" />
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                Contato
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Vamos conversar sobre o{" "}
                <span className="text-primary">seu projeto?</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground">
                Estamos prontos para ajudar sua empresa a alcançar resultados extraordinários.
                Entre em contato e solicite uma proposta personalizada.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-10 sm:py-12 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6 animate-fade-up">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Informações de Contato</h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Escolha a forma mais conveniente para você entrar em contato conosco.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((item) => (
                    <Card key={item.title} className="border-border/50">
                      <CardContent className="p-3 sm:p-4 flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground text-xs sm:text-sm">{detail}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 animate-fade-up stagger-1">
                <Card className="border-border/50">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Envie uma Mensagem</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-10 sm:pb-12 lg:pb-24">
          <div className="container">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-96 bg-muted animate-fade-up stagger-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0526420879837!2d-46.765288!3d-21.9709426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9cb0d4420d925%3A0x39fa4774e7ea67c7!2sEngaja%20Solu%C3%A7%C3%B5es%20Corporativas!5e0!3m2!1spt-BR!2sbr!4v1769628027010!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Engaja - São João da Boa Vista"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contato;