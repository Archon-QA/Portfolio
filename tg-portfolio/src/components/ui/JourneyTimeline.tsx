import { journey } from "@/data/journey";

import JourneyCard from "./JourneyCard";

import {
  Timeline,
  TimelineLine,
  TimelineNode,
} from "@/components/shared/timeline";

export default function JourneyTimeline() {
  return (
    <Timeline>

      <TimelineLine />

      {journey.map((step) => (
        <TimelineNode key={step.phase}>

          <JourneyCard
            step={step}
          />

        </TimelineNode>
      ))}

    </Timeline>
  );
}