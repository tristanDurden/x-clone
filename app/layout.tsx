import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import { ThemeProvider } from "./components/theme-provider";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "X Clone",
  description: "UI design of X made by Dima Leichenko",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto flex justify-between">
            <div className="px-2 xsm:px-4 2xl:px-8">
              <LeftBar />
            </div>
            <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
              {children}
              {modal}
            </div>
            <div className="flex-1 hidden lg:flex ml-4 md:ml-8">
              <RightBar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
