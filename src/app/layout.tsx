import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SamvaadAI - Multilingual AI Agents for Indian Businesses",
  description:
    "Transform your business with AI chatbots, calling agents, and store managers that speak your customer's language. Empowering Indian businesses with multilingual AI automation solutions.",
  keywords:
    "AI chatbots, multilingual AI, Indian languages, business automation, AI calling agents, customer support, Hindi AI, Tamil AI, Bengali AI",
  authors: [{ name: "SamvaadAI Team" }],
  creator: "SamvaadAI",
  publisher: "SamvaadAI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://samvaadai.com",
    title: "SamvaadAI - Multilingual AI Agents for Indian Businesses",
    description:
      "Transform your business with AI chatbots, calling agents, and store managers that speak your customer's language.",
    siteName: "SamvaadAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SamvaadAI - Multilingual AI Agents for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SamvaadAI - Multilingual AI Agents for Indian Businesses",
    description:
      "Transform your business with AI chatbots, calling agents, and store managers that speak your customer's language.",
    images: ["/og-image.jpg"],
    creator: "@samvaadai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://samvaadai.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
