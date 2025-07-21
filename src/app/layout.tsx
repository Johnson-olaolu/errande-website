import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components /layout/footer/Footer";
import Header from "@/components /layout/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const antipastoProFont = localFont({
  src: [
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-Hairline.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-Extralight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-DemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/AntipastoPro/AntipastoPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-antipasto-pro",
});

const futuraPTFont = localFont({
  src: [
    {
      path: "../assets/fonts/FuturaPT/FuturaPTLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTBook.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTDemi.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/FuturaPT/FuturaPTHeavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura-pt",
});

const brigandsExpandedFont = localFont({
  src: [
    {
      path: "../assets/fonts/BrigendsExpanded/brigendsexpanded.otf",
      style: "normal",
    },
  ],
  variable: "--font-brigands-expanded",
});

export const metadata: Metadata = {
  title: "Erande",
  description: "Fast, reliable errand and delivery services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antipastoProFont.variable} ${futuraPTFont.variable} ${brigandsExpandedFont.variable} antialiased`}
      >
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
