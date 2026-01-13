import { DollarSign, ShieldCheck, Home, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#054b82] mb-4">
            Por que investir em energia solar agora?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Além de parar de pagar caro na conta de luz, você protege seu patrimônio contra a inflação energética com a garantia da Futura.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Retorno (Verde - Dinheiro) */}
          <FeatureCard 
            icon={<DollarSign className="w-10 h-10 text-[#00983a]" />}
            bgColor="bg-[#00983a]/10"
            borderColor="hover:border-[#00983a]"
            title="Retorno Garantido"
            desc="O sistema se paga sozinho entre 3 a 5 anos. Depois, é lucro puro por mais de duas décadas."
          />

          {/* Card 2: Garantia (Azul - Segurança) */}
          <FeatureCard 
            icon={<ShieldCheck className="w-10 h-10 text-[#054b82]" />}
            bgColor="bg-[#054b82]/10"
            borderColor="hover:border-[#054b82]"
            title="25 Anos de Garantia"
            desc="Trabalhamos apenas com equipamentos Tier 1 (topo de linha) com garantia de performance."
          />

          {/* Card 3: Imóvel (Azul - Solidez) */}
          <FeatureCard 
            icon={<Home className="w-10 h-10 text-[#054b82]" />}
            bgColor="bg-[#054b82]/10"
            borderColor="hover:border-[#054b82]"
            title="Valoriza seu Imóvel"
            desc="Casas com energia solar própria valem até 10% a mais no mercado imobiliário imediatamente."
          />

          {/* Card 4: Instalação (Amarelo - Energia) */}
          <FeatureCard 
            icon={<Zap className="w-10 h-10 text-[#fbbc33]" />}
            bgColor="bg-[#fbbc33]/10"
            borderColor="hover:border-[#fbbc33]"
            title="Instalação Rápida"
            desc="Equipe própria da Futura. Instalam em até 48h após a aprovação, sem sujeira."
          />
        </div>
      </div>
    </section>
  );
}

// Componente auxiliar atualizado com as novas props de cor
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bgColor: string;
  borderColor: string;
}

function FeatureCard({ icon, title, desc, bgColor, borderColor }: FeatureProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group ${borderColor}`}>
      <div className={`mb-6 p-4 rounded-xl inline-block group-hover:scale-110 transition-transform ${bgColor}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#054b82] mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}