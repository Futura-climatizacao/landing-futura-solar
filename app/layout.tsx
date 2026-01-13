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
  title: "Futura Solar | Energia Solar e Climatização",
  description: "Economize até 95% na sua conta de luz com a Futura Climatização.",
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