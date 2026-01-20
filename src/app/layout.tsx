import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitalhub Agency - YouTube Growth & Marketing",
  description: "Professional YouTube automation and growth services. Scale your channel with our expert team. SEO, Thumbnails, Editing, and more.",
  keywords: ["YouTube", "Growth Agency", "Video Marketing", "SEO", "Thumbnails", "Video Editing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}