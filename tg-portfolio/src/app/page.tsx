import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import EnterpriseImpact from "@/components/sections/EnterpriseImpact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <EnterpriseImpact />
      </main>
    </>
  );
}