import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import { CaseStudies } from "@/components/sections/CaseStudiesGallery";
import { WorkGallery } from "@/components/sections/WorkGallery";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQAccordion from "@/components/sections/FAQAccordion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <CaseStudies />
      <WorkGallery />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FAQAccordion />
    </>
  );
}