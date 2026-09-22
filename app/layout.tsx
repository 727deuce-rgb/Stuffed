import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stuffed — Build utility, responsibly",
  description: "A non-custodial Base and Solana token deployment workspace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
