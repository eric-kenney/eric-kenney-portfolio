import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'  // ← ADD THIS

export const metadata: Metadata = {
  title: "Eric Kenney | Product Marketer & AI Systems Builder",
  description: "Product marketing expertise + AI-powered marketing systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-6K5RGWP137" />  {/* ← ADD THIS */}
      </body>
    </html>
  );
}