
import { ArrowUpRight, Mail, Code2, BriefcaseBusiness } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionNumber from "../shared/SectionNumber";

const contactLinks = [
  {
    label: "Email",
    value: "tanishupta@gmail.com",
    href: "mailto:tanishupta@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/Archon-QA",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/tanish-gupta12",
    icon: BriefcaseBusiness,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 py-24 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 font-mono text-sm tracking-[0.2em] text-blue-400">
  <SectionNumber number="07" />
</div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Let&apos;s build something
                <span className="block text-zinc-500">
                  reliable together.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400">
                Interested in quality engineering, test automation,
                enterprise systems, or AI-powered testing? I&apos;d be happy
                to connect and discuss ideas, opportunities, and engineering
                challenges.
              </p>

              <a
                href="mailto:tanishupta@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-blue-400/40 bg-blue-500/10 px-5 py-3 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/20"
              >
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith("https://");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-400">
                      <Icon size={20} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-sm text-zinc-500">
                        {item.value}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tanish Gupta</p>
            <p className="font-mono">
              Built with Next.js · TypeScript · Tailwind CSS
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
