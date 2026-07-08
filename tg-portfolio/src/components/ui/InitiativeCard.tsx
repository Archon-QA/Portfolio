interface InitiativeCardProps {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  impact: string[];
  technologies: string[];
  featured?: boolean;
}

export default function InitiativeCard({
  title,
  subtitle,
  challenge,
  solution,
  impact,
  technologies,
  featured = false,
}: InitiativeCardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/40
        hover:bg-white/10
        ${
          featured
            ? "p-10"
            : "p-8"
        }
      `}
    >
      <div>

        <span className="text-sm uppercase tracking-[0.25em] text-blue-400">
          {title}
        </span>

        <h3 className="mt-4 text-3xl font-bold text-white">
          {subtitle}
        </h3>

      </div>

      <div className="mt-8 space-y-6">

        <div>

          <h4 className="mb-2 text-sm uppercase tracking-widest text-zinc-500">
            Challenge
          </h4>

          <p className="leading-7 text-zinc-300">
            {challenge}
          </p>

        </div>

        <div>

          <h4 className="mb-2 text-sm uppercase tracking-widest text-zinc-500">
            Solution
          </h4>

          <p className="leading-7 text-zinc-300">
            {solution}
          </p>

        </div>

        <div>

          <h4 className="mb-3 text-sm uppercase tracking-widest text-zinc-500">
            Impact
          </h4>

          <ul className="space-y-2">

            {impact.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-zinc-200"
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />

                {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-2">

        {technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-3
              py-1
              text-sm
              text-blue-300
            "
          >
            {technology}
          </span>
        ))}

      </div>
    </div>
  );
}