import Container from "@/components/ui/Container";
import Background from "@/components/shared/background/Background";
import HeroCard from "./HeroCard";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="about"
      className="
        relative
        flex
        overflow-hidden
        pt-32
        pb-24
        lg:min-h-[calc(100vh-80px)]
        lg:items-center
      "
    >
      <Background />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroCard />
        </div>
      </Container>

      <div
        className="
          absolute
          bottom-0
          left-0
          h-48
          w-full
          bg-gradient-to-b
          from-transparent
          to-[#05070d]
        "
      />
    </section>
  );
}