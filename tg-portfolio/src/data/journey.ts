import {
  TechnologyCategory,
  type TechnologyCategory as TechnologyCategoryType,
} from "./technology";

export interface JourneyTechnology {
  name: string;
  category: TechnologyCategoryType;
}

export interface JourneyStep {
  phase: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: JourneyTechnology[];
}

export const journey: JourneyStep[] = [
  {
    phase: "CREATE",
    year: "2021",
    title: "Enterprise Quality Engineering",
    subtitle: "IBM Sterling OMS Foundation",
    description:
      "Built a strong foundation in enterprise quality engineering by validating end-to-end order lifecycle, inventory, catalog and fulfillment workflows across IBM Sterling OMS and Supply Chain Management platforms.",

    technologies: [
      {
        name: "IBM Sterling OMS",
        category: TechnologyCategory.Enterprise,
      },
      {
        name: "Supply Chain Management",
        category: TechnologyCategory.Enterprise,
      },
      {
        name: "REST APIs",
        category: TechnologyCategory.Backend,
      },
      {
        name: "SQL",
        category: TechnologyCategory.Backend,
      },
      {
        name: "Functional Testing",
        category: TechnologyCategory.Automation,
      },
    ],
  },

  {
    phase: "INTEGRATE",
    year: "2022 – 2023",
    title: "Global Partner Program",
    subtitle: "200+ Enterprise Integrations",
    description:
      "Owned end-to-end quality engineering for more than 200 global partner integrations across multiple markets, fulfillment models and enterprise business flows while ensuring production stability.",

    technologies: [
      {
        name: "Partner Integrations",
        category: TechnologyCategory.Integration,
      },
      {
        name: "IBM Sterling OMS",
        category: TechnologyCategory.Enterprise,
      },
      {
        name: "GraphQL",
        category: TechnologyCategory.Backend,
      },
      {
        name: "API Validation",
        category: TechnologyCategory.Backend,
      },
      {
        name: "IBM Integration Bus",
        category: TechnologyCategory.Integration,
      },
    ],
  },

  {
    phase: "AUTOMATE",
    year: "2024",
    title: "Automation Engineering",
    subtitle: "Playwright Framework Development",
    description:
      "Designed scalable Playwright automation frameworks for enterprise APIs, backend validations, OMS workflows and CI/CD-ready regression execution while improving overall engineering productivity.",

    technologies: [
      {
        name: "Playwright",
        category: TechnologyCategory.Automation,
      },
      {
        name: "JavaScript",
        category: TechnologyCategory.Automation,
      },
      {
        name: "Java",
        category: TechnologyCategory.Automation,
      },
      {
        name: "Framework Design",
        category: TechnologyCategory.Automation,
      },
      {
        name: "CI/CD",
        category: TechnologyCategory.Automation,
      },
    ],
  },

  {
    phase: "OPTIMIZE",
    year: "2025",
    title: "Revenue Critical Platforms",
    subtitle: "Adiscom & Enterprise Delivery",
    description:
      "Led quality engineering for business-critical social commerce integrations while expanding automation coverage, improving execution efficiency and strengthening release confidence across enterprise systems.",

    technologies: [
      {
        name: "Adiscom",
        category: TechnologyCategory.Enterprise,
      },
      {
        name: "Enterprise Automation",
        category: TechnologyCategory.Automation,
      },
      {
        name: "Backend Validation",
        category: TechnologyCategory.Backend,
      },
      {
        name: "Regression Strategy",
        category: TechnologyCategory.Automation,
      },
      {
        name: "Release Quality",
        category: TechnologyCategory.Automation,
      },
    ],
  },

  {
    phase: "EVOLVE",
    year: "Today",
    title: "AI-Enhanced Quality Engineering",
    subtitle: "Modern Engineering Practices",
    description:
      "Leveraging GitHub Copilot, Large Language Models and AI-assisted engineering workflows to accelerate automation development, framework evolution and software quality practices.",

    technologies: [
      {
        name: "GitHub Copilot",
        category: TechnologyCategory.AI,
      },
      {
        name: "Large Language Models",
        category: TechnologyCategory.AI,
      },
      {
        name: "Prompt Engineering",
        category: TechnologyCategory.AI,
      },
      {
        name: "AI-Assisted Development",
        category: TechnologyCategory.AI,
      },
      {
        name: "Developer Productivity",
        category: TechnologyCategory.AI,
      },
    ],
  },
];