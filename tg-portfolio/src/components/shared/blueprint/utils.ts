import {
  blueprintConnectorTokens,
} from "./tokens";

import { BLUEPRINT } from "./constants";

import type {
  BlueprintOrientation,
} from "./types";

export function getConnectorClasses(
  orientation: BlueprintOrientation
) {
  return orientation === "vertical"
    ? `${BLUEPRINT.VERTICAL_CONNECTOR} w-px ${blueprintConnectorTokens.vertical}`
    : `h-px ${BLUEPRINT.HORIZONTAL_CONNECTOR} ${blueprintConnectorTokens.horizontal}`;
}