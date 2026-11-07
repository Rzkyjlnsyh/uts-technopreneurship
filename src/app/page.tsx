import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorks } from "@/components/HowItWorks";
import { DifferentiatorsSection } from "@/components/DifferentiatorsSection";
import { PricingSection } from "@/components/PricingSection";
import { ValidationSection } from "@/components/ValidationSection";
import { TeamSection } from "@/components/TeamSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <HowItWorks />
        <DifferentiatorsSection />
        <PricingSection />
        <ValidationSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
