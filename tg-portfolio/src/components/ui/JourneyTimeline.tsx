import { journey } from "@/data/journey";
import JourneyCard from "./JourneyCard";

export default function JourneyTimeline() {
  return (
    <div
      className="
        grid
        gap-8
        lg:grid-cols-2
      "
    >
      {journey.map((step) => (
        <JourneyCard
          key={step.phase}
          step={step}
        />
      ))}
    </div>
  );
}