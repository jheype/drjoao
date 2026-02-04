import { FadeIn } from "@/components/ui/fade-in";
import { Sparkles, Activity, ShieldCheck, Smile, Stethoscope, Clock, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  { title: "Estética Dental", desc: "Facetas, lentes e clareamento.", icon: Sparkles },
  { title: "Implantes", desc: "Recuperação funcional completa.", icon: ShieldCheck },
  { title: "Ortodontia", desc: "Alinhadores invisíveis e fixos.", icon: Smile },
  { title: "Clínica Geral", desc: "Prevenção e saúde bucal.", icon: Stethoscope },
  { title: "Cirurgias", desc: "Extrações e procedimentos complexos.", icon: Activity },
  { title: "Urgências", desc: "Atendimento prioritário para dor.", icon: Clock },
];

export default function Services() {
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
          <Link href="#contato" className="text-primary font-medium hover:underline flex items-center gap-1">
            Ver tabela de horários <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-2xl border border-slate-200/50 bg-white/60 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5">
                
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
    </section>
  );
}