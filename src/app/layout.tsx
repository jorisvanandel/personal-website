import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joris van Andel",
  description: "Full-Stack Software Engineer based in Amsterdam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
        <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
            <Header/>
            {children}
        </div>
    </div>
    </body>
    </html>
  );
}
