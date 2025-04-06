import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/header";
import {Footer} from "@/app/footer";
import {ThemeProvider} from "next-themes";
import Head from "next/head";

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
    <Head>
        <meta name="description" content="I'm Joris, a full-stack software engineer based in Amsterdam. I have a passion for crafting elagant solutions for complex problems." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Joris van Andel - Full-stack software engineer based in Amsterdam." />
        <meta property="og:description" content="I'm Joris, a full-stack software engineer based in Amsterdam. I have a passion for crafting elagant solutions for complex problems." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.jorisvanandel.nl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joris van Andel - Full-stack software engineer based in Amsterdam." />
        <meta name="twitter:description" content="I'm Joris, a full-stack software engineer based in Amsterdam. I have a passion for crafting elagant solutions for complex problems." />
        <meta name="twitter:image" content="/og-image.png" />
    </Head>
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ThemeProvider
        enableSystem={true}
        attribute="class"
        storageKey="theme"
        defaultTheme="system"
    >
        <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                <Header/>
                {children}
                <Footer/>
            </div>
        </div>
    </ThemeProvider>
    </body>
    </html>
  );
}
