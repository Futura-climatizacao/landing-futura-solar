import { MapPin, Zap, ArrowRight } from "lucide-react";

export default function Gallery() {
  // --- ÁREA DE EDIÇÃO: ADICIONE PROJETOS AQUI ---
  const projects = [
    {
      title: "Cond. Alphaville",
      location: "Aracaju - SE",
      type: "Residencial",
      economy: "850,00",
      image: "/projeto1.jpg" 
    },
    {
      title: "Centro Empresarial Jardins",
      location: "Aracaju - SE",
      type: "Comercial",
      economy: "3.200,00",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      title: "Residência Aruana",
      location: "Zona de Expansão - SE",
      type: "Residencial",
      economy: "450,00",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      title: "Fazenda Boa Luz",
      location: "Laranjeiras - SE",
      type: "Rural/Agro",
      economy: "5.800,00",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      title: "Fazenda Boa Luz",
      location: "Laranjeiras - SE",
      type: "Rural/Agro",
      economy: "5.800,00",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" 
    },
    {
      title: "Fazenda Boa Luz",
      location: "Laranjeiras - SE",
      type: "Rural/Agro",
      economy: "5.800,00",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop" 
    },
    // Para adicionar mais, basta copiar o bloco acima, colar aqui e mudar os dados
  ];

  return (
    <section className="py-24 bg-[#054b82] text-white">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#fbbc33] font-bold text-sm uppercase tracking-wider mb-2 block">
              Resultados Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Quem escolhe a Futura, <br />
              já está economizando.
            </h2>
          </div>

          <a 
            href="https://instagram.com/futuraclimatizacao" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors text-sm font-medium"
          >
            Ver mais no Instagram <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid de Projetos Dinâmico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              
              {/* Imagem do Projeto */}
              <div className="h-72 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Informações Sobrepostas */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                
                {/* Badge do Tipo (Residencial/Comercial) */}
                <div className="mb-3">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    project.type === 'Comercial' ? 'bg-blue-600 text-white' : 'bg-[#00983a] text-white'
                  }`}>
                    {project.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-[#fbbc33] transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-1 text-slate-300 text-xs mb-4">
                  <MapPin size={12} />
                  {project.location}
                </div>

                {/* Bloco de Economia */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
                  <span className="text-xs text-slate-400 uppercase font-bold">Economia Gerada</span>
                  <div className="flex items-center gap-1 text-[#fbbc33] font-bold">
                    <Zap size={14} fill="currentColor" />
                    <span>R$ {project.economy} / mês</span>
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