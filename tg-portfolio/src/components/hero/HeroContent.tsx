
import HeroActions from "./HeroActions";
import { HeroReveal } from "@/components/shared/motion";

export default function HeroContent() {
  return (
    <div className="w-full max-w-2xl">
      <HeroReveal delay={0.1}>
        <span className="inline-flex max-w-full flex-wrap rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:tracking-[0.22em]">
          Senior SDET · Enterprise OMS · Automation
        </span>
      </HeroReveal>




<HeroReveal delay={0.25}>
  <h1 className="mt-8 max-w-[15ch] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
    Engineering Quality
    <br />
    at Enterprise Scale
  </h1>
</HeroReveal>




      <HeroReveal delay={0.45}>
        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          Senior SDET with 4+ years of experience in enterprise
          Supply Chain Management systems. I build automation
          solutions with Playwright and Java-based BDD, and
          validate end-to-end workflows across IBM Sterling OMS,
          APIs, integration logs, and downstream systems.
        </p>
      </HeroReveal>

      <HeroReveal delay={0.65}>
        <div className="mt-1">
          <HeroActions />
        </div>
      </HeroReveal>
    </div>
  );
}
