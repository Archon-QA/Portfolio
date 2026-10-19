
"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  BlueprintStage,
  type BlueprintGraphData,
  type StageBounds,
} from "@/components/shared/blueprint";

import {
  getBranchGroup,
  type RoutedConnection,
} from "./utils";

interface ArchitectureCanvasProps {
  data: BlueprintGraphData;
}

interface CanvasSize {
  width: number;
  height: number;
}

export default function ArchitectureCanvas({
  data,
}: ArchitectureCanvasProps) {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const stageRefs = useRef(
    new Map<string, HTMLDivElement>()
  );

  const [stageBounds, setStageBounds] = useState<
    Record<string, StageBounds>
  >({});

  const [canvasSize, setCanvasSize] = useState<CanvasSize>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const observers: ResizeObserver[] = [];

    const measureCanvas = () => {
      const canvasRect = canvas.getBoundingClientRect();

      setCanvasSize({
        width: canvasRect.width,
        height: canvasRect.height,
      });
    };

    const measureStage = (
      id: string,
      element: HTMLDivElement
    ) => {
      const canvasRect = canvas.getBoundingClientRect();
      const stageRect = element.getBoundingClientRect();

      const bounds: StageBounds = {
        id,
        x: stageRect.left - canvasRect.left,
        y: stageRect.top - canvasRect.top,
        width: stageRect.width,
        height: stageRect.height,
      };

      setStageBounds((current) => {
        const previous = current[id];

        if (
          previous &&
          previous.x === bounds.x &&
          previous.y === bounds.y &&
          previous.width === bounds.width &&
          previous.height === bounds.height
        ) {
          return current;
        }

        return {
          ...current,
          [id]: bounds,
        };
      });
    };

    measureCanvas();

    const canvasObserver = new ResizeObserver(() => {
      measureCanvas();

      stageRefs.current.forEach((element, id) => {
        measureStage(id, element);
      });
    });

    canvasObserver.observe(canvas);
    observers.push(canvasObserver);

    stageRefs.current.forEach((element, id) => {
      measureStage(id, element);

      const observer = new ResizeObserver(() => {
        measureStage(id, element);
      });

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [data.stages]);

  const incomingConnections = data.connections.filter(
    (connection) =>
      connection.from === "partner-platform" &&
      connection.to === "tradebyte"
  );

  const downstreamConnections = data.connections.filter(
    (connection) => connection.from === "tradebyte"
  );

  const branchGroup = getBranchGroup(
    stageBounds,
    downstreamConnections
  );

  const regularConnections: RoutedConnection[] =
    incomingConnections.flatMap((connection) => {
      const source = stageBounds[connection.from];
      const target = stageBounds[connection.to];

      if (!source || !target) {
        return [];
      }

      const sourceX = source.x + source.width / 2;
      const sourceY = source.y + source.height;
      const targetX = target.x + target.width / 2;
      const targetY = target.y;

      return [
        {
          key: `${connection.from}->${connection.to}`,
          path: `M ${sourceX} ${sourceY} L ${targetX} ${targetY}`,
        },
      ];
    });

  return (
    <div className="w-full overflow-x-auto">
      <div
        ref={canvasRef}
        className="
          relative
          mx-auto
          grid
          min-h-[420px]
          min-w-[720px]
          grid-cols-5
          auto-rows-min
          gap-y-12
          px-8
          py-6
        "
      >
        <svg
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            h-full
            w-full
          "
          width={canvasSize.width}
          height={canvasSize.height}
          viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="architecture-arrowhead"
              markerWidth="7"
              markerHeight="7"
              refX="5"
              refY="3.5"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path
                d="M 0 0 L 7 3.5 L 0 7 Z"
                className="fill-slate-400"
              />
            </marker>
          </defs>

          {regularConnections.map((connection) => (
            <path
              key={connection.key}
              d={connection.path}
              fill="none"
              className="stroke-white/30"
              strokeWidth={1.25}
              strokeLinecap="round"
              markerEnd="url(#architecture-arrowhead)"
            />
          ))}

          {branchGroup && (
            <>
              <path
                d={branchGroup.trunkPath}
                fill="none"
                className="stroke-white/30"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d={branchGroup.branchPath}
                fill="none"
                className="stroke-white/30"
                strokeWidth={1.25}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {branchGroup.destinationPaths.map(
                (connection) => (
                  <path
                    key={connection.key}
                    d={connection.path}
                    fill="none"
                    className="stroke-white/30"
                    strokeWidth={1.25}
                    strokeLinecap="round"
                    markerEnd="url(#architecture-arrowhead)"
                  />
                )
              )}
            </>
          )}
        </svg>

        {data.stages.map((stage) => (
          <div
            key={stage.id}
            style={{
              gridColumn: stage.column,
              gridRow: stage.row,
            }}
            className="relative z-10 flex justify-center"
          >
            <BlueprintStage
              ref={(element) => {
                if (element) {
                  stageRefs.current.set(stage.id, element);
                } else {
                  stageRefs.current.delete(stage.id);
                }
              }}
              title={stage.title}
              subtitle={stage.subtitle}
              state={stage.state}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
