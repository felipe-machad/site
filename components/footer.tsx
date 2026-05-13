import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
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
                <p className="font-serif font-semibold text-foreground">Juliana Alves</p>
                <p className="text-xs text-muted-foreground">Fisioterapeuta Dermatofuncional</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fisioterapia Dermatofuncional especializada em reabilitação, 
              tratamentos estéticos e bem-estar. Atendimento individualizado 
              com protocolos baseados em evidências científicas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <nav className="space-y-2">
              <Link href="#inicio" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre a Fisioterapia
              </Link>
              <Link href="#servicos" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tratamentos
              </Link>
              <Link href="#contato" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Acompanhe dicas de saúde, cuidados e novidades sobre fisioterapia dermatofuncional.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://instagram.com/jualves_fisiodermato"
                target="_blank"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá, vim do site e gostaria de saber mais sobre seus serviços."
                target="_blank"
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Juliana Alves - Fisioterapia Dermatofuncional. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvido Por FFuture.AI
          </p>
        </div>
      </div>
    </footer>
  )
}
