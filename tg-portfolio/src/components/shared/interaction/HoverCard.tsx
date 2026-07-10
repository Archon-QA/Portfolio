"use client";

import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export default function HoverCard({
  children,
  className = "",
}: HoverCardProps) {
  return (
    <div
  className={`
    group
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:shadow-2xl
    hover:shadow-blue-500/10
    ${className}
  `}
>
  {children}
</div>
  );
}