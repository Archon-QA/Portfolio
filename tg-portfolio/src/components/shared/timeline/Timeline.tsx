"use client";

import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

export default function Timeline({
  children,
}: TimelineProps) {
  return (
    <div
      className="
        relative
        mx-auto
        max-w-5xl
        space-y-12
      "
    >
      {children}
    </div>
  );
}