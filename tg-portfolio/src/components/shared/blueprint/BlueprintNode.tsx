import {
  BLUEPRINT,
  blueprintNodeTokens,
  type BlueprintState,
} from "./";

interface BlueprintNodeProps {
  state?: BlueprintState;
}

export default function BlueprintNode({
  state = "inactive",
}: BlueprintNodeProps) {
  const styles = blueprintNodeTokens[state];

  return (
    <div
      className={`
        relative
        flex
        ${BLUEPRINT.NODE_SIZE}
        items-center
        justify-center
        ${BLUEPRINT.NODE_RADIUS}
        border-2
        transition-all
        ${BLUEPRINT.TRANSITION}
        ${styles.outer}
      `}
    >
      <div
        className={`
          ${BLUEPRINT.INNER_NODE_SIZE}
          ${BLUEPRINT.NODE_RADIUS}
          transition-all
          ${BLUEPRINT.TRANSITION}
          ${styles.inner}
        `}
      />
    </div>
  );
}