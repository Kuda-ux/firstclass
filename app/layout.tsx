import type { Metadata } from "next";
import { Libre_Baskerville, Manrope } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://firstclassprivate.ac.zw"),
  title: "First Class Private School | ZIMSEC and Cambridge School in Kwekwe",
  description:
    "First Class Private School (FCPS) offers ZIMSEC and Cambridge education in a disciplined, caring and ambitious environment for day and boarding learners in Kwekwe, Zimbabwe.",
  keywords: [
    "First Class Private School",
    "FCPS",
    "Kwekwe",
    "Zimbabwe",
    "ZIMSEC",
    "Cambridge",
    "private school",
    "boarding",
    "day school",
  ],
  openGraph: {
    title: "First Class Private School | ZIMSEC and Cambridge School in Kwekwe",
    description:
      "A disciplined, caring and ambitious school community in Kwekwe, Zimbabwe.",
    type: "website",
    locale: "en_ZW",
    url: "https://firstclassprivate.ac.zw",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Class Private School | ZIMSEC and Cambridge School in Kwekwe",
    description:
      "A disciplined, caring and ambitious school community in Kwekwe, Zimbabwe.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col font-sans text-charcoal bg-white">
        {children}
      </body>
    </html>
  );
}
