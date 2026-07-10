import HeroActions from "./HeroActions";
import { HeroReveal } from "@/components/shared/motion";

export default function HeroContent() {
  return (
    <div>
      <HeroReveal delay={0.1}>
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
          Quality Engineering • Automation • SCM
        </span>
      </HeroReveal>

      <HeroReveal delay={0.25}>
        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Building Reliable
          <br />
          Enterprise Systems
        </h1>
      </HeroReveal>

      <HeroReveal delay={0.45}>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Senior Software Development Engineer in Test specializing in
          enterprise automation, scalable test architecture,
          Playwright, Java, IBM Sterling OMS, API validation and
          Supply Chain Management systems.
        </p>
      </HeroReveal>

      <HeroReveal delay={0.65}>
        <HeroActions />
      </HeroReveal>
    </div>
  );
}