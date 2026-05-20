"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const highlights = [
  "Limpeza de Pele Profunda",
  "Drenagem Linfática",
  "Massagem Relaxante",
  "Radiofrequência Facial",
  "Peeling de Diamante",
  "Fisioterapia Funcional",
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentHighlight, setCurrentHighlight] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentHighlight((prev) => (prev + 1) % highlights.length)
        setIsVisible(true)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // ✅ SCROLL CORRETO DENTRO DO COMPONENTE
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const headerOffset = 120
    const elementPosition = el.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    })
  }

  const handleMobileClick = (id: string) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* BARRA DE DESTAQUES */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-secondary animate-pulse" />

          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs text-primary-foreground/80 whitespace-nowrap">
              Destaque:
            </span>

            <span
              className={`text-xs font-medium text-card whitespace-nowrap transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              {highlights[currentHighlight]}
            </span>
          </div>

          <Sparkles size={14} className="text-secondary animate-pulse" />
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Juliana Alves"
              width={50}
              height={50}
              className="rounded-full"
            />

            <div className="hidden sm:block">
              <p className="font-semibold text-foreground">
                Juliana Alves
              </p>
              <p className="text-xs text-muted-foreground">
                Fisioterapeuta Dermatofuncional
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollToSection("inicio")}>
              Início
            </button>

            <button onClick={() => scrollToSection("sobre")}>
              Sobre
            </button>

            <button onClick={() => scrollToSection("servicos")}>
              Serviços
            </button>

            <button onClick={() => scrollToSection("contato")}>
              Contato
            </button>

            <Link
              href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá"
              target="_blank"
              className="ml-4 bg-primary text-white px-6 py-2 rounded-full text-sm"
            >
              Agendar Consulta
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-card border-b border-border overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-3">
          <button onClick={() => handleMobileClick("inicio")}>
            Início
          </button>

          <button onClick={() => handleMobileClick("sobre")}>
            Sobre
          </button>

          <button onClick={() => handleMobileClick("servicos")}>
            Serviços
          </button>

          <button onClick={() => handleMobileClick("contato")}>
            Contato
          </button>

          <Link
            href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá"
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
            className="bg-primary text-white px-4 py-3 rounded-full text-center"
          >
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  )
}