interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">

      <span
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.35em]
          text-blue-400
        "
      >
        {eyebrow}
      </span>

      <h2
        className="
          mt-6
          text-5xl
          font-bold
          leading-tight
          text-white
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-zinc-400
        "
      >
        {description}
      </p>

    </div>
  );
}