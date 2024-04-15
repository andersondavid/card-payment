import type { Metadata } from "next";

import { Public_Sans, Lexend_Mega } from "next/font/google";
import "./globals.css";

export const public_sans_init = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["400", "600"],
});

export const lexend_mega_init = Lexend_Mega({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexenga-mega",
  weight: ["400", "700"],
});

export const public_sans = public_sans_init.variable;
export const lexend_mega = lexend_mega_init.variable;

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
      <body className={`${public_sans} ${lexend_mega}`}>{children}</body>
    </html>
  );
}
