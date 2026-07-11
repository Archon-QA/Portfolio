"use client";

import { ReactNode } from "react";

interface TimelineNodeProps {
  children: ReactNode;
}

export default function TimelineNode({
  children,
}: TimelineNodeProps) {
  return (
    <div
      className="
        relative
        flex
        items-start
        gap-8
      "
    >
      <div
        className="
          relative
          z-10
          mt-10
          h-5
          w-5
          rounded-full
          border-2
          border-blue-500
          bg-[#05070d]
          shadow-[0_0_18px_rgba(59,130,246,0.35)]
        "
      />

      <div className="flex-1">
        {children}
      </div>

    </div>
  );
}