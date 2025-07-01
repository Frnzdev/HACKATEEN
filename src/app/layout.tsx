// app/layout.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Help from "./components/Help";
import ThemeProvider from "./providers/theme-provider";
import TranslationProvider from "./providers/TranslationProvider";
import BackToTopButton from "./components/BackUp";
import { AosInit } from "./components/aos-init";
import { useTranslation } from "react-i18next";
import { ptBR, enUS, esES, frFR, arSA, zhCN } from "@clerk/localizations";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();

  const clerkLocalization = {
    "pt": ptBR,
    "en": enUS,
    "es": esES,
    "fr": frFR,
    "ar": arSA,
    "zh": zhCN
  }[i18n.language] || enUS;

  return (
    <html lang={i18n.language} suppressHydrationWarning>
      <head>
          <title>L.A.R</title>
          <meta name="description" content="Lugar de Acolhimento e Recomeço"/>
          <link rel="icon" href="/favicon-v2.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider localization={clerkLocalization}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TranslationProvider>
              <Help />
              <Header />
              <BackToTopButton />
              {children}
              <AosInit />
              <Footer />
            </TranslationProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}