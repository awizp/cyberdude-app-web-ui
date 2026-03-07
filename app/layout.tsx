import type { Metadata } from "next";
import "./globals.css";
import "../app/experiment/pricing/style/pricing.css"

export const metadata: Metadata = {
  title: "CyberDude UI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
