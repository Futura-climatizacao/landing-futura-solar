import type { Metadata } from "next";
import { Ubuntu } from "next/font/google"; 
import Script from "next/script"; 
import "./globals.css";


const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Futura Solar | Economize até 90% na conta de luz",
  description: "Soluções completas em Energia Solar e Climatização no Nordeste e em todo o Brasil. Projetos residenciais e comerciais com garantia de 25 anos.",
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
      
      {/* --- GOOGLE TAG MANAGER (SCRIPT OTIMIZADO) --- */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KGHBRW67');
        `}
      </Script>

      
      <body className={`${ubuntu.className} antialiased`}>
        
        {/* --- GOOGLE TAG MANAGER (NOSCRIPT) --- */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGHBRW67"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}