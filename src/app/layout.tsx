import type { Metadata } from "next";
import { ABeeZee, Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const abeezee = ABeeZee({
  variable: "--font-abeezee",
  subsets: ["latin"],
  weight: ["400"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Madetier – Diseño & Muebles",
  description:
    "Transformamos espacios, creamos experiencias. Diseño, calidad y rapidez en cada detalle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${abeezee.variable} ${robotoSlab.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
