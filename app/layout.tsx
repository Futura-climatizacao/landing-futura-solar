import type { Metadata } from "next";
import { Ubuntu } from "next/font/google"; // Importando a fonte oficial
import "./globals.css";

// Configurando a fonte Ubuntu (Regular, Bold, Light)
const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Futura Solar | Economize até 95% na conta de luz",
  description: "Soluções completas em Energia Solar e Climatização no Nordeste. Projetos residenciais e comerciais com garantia de 25 anos.",
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Aplicando a fonte no corpo do site */}
      <body className={`${ubuntu.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}