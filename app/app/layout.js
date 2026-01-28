import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Providers from "./providers";
import Header from "@/components/HeaderMain";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter text-[#333] leading-relaxed">
        <Providers>
          {/* Content starts after fixed header */}
          <main>
            {children}
          </main>
         </Providers>
      </body>
    </html>
  );
}
