export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Clínica Odontológica Dr. João Moittinho. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <p>Privacidade</p>
            <p>Termos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}