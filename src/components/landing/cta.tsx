import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

export default function Cta() {
  return (
    <section id="contato" className="py-20 px-6">
      <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-2xl sm:px-12">
        <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pronto para renovar sua autoestima?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Agende sua avaliação com o Dr. João Moittinho hoje mesmo. Atendimento exclusivo e personalizado.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Link href="https://wa.me/5573999611770?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" />
              Agendar no WhatsApp
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="border-slate-700 bg-transparent text-white hover:bg-slate-800 hover:text-white">
            <Link href="tel:+55SEUNUMERO">
              <Phone className="mr-2 h-4 w-4" />
              Ligar para a Clínica
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-800 pt-8 text-sm text-slate-400 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-slate-800 p-2"><MapPin className="h-4 w-4" /></div>
            <p>Rua Exemplo, 123 - Centro</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-slate-800 p-2"><Clock className="h-4 w-4" /></div>
            <p>Seg a Sex: 08h às 18h</p>
          </div>
           <div className="flex flex-col items-center gap-2">
            <div className="rounded-full bg-slate-800 p-2"><MessageCircle className="h-4 w-4" /></div>
            <p>@drjoaomoittinho</p>
          </div>
        </div>
      </div>
    </section>
  );
}