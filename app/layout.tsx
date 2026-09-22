import "./globals.css";
import "./omni.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmniEcosystem — One ecosystem. Many useful worlds.",
  description: "A reviewable, testnet-first ecosystem studio for designing useful digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
