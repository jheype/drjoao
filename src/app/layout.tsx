import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing/header";

function siteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "";
  try {
    return new URL(raw);
  } catch {
    return new URL("http://drjoaomoittinho.com");
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: {
    default: "Dr. João Moittinho | Cirurgião Dentista",
    template: "%s | Dr. João Moittinho",
  },
  description:
    "Clínica de odontologia focada em estética, implantes e saúde bucal. Atendimento particular.",
  applicationName: "Dr. João Moittinho",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dr. João Moittinho",
    title: "Dr. João Moittinho | Cirurgião Dentista",
    description:
      "Clínica de odontologia focada em estética, implantes e saúde bucal. Atendimento particular.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. João Moittinho — Cirurgião Dentista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. João Moittinho | Cirurgião Dentista",
    description:
      "Clínica de odontologia focada em estética, implantes e saúde bucal. Atendimento particular.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative`}
      >
        <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden pointer-events-none">
          <div className="absolute -left-[10%] -top-[10%] h-[600px] w-[600px] rounded-full bg-blue-200/40 blur-[100px] opacity-50 mix-blend-multiply animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute -right-[10%] top-[40%] h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[90px] opacity-60 mix-blend-multiply animate-[float_10s_ease-in-out_infinite_reverse]" />
        </div>

        <Header />
        {children}
      </body>
    </html>
  );
}
