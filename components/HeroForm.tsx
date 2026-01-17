"use client";

import { useState } from "react";
import { Zap, ArrowRight, RefreshCw, CheckCircle } from "lucide-react";

export default function HeroForm() {
  const [step, setStep] = useState<"form" | "result">("form");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    billValue: "",
  });
  const [savings, setSavings] = useState({ monthly: 0, yearly: 0, total: 0 });

  const handleCalculate = () => {
    // Lógica de cálculo
    const value = parseFloat(formData.billValue.replace(/[^\d,]/g, '').replace(',', '.'));

    if (!value || isNaN(value)) return;

    const monthlySavings = value * 0.95;
    const yearlySavings = monthlySavings * 12;
    const twentyFiveYears = yearlySavings * 25;

    setSavings({
      monthly: monthlySavings,
      yearly: yearlySavings,
      total: twentyFiveYears,
    });

    setStep("result");
  };

  const formatMoney = (val: number) => {
    return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const whatsappLink = `https://wa.me/5579999999999?text=Olá! Me chamo ${formData.name}. Fiz a simulação no site e vi que posso economizar cerca de ${formatMoney(savings.monthly)} por mês com energia solar. Gostaria de um orçamento detalhado.`;

  return (
    // REMOVI O 'overflow-hidden' DAQUI PARA O BADGE APARECER
    <div className="bg-white text-slate-800 p-8 rounded-3xl shadow-2xl border-b-4 border-[#00983a] w-full max-w-md mx-auto relative">
      
      {/* --- ESTADO 1: FORMULÁRIO --- */}
      {step === "form" && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Badge Flutuante (Agora vai aparecer inteiro) */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00983a] text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg z-20 whitespace-nowrap border-2 border-white">
            Simulador Gratuito
          </div>

          <h3 className="text-2xl font-bold mb-2 text-center text-[#054b82] mt-2">
            Simule sua Economia
          </h3>
          <p className="text-slate-500 text-center mb-6 text-sm">
            Descubra quanto dinheiro você está perdendo.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Nome Completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-[#054b82] outline-none transition"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">WhatsApp</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-[#054b82] outline-none transition"
                placeholder="(79) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1 ml-1">Valor médio da conta (R$)</label>
              <input
                type="number"
                value={formData.billValue}
                onChange={(e) => setFormData({ ...formData, billValue: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:ring-2 focus:ring-[#054b82] outline-none transition font-bold text-[#054b82]"
                placeholder="Ex: 500"
              />
            </div>
            <button
              onClick={handleCalculate}
              disabled={!formData.billValue}
              className="w-full bg-[#054b82] hover:bg-[#043d6b] text-white font-bold py-4 rounded-xl text-lg transition shadow-lg shadow-blue-900/10 mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              Calcular Economia <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
            <Zap size={12} className="text-[#fbbc33]" fill="currentColor" />
            Cálculo baseado na tarifa atual
          </p>
        </div>
      )}

      {/* --- ESTADO 2: RESULTADO --- */}
      {step === "result" && (
        <div className="text-center animate-in zoom-in-95 duration-500 py-2">
           <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#fbbc33] text-[#054b82] text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg z-20 whitespace-nowrap border-2 border-white">
            Resultado da Análise
          </div>

          <div className="mb-6 mt-4">
            <CheckCircle className="w-16 h-16 text-[#00983a] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#054b82]">
              Incrível, {formData.name.split(' ')[0]}!
            </h3>
            <p className="text-slate-500 text-sm">
              Você pode deixar de pagar essa conta e começar a investir em você.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
            <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-1">Economia Anual Estimada</p>
            <p className="text-4xl font-black text-[#00983a] tracking-tight">
              {formatMoney(savings.yearly)}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Em 25 anos: <span className="text-[#054b82] font-bold">{formatMoney(savings.total)}</span>
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#00983a] hover:bg-green-700 text-white font-bold py-4 rounded-xl text-lg transition shadow-xl shadow-green-600/20 mb-3 animate-pulse"
          >
            Quero essa Economia Agora
          </a>

          <button
            onClick={() => setStep("form")}
            className="text-slate-400 text-sm hover:text-[#054b82] flex items-center justify-center gap-2 mx-auto transition"
          >
            <RefreshCw size={14} /> Refazer simulação
          </button>
        </div>
      )}
    </div>
  );
}