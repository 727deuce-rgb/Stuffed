import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forgecloud — Build, ship, and scale",
  description: "A GitHub, Replit, and Supabase-inspired workspace for building full-stack apps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
