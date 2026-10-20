
import { FaGithub, FaLinkedin } from "react-icons/fa";

import PrimaryButton from "@/components/ui/PrimaryButton";

export default function HeroActions() {
  const secondaryLinkClass =
    "inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

  return (
    <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <PrimaryButton href="/resume.pdf">
        Download Resume
      </PrimaryButton>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://github.com/Archon-QA"
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryLinkClass}
        >
          <FaGithub aria-hidden="true" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/tanish-gupta12"
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryLinkClass}
        >
          <FaLinkedin aria-hidden="true" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
