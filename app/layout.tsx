import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NutriSight",
  description:
    "Your personal nutrition guide in your pocket. It helps you track your nutrition, detect allergens, get personalized recommendations, and stay on track with your goals.",
  keywords: ["nutrition", "allergens", "recommendations", "goals"],
  authors: [{ name: "NutriSight" }],
  openGraph: {
    title: "NutriSight",
    description: "Manage your health anytime, anywhere with NutriSight",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
