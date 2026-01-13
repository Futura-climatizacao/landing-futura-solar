import { MapPin, Zap } from "lucide-react";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      category: "Residencial",
      location: "Cond. Alphaville - Aracaju",
      economy: "R$ 850,00 / mês",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1000&auto=format&fit=crop", // Foto ilustrativa (Casa)
      size: "col-span-1 md:col-span-2 row-span-2", // Destaque maior
    },
    {
      id: 2,
      category: "Comercial",
      location: "Centro Empresarial - Jardins",
      economy: "R$ 3.200,00 / mês",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf2f26f?q=80&w=1000&auto=format&fit=crop", // Foto ilustrativa (Prédio)
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      id: 3,
      category: "Residencial",
      location: "Aruana - Zona de Expansão",
      economy: "R$ 450,00 / mês",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop", // Foto ilustrativa (Telhado)
      size: "col-span-1 md:col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-[#054b82] text-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#fbbc33] font-bold text-sm uppercase tracking-wider mb-2 block">
              Resultados Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Quem escolhe a Futura, <br/>
              <span className="text-[#fbbc33]">já está economizando.</span>
            </h2>
          </div>
          
          <div className="text-right">
             <p className="text-slate-300 mb-2">Junte-se a centenas de clientes satisfeitos em Sergipe.</p>
             <a href="https://wa.me/5579999999999" className="text-white border-b border-[#fbbc33] hover:text-[#fbbc33] transition pb-1 font-medium">
               Ver mais projetos no Instagram &rarr;
             </a>
          </div>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[500px]">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${project.size} shadow-2xl`}
            >
              {/* Imagem de Fundo (com overlay escuro para ler o texto) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

              {/* Conteúdo do Card */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-[#00983a] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                      {project.location}
                    </h3>
                    <p className="text-slate-300 text-sm flex items-center gap-1">
                      <MapPin size={14} /> Sergipe
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase font-bold">Economia Gerada</p>
                    <p className="text-[#fbbc33] font-bold text-xl flex items-center gap-1 justify-end">
                      <Zap size={16} fill="currentColor" />
                      {project.economy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}