import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import USP from "@/components/sections/USP";
import HowItWorks from "@/components/sections/HowItWorks";
import CaseStudies from "@/components/sections/CaseStudies";
import MultilingualShowcase from "@/components/sections/MultilingualShowcase";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <USP />
        <HowItWorks />
        <CaseStudies />
        <MultilingualShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
