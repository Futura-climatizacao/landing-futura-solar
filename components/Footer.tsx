import { Sun, Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#054b82] text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        
        {/* 1. Identidade Visual Centralizada */}
        <div className="flex flex-col items-center mb-10">
          <div className="bg-[#fbbc33] p-3 rounded-xl mb-4 inline-block shadow-lg shadow-yellow-500/20">
             {/* Mantive o ícone vetorial aqui para garantir contraste perfeito no fundo azul */}
            <Sun className="text-white w-8 h-8 fill-current" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-2">Futura Climatização e Energia Solar</h2>
          <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
            Soluções de engenharia para quem busca economia real e sustentabilidade. Referência no Nordeste desde 2006.
          </p>
        </div>

        {/* 2. Blocos de Contato (Destacados) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 border-y border-white/5 py-8">
          
          {/* Botão WhatsApp/Telefone */}
          <a href="https://wa.me/5579999999999" className="flex items-center gap-4 hover:opacity-80 transition group text-left">
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#fbbc33] group-hover:text-[#054b82] transition-colors">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Fale Agora</p>
              <p className="font-bold text-lg md:text-xl">(79) 99999-9999</p>
            </div>
          </a>

          {/* Localização */}
          <div className="flex items-center gap-4 text-left px-4 md:px-0 md:border-l md:border-r border-white/10 md:mx-4 py-2 md:py-0">
            <div className="bg-white/10 p-3 rounded-full text-[#fbbc33]">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Atuação</p>
              <p className="font-bold text-lg md:text-xl">Aracaju e Região</p>
            </div>
          </div>

          {/* Email */}
          <a href="mailto:contato@futura.com.br" className="flex items-center gap-4 hover:opacity-80 transition group text-left">
            <div className="bg-white/10 p-3 rounded-full group-hover:bg-[#fbbc33] group-hover:text-[#054b82] transition-colors">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Orçamento</p>
              <p className="font-bold text-lg md:text-xl">contato@futura.com.br</p>
            </div>
          </a>

        </div>

        {/* 3. Rodapé Legal (CNPJ e Social) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
          
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} Futura Climatização. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-500">CNPJ: 00.000.000/0001-00</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-2 rounded-lg hover:bg-[#fbbc33] hover:text-[#054b82] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="bg-white/5 p-2 rounded-lg hover:bg-[#fbbc33] hover:text-[#054b82] transition">
              <Facebook size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}