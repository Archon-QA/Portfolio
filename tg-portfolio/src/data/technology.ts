export const TechnologyCategory = {
  Enterprise: "Enterprise",
  Automation: "Automation",
  Integration: "Integration",
  Backend: "Backend",
  AI: "AI",
} as const;

export type TechnologyCategory =
  (typeof TechnologyCategory)[keyof typeof TechnologyCategory];

export const TechnologyCategoryStyles = {
  [TechnologyCategory.Enterprise]:
    "bg-blue-500/10 text-blue-400 border-blue-500/20",

  [TechnologyCategory.Automation]:
    "bg-green-500/10 text-green-400 border-green-500/20",

  [TechnologyCategory.Integration]:
    "bg-orange-500/10 text-orange-400 border-orange-500/20",

  [TechnologyCategory.Backend]:
    "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",

  [TechnologyCategory.AI]:
    "bg-violet-500/10 text-violet-400 border-violet-500/20",
} as const;