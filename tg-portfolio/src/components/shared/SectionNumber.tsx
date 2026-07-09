interface SectionNumberProps {
  number: string;
}

export default function SectionNumber({
  number,
}: SectionNumberProps) {
  return (
    <div className="mb-10">

      <div className="flex items-center gap-6">

        <span
          className="
            font-mono
            text-xs
            font-semibold
            uppercase
            tracking-[0.45em]
            text-blue-500
          "
        >
          SECTION {number}
        </span>

        <div
          className="
            h-px
            flex-1
            bg-gradient-to-r
            from-blue-500/30
            via-white/10
            to-transparent
          "
        />

      </div>

    </div>
  );
}