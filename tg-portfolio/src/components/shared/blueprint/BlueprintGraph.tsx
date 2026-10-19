import type { ReactNode } from "react";

interface BlueprintGraphProps {
  children: ReactNode;
  className?: string;
}

export default function BlueprintGraph({
  children,
  className = "",
}: BlueprintGraphProps) {
  return (
    <div
      className={`
        flex
        w-full
        flex-col
        items-center
        justify-center
        ${className}
      `}
    >
      {children}
    </div>
  );
}