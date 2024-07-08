import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const monteserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={monteserrat.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
