interface LocalBusinessSchema {
  name: string;
  description: string;
  phone: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  url?: string;
}

export function localBusinessSchema(data: LocalBusinessSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "telephone": data.phone,
    ...(data.email && { email: data.email }),
    "url": data.url || "https://topmetalroofing.com",
    "address": {
      "@type": "PostalAddress",
      ...(data.address && { "streetAddress": data.address }),
      ...(data.city && { "addressLocality": data.city }),
      ...(data.state && { "addressRegion": data.state }),
      ...(data.zip && { "postalCode": data.zip }),
      "addressCountry": "US",
    },
    "areaServed": [
      { "@type": "City", "name": "Baton Rouge" },
      { "@type": "City", "name": "New Orleans" },
      { "@type": "City", "name": "Lafayette" },
      { "@type": "City", "name": "Lake Charles" },
      { "@type": "City", "name": "Shreveport" },
      { "@type": "State", "name": "Louisiana" },
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00",
  };
  return JSON.stringify(schema);
}

interface SeoSchemaProps {
  name?: string;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  url?: string;
}

export default function SeoSchema({
  name = "Top Metal Roofing",
  description = "Expert metal roofing installation and repair across Louisiana. Residential, commercial, and industrial metal roofing solutions.",
  phone = "(225) 555-1234",
  email = "info@topmetalroofing.com",
  address,
  city = "Louisiana",
  state = "LA",
  zip,
  url,
}: SeoSchemaProps) {
  const schema = localBusinessSchema({ name, description, phone, email, address, city, state, zip, url });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
}