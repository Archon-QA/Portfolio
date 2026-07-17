import { journey } from "@/data/journey";

import JourneyCard from "./JourneyCard";

import {
  Timeline,
  TimelineNode,
} from "@/components/shared/timeline";

export default function JourneyTimeline() {
  return (
    <Timeline>
      {journey.map((step, index) => {
        let state: "inactive" | "active" | "completed" =
          "inactive";

        if (index < 2) {
          state = "completed";
        } else if (index === 2) {
          state = "active";
        }

        return (
          <TimelineNode
            key={step.phase}
            isLast={index === journey.length - 1}
            state={state}
          >
            <JourneyCard step={step} />
          </TimelineNode>
        );
      })}
    </Timeline>
  );
}