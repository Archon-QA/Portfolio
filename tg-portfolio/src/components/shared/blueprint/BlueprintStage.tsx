import BlueprintNode from "./BlueprintNode";

import type {
  BlueprintStageData,
} from "./";

type BlueprintStageProps = BlueprintStageData;

export default function BlueprintStage({
  title,
  subtitle,
  state = "inactive",
}: BlueprintStageProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <BlueprintNode state={state} />

      <div className="text-center">
        <h4 className="text-sm font-semibold tracking-wide text-white">
          {title}
        </h4>

        {subtitle && (
          <p className="mt-1 text-xs text-white/50">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}