import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientLogos } from "@/components/home/ClientLogos";
import { StatsSection } from "@/components/home/StatsSection";
import { TrainingGallerySection } from "@/components/home/TrainingGallerySection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CasesSection } from "@/components/home/CasesSection";
import { CTASection } from "@/components/home/CTASection";
import { OrganizationSchema } from "@/components/seo/StructuredData";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Engaja Soluções Corporativas | Consultoria, Treinamentos e RH</title>
        <meta
          name="description"
          content="Há mais de 18 anos transformando empresas através de consultoria em RH, treinamentos personalizados, marketing digital e gestão empresarial. Solicite uma proposta!"
        />
        <meta name="keywords" content="consultoria empresarial, treinamentos corporativos, RH, marketing digital, recrutamento e seleção" />
        <link rel="canonical" href="https://www.engaja.com.br/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Engaja Soluções Corporativas | Consultoria, Treinamentos e RH" />
        <meta property="og:description" content="Há mais de 18 anos transformando empresas através de consultoria em RH, treinamentos personalizados, marketing digital e gestão empresarial." />
        <meta property="og:url" content="https://www.engaja.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.engaja.com.br/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Engaja Soluções Corporativas" />
        <meta name="twitter:description" content="Consultoria empresarial, treinamentos corporativos e soluções em RH" />
      </Helmet>
      <OrganizationSchema />
      <Layout>
        <HeroSection />
        <ClientLogos />
        <SolutionsSection />
        <StatsSection />
        <WhyChooseSection />
        <CasesSection />
        <TrainingGallerySection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
