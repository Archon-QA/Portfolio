export type BlueprintState =
  | "inactive"
  | "active"
  | "completed";

export type BlueprintOrientation =
  | "vertical"
  | "horizontal";

export interface BlueprintStageData {
  readonly id: string;

  readonly title: string;

  readonly subtitle?: string;

  readonly row: number;

  readonly column: number;

  readonly state?: BlueprintState;
}

export interface BlueprintConnection {
  readonly from: string;

  readonly to: string;
}

export interface BlueprintGraphData {
  readonly stages: readonly BlueprintStageData[];

  readonly connections: readonly BlueprintConnection[];
}

/**
 * Runtime bounds of a rendered blueprint stage.
 *
 * Unlike BlueprintStageData, these values are derived
 * from the actual DOM after rendering.
 */
export interface StageBounds {
  readonly id: string;

  readonly x: number;

  readonly y: number;

  readonly width: number;

  readonly height: number;
}