import Container from "@/components/ui/Container";
import ExpertiseCard from "@/components/ui/ExpertiseCard";

const expertise = [
  {
    title: "Enterprise Automation",
    description:
      "Designing scalable automation frameworks for enterprise Supply Chain Management platforms with maintainability and reliability in mind.",
    items: [
      "Playwright",
      "Java",
      "BDD",
      "Framework Design",
    ],
  },
  {
    title: "API & Integration Testing",
    description:
      "Validating distributed enterprise systems through REST APIs, integration workflows and downstream service verification.",
    items: [
      "REST APIs",
      "GraphQL",
      "Postman",
      "Integration Testing",
    ],
  },
  {
    title: "IBM Sterling OMS",
    description:
      "End-to-end validation of order lifecycle, inventory synchronization, catalog management and fulfillment workflows.",
    items: [
      "Order Lifecycle",
      "Inventory",
      "Catalog",
      "Returns",
    ],
  },
  {
    title: "AI Powered Testing",
    description:
      "Exploring AI-assisted quality engineering through intelligent automation, prompt engineering and agentic testing workflows.",
    items: [
      "LLMs",
      "AI Agents",
      "GitHub Copilot",
      "Prompt Engineering",
    ],
  },
];

export default function EngineeringExpertise() {
  return (
    <section
      id="expertise"
      className="py-32"
    >
      <Container>

        <div className="mb-16 max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Engineering Expertise
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Core Capabilities
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My expertise extends beyond individual tools. I focus on
            designing reliable automation solutions, validating complex
            enterprise workflows and improving software delivery quality.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {expertise.map((item) => (
            <ExpertiseCard
              key={item.title}
              title={item.title}
              description={item.description}
              items={item.items}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}