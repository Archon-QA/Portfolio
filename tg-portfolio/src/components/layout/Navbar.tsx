"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Case Studies",
    href: "#case-studies",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-mono text-2xl font-bold tracking-tight text-white"
        >
          TG&gt;
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative py-2"
            >
              <span
                className={`
                  text-sm
                  font-medium
                  transition-colors
                  duration-300
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-white"
                  }
                `}
              >
                {item.label}
              </span>

              <span
                className={`
                  absolute
                  -bottom-1
                  left-0
                  h-px
                  bg-blue-500
                  transition-all
                  duration-300
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </a>
          ))}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden lg:block">
          <PrimaryButton href="/resume.pdf">
            Resume
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="text-white" />
        </button>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-black/90 lg:hidden">
          <Container>
            <div className="flex flex-col py-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`
                    py-3
                    transition-colors
                    ${
                      activeSection === item.href.replace("#", "")
                        ? "text-white"
                        : "text-zinc-400"
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4">
                <PrimaryButton href="/resume.pdf">
                  Resume
                </PrimaryButton>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}