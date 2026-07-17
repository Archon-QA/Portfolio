"use client";

import { ReactNode } from "react";
import TimelineConnector from "./TimelineConnector";

type TimelineState =
  | "inactive"
  | "active"
  | "completed";

interface TimelineNodeProps {
  children: ReactNode;
  isLast?: boolean;
  state?: TimelineState;
}

export default function TimelineNode({
  children,
  isLast = false,
  state = "inactive",
}: TimelineNodeProps) {
  const nodeClasses = {
    inactive: `
      border-white/20
      bg-[#05070d]
    `,

    active: `
      scale-110
      border-blue-400
      bg-[#05070d]
      ring-4
      ring-blue-500/20
      shadow-[0_0_32px_rgba(59,130,246,0.60)]
    `,

    completed: `
      border-blue-500
      bg-[#05070d]
      ring-2
      ring-blue-500/20
      shadow-[0_0_18px_rgba(59,130,246,0.30)]
    `,
  };

  const connectorClasses = {
    inactive:
      "from-white/10 via-white/10 to-white/10",

    active:
      "from-blue-500/80 via-blue-500/40 to-white/10",

    completed:
      "from-blue-500/60 via-blue-500/25 to-white/10",
  };

  return (
    <div className="relative flex gap-0">
      {/* Timeline Column */}

      <div
        className="
          relative
          flex
          w-8
          flex-col
          items-center
        "
      >
        {/* Node */}

        <div
          className={`
            relative
            z-10
            mt-8
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            border-2
            transition-all
            duration-500
            ${nodeClasses[state]}
          `}
        >
          {/* Inner Dot */}

          <div
            className={`
              h-2.5
              w-2.5
              rounded-full
              transition-all
              duration-500

              ${
                state === "inactive"
                  ? "bg-white/30"
                  : state === "active"
                  ? "bg-blue-300"
                  : "bg-blue-200"
              }
            `}
          />
        </div>

        {/* Vertical Connector */}

        {!isLast && (
          <div
            className={`
              mt-2
              w-px
              flex-1
              bg-gradient-to-b
              transition-all
              duration-500
              ${connectorClasses[state]}
            `}
          />
        )}
      </div>

      {/* Horizontal Connector */}

      <TimelineConnector
        active={state !== "inactive"}
      />

      {/* Card */}

      <div className="ml-2 flex-1">
        {children}
      </div>
    </div>
  );
}