import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Credit Card Payment",
  description: "Page to simulate how to add credit card as payment mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lexend+Mega:wght@100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
