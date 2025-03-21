import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import HeroWithCards from "./HomeComponents/HeroWithCards/page";
import Hero from "./HomeComponents/Hero/page";
import Navbar from "./Navbar/page";
import PrivacySixCards from "./HomeComponents/PrivacySixCards/page";
import ServicesLongPage from "./HomeComponents/ServicesLongPage/page";
import Footer from "./Footer/page";
import Struggles from "./HomeComponents/Struggles/page";
import Ourprocess from "./HomeComponents/Ourprocess/page";
import Faq from "./HomeComponents/Faq/page";
import DifferentUs from "./HomeComponents/DifferentUs/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <Navbar />
        <Hero />
        <Struggles />
        <HeroWithCards />
        <Ourprocess />
        <DifferentUs />
        <Faq /> */}
        {children}
        {/* <PrivacySixCards /> */}
        {/* <ServicesLongPage /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
