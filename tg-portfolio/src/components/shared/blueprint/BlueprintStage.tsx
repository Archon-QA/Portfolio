import { forwardRef } from "react";

import BlueprintNode from "./BlueprintNode";

import type { BlueprintState } from "./types";

interface BlueprintStageProps {
  title: string;
  subtitle?: string;
  state?: BlueprintState;
}

const BlueprintStage = forwardRef<HTMLDivElement, BlueprintStageProps>(
  (
    {
      title,
      subtitle,
      state = "inactive",
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="flex flex-col items-center text-center"
      >
        <BlueprintNode state={state} />

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-white">
            {title}
          </h4>

          {subtitle && (
            <p className="mt-1 text-xs text-slate-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    );
  }
);

BlueprintStage.displayName = "BlueprintStage";

export default BlueprintStage;