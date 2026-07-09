import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";
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
      id="skills"
      className="py-32"
    >
      <Container>

        <div className="mb-24">

    <SectionNumber number="03" />

    <SectionHeader
    eyebrow="Engineering Expertise"
    title="Core Capabilities"
    description="My expertise extends beyond individual tools. I focus on designing reliable automation solutions, validating complex enterprise workflows and improving software delivery quality."
    />

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