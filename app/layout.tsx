import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import bg from "@/app/assets/tlo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "1 z iluś - Gra quizowa",
  description: "Stworzone przez Sentharion",
  manifest: "/manifest.json",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",}}>
        {children}
      </body>
    </html>
  );
}
