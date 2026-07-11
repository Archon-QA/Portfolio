import { TechnologyCategoryStyles } from "@/data/technology";
import type { JourneyTechnology } from "@/data/journey";

interface TechnologyBadgeProps {
  technology: JourneyTechnology;
  className?: string;
}

export default function TechnologyBadge({
  technology,
  className = "",
}: TechnologyBadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        tracking-wide
        transition-all
        duration-300

        ${TechnologyCategoryStyles[technology.category]}
        ${className}
      `}
    >
      {technology.name}
    </span>
  );
}