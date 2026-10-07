export const SITE_URL = "https://greendotbuild.com";
export const SITE_NAME = "GreenDot Build & Interiors";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero_rooftop.jpg`;

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "founder": {
      "@type": "Person",
      "name": "Hakash R",
      "jobTitle": "Founder & Managing Director",
      "description": "Construction & Project Management specialist with 5+ years of prefabricated building experience across 100+ sites."
    },
    "description": "Chennai-focused customized prefabricated construction and commercial interior fit-out firm serving Chennai and South India.",
    "knowsAbout": [
      "Light Gauge Steel Framing (LGSF)",
      "Polyurethane Foam (PUF) Sandwich Panels",
      "Rooftop Extension Construction",
      "Commercial Turnkey Interiors",
      "Café & Restaurant Fit-outs",
      "Coastal Villa & Farmhouse Construction"
    ]
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "image": `${SITE_URL}/images/hero_rooftop.jpg`,
    "description": "Customized prefabricated construction (LGSF steel, PUF insulated panels) and turnkey interior execution in Chennai & South India.",
    "telephone": "+91-98400-00000",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0827,
      "longitude": 80.2707
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      {
        "@type": "AdministrativeArea",
        "name": "South India"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Hakash R"
    },
    "knowsAbout": [
      "Customized Prefabricated Construction",
      "Light Gauge Steel Framing (LGSF)",
      "PUF Sandwich Panels",
      "Rooftop Room Extensions",
      "Commercial Space Interiors",
      "Café & Restaurant Fit-outs"
    ]
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "GeneralContractor",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "State",
        "name": "Tamil Nadu"
      }
    ],
    "url": `${SITE_URL}/services/${service.slug}`
  };
}

export function generateFAQSchema(faqList: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

