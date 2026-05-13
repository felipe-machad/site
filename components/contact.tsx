import { MapPin, Phone, Clock, Instagram, MessageCircle, Stethoscope } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary-foreground bg-secondary/50 px-4 py-2 rounded-full">
            Agende Sua Avaliação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Agende sua avaliação fisioterapêutica e receba um plano de tratamento 
            personalizado para suas necessidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Stethoscope size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Consultório</h3>
                  <p className="text-muted-foreground">
                    Consultório de Fisioterapia Dermatofuncional<br />
                    <span className="font-medium">Juliana Alves</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Flores da Cunha 905<br />
                    Cachoeirinha Center - Sala 1085<br />
                    Cachoeirinha, RS
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(51) 99999-9999</p>
                  <p className="text-sm text-muted-foreground mt-1">WhatsApp para agendamentos</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 19h<br />
                    Sábado: 8h às 13h
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Atendimento exclusivamente com hora marcada</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary/5 rounded-2xl border border-primary/20 p-8 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Agende Sua Avaliação Fisioterapêutica
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              O primeiro passo é uma avaliação completa para entender suas necessidades e 
              definir o melhor protocolo de tratamento. Entre em contato pelo WhatsApp 
              para agendar.
            </p>

            <div className="bg-background rounded-xl p-4 mb-6 border border-border">
              <h4 className="font-medium text-foreground text-sm mb-2">O que inclui a avaliação:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Análise completa e histórico de saúde
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Avaliação física e funcional
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Definição de objetivos e expectativas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  Proposta de protocolo individualizado
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link
                href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá, vim do site e gostaria de saber mais sobre seus serviços."
                target="_blank"
                className="w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
              >
                <MessageCircle size={20} />
                Agendar pelo WhatsApp
              </Link>

              <Link
                href="https://instagram.com/jualves_fisiodermato"
                target="_blank"
                className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-6 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
              >
                <Instagram size={20} />
                Siga no Instagram
              </Link>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Resposta em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
