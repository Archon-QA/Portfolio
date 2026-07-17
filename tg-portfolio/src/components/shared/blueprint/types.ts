export type BlueprintState =
  | "inactive"
  | "active"
  | "completed";

export type BlueprintOrientation =
  | "vertical"
  | "horizontal";

export interface BlueprintStageData {
  title: string;
  subtitle?: string;
  state?: BlueprintState;
}