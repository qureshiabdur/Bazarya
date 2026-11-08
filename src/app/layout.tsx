import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { LoadingProvider } from "@/context/LoadingContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bazarya | Official Digital Platform",
  description: "Welcome to Bazarya - Multi-vendor E-commerce Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-brand-offwhite text-brand-charcoal font-body antialiased selection:bg-brand-purple selection:text-white flex flex-col min-h-screen">
        <LoadingProvider>
          <Loader />
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}