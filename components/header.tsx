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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 scroll-mt-32">
      {/* Barra de destaques com carrossel */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-secondary animate-pulse" />
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs text-primary-foreground/80 whitespace-nowrap">Destaque:</span>
            <span 
              className={`text-xs font-medium text-card whitespace-nowrap transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              {highlights[currentHighlight]}
            </span>
          </div>
          <Sparkles size={14} className="text-secondary animate-pulse" />
        </div>
      </div>

      {/* Header principal */}
      <div className="bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"></div>
              <Image
                src="/logo.png"
                alt="Juliana Alves - Fisioterapeuta Dermatofuncional"
                width={50}
                height={50}
                className="relative rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Juliana Alves
              </p>
              <p className="text-xs text-muted-foreground tracking-wide flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Fisioterapeuta & Dermatofuncional
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#inicio">Início</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <Link 
              href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá, vim do site e gostaria de saber mais sobre seus serviços."
              target="_blank"
              className="ml-4 bg-gradient-to-r from-primary to-primary/80 text-card px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="relative">
                <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping"></span>
                <span className="relative w-2 h-2 rounded-full bg-secondary block"></span>
              </span>
              Agendar Consulta
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-card/98 backdrop-blur-md border-b border-border overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 py-4 flex flex-col gap-1">
          <MobileNavLink href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </MobileNavLink>
          <MobileNavLink href="#sobre" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </MobileNavLink>
          <MobileNavLink href="#servicos" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </MobileNavLink>
          <MobileNavLink href="#contato" onClick={() => setIsMenuOpen(false)}>
            Contato
          </MobileNavLink>
          <Link 
            href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá, vim do site e gostaria de saber mais sobre seus serviços."
            target="_blank"
            className="mt-3 bg-gradient-to-r from-primary to-primary/80 text-card px-6 py-3 rounded-full text-sm font-medium text-center flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-secondary/30 animate-ping"></span>
              <span className="relative w-2 h-2 rounded-full bg-secondary block"></span>
            </span>
            Agendar Consulta
          </Link>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
    </a>
  )
}
function MobileNavLink({
  href,
  onClick,
  children
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-3"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
      {children}
    </a>
  )
}