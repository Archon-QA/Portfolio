
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
    <article
      className={`
        group
        flex
        h-full
        min-w-0
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        transition-colors
        duration-300
        hover:border-blue-500/40
        hover:bg-white/[0.06]
        ${
          featured
            ? "p-6 sm:p-8 lg:p-10"
            : "p-6 sm:p-7 lg:p-8"
        }
      `}
    >
      <header>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
          {title}
        </span>

        <h3
          className={`
            mt-3
            max-w-2xl
            font-semibold
            leading-tight
            tracking-tight
            text-white
            ${
              featured
                ? "text-2xl sm:text-3xl"
                : "text-xl sm:text-2xl"
            }
          `}
        >
          {subtitle}
        </h3>
      </header>

      <div
        className={`
          mt-6
          grid
          gap-5
          ${
            featured
              ? "lg:grid-cols-2 lg:gap-8"
              : "grid-cols-1"
          }
        `}
      >
        <section>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Challenge
          </h4>

          <p className="text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
            {challenge}
          </p>
        </section>

        <section>
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Solution
          </h4>

          <p className="text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
            {solution}
          </p>
        </section>
      </div>

      <section className="mt-6 border-t border-white/10 pt-5">
        <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
          Key Impact
        </h4>

        <ul className="space-y-3">
          {impact.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-zinc-200 sm:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
              />

              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto pt-7">
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/[0.08]
                px-3
                py-1.5
                text-xs
                leading-5
                text-blue-200
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
