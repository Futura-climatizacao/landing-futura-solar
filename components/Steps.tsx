import { FileText, HardHat, CheckCircle, PiggyBank, ArrowRight } from "lucide-react";

export default function Steps() {
  const steps = [
    {
      id: "01",
      title: "Orçamento Gratuito",
      desc: "Nossa equipe analisa sua conta de luz e dimensiona o sistema ideal para zerar seu consumo.",
      icon: <FileText className="w-8 h-8 text-white" />,
      color: "bg-[#054b82]" // Azul Futura
    },
    {
      id: "02",
      title: "Visita e Projeto",
      desc: "Engenheiros vão ao local avaliar o telhado e criam o projeto técnico para aprovação na concessionária.",
      icon: <HardHat className="w-8 h-8 text-white" />,
      color: "bg-[#fbbc33]" // Amarelo Solar
    },
    {
      id: "03",
      title: "Instalação Premium",
      desc: "Técnicos próprios da Futura instalam os painéis e o inversor em até 48h, sem sujeira e sem dor de cabeça.",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      color: "bg-[#00983a]" // Verde Futura
    },
    {
      id: "04",
      title: "Homologação e Economia",
      desc: "Cuidamos de toda a burocracia. Trocamos o medidor e você começa a gerar sua própria energia.",
      icon: <PiggyBank className="w-8 h-8 text-white" />,
      color: "bg-[#054b82]" // Azul Futura
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00983a] font-bold text-sm uppercase tracking-wider">
            Sem Burocracia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#054b82] mt-2 mb-4">
            Do orçamento à economia em 4 passos
          </h2>
          <p className="text-slate-500 text-lg">
            Cuidamos de tudo: da engenharia à homologação na concessionária. Você só se preocupa em aproveitar a economia.
          </p>
        </div>

        {/* Linha do Tempo / Steps */}
        <div className="relative grid md:grid-cols-4 gap-8">
          
          {/* Linha Conectora (Apenas Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Ícone com Círculo */}
              <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center shadow-xl mb-6 border-4 border-white transition-transform group-hover:scale-110 ${step.color}`}>
                {step.icon}
              </div>
              
              {/* Seta indicativa (exceto no último) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 text-slate-300">
                  <ArrowRight size={24} />
                </div>
              )}

              <div className="text-center px-2">
                <div className="text-4xl font-black text-slate-100 absolute top-20 left-1/2 -translate-x-1/2 -z-10 select-none">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-[#054b82] mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermediário */}
        <div className="mt-16 text-center">
          <a href="https://wa.me/5579999999999" className="inline-flex items-center gap-2 text-[#00983a] font-bold hover:underline text-lg">
            Quero iniciar meu projeto agora <ArrowRight size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}