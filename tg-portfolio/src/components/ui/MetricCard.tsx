import { HoverCard } from "@/components/shared/interaction";
import { cardStyles, typography } from "@/design-system";

interface MetricCardProps {
  value: string;
  title: string;
  description: string;
}

export default function MetricCard({
  value,
  title,
  description,
}: MetricCardProps) {
  return (
    <HoverCard>
      <div
        className={`
          ${cardStyles.glass}
          ${cardStyles.padding}
        `}
      >
        <h3 className="text-5xl font-bold text-white">
          {value}
        </h3>

        <h4 className={`mt-5 ${typography.heading}`}>
          {title}
        </h4>

        <p className={`mt-3 ${typography.small}`}>
          {description}
        </p>
      </div>
    </HoverCard>
  );
}