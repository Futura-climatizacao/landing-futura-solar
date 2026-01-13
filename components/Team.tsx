import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  // Substitua as URLs das imagens pelas fotos reais da equipe
  const team = [
    {
      name: "Farad",
      role: "Diretor Geral",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop", // Foto do Farad
      color: "border-[#054b82]" // Azul para Diretoria
    },
    {
      name: "Anderson",
      role: "Gerente Comercial",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", // Foto do Anderson
      color: "border-[#00983a]" // Verde para Comercial
    },
    {
      name: "Dr. Engenheiro", // Coloque o nome do Engenheiro Responsável
      role: "Responsável Técnico",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
      color: "border-[#fbbc33]" // Amarelo para Técnica
    },
    {
      name: "Ester", // Se quiser incluir a equipe de atendimento/mkt
      role: "Relacionamento",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      color: "border-[#054b82]" 
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        
        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-[#00983a] font-bold text-sm uppercase tracking-wider block mb-2">
            Nossa Gente
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#054b82]">
            Conheça quem faz a Futura
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Por trás de cada painel instalado, existe um time de especialistas dedicados a entregar excelência e segurança para sua família.
          </p>
        </div>

        {/* Grid da Equipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              
              {/* Foto com Efeito de Borda */}
              <div className="relative inline-block mb-6">
                {/* Círculo decorativo de fundo */}
                <div className={`absolute inset-0 rounded-full border-2 ${member.color} scale-110 opacity-30 group-hover:scale-125 transition-transform duration-500`} />
                
                {/* Imagem Recortada */}
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl relative z-10 border-4 border-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Ícone de Contato (Opcional - aparece no hover) */}
                <div className="absolute bottom-2 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white p-2 rounded-full shadow-md text-[#054b82]">
                    <Linkedin size={18} />
                  </div>
                </div>
              </div>

              {/* Nome e Cargo */}
              <h3 className="text-xl font-bold text-[#054b82] mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-[#fbbc33] uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}