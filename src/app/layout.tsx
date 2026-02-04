import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/landing/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. João Moittinho | Odontologia Especializada",
  description: "Clínica de odontologia focada em estética, implantes e saúde bucal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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