import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = localFont({
  src: "../fonts/Montserrat-Variable.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jamie Clarke Online | Making Marketing Easier",
    template: "%s | Jamie Clarke Online",
  },
  description:
    "I help owner-led businesses build marketing that actually works — without the jargon, overwhelm, or wasted spend.",
  keywords: [
    "marketing consultant",
    "marketing strategy",
    "owner-led business",
    "customer journey",
    "marketing plan",
  ],
  authors: [{ name: "Jamie Clarke" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Jamie Clarke Online",
    title: "Jamie Clarke Online | Making Marketing Easier",
    description:
      "I help owner-led businesses build marketing that actually works — without the jargon, overwhelm, or wasted spend.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
