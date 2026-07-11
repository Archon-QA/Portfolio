import { HoverCard } from "@/components/shared/interaction";
import { Reveal } from "@/components/shared/motion";

import TechnologyBadge from "./TechnologyBadge";

import {
  cardStyles,
  typography,
} from "@/design-system";

import { type JourneyStep } from "@/data";

interface JourneyCardProps {
  step: JourneyStep;
}

export default function JourneyCard({
  step,
}: JourneyCardProps) {
  return (
    <Reveal>
      <HoverCard>
        <article
          className={`
            ${cardStyles.glass}
            ${cardStyles.glassHover}
            ${cardStyles.padding}

            relative
            overflow-hidden
            h-full
          `}
        >
          {/* Header */}

          <div className="flex items-center justify-between">

            <span className="text-xs font-bold uppercase tracking-[0.35em] text-blue-400">
              {step.phase}
            </span>

            <span className="text-sm text-zinc-500">
              {step.year}
            </span>

          </div>

          {/* Title */}

          <h3
            className={`
              mt-6
              ${typography.heading}
            `}
          >
            {step.title}
          </h3>

          {/* Subtitle */}

          <p className="mt-2 text-blue-400">
            {step.subtitle}
          </p>

          {/* Description */}

          <p
            className={`
              mt-6
              ${typography.body}
            `}
          >
            {step.description}
          </p>

          {/* Technologies */}

          <div className="mt-8 flex flex-wrap gap-3">

            {step.technologies.map((technology) => (
              <TechnologyBadge
                key={technology.name}
                technology={technology}
              />
            ))}

          </div>
        </article>
      </HoverCard>
    </Reveal>
  );
}