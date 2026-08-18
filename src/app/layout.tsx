import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zhenxun | Developer & Creator",
  description: "Personal portfolio and blog of Zhenxun - Full-stack developer passionate about AI, satellite navigation, and open source.",
  keywords: ["developer", "portfolio", "blog", "full-stack", "AI", "open source", "satellite navigation"],
  authors: [{ name: "Zhenxun" }],
  openGraph: {
    title: "Zhenxun | Developer & Creator",
    description: "Personal portfolio and blog of Zhenxun",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {/* Background gradient */}
          <div className="fixed inset-0 gradient-bg opacity-20 -z-10" />

          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
