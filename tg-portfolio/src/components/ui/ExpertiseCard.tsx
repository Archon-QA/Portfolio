import { ArrowUpRight } from "lucide-react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  items: string[];
}

export default function ExpertiseCard({
  title,
  description,
  items,
}: ExpertiseCardProps) {
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
        hover:border-blue-500/40
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <ArrowUpRight
          size={20}
          className="
            text-blue-400
            transition-transform
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </div>

      <p className="mt-5 leading-7 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
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
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}