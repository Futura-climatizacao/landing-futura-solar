import { Users, CheckCircle, HardHat } from "lucide-react";

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00983a] font-bold text-sm uppercase tracking-wider block mb-2">
            Nossa Força
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#054b82] mb-6">
            Uma equipe completa cuidando do seu projeto
          </h2>
          <p className="text-slate-600 text-lg">
            Do projeto à instalação, tudo é feito por nossa equipe própria. Sem terceirização, sem surpresas e com total segurança.
          </p>
        </div>

        {/* Card da Foto em Grupo */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          
          {/* FOTO DA EQUIPE (Substitua este link pela foto real do arquivo) */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Equipe Futura Solar Reunida" 
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Escuro (Degradê para ler o texto em cima da foto) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#054b82] via-[#054b82]/40 to-transparent opacity-90" />

          {/* Conteúdo Sobreposto na Imagem */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <div className="flex flex-col xl:flex-row gap-8 xl:items-end justify-between">
              
              {/* Texto Descritivo */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#fbbc33] p-2 rounded-lg text-[#054b82]">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Equipe Futura
                  </h3>
                </div>
                <p className="text-slate-200 text-lg leading-relaxed">
                  Engenheiros, técnicos instaladores e consultores. Todos unidos pelo propósito de levar a melhor solução energética para o Nordeste desde 2006.
                </p>
              </div>

              {/* Badges de Qualidade (Diferenciais) */}
              <div className="flex flex-wrap gap-3">
                <Badge text="Equipe 100% Própria" />
                <Badge text="Engenharia Certificada" />
                <Badge text="Certificação NR-10 e NR-35" />
                <Badge text="Frota Exclusiva" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Pequeno componente auxiliar para as etiquetas
function Badge({ text }: { text: string }) {
  return (
    <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#00983a] hover:border-[#00983a] transition-colors cursor-default">
      <CheckCircle size={16} className="text-[#fbbc33]" />
      {text}
    </span>
  );
}