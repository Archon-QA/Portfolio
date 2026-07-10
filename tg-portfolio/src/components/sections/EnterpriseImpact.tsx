import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import { Reveal } from "@/components/shared/motion";

const metrics = [
  {
    value: "4+",
    title: "Years Experience",
    description:
      "Delivering enterprise quality engineering solutions across Supply Chain Management platforms.",
  },
  {
    value: "70%",
    title: "Regression Automated",
    description:
      "Built scalable automation frameworks that significantly reduced manual validation effort.",
  },
  {
    value: "200+",
    title: "Partner Integrations",
    description:
      "Validated enterprise partner integrations across multiple global markets and business models.",
  },
  {
    value: "30%",
    title: "Faster Execution",
    description:
      "Improved regression execution time through optimized automation and CI/CD integration.",
  },
];

export default function EnterpriseImpact() {
  return (
    <section
      id="experience"
      className="py-28"
    >
      <Container>

        <Reveal>
          <div className="mb-24">
            <SectionNumber number="02" />

            <SectionHeader
              eyebrow="Enterprise Impact"
              title="Engineering Outcomes"
              description="Building enterprise automation is not only about writing tests. It is about creating measurable engineering outcomes that improve software quality, delivery speed and business confidence."
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.title}
                value={metric.value}
                title={metric.title}
                description={metric.description}
              />
            ))}
          </div>
        </Reveal>

      </Container>
    </section>
  );
}