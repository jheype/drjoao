import { FadeIn } from "@/components/ui/fade-in";

export default function Trust() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-3 divide-y divide-slate-800 sm:divide-y-0 sm:divide-x">
          
          <FadeIn delay={0} className="px-4 text-center">
            <p className="text-5xl font-bold tracking-tight text-blue-400">5.0</p>
            <div className="mt-2 flex justify-center text-yellow-400 gap-1 text-sm">★★★★★</div>
            <p className="mt-2 text-slate-400">Média de avaliações no Google</p>
          </FadeIn>

          <FadeIn delay={0.2} className="px-4 text-center">
            <p className="text-5xl font-bold tracking-tight text-blue-400">+1k</p>
            <p className="mt-4 font-medium text-white">Pacientes Atendidos</p>
            <p className="text-sm text-slate-400">Histórias transformadas</p>
          </FadeIn>

          <FadeIn delay={0.4} className="px-4 text-center">
            <p className="text-5xl font-bold tracking-tight text-blue-400">100%</p>
            <p className="mt-4 font-medium text-white">Digital</p>
            <p className="text-sm text-slate-400">Processos sem papel e raio-x digital</p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}