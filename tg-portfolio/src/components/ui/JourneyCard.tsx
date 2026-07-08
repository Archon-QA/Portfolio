interface JourneyCardProps {
  duration: string;
  role: string;
  company: string;
  summary: string;
  technologies: string[];
  achievements: string[];
}

export default function JourneyCard({
  duration,
  role,
  company,
  summary,
  technologies,
  achievements,
}: JourneyCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">

      <span className="text-sm uppercase tracking-[0.25em] text-blue-400">
        {duration}
      </span>

      <h3 className="mt-4 text-3xl font-bold text-white">
        {role}
      </h3>

      <p className="mt-2 text-lg text-zinc-300">
        {company}
      </p>

      <p className="mt-6 leading-8 text-zinc-400">
        {summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
          Key Contributions
        </h4>

        <ul className="space-y-3">
          {achievements.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-zinc-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

              <span>{item}</span>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}