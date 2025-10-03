import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import FacebookPixel from "./components/FacebookPixel";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Duck Book Writers | Publishing House",
  description: "Duck Book Writers is a full-service publishing house based in Houston, Texas, serving authors around the globe.",
  keywords: "publishing, books, authors, writing, publishing house, book writers",
  icons: {
    icon: '/favicon.ico',
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />   
        {/* added for calendly     */}
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <FacebookPixel />
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />   
        {/* added for calendly */}
      </body>
    </html>
  );
}
