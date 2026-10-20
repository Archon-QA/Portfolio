
import type { TechnologyCategory as TechnologyCategoryType } from "./technology";
import { TechnologyCategory } from "./technology";

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
      "Established a foundation in enterprise quality engineering by validating order lifecycle, inventory, catalog and fulfillment workflows across IBM Sterling OMS and Supply Chain Management platforms.",

    technologies: [
      { name: "IBM Sterling OMS", category: TechnologyCategory.Enterprise },
      { name: "Supply Chain Management", category: TechnologyCategory.Enterprise },
      { name: "REST APIs", category: TechnologyCategory.Backend },
      { name: "SQL", category: TechnologyCategory.Backend },
      { name: "Functional Testing", category: TechnologyCategory.Automation },
    ],
  },
  {
    phase: "INTEGRATE",
    year: "2022 – 2023",
    title: "Global Partner Program",
    subtitle: "200+ Enterprise Integrations",
    description:
      "Validated end-to-end SCM workflows across more than 200 partner integrations in WE, US, SEA, JP and IN, covering multiple order types and fulfillment models while supporting regional rollout quality.",

    technologies: [
      { name: "Partner Integrations", category: TechnologyCategory.Integration },
      { name: "IBM Sterling OMS", category: TechnologyCategory.Enterprise },
      { name: "GraphQL", category: TechnologyCategory.Backend },
      { name: "API Validation", category: TechnologyCategory.Backend },
      { name: "IBM Integration Bus", category: TechnologyCategory.Integration },
    ],
  },
  {
    phase: "AUTOMATE",
    year: "2024",
    title: "Automation Engineering",
    subtitle: "Playwright Framework Development",
    description:
      "Expanded automation engineering across enterprise APIs and backend workflows, using Playwright with JavaScript alongside Java-based BDD automation to support repeatable regression and integration validation.",

    technologies: [
      { name: "Playwright", category: TechnologyCategory.Automation },
      { name: "JavaScript", category: TechnologyCategory.Automation },
      { name: "Java", category: TechnologyCategory.Automation },
      { name: "Framework Design", category: TechnologyCategory.Automation },
      { name: "CI/CD", category: TechnologyCategory.Automation },
    ],
  },
  {
    phase: "OPTIMIZE",
    year: "2025",
    title: "Revenue-Critical Platforms",
    subtitle: "Adiscom & Enterprise Delivery",
    description:
      "Owned end-to-end quality engineering for three major social commerce channel integrations, validating partner onboarding and enterprise workflows for platforms contributing approximately $1M in annual revenue.",

    technologies: [
      { name: "Adiscom", category: TechnologyCategory.Enterprise },
      { name: "Enterprise Automation", category: TechnologyCategory.Automation },
      { name: "Backend Validation", category: TechnologyCategory.Backend },
      { name: "Regression Strategy", category: TechnologyCategory.Automation },
      { name: "Release Quality", category: TechnologyCategory.Automation },
    ],
  },
  {
    phase: "EVOLVE",
    year: "Today",
    title: "AI-Enhanced Quality Engineering",
    subtitle: "Modern Engineering Practices",
    description:
      "Exploring AI-assisted quality engineering with GitHub Copilot, large language models and agent-based workflows to support test planning, automation development and framework maintenance.",

    technologies: [
      { name: "GitHub Copilot", category: TechnologyCategory.AI },
      { name: "Large Language Models", category: TechnologyCategory.AI },
      { name: "Prompt Engineering", category: TechnologyCategory.AI },
      { name: "AI-Assisted Development", category: TechnologyCategory.AI },
      { name: "Developer Productivity", category: TechnologyCategory.AI },
    ],
  },
];
