import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div className="space-y-6 lg:space-y-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/50 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Inovação em Odontologia
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance leading-tight">
                Seu melhor sorriso começa com um <span className="text-gradient">atendimento de excelência.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 text-pretty max-w-lg leading-relaxed">
                Tecnologia avançada e acolhimento humano para transformar sua autoestima. Agende sua avaliação com o Dr. João Moittinho.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-blue-600/20 active:scale-95 transition-all duration-300 hover-shine w-full sm:w-auto">
                <Link href="#contato">
                  Agendar Avaliação <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-12 text-slate-700 hover:bg-white/50 hover:text-blue-700 w-full sm:w-auto">
                <Link href="#procedimentos">Ver Procedimentos</Link>
              </Button>
            </FadeIn>

            <FadeIn delay={0.5} className="pt-2 sm:pt-4 grid grid-cols-2 gap-y-2 text-sm text-slate-600 sm:flex sm:gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" /> Atendimento Particular
              </div>
              <div className="flex items-center gap-2">
                 <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" /> Tecnologia 3D
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} className="relative mx-auto w-full max-w-[500px] lg:max-w-none h-[450px] sm:h-[550px] lg:h-[600px] flex items-end justify-center mt-8 lg:mt-0">
            
            <div className="absolute inset-x-0 bottom-0 mx-auto h-[90%] w-[90%] bg-gradient-to-t from-blue-100/80 to-transparent rounded-t-full opacity-80" />

            <div className="relative h-full w-full z-10">
                 <Image 
                    src="/doctor.png" 
                    alt="Dr. João Moittinho" 
                    fill 
                    className="object-cover object-top drop-shadow-2xl" 
                    priority 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 />
            </div>

            <div className="absolute bottom-6 left-4 right-4 sm:left-10 sm:right-auto sm:w-auto z-20 animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white/50 bg-white/70 p-4 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Dr. João Moittinho</p>
                  <p className="text-xs text-slate-600">Cirurgião Dentista</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}