import type { ReactNode } from "react";

import type {
  BlueprintOrientation,
} from "./";

interface BlueprintFlowProps {
  children: ReactNode;
  direction?: BlueprintOrientation;
}

export default function BlueprintFlow({
  children,
  direction = "vertical",
}: BlueprintFlowProps) {
  return (
    <div
      className={
        direction === "vertical"
          ? "flex flex-col items-center"
          : "flex items-center"
      }
    >
      {children}
    </div>
  );
}