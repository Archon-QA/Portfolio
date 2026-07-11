import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import EnterpriseImpact from "@/components/sections/EnterpriseImpact";
import EngineeringExpertise from "@/components/sections/EngineeringExpertise";
import FeaturedInitiatives from "@/components/sections/FeaturedInitiatives";
import ProfessionalJourney from "@/components/sections/ProfessionalJourney";
import EnterpriseJourney from "@/components/sections/EnterpriseJourney";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EnterpriseImpact />
        <EngineeringExpertise />
        <FeaturedInitiatives />
        <EnterpriseJourney />
        <ProfessionalJourney />
      </main>
    </>
  );
}