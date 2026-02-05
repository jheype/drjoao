import { FaWhatsapp } from "react-icons/fa"

export default function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/5573999611770?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 hover:scale-110 hover:shadow-xl transition-all duration-300"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    )
}