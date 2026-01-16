import { Award, Building2 } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Lado Esquerdo: Imagem Institucional */}
          <div className="w-full lg:w-1/2 relative">
            {/* Elemento decorativo de fundo */}
            <div className="absolute -top-10 -left-10 w-full h-full border-4 border-[#fbbc33] rounded-3xl -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Se tiver foto da fachada ou frota, coloque aqui */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                alt="Sede da Futura Climatização" 
                className="w-full h-full object-cover"
              />
              {/* Badge Flutuante */}
              <div className="absolute bottom-0 right-0 bg-[#054b82] text-white p-6 rounded-tl-3xl">
                <p className="text-4xl font-bold font-mono">20+</p>
                <p className="text-xs uppercase tracking-widest text-[#fbbc33]">Anos de História</p>
              </div>
            </div>
          </div>

          {/* Lado Direito: Texto Institucional */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#00983a] font-bold text-sm uppercase tracking-wider mb-2 block">
                Solidez e Tradição
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#054b82] leading-tight">
                Desde 2006 liderando a revolução energética no Nordeste.
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              [cite_start]A <strong>Futura Climatização e Energia Solar</strong> consolidou sua marca pela excelência técnica e compromisso com o cliente[cite: 4]. Não somos apenas instaladores; somos uma empresa de engenharia completa que atua há duas décadas transformando a relação das pessoas com a energia e o conforto.
            </p>

            <p className="text-slate-600 leading-relaxed">
              [cite_start]Nossa missão vai além da economia: entregamos sustentabilidade [cite: 16][cite_start], inovação [cite: 10] e projetos de alta performance que valorizam seu patrimônio e garantem o futuro das próximas gerações.
            </p>

            {/* Grid de Diferenciais */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Building2 className="text-[#fbbc33] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[#054b82]">Estrutura Sólida</h4>
                  <p className="text-sm text-slate-500">Sede própria e processos maduros.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-[#fbbc33] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-[#054b82]">Referência</h4>
                  <p className="text-sm text-slate-500">Líder em projetos fotovoltaicos.</p>
                </div>
              </div>
            </div>

            {/* Assinatura Visual */}
            <div className="pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-400 italic">
                [cite_start]"Nosso foco vai além da economia, promovendo energia limpa e inteligente." [cite: 7]
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}