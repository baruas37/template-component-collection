import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Interface Collections",
  description: "Template and component collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
