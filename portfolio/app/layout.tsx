import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-text`}>
        {children}
      </body>
    </html>
  );
}
