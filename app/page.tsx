import { Phone, Zap, CheckCircle, ArrowRight } from "lucide-react";
// Importando todos os componentes
import Features from "@/components/Features"; 
import About from "@/components/About";
import Steps from "@/components/Steps";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroForm from "@/components/HeroForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 left-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* LOGOMARCA OFICIAL */}
          <div className="flex items-center">
            {/* Certifique-se de ter o arquivo logo.png na pasta /public */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="Futura Climatização e Energia Solar" 
              className="h-14 w-auto object-contain" // Ajuste o h-14 conforme a proporção da sua logo
            />
          </div>

          <a 
            href="https://wa.me/5579999812895" 
            className="bg-[#00983a] hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold transition flex items-center gap-2 shadow-lg shadow-green-600/20"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Orçamento via WhatsApp</span>
          </a>
        </div>
      </header>

      {/* --- HERO SECTION COM BACKGROUND TEXTURIZADO --- */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-40 bg-[#054b82] text-white overflow-hidden">
        
        {/* --- LAYER DE BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop" 
            alt="Fundo Energia Solar" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#054b82] via-[#054b82]/90 to-[#054b82]/40" />
        </div>

        {/* Elemento Decorativo: Brilho Amarelo */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#fbbc33]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Esquerda: Texto de Vendas */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-[#fbbc33] px-4 py-1.5 rounded-full text-sm font-bold border border-white/20 shadow-sm">
              <Zap size={16} fill="currentColor" />
              Economize Hoje, Sustente o Amanhã
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] drop-shadow-lg">
              Sua conta de luz <br/>
              <span className="text-[#fbbc33]">reduzida em até 90%</span>
            </h1>
            
            <p className="text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
              Soluções completas em Energia Solar para sua casa ou empresa. Tecnologia de ponta, instalação certificada e o suporte que só a Futura oferece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#simulador" className="bg-[#fbbc33] hover:bg-yellow-500 text-[#054b82] px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-yellow-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                Simular Economia
                <ArrowRight size={20} />
              </a>
              
              <div className="flex items-center gap-2 text-white font-medium text-sm justify-center px-4 drop-shadow-md">
                <CheckCircle size={18} className="text-[#00983a] bg-white rounded-full" /> 
                <span>Garantia de 25 anos</span>
              </div>
            </div>
          </div>

          {/* Direita: CALCULADORA REAL (Aqui está a mudança) */}
          <div id="simulador">
            <HeroForm />
          </div>

        </div>
      </section>

      {/* --- SEÇÃO 2: BENEFÍCIOS (Racional) --- */}
      <Features />

      {/* --- SEÇÃO 3: SOBRE/AUTORIDADE (Institucional) --- */}
      <About />

      {/* --- SEÇÃO 4: COMO FUNCIONA (Processo) --- */}
      <Steps />

      {/* --- SEÇÃO 5: EQUIPE (Confiança) --- */}
      <Team />

      {/* --- SEÇÃO 6: GALERIA (Prova Social) --- */}
      <Gallery />

      {/* --- SEÇÃO 7: FAQ (Quebra de Objeções) --- */}
      <FAQ />

      {/* --- RODAPÉ --- */}
      <Footer />

    </main>
  );
}