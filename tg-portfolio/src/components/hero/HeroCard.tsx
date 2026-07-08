import { CheckCircle2 } from "lucide-react";

const technologies = [
  "Playwright",
  "Java",
  "IBM Sterling OMS",
  "REST API Testing",
  "CI/CD",
  "Supply Chain Management",
];

export default function HeroCard() {
  return (
    <div className="flex justify-center lg:justify-end">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">

            Enterprise Stack

          </p>

          <h3 className="mt-3 text-2xl font-semibold text-white">

            Engineering Focus

          </h3>

        </div>

        <div className="space-y-5">

          {technologies.map((technology) => (
            <div
              key={technology}
              className="flex items-center gap-3"
            >

              <CheckCircle2
                size={18}
                className="text-blue-500"
              />

              <span className="text-zinc-300">
                {technology}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}