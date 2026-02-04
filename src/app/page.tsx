import Hero from "@/components/landing/hero";
import Trust from "@/components/landing/trust";
import Services from "@/components/landing/services";
import Cta from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}