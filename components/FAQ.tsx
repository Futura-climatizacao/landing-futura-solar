"use client"; // Obrigatório para interatividade (clique)

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "O sistema funciona à noite ou em dias de chuva?",
      answer: "À noite o sistema não gera energia, mas você usa a energia acumulada na rede da concessionária (créditos). Em dias nublados ou chuvosos, ele continua gerando, porém em menor intensidade."
    },
    {
      question: "Como funciona o pagamento? Vocês financiam?",
      answer: "Sim! Temos parcerias com bancos que financiam em até 72x. Na maioria dos casos, o valor da parcela fica igual ou menor que a sua conta de luz atual. Você troca a despesa pelo investimento."
    },
    {
      question: "Quanto tempo dura os painéis solares?",
      answer: "Os equipamentos são extremamente duráveis. Trabalhamos com painéis que têm garantia de performance de 25 anos, mas a vida útil pode ultrapassar 30 anos gerando energia."
    },
    {
      question: "Preciso fazer muita manutenção?",
      answer: "Quase nenhuma. A única manutenção necessária é a limpeza dos painéis (com água e sabão neutro) a cada 6 meses ou 1 ano, dependendo da poeira da região, para garantir a eficiência máxima."
    },
    {
      question: "Demora para instalar?",
      answer: "Não. Nossa equipe é própria e especializada. Em residências padrão, a instalação costuma ser finalizada em 1 ou 2 dias. A parte burocrática com a concessionária nós cuidamos de tudo para você."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
          <span className="text-[#00983a] font-bold text-sm uppercase tracking-wider mb-2 block">
            Dúvidas Comuns
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#054b82]">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index ? "border-[#054b82] shadow-lg" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? "text-[#054b82]" : "text-slate-700"}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-[#fbbc33] min-w-[24px]" />
                ) : (
                  <Plus className="text-slate-400 min-w-[24px]" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada Final para quem ainda tem dúvida */}
        <div className="mt-12 text-center p-8 bg-[#054b82]/5 rounded-3xl border border-[#054b82]/10">
          <p className="text-[#054b82] font-medium mb-4 flex items-center justify-center gap-2">
            <HelpCircle size={20} />
            Ainda tem alguma dúvida específica?
          </p>
          <a 
            href="https://wa.me/5579999812895" 
            className="inline-block bg-[#00983a] hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition shadow-lg shadow-green-600/20"
          >
            Fale com Consultor Agora
          </a>
        </div>

      </div>
    </section>
  );
}