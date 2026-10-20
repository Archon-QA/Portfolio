
import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";
import Container from "@/components/ui/Container";
import InitiativeCard from "@/components/ui/InitiativeCard";

export default function FeaturedInitiatives() {
  return (
    <section id="case-studies" className="py-32">
      <Container>
        <div className="mb-24">
          <SectionNumber number="04" />

          <SectionHeader
            eyebrow="Featured Engineering Initiatives"
            title="Engineering Quality Across Enterprise Systems"
            description="From order lifecycle automation to global partner integrations and AI-assisted framework engineering, these initiatives demonstrate how I approach complex quality challenges across enterprise supply chain platforms."
          />
        </div>

        {/* Featured initiative 1 */}
        <InitiativeCard
          featured
          title="IBM Sterling OMS"
          subtitle="Enterprise Order Lifecycle Validation"
          challenge="Order processing spans OMS, middleware, APIs, inventory services and downstream systems. Failures across these boundaries can disrupt fulfillment and make release validation expensive."
          solution="Validated end-to-end order creation, allocation, shipment and returns using Java-based BDD automation, API testing, Elasticsearch log verification and downstream system checks."
          impact={[
            "Automated 70% of regression test cases",
            "Reduced regression execution cycles by 30%",
            "Freed approximately two sprint cycles per quarter for exploratory testing",
          ]}
          technologies={[
            "IBM Sterling OMS",
            "Java",
            "Cucumber BDD",
            "REST APIs",
            "Elasticsearch",
            "Jenkins",
          ]}
        />

        {/* Supporting initiatives */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <InitiativeCard
            title="Global Partner Program"
            subtitle="200+ Global Partner Integrations"
            challenge="Partner integrations required consistent end-to-end validation across regions, market-specific workflows and multiple fulfillment models."
            solution="Validated SCM flows across WE, US, SEA, JP and IN, covering Ship from Warehouse, Ship from Store, Ship to Home, Pick-Up & Drop-Off, and eCommerce orders."
            impact={[
              "Validated workflows across 200+ partner integrations",
              "Covered multiple regions and fulfillment models",
              "Supported partner rollouts through regression testing and defect triage",
            ]}
            technologies={[
              "IBM Sterling OMS",
              "IBM Integration Bus",
              "API Testing",
              "Inventory",
              "Catalog",
              "Order Fulfillment",
            ]}
          />

          <InitiativeCard
            title="North Star"
            subtitle="Playwright + JavaScript AI Test Framework"
            challenge="End-to-end order processing validation across multiple integrated systems made test development, execution coordination and maintenance time-consuming."
            solution="Designed a Playwright and JavaScript framework with a five-agent orchestration concept: Planner, Generator, Healer, Predictor and Coordinator, supporting coverage analysis, test authoring, healing, failure forecasting and coordinated execution."
            impact={[
              "Reduced the end-to-end testing timeline from approximately 6 weeks to 1–2 weeks",
              "Introduced parallel execution and intelligent healing",
              "Framework progressing through production enablement",
            ]}
            technologies={[
              "Playwright",
              "JavaScript",
              "AI Agents",
              "LLMs",
              "API Automation",
              "Multi-System Validation",
            ]}
          />
        </div>

        {/* Featured initiative 2 */}
        <div className="mt-8">
          <InitiativeCard
            featured
            title="Adiscom"
            subtitle="Social Commerce Channel Integrations"
            challenge="Onboarding social commerce partners required reliable integration validation across product availability and enterprise order processing."
            solution="Owned end-to-end quality engineering for three major social commerce channel integrations, validating partner onboarding and the associated supply chain workflows."
            impact={[
              "Delivered QE coverage for 3 partner integrations",
              "Contributed to approximately $1M in annual revenue from onboarded partner platforms",
              "Designed BDD scenarios to reduce manual testing effort",
            ]}
            technologies={[
              "Social Commerce",
              "IBM Sterling OMS",
              "BDD Automation",
              "API Validation",
              "Catalog",
              "Inventory",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
