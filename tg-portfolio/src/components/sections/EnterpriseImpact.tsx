import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";

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
      id="impact"
      className="py-28"
    >
      <Container>

        <div className="mb-16 max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Enterprise Impact
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Engineering Outcomes
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Building enterprise automation is not only about writing tests.
            It is about creating measurable engineering outcomes that improve
            software quality, delivery speed and business confidence.
          </p>

        </div>

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

      </Container>
    </section>
  );
}