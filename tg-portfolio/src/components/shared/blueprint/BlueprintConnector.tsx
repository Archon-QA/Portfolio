import {
  getConnectorClasses,
  type BlueprintOrientation,
} from "./";

interface BlueprintConnectorProps {
  orientation?: BlueprintOrientation;
}

export default function BlueprintConnector({
  orientation = "vertical",
}: BlueprintConnectorProps) {
  return (
    <div
      className={`
        shrink-0
        ${getConnectorClasses(orientation)}
      `}
    />
  );
}