"use client"

import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  const headerOffset = 120

  const top =
    el.getBoundingClientRect().top + window.scrollY - headerOffset

  window.scrollTo({
    top,
    behavior: "smooth",
  })
}

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Juliana Alves - Fisioterapeuta Dermatofuncional"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <p className="font-serif font-semibold text-foreground">
                  Juliana Alves
                </p>
                <p className="text-xs text-muted-foreground">
                  Fisioterapeuta Dermatofuncional
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Fisioterapia Dermatofuncional especializada em reabilitação,
              tratamentos estéticos e bem-estar.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Navegação
            </h4>

            <nav className="space-y-2">
              <button onClick={() => scrollToSection("inicio")} className="text-sm text-muted-foreground hover:text-foreground block">
                Início
              </button>

              <button onClick={() => scrollToSection("sobre")} className="text-sm text-muted-foreground hover:text-foreground block">
                Sobre
              </button>

              <button onClick={() => scrollToSection("servicos")} className="text-sm text-muted-foreground hover:text-foreground block">
                Serviços
              </button>

              <button onClick={() => scrollToSection("contato")} className="text-sm text-muted-foreground hover:text-foreground block">
                Contato
              </button>
            </nav>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Redes Sociais
            </h4>

            <div className="flex gap-3">
              <a
                href="https://instagram.com/jualves_fisiodermato"
                target="_blank"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá"
                target="_blank"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juliana Alves
          </p>

          <p className="text-xs text-muted-foreground">
            Desenvolvido por FFuture.AI
          </p>
        </div>

      </div>
    </footer>
  )
}