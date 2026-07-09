import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";
import Container from "@/components/ui/Container";
import InitiativeCard from "@/components/ui/InitiativeCard";

export default function FeaturedInitiatives() {
  return (
    <section
      id="case-studies"
      className="py-32"
    >
      <Container>

        <div className="mb-24">

        <SectionNumber number="04" />

        <SectionHeader
    eyebrow="Featured Engineering Initiatives"
    title="Enterprise Case Studies"
    description="Enterprise engineering is measured by solving complex business problems at scale. These initiatives highlight the challenges, solutions and measurable outcomes from some of the most impactful work I've delivered."
        />

        </div>

        {/* Featured */}

        <InitiativeCard
          featured
          title="IBM Sterling OMS"
          subtitle="Enterprise Order Lifecycle Validation"
          challenge="Enterprise order processing required validation across multiple distributed systems including OMS, middleware, APIs and downstream services."
          solution="Designed comprehensive Playwright automation, API validation, Elasticsearch log verification and end-to-end enterprise workflow testing."
          impact={[
            "70% regression suite automated",
            "Reduced validation effort across releases",
            "Improved enterprise release confidence",
          ]}
          technologies={[
            "Playwright",
            "IBM Sterling OMS",
            "REST APIs",
            "Elasticsearch",
            "Java",
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <InitiativeCard
            title="Global Partner Program"
            subtitle="200+ Enterprise Partner Integrations"
            challenge="Support quality assurance across hundreds of partner integrations spanning multiple markets and fulfillment models."
            solution="Validated complete order lifecycle including inventory synchronization, catalog validation, returns and fulfillment across global regions."
            impact={[
              "200+ partner integrations",
              "Global SCM validation",
              "Multi-region rollout support",
            ]}
            technologies={[
              "SCM",
              "Inventory",
              "Catalog",
              "Returns",
            ]}
          />

          <InitiativeCard
            title="North Star"
            subtitle="AI Assisted Automation Framework"
            challenge="Traditional enterprise automation required several weeks of manual framework development and maintenance."
            solution="Designed an AI-first automation architecture utilizing intelligent agents for planning, generation, healing and execution workflows."
            impact={[
              "Reduced automation timeline",
              "AI-assisted framework generation",
              "Improved engineering productivity",
            ]}
            technologies={[
              "Playwright",
              "AI Agents",
              "LLMs",
              "JavaScript",
            ]}
          />

        </div>

      </Container>
    </section>
  );
}