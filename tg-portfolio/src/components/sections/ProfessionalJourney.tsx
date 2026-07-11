import SectionHeader from "../shared/SectionHeader";
import SectionNumber from "../shared/SectionNumber";
import Container from "@/components/ui/Container";
import JourneyCard from "@/components/ui/ExperienceCard";

const journey = [
  {
    duration: "Jan 2025 — Present",
    role: "Senior Quality Engineering Analyst",
    company: "Infosys Ltd.",
    summary:
      "Leading enterprise quality engineering initiatives for IBM Sterling OMS-based Supply Chain Management platforms while driving automation strategy and release quality.",

    technologies: [
      "Playwright",
      "IBM Sterling OMS",
      "Java",
      "REST APIs",
      "SCM",
    ],

    achievements: [
      "Automated 70% of enterprise regression suite",
      "Reduced regression execution time by 30%",
      "Validated enterprise OMS workflows",
      "Mentored QA engineers",
      "Integrated automation into CI/CD pipelines",
    ],
  },

  {
    duration: "Aug 2021 — Dec 2024",
    role: "Quality Engineering Analyst",
    company: "Infosys Ltd.",
    summary:
      "Built strong foundations in enterprise quality engineering through Supply Chain validation, API testing and end-to-end integration testing across distributed systems.",

    technologies: [
      "BDD",
      "Postman",
      "API Testing",
      "Elasticsearch",
      "Agile",
    ],

    achievements: [
      "Validated Global Partner Program integrations",
      "Performed enterprise API validation",
      "Executed end-to-end SCM testing",
      "Performed root cause analysis",
      "Collaborated with cross-functional teams",
    ],
  },
];

export default function ProfessionalJourney() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <Container>

        <div className="mb-24">

  <SectionNumber number="05" />

  <SectionHeader
    eyebrow="Professional Journey"
    title="Growing Through Enterprise Engineering"
    description="My career has been focused on building reliable enterprise quality engineering solutions, automating complex workflows and delivering measurable business impact across large-scale Supply Chain Management platforms."
  />

</div>

        <div className="space-y-10">

          {journey.map((job) => (
            <JourneyCard
              key={job.duration}
              {...job}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}