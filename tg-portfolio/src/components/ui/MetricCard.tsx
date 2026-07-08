interface MetricCardProps {
  value: string;
  title: string;
  description: string;
}

export default function MetricCard({
  value,
  title,
  description,
}: MetricCardProps) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/30
        hover:bg-white/10
      "
    >
      <h3 className="text-5xl font-bold text-white">
        {value}
      </h3>

      <h4 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h4>

      <p className="mt-3 text-sm leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}