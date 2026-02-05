export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clínica Odontológica Dr. João Moittinho. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <p>Privacidade</p>
            <p>Termos</p>
            <p>|</p>
            <p className="text-black/30">Desenvolvido por: <a className="text-black/40 underline" href="https://jheype.dev">Jheype</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}