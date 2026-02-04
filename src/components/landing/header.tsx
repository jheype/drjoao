import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-slate-900">Dr. João Moittinho</span>
          <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Odontologia</span>
        </div>
        
        <nav className="hidden gap-8 md:flex text-sm font-medium text-slate-600">
          {['Início', 'Procedimentos', 'Sobre', 'Dúvidas'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="relative transition-colors hover:text-blue-600 group py-2"
            >
              {item}
              <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Button asChild className="rounded-full px-6 shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
          <Link href="#contato">
            <Calendar className="mr-2 h-4 w-4" />
            Agendar
          </Link>
        </Button>
      </div>
    </header>
  );
}