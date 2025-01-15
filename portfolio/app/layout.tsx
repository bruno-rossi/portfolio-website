import type { Metadata } from "next";
import '@/globals.css'
import { ubuntu } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Bruno Rossi ",
  description: "Bruno Rossi is a software engineer and localization professional who builds products and digital experiences for a global scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
