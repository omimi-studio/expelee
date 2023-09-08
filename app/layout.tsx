import "./globals.css";
import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Montserrat({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Expelee ",
  description: "Business Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
