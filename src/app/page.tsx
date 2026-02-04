import Hero from "@/components/landing/hero";
import Trust from "@/components/landing/trust";
import Services from "@/components/landing/services";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";
import Script from "next/script";


function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
}

export default function HomePage() {
  const url = siteUrl().toString().replace(/\/$/, "");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Dr. João Moittinho",
    url,
    image: `${url}/og.png`,
    description:
      "Clínica de odontologia focada em estética, implantes e saúde bucal. Atendimento.",
      telephone: "+5573999611770",
      address: {
        "@type": "PostalAddress",
         streetAddress: "Av. Perimetral, 164A",
         addressLocality: "Itamaraju",
         addressRegion: "BA",
         postalCode: "45836000",
        addressCountry: "BR",
    },
  };

  return (
    <main>
      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Trust />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}