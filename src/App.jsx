import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Truck, Wrench, Shield, SprayCan, FileSpreadsheet, Database, Mail } from "lucide-react";

// =============================
// GAS TOMZA – Landing de Enlaces
// -----------------------------
// Cómo usar:
// 1) Reemplaza cada URL en el arreglo LINKS.
// 2) Cambia títulos/descripciones si lo deseas.
// 3) Exporta este componente como página principal, o incrústalo en tu app.
// =============================

const LINKS = [
  
  {
    title: "Reportes de Taller",
    desc: "Órdenes, mantenimientos y reportes semanales.",
    href: "https://rgastomza.zohocreatorportal.com", // <— CAMBIA AQUÍ
    icon: Wrench,
  },
  {
    title: "Lavados Semanales",
    desc: "Programa y registro de lavados.",
    href: "lavados-semanales.onrender.com", // <— CAMBIA AQUÍ
    icon: SprayCan,
  },
  {
    title: "Control de Carretas",
    desc: "Seguimiento de carretas/trailers y documentación.",
    href: "https://transptomza.zohocreatorportal.com", // <— CAMBIA AQUÍ
    icon: Truck,
  },
];

// Paleta simple (puedes ajustar Tailwind en tu proyecto global si quieres un tema completo)
const brand = {
  primaryFrom: "from-sky-600",
  primaryTo: "to-emerald-500",
  glassBg: "bg-white/10",
  glassBorder: "border-white/20",
};

function LogoTomza() {
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Llama/gota minimalista */}
      <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path d="M32 6c8 12 14 18 14 28a14 14 0 1 1-28 0c0-10 6-16 14-28z" fill="url(#g)"/>
        <circle cx="32" cy="34" r="6" fill="white" opacity="0.9"/>
      </svg>
      <div className="leading-tight">
        <div className="text-xl md:text-2xl font-bold tracking-tight">Gas Tomza Costa Rica</div>
        <div className="text-xs md:text-sm opacity-80">Centro de Accesos Rápidos</div>
      </div>
    </div>
  );
}

function LinkCard({ title, desc, href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative ${brand.glassBg} border ${brand.glassBorder} rounded-2xl p-5 md:p-6 shadow-lg backdrop-blur-lg transition focus:outline-none focus:ring-2 focus:ring-white/40`}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-white/20 group-hover:bg-white/30 transition">
          <Icon className="w-6 h-6" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-base md:text-lg font-semibold tracking-tight truncate">{title}</h3>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
          </div>
          <p className="mt-1 text-sm opacity-80 leading-snug">{desc}</p>
          <p className="mt-3 text-xs opacity-60 truncate">{href}</p>
        </div>
      </div>
    </motion.a>
  );
}

export default function GasTomzaLinksHub() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <LogoTomza />
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="text-xs md:text-sm opacity-80 hover:opacity-100 underline underline-offset-4"
              onClick={(e) => e.preventDefault()}
            >
              Manual rápido
            </a>
            <span className="hidden md:inline text-white/40">•</span>
            <a
              href="#"
              className="text-xs md:text-sm opacity-80 hover:opacity-100 underline underline-offset-4"
              onClick={(e) => e.preventDefault()}
            >
              Soporte TI
            </a>
          </div>
        </div>

        {/* Hero */}
        <div className="mt-8 md:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-3xl border ${brand.glassBorder} ${brand.glassBg}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="px-6 md:px-10 py-10 md:py-14">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Accede a tus sistemas y paneles en un solo lugar
              </h1>
              <p className="mt-3 md:mt-4 text-sm md:text-base max-w-2xl opacity-90">
                Página de inicio operativa para el taller, lavados, extintores, flota, viáticos y más. Da un clic y entra.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs md:text-sm opacity-90">
                <span className="px-2 py-1 rounded-full bg-gradient-to-r from-sky-600 to-emerald-500 text-white/95">Operaciones</span>
                <span className="px-2 py-1 rounded-full bg-white/10 border border-white/20">Costa Rica</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid de enlaces */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {LINKS.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>

        {/* Pie */}
        <div className="mt-14 md:mt-20 flex items-center justify-between gap-4 text-xs opacity-70">
          <div>© {new Date().getFullYear()} Gas Tomza Costa Rica — Uso interno</div>
          <div className="inline-flex items-center gap-2">
            <span className="hidden sm:inline">Tema</span>
            <span className={`px-2 py-1 rounded-md bg-gradient-to-r ${brand.primaryFrom} ${brand.primaryTo}`}>Azul/Verde</span>
          </div>
        </div>
      </div>
    </div>
  );
}
