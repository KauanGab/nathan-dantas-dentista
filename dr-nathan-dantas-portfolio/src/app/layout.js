import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Nathan Dantas - Transformando Sorrisos",
  description: "Site portfólio do Dr. Nathan Dantas, dentista especializado em transformar sorrisos para uma melhor qualidade de vida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}