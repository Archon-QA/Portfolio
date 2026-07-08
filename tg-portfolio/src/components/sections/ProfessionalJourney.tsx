import Container from "@/components/ui/Container";
import JourneyCard from "@/components/ui/JourneyCard";

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

        <div className="mb-16 max-w-3xl">

          <span className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Professional Journey
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Growing Through Enterprise Engineering
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My career has been focused on building reliable enterprise
            quality engineering solutions, automating complex workflows
            and delivering measurable business impact across large-scale
            Supply Chain Management platforms.
          </p>

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