import type { Metadata } from "next";
import "./globals.css";

import { inter, spaceGrotesk } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Tanish Gupta | Enterprise Automation Engineer",
  description:
    "Senior SDET specializing in Playwright, Java, IBM Sterling OMS and Enterprise Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}