import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Truck, Wrench, SprayCan, Database } from "lucide-react";

const LINKS = [
  {
    title: "Reportes de Taller",
    desc: "Órdenes, mantenimientos y reportes semanales.",
    href: "https://rgastomza.zohocreatorportal.com",
    icon: Wrench,
  },
  {
    title: "Lavados Semanales",
    desc: "Programa y registro de lavados.",
    href: "https://lavados-semanales.onrender.com",
    icon: SprayCan,
  },
  {
    title: "Control de Carretas",
    desc: "Seguimiento de carretas/trailers y documentación.",
    href: "https://transptomza.zohocreatorportal.com",
    icon: Truck,
  },
  {
    title: "Dividencon",
    desc: "Ingreso al sistema Dividencon.",
    href: "#",
    icon: Database,
  },
];

function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="flex items-center gap-4">
        <img src="/logo-tomza.jpg" className="h-10 w-auto rounded-md shadow" alt="Gas Tomza" />
        <div>
          <h1 className="text-white text-xl md:text-2xl font-extrabold tracking-tight">
            Gas Tomza Costa Rica
          </h1>
          <p className="text-white/70 text-xs md:text-sm">Centro de Accesos Rápidos</p>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative overflow-hidden rounded-3xl glass shadow-smooth"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-tomzaBlue/30 via-white/10 to-tomzaRed/20 pointer-events-none" />
        <div className="relative px-6 md:px-10 py-10 md:py-14">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            Accede a tus sistemas y paneles en un solo lugar
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base max-w-2xl text-white/85">
            Página de inicio operativa para taller, lavados, extintores, flota, viáticos y más.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm">
            <span className="px-2 py-1 rounded-full bg-tomzaBlue text-white">Operaciones</span>
            <span className="px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white/90">
              Costa Rica
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function LinkCard({ title, desc, href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="group relative glass rounded-2xl p-5 md:p-6 shadow-smooth transition block focus:outline-none"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-white/15 group-hover:bg-white/25 transition">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base md:text-lg font-semibold tracking-tight text-white truncate">
              {title}
            </h3>
            <ExternalLink className="w-4 h-4 text-white/80 group-hover:text-white" />
          </div>
          <p className="mt-1 text-sm text-white/85 leading-snug">{desc}</p>
          <p className="mt-3 text-xs text-white/60 truncate">{href}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {LINKS.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>

        <footer className="mt-14 md:mt-20 flex items-center justify-between gap-4 text-xs text-white/70">
          <div>© {new Date().getFullYear()} Gas Tomza Costa Rica — Uso interno</div>
          <div className="inline-flex items-center gap-2">
            <span className="hidden sm:inline">Tema</span>
            <span className="px-2 py-1 rounded-md bg-gradient-to-r from-tomzaYellow to-tomzaBlue text-black/80">
              Tomza
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
