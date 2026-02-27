import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Sai | Full Stack Developer",
  description:
    "Full Stack Developer skilled in MERN Stack, Java Full Stack, React, Cloud & System Design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}