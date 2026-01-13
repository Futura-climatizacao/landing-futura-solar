import { Sun, Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#054b82] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#fbbc33] p-1.5 rounded-lg">
                <Sun className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight">Futura Solar</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Soluções completas em climatização e energia solar. Transformamos o sol em economia para sua casa e empresa.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#fbbc33] hover:text-[#054b82] transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#fbbc33] hover:text-[#054b82] transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#fbbc33]">Navegação</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition">Início</a></li>
              <li><a href="#" className="hover:text-white transition">Como Funciona</a></li>
              <li><a href="#" className="hover:text-white transition">Projetos</a></li>
              <li><a href="#" className="hover:text-white transition">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#fbbc33]">Serviços</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>Energia Solar Residencial</li>
              <li>Energia Solar Comercial</li>
              <li>Limpeza de Painéis</li>
              <li>Projetos Elétricos</li>
              <li>Climatização Industrial</li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#fbbc33]">Fale Conosco</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-[#fbbc33]" size={18} />
                <span>Av. Principal, 123 - Jardins, Aracaju - SE, 49000-000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#fbbc33]" size={18} />
                <span>(79) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0 text-[#fbbc33]" size={18} />
                <span>contato@futuraclimatizacao.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-[#043d6b]">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Futura Climatização. Todos os direitos reservados.</p>
          <p>Desenvolvido com energia ☀️</p>
        </div>
      </div>
    </footer>
  );
}