import { Helmet } from "react-helmet-async";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
  };
}

export const OrganizationSchema = ({
  name = "Engaja Soluções Corporativas",
  url = "https://www.engaja.com.br",
  logo = "https://www.engaja.com.br/logo.png",
  description = "Há mais de 18 anos transformando empresas através de consultoria em RH, treinamentos personalizados, marketing digital e gestão empresarial.",
  telephone = "+55 11 99999-9999",
  email = "contato@engaja.com.br",
  address = {
    street: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    postalCode: "01310-100",
    country: "BR",
  },
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "sales",
      availableLanguage: ["Portuguese"],
    },
    sameAs: [
      "https://www.linkedin.com/company/engaja",
      "https://www.instagram.com/engaja",
      "https://www.facebook.com/engaja",
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

export const ArticleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = "Engaja Soluções Corporativas",
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: image || "https://www.engaja.com.br/og-image.jpg",
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Engaja Soluções Corporativas",
      logo: {
        "@type": "ImageObject",
        url: "https://www.engaja.com.br/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface JobPostingSchemaProps {
  title: string;
  description: string;
  datePosted: string;
  location?: string;
  employmentType?: string;
  salaryRange?: string;
  url: string;
}

export const JobPostingSchema = ({
  title,
  description,
  datePosted,
  location = "São Paulo, SP",
  employmentType = "FULL_TIME",
  salaryRange,
  url,
}: JobPostingSchemaProps) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    validThrough: new Date(
      new Date(datePosted).getTime() + 30 * 24 * 60 * 60 * 1000
    ).toISOString(),
    employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Engaja Soluções Corporativas",
      sameAs: "https://www.engaja.com.br",
      logo: "https://www.engaja.com.br/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: location.split(",")[0]?.trim() || "São Paulo",
        addressRegion: location.split(",")[1]?.trim() || "SP",
        addressCountry: "BR",
      },
    },
    url,
  };

  if (salaryRange) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: "BRL",
      value: {
        "@type": "QuantitativeValue",
        value: salaryRange,
        unitText: "MONTH",
      },
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
