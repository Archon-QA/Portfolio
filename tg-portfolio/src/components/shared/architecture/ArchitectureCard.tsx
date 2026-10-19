import type { ReactNode } from "react";

interface ArchitectureCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ArchitectureCard({
  title,
  description,
  children,
}: ArchitectureCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
      <header className="mb-10">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      </header>

      {children}
    </section>
  );
}