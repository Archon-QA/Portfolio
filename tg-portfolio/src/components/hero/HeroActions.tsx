import { FaGithub, FaLinkedin } from "react-icons/fa";

import PrimaryButton from "@/components/ui/PrimaryButton";
import { Button } from "@/components/ui/Button";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">

      <PrimaryButton href="/resume.pdf">
        Download Resume
      </PrimaryButton>

      <a
        href="https://github.com/Archon-QA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline">

          <FaGithub />

          GitHub

        </Button>
      </a>

      <a
        href="https://www.linkedin.com/in/tanish-gupta12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline">

          <FaLinkedin />

          LinkedIn

        </Button>
      </a>

    </div>
  );
}