import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import YearSpan from "@/components/YearSpan";
import Services from "@/components/Services";
import Process from "@/components/Process";
import OwnerStandards from "@/components/OwnerStandards";
import PullQuote from "@/components/PullQuote";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="relative">
      <JsonLd />
      <Nav />
      <Hero />
      <TrustStrip />
      <YearSpan />
      <Services />
      <Process />
      <PullQuote />
      <OwnerStandards />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
