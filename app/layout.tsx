import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oneli Rajapakse | Information Technology Undergraduate",
  description:
    "Portfolio of Oneli Rajapakse, an Information Technology undergraduate at SLIIT interested in QA / BA, software development and creating meaningful digital experiences.",
  openGraph: {
    title: "Oneli Rajapakse | Information Technology Undergraduate",
    description:
      "A premium personal portfolio for Oneli Rajapakse, focused on QA / BA, software development and thoughtful digital experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Oneli Rajapakse",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
