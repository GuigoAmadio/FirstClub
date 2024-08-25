import type { Metadata } from "next";
import { Inter, Bungee_Inline, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ActiveSectionContextProvider from "@/src/context/active-section-content";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const bungee = Bungee_Inline({
  subsets: ["latin"],
  variable: "--bungee",
  weight: "400",
});
const alfa = Alfa_Slab_One({
  subsets: ["latin"],
  variable: "--alfa",
  weight: "400",
});

export const metadata: Metadata = {
  title: "FirstClub",
  description: "Criado por Guigao da Massa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`bg-slate-950 flex flex-col items-center
          text-white
        ${inter.variable}
        ${bungee.variable}
        ${alfa.variable}`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
