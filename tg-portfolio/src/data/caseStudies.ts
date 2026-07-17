import {
  TechnologyCategory,
  type TechnologyCategory as TechnologyCategoryType,
} from "./technology";

export interface CaseStudyTechnology {
  name: string;
  category: TechnologyCategoryType;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface ArchitectureStep {
  title: string;
}

export interface ValidationLayer {
  title: string;
}

export interface EngineeringDecision {
  title: string;
  reason: string;
}

export interface AutomationStep {
  title: string;
  description: string;
}

export interface CaseStudy {

  id: string;

  number: string;

  title: string;

  subtitle: string;

  summary: string;

  businessChallenge: string;

  solution: string;

  businessImpact: string;

  architecture: ArchitectureStep[];

  validationLayers: ValidationLayer[];

  automationStrategy: AutomationStep[];

  engineeringDecisions: EngineeringDecision[];

  metrics: CaseStudyMetric[];

  technologies: CaseStudyTechnology[];
}