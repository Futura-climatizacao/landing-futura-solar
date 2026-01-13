import { Phone, Sun, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Features from "@/components/Features"; 
import Steps from "@/components/Steps";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Team  from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full top-0 left-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo Texto */}
          <div className="flex items-center gap-2">
            <div className="bg-[#fbbc33] p-1.5 rounded-lg">
              <Sun className="text-white w-6 h-6 fill-current" />
            </div>
            <div className="font-bold text-2xl tracking-tighter text-[#054b82] leading-none">
              Futura <br/>
              <span className="text-sm font-normal text-[#00983a] tracking-wide uppercase">Climatização e Solar</span>
            </div>
          </div>

          <a 
            href="https://wa.me/5579999999999" 
            className="bg-[#00983a] hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold transition flex items-center gap-2 shadow-lg shadow-green-600/20"
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
          {/* 1. Imagem de Fundo (Painéis Solares) com mistura */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop" 
            alt="Fundo Energia Solar" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
          />
          {/* 2. Gradiente de Segurança para leitura */}
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
              <span className="text-[#fbbc33]">reduzida em até 95%</span>
            </h1>
            
            <p className="text-lg text-slate-100 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
              Soluções completas em Energia Solar para sua casa ou empresa. Tecnologia de ponta, instalação por equipe própria e altamente qualificada e o suporte que só a Futura oferece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <button className="bg-[#fbbc33] hover:bg-yellow-500 text-[#054b82] px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-yellow-500/20 transition hover:-translate-y-1 flex items-center justify-center gap-2">
                Simular Economia
                <ArrowRight size={20} />
              </button>
              
              <div className="flex items-center gap-2 text-white font-medium text-sm justify-center px-4 drop-shadow-md">
                <CheckCircle size={18} className="text-[#00983a] bg-white rounded-full" /> 
                <span>Garantia de 25 anos</span>
              </div>
            </div>
          </div>

          {/* Direita: Formulário */}
          <div className="bg-white text-slate-800 p-8 rounded-3xl shadow-2xl border-b-4 border-[#00983a] w-full max-w-md mx-auto relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00983a] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Orçamento Gratuito
            </div>

            <h3 className="text-2xl font-bold mb-2 text-center text-[#054b82]">Simule seu Projeto</h3>
            <p className="text-slate-500 text-center mb-8 text-sm">Preencha para receber um estudo personalizado.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-[#054b82] outline-none transition placeholder:text-slate-400" 
                  placeholder="Como gostaria de ser chamado?" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-[#054b82] outline-none transition placeholder:text-slate-400" 
                  placeholder="(79) 99999-9999" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">Valor médio da conta (R$)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 focus:ring-2 focus:ring-[#054b82] outline-none transition placeholder:text-slate-400" 
                  placeholder="Ex: 500,00" 
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-[#054b82] hover:bg-[#043d6b] text-white font-bold py-4 rounded-xl text-lg transition shadow-lg shadow-blue-900/10 mt-2"
              >
                Ver Meu Potencial de Economia
              </button>
            </form>

            <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
              <Zap size={12} className="text-[#fbbc33]" fill="currentColor"/> 
              Resposta em menos de 1 hora
            </p>
          </div>
        </div>
      </section>

      {/* --- SEÇÕES ADICIONAIS --- */}
      <Features />
      <About />
      <Steps />
      <Team />
      <Gallery />
      <FAQ />
      <Footer />
      

    </main>
  );
}