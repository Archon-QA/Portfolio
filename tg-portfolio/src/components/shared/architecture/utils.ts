
import type {
  BlueprintConnection,
  StageBounds,
} from "@/components/shared/blueprint";

export interface RoutedConnection {
  readonly key: string;
  readonly path: string;
}

export interface RoutedBranchGroup {
  readonly key: string;
  readonly trunkPath: string;
  readonly branchPath: string;
  readonly destinationPaths: readonly RoutedConnection[];
}

type Point = {
  x: number;
  y: number;
};

function getCenter(bounds: StageBounds): Point {
  return {
    x: bounds.x + bounds.width / 2,
    y: bounds.y + bounds.height / 2,
  };
}

function pathFrom(points: readonly Point[]): string {
  return points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");
}

export function getBranchGroup(
  stageBounds: Readonly<Record<string, StageBounds>>,
  connections: readonly BlueprintConnection[]
): RoutedBranchGroup | null {
  if (connections.length < 2) {
    return null;
  }

  const sourceId = connections[0].from;
  const source = stageBounds[sourceId];

  if (
    !source ||
    connections.some(
      (connection) => connection.from !== sourceId
    )
  ) {
    return null;
  }

  const destinations = connections
    .map((connection) => ({
      connection,
      bounds: stageBounds[connection.to],
    }))
    .filter(
      (
        item
      ): item is {
        connection: BlueprintConnection;
        bounds: StageBounds;
      } => Boolean(item.bounds)
    )
    .sort(
      (a, b) =>
        getCenter(a.bounds).x - getCenter(b.bounds).x
    );

  if (destinations.length < 2) {
    return null;
  }

  const sourceCenter = getCenter(source);
  const first = destinations[0].bounds;
  const last = destinations[destinations.length - 1].bounds;

  const sourceBottom = source.y + source.height;
  const destinationTop = Math.min(
    ...destinations.map(({ bounds }) => bounds.y)
  );

  const availableGap = destinationTop - sourceBottom;

  // Keep the junction between the source and destination nodes.
  const junctionY =
    sourceBottom +
    Math.max(12, availableGap * 0.45);

  return {
    key: sourceId,
    trunkPath: pathFrom([
      { x: sourceCenter.x, y: sourceBottom },
      { x: sourceCenter.x, y: junctionY },
    ]),
    branchPath: pathFrom([
      { x: getCenter(first).x, y: junctionY },
      { x: getCenter(last).x, y: junctionY },
    ]),
    destinationPaths: destinations.map(
      ({ connection, bounds }) => ({
        key: `${connection.from}->${connection.to}`,
        path: pathFrom([
          { x: getCenter(bounds).x, y: junctionY },
          { x: getCenter(bounds).x, y: bounds.y },
        ]),
      })
    ),
  };
}
