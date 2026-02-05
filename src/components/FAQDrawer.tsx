"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Vocês aceitam convênios?",
    answer: "Atualmente trabalhamos com modelo de reembolso. Você realiza o pagamento particular, nós emitimos toda a documentação necessária e você solicita o reembolso junto ao seu convênio. Isso nos permite manter um padrão de atendimento e materiais superior ao limitado pelos planos."
  },
  {
    question: "Como funciona a avaliação?",
    answer: "A primeira consulta é uma avaliação completa onde realizamos exames clínicos e radiográficos para montar um plano de tratamento personalizado."
  },
  {
    question: "Onde a clínica está localizada?",
    answer: "Estamos na Clin Saúde na Av. Perimetral, 164A - Centro."
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos cartões de crédito em até 12x (consulte condições), PIX com desconto à vista e dinheiro. Para tratamentos longos, oferecemos parcelamento direto conforme a evolução do caso."
  },
  {
    question: "Atendem urgência/emergência?",
    answer: "Sim. Deixamos horários 'coringa' na agenda para casos de dor aguda. Recomendamos entrar em contato via WhatsApp imediatamente para verificarmos a disponibilidade."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Separamos as perguntas mais comuns para te ajudar. Se não encontrar o que procura, nossa equipe está pronta no WhatsApp.
          </p>
        </div>

        {/* Lista de Perguntas (Accordion) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                activeIndex === index
                  ? "bg-white border-blue-200 shadow-lg shadow-blue-900/5"
                  : "bg-white border-slate-200 hover:border-blue-300"
              }`}
            >
              <div className="flex w-full items-center justify-between p-6">
                <span className={`text-left font-semibold text-lg transition-colors ${
                  activeIndex === index ? "text-blue-700" : "text-slate-700 group-hover:text-blue-600"
                }`}>
                  {faq.question}
                </span>
                <span className={`ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    activeIndex === index ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}>
                  {activeIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-base leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-white p-2 pl-6 pr-2 shadow-sm border border-slate-100">
            <span className="text-sm font-medium text-slate-600">
              Ainda tem dúvidas sobre o tratamento?
            </span>
            <Button asChild size="sm" className="rounded-full bg-green-600 hover:bg-green-700">
              <Link href="https://wa.me/5573999611770" target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chamar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}