"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

import Container from "@/components/ui/Container";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        {/* Personal Brand */}
        <Link
          href="/"
          aria-label="Tanish Gupta — Home"
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 font-mono text-lg font-bold tracking-tight text-blue-400 transition-colors duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-500/20">
            TG
          </span>

          <span className="flex min-w-0 flex-col justify-center gap-0.5">
            <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-white sm:text-base">
              Tanish Gupta
            </span>
            <span className="hidden whitespace-nowrap text-[10px] font-medium tracking-wide text-zinc-400 xl:block">
              Senior SDET · Enterprise Quality Engineering
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href.replace("#", "");

            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className="group relative py-2"
              >
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume Button */}
        <div className="hidden lg:block">
          <PrimaryButton href="/resume.pdf">Resume</PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          className="rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-black/95 lg:hidden"
        >
          <Container>
            <nav aria-label="Mobile navigation" className="flex flex-col py-5">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.href.replace("#", "");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={`py-3 transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="mt-4">
                <PrimaryButton href="/resume.pdf">Resume</PrimaryButton>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}