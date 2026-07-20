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
  title: "First Class Private School | Building Tomorrow's Christian Leaders from Kwekwe",
  description:
    "First Class Private School (FCPS) is a Christ-centred private day and boarding school in Kwekwe, Zimbabwe, serving learners from Kwekwe and surrounding areas. We offer inclusive, affordable Forms 1–6 ZIMSEC and Cambridge education grounded in Christian values, Unhu/Ubuntu and practical skills.",
  keywords: [
    "First Class Private School",
    "FCPS",
    "Kwekwe",
    "Zimbabwe",
    "ZIMSEC",
    "Cambridge",
    "Christian school",
    "private school",
    "secondary school",
    "Forms 1-6",
    "boarding school",
    "day school",
    "Non Ducor Duco",
  ],
  openGraph: {
    title: "First Class Private School | Building Tomorrow's Christian Leaders from Kwekwe",
    description:
      "A Christ-centred private day and boarding secondary school in Kwekwe, Zimbabwe, serving learners from Kwekwe and surrounding areas — offering ZIMSEC and Cambridge education for Forms 1–6.",
    type: "website",
    locale: "en_ZW",
    url: "https://firstclassprivate.ac.zw",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Class Private School | Building Tomorrow's Christian Leaders from Kwekwe",
    description:
      "A Christ-centred private day and boarding secondary school in Kwekwe, Zimbabwe, serving learners from Kwekwe and surrounding areas.",
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
