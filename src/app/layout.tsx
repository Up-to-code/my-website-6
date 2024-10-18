import type { Metadata } from "next";
import "./globals.css";
import { Changa } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import CreativeFooter from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
const changa = Changa({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-changa",
});
import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from '@clerk/localizations'

export const metadata: Metadata = {
  title: "أحمد منصور - مطور برمجيات وخبير في React و Next.js وتصميم واجهات المستخدم",
  description: "أحمد منصور، مطور برمجيات محترف من مصر متخصص في تطوير مواقع الويب وتطبيقات الهاتف باستخدام React، Next.js، و Firebase. يتميز بتقديم حلول برمجية عالية الجودة وتصميم واجهات مستخدم مبتكرة وتجربة مستخدم رائعة. خبير في تصميم وتطوير تطبيقات التجارة الإلكترونية، وبرامج المبيعات، والتكامل مع Firebase. اتصل للحصول على خدمات برمجية مخصصة.",
  keywords: "أحمد منصور, مطور برمجيات, React, Next.js, Firebase, تطوير مواقع, تطبيقات الهاتف, تصميم واجهات المستخدم, تجربة المستخدم, التجارة الإلكترونية, مصر",
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={arSA}>
      <html lang="ar">
        <body className={` antialiased ${changa.className} bg-zinc-900`}>
          <Navbar />

          {children}
          <Toaster />

          <CreativeFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
