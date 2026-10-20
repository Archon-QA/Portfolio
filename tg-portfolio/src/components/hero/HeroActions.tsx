
import { FaGithub, FaLinkedin } from "react-icons/fa";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { Button } from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="mt-8 flex flex-col items-start gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      {/* Primary action */}
      <PrimaryButton href="/resume.pdf">
        Download Resume
      </PrimaryButton>

      {/* Secondary actions */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://github.com/Archon-QA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FaGithub aria-hidden="true" />
            GitHub
          </Button>
        </a>

        <a
          href="https://www.linkedin.com/in/tanish-gupta12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </Button>
        </a>
      </div>
    </div>
  );
}
