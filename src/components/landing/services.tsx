"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Sparkles, Activity, ShieldCheck, Smile, Stethoscope, Clock, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { 
    title: "Estética Dental", 
    desc: "Facetas, lentes e clareamento.", 
    icon: Sparkles,
    details: "Transforme seu sorriso com procedimentos minimamente invasivos. Trabalhamos com lentes de contato dental em porcelana ultrafina e clareamento a laser assistido, garantindo resultados naturais e duradouros que harmonizam com seu rosto."
  },
  { 
    title: "Implantes", 
    desc: "Recuperação funcional completa.", 
    icon: ShieldCheck,
    details: "Recupere a segurança de sorrir e mastigar. Utilizamos implantes de titânio de tecnologia suíça com cicatrização acelerada (carga imediata quando possível), devolvendo a estética e função de um dente natural."
  },
  { 
    title: "Ortodontia", 
    desc: "Alinhadores invisíveis e fixos.", 
    icon: Smile,
    details: "Alinhe seus dentes com discrição e conforto. Somos credenciados nos principais sistemas de alinhadores invisíveis (como Invisalign), além de trabalharmos com aparelhos de safira e autoligados para tratamentos mais rápidos."
  },
  { 
    title: "Clínica Geral", 
    desc: "Prevenção e saúde bucal.", 
    icon: Stethoscope,
    details: "A base de um sorriso saudável. Realizamos check-ups digitais, limpeza (profilaxia) com ultrassom, restaurações estéticas e aplicação de flúor para manter sua saúde bucal sempre em dia e prevenir problemas futuros."
  },
  { 
    title: "Cirurgias", 
    desc: "Extrações e procedimentos complexos.", 
    icon: Activity,
    details: "Procedimentos cirúrgicos realizados com precisão e segurança. Desde a extração de sisos (terceiros molares) até enxertos ósseos e cirurgias gengivais, tudo feito com protocolos modernos de analgesia para seu conforto."
  },
  { 
    title: "Urgências", 
    desc: "Atendimento prioritário para dor.", 
    icon: Clock,
    details: "Sabemos que dor de dente não espera. Dispomos de horários reservados diariamente na agenda para acolher casos de dor aguda, fraturas dentárias ou acidentes, focando no alívio imediato e resolução do problema."
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof items[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="procedimentos" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Tratamentos Especializados</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Protocolos modernos planejados digitalmente para garantir previsibilidade e conforto.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.1}>
              <div 
                onClick={() => setSelectedService(it)}
                className="group relative h-full cursor-pointer rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"
              >
                
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-slate-100 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                  <it.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900">{it.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{it.desc}</p>
                
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* --- MODAL / DIALOG --- */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop (Fundo escuro) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Janela do Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl pointer-events-auto"
              >
                {/* Cabeçalho do Modal com Icone e Titulo */}
                <div className="relative bg-slate-50 p-6 border-b border-slate-100">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                      <selectedService.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{selectedService.title}</h3>
                  </div>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {selectedService.details}
                  </p>

                  {/* Lista de benefícios fictícia para dar volume visual */}
                  <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                    <h4 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wider">Diferenciais</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Planejamento digital personalizado</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Materiais de alta durabilidade</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        <span>Conforto e previsibilidade</span>
                      </li>
                    </ul>
                  </div>

                  <button 
                    onClick={() => {
                        setSelectedService(null);
                        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
                  >
                    Agendar Avaliação para {selectedService.title}
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}