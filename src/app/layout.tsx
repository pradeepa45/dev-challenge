import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ellty",
  description: "Frontend challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
