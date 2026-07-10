import { CheckCircle2 } from "lucide-react";

import { HeroReveal } from "@/components/shared/motion";
import { HoverCard } from "@/components/shared/interaction";

import { cardStyles, typography } from "@/design-system";

const technologies = [
  "Playwright",
  "Java",
  "IBM Sterling OMS",
  "REST API Testing",
  "CI/CD",
  "Supply Chain Management",
];

export default function HeroCard() {
  return (
    <HeroReveal delay={0.8}>
      <div className="flex justify-center lg:justify-end">
        <HoverCard>
          <div
            className={`
              w-full
              max-w-md
              ${cardStyles.glass}
              ${cardStyles.padding}
            `}
          >
            <div className="mb-8">
              <HeroReveal delay={1.0}>
                <p className={typography.subHeading}>
                  Enterprise Stack
                </p>
              </HeroReveal>

              <HeroReveal delay={1.1}>
                <h3 className={`mt-3 ${typography.heading}`}>
                  Engineering Focus
                </h3>
              </HeroReveal>
            </div>

            <div className="space-y-5">
              {technologies.map((technology, index) => (
                <HeroReveal
                  key={technology}
                  delay={1.2 + index * 0.08}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-blue-500"
                    />

                    <span className="text-zinc-300">
                      {technology}
                    </span>
                  </div>
                </HeroReveal>
              ))}
            </div>
          </div>
        </HoverCard>
      </div>
    </HeroReveal>
  );
}