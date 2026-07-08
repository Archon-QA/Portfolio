import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

export default function PrimaryButton({
  href,
  children,
  external = false,
}: PrimaryButtonProps) {
  const className =
    "rounded-full bg-blue-600 px-5 text-white transition-all hover:bg-blue-500";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className={className}>
          {children}
        </Button>
      </a>
    );
  }

  return (
    <Link href={href}>
      <Button className={className}>
        {children}
      </Button>
    </Link>
  );
}