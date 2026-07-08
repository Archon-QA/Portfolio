import Container from "@/components/ui/Container";
import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:min-h-[calc(100vh-80px)] lg:flex lg:items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroCard />
        </div>
      </Container>
    </section>
  );
}