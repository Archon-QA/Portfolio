import {
  Container,
  JourneyTimeline,
} from "@/components/ui";

import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";

export default function EnterpriseJourney() {
  return (
    <section
      id="journey"
      className="py-28"
    >
      <Container>

        <div className="mb-24">

          <SectionNumber number="05" />

          <SectionHeader
            eyebrow="Engineering Journey"
            title="Evolution Through Enterprise Engineering"
            description="
              Building reliable enterprise systems is a journey of continuous
              learning, automation and innovation. Every milestone represents
              a step towards creating scalable, high-quality software.
            "
          />

        </div>

        <JourneyTimeline />

      </Container>
    </section>
  );
}