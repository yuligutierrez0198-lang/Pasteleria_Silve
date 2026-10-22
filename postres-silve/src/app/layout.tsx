import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Postres Silve | Pastelería hecha con calma",
  description:
    "Recetas honestas, ingredientes de temporada y postres hechos a mano para compartir.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
