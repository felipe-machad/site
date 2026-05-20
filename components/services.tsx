"use client"

import { useState } from "react"
import { 
  Sparkles, 
  Zap, 
  Hand, 
  Activity,
  Flower2,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  HeartPulse
} from "lucide-react"

const serviceCategories = [
  {
    id: "reabilitacao",
    name: "Reabilitação e Pós-Operatório",
    icon: HeartPulse,
    color: "bg-primary/10 text-primary",
    description: "Recuperação fisioterapêutica especializada para cirurgias plásticas e procedimentos estéticos",
    services: [
      {
        name: "Pós-Operatório de Cirurgias Plásticas",
        description: "Tratamento fisioterapêutico essencial para recuperação de abdominoplastia, lipoaspiração, mamoplastia e outras cirurgias. Inclui drenagem linfática, ultrassom terapêutico e técnicas manuais para prevenir fibroses e acelerar a cicatrização.",
        benefits: ["Prevenção de fibroses", "Redução de edema", "Aceleração da cicatrização", "Recuperação mais rápida"],
        duration: "60-90 minutos",
        indication: "Indicado a partir do 1º dia pós-operatório, conforme liberação médica"
      },
      {
        name: "Tratamento de Fibroses",
        description: "Protocolo fisioterapêutico para tratamento de fibroses já instaladas após cirurgias ou traumas. Utiliza técnicas de liberação tecidual, ultrassom e vacuoterapia para amolecer e reorganizar o tecido fibrótico.",
        benefits: ["Amolecimento do tecido", "Melhora da mobilidade", "Redução de aderências", "Uniformização do contorno"],
        duration: "45-60 minutos",
        indication: "Indicado para fibroses pós-cirúrgicas ou traumáticas"
      },
      {
        name: "Drenagem Linfática Manual",
        description: "Técnica fisioterapêutica de massagem suave que estimula o sistema linfático. Fundamental no pós-operatório e também indicada para tratamento de linfedema, gestantes e retenção de líquidos patológica.",
        benefits: ["Ativação do sistema linfático", "Eliminação de toxinas", "Redução de edemas", "Melhora da imunidade"],
        duration: "60 minutos",
        indication: "Indicado para pós-operatório, gestantes, linfedema e retenção hídrica"
      }
    ]
  },
  {
    id: "corporal",
    name: "Tratamento Corporal",
    icon: Activity,
    color: "bg-secondary/30 text-secondary-foreground",
    description: "Tratamentos fisioterapêuticos para disfunções estéticas corporais com recursos manuais e tecnológicos",
    services: [
      {
        name: "Radiofrequência Terapêutica",
        description: "Recurso de eletrotermoterapia que gera aquecimento profundo dos tecidos, estimulando a produção de colágeno e promovendo remodelamento tecidual. Indicado para flacidez cutânea e gordura localizada.",
        benefits: ["Estímulo de colágeno", "Redução de flacidez", "Remodelamento tecidual", "Melhora do contorno"],
        duration: "45-60 minutos",
        indication: "Indicado para flacidez, fibro edema geloide e remodelamento corporal"
      },
      {
        name: "Corrente Russa / Eletroestimulação",
        description: "Técnica de eletroestimulação neuromuscular que promove contração muscular involuntária, fortalecendo e tonificando a musculatura. Auxilia no tratamento de flacidez muscular e definição corporal.",
        benefits: ["Fortalecimento muscular", "Tonificação", "Melhora da circulação", "Recuperação muscular"],
        duration: "30-45 minutos",
        indication: "Indicado para hipotonia muscular e reabilitação funcional"
      },
      {
        name: "Vacuoterapia / Endermoterapia",
        description: "Técnica que utiliza pressão negativa para mobilizar tecidos, melhorar circulação e tratar fibro edema geloide (celulite). Promove liberação de aderências e melhora a oxigenação tecidual.",
        benefits: ["Melhora da circulação", "Redução de celulite", "Liberação de aderências", "Melhora da textura"],
        duration: "45 minutos",
        indication: "Indicado para celulite, fibrose e melhora da circulação local"
      },
      {
        name: "Massagem Modeladora Terapêutica",
        description: "Técnica de massagem vigorosa com manobras específicas que atuam no tecido adiposo e na circulação. Diferente de massagens estéticas comuns, segue princípios fisioterapêuticos de avaliação e tratamento.",
        benefits: ["Ativação circulatória", "Mobilização do tecido adiposo", "Modelagem do contorno", "Eliminação de toxinas"],
        duration: "60 minutos",
        indication: "Indicado para gordura localizada e melhora do contorno corporal"
      },
 /*     {
        name: "Carboxiterapia",
        description: "Aplicação terapêutica de gás carbônico medicinal que melhora a oxigenação e circulação local. Utilizado no tratamento de celulite, gordura localizada, estrias e olheiras.",
        benefits: ["Melhora da microcirculação", "Oxigenação tecidual", "Lipólise localizada", "Estímulo de colágeno"],
        duration: "30-45 minutos",
        indication: "Indicado para celulite, gordura localizada, estrias e flacidez"
      },*/
      {
        name: "Criolipólise",
        description: "Procedimento não invasivo que utiliza resfriamento controlado para redução de gordura localizada através de apoptose das células adiposas. Requer avaliação fisioterapêutica prévia.",
        benefits: ["Redução de gordura", "Não invasivo", "Resultados progressivos", "Sem tempo de recuperação"],
        duration: "60 minutos por área",
        indication: "Indicado para gordura localizada resistente a dieta e exercício"
      }
    ]
  },
  {
    id: "facial",
    name: "Tratamento Facial",
    icon: Sparkles,
    color: "bg-primary/10 text-primary",
    description: "Tratamentos fisioterapêuticos para rejuvenescimento e saúde da pele facial",
    services: [
      {
        name: "Radiofrequência Facial",
        description: "Tratamento de eletrotermoterapia para face que estimula fibroblastos e produção de colágeno. Promove efeito lifting não cirúrgico com melhora da firmeza e redução de rugas.",
        benefits: ["Efeito lifting", "Estímulo de colágeno", "Redução de rugas", "Melhora do contorno facial"],
        duration: "30-45 minutos",
        indication: "Indicado para flacidez facial, rugas e perda de contorno"
      },
      {
        name: "Microagulhamento",
        description: "Técnica que utiliza microagulhas para criar microlesões controladas, estimulando a regeneração da pele e produção de colágeno. O fisioterapeuta avalia a profundidade adequada para cada caso.",
        benefits: ["Regeneração cutânea", "Produção de colágeno", "Melhora de cicatrizes", "Rejuvenescimento"],
        duration: "45-60 minutos",
        indication: "Indicado para cicatrizes de acne, manchas, rugas e rejuvenescimento"
      },
      {
        name: "Peeling Físico / Peeling de Diamante",
        description: "Esfoliação mecânica controlada que remove células mortas da camada superficial da pele, estimulando renovação celular e melhorando a absorção de ativos.",
        benefits: ["Renovação celular", "Melhora da textura", "Clareamento de manchas", "Pele mais luminosa"],
        duration: "45 minutos",
        indication: "Indicado para manchas, textura irregular e preparação para outros tratamentos"
      },
      {
        name: "Limpeza de Pele Profissional",
        description: "Procedimento de higienização profunda da pele com extração de comedões e impurezas. Inclui avaliação do tipo de pele e orientações de cuidados domiciliares.",
        benefits: ["Remoção de impurezas", "Desobstrução dos poros", "Prevenção de acne", "Pele saudável"],
        duration: "60-90 minutos",
        indication: "Indicado para todos os tipos de pele, especialmente oleosas e acneicas"
      },
      {
        name: "Fotorejuvenescimento",
        description: "Tratamento estético não invasivo que utiliza recursos terapêuticos para melhorar a textura da pele, estimular a produção de colágeno e suavizar sinais do envelhecimento cutâneo.",
        benefits: ["Estímulo de colágeno", "Melhora da textura da pele", "Redução de linhas finas", "Aspecto mais uniforme"],
        duration: "30-50 minutos",
        indication: "Indicado para rejuvenescimento facial, melhora da textura da pele e prevenção dos sinais de envelhecimento"
      }
    ]
  },
  {
    id: "massoterapia",
    name: "Massoterapia e Relaxamento",
    icon: Hand,
    color: "bg-secondary/30 text-secondary-foreground",
    description: "Técnicas de massagem terapêutica para alívio de tensões, relaxamento e bem-estar",
    services: [
      {
        name: "Massagem Relaxante Terapêutica",
        description: "Técnica de massagem com manobras suaves e ritmadas que promovem relaxamento muscular e mental. O fisioterapeuta identifica pontos de tensão e adapta a pressão às necessidades do paciente.",
        benefits: ["Redução do estresse", "Alívio de tensões musculares", "Melhora do sono", "Bem-estar geral"],
        duration: "60 minutos",
        indication: "Indicado para estresse, tensão muscular, ansiedade e autocuidado"
      },
      {
        name: "Ventosaterapia",
        description: "Técnica terapêutica que utiliza ventosas para criar sucção na pele, estimulando a circulação sanguínea, liberando tensões musculares e auxiliando no alívio de dores e contraturas.",
        benefits: ["Alívio de dores musculares", "Melhora da circulação", "Relaxamento muscular", "Redução de tensões"],
        duration: "40-60 minutos",
        indication: "Indicado para dores musculares, contraturas, tensões e melhora da circulação local"
      },
      {
        name: "Dry Needling",
        description: "Técnica que utiliza agulhas finas aplicadas em pontos gatilho musculares para aliviar dores, reduzir tensões e melhorar a função muscular de forma precisa.",
        benefits: ["Alívio de dores", "Liberação de pontos gatilho", "Melhora da mobilidade", "Redução de tensões"],
        duration: "30-50 minutos",
        indication: "Indicado para dores musculares, pontos gatilho, tensão crônica e limitações de movimento"
      }
    ]
  },
  {
    id: "procedimentos",
    name: "Procedimentos Injetáveis",
    icon: Stethoscope,
    color: "bg-primary/10 text-primary",
    description: "Procedimentos minimamente invasivos realizados por fisioterapeuta habilitado",
    services: [
      {
        name: "Toxina Botulínica",
        description: "Aplicação de toxina botulínica tipo A para tratamento de rugas dinâmicas e linhas de expressão. O fisioterapeuta realiza avaliação funcional e aplica técnica com foco em resultados naturais.",
        benefits: ["Suavização de rugas", "Prevenção de novas linhas", "Resultado natural", "Procedimento rápido"],
        duration: "30-45 minutos",
        indication: "Indicado para rugas na testa, glabela, pés de galinha e hiperidrose"
      },
/*      {
        name: "Preenchimento com Ácido Hialurônico",
        description: "Procedimento de bioestimulação e volumização facial com ácido hialurônico. Restaura volume perdido, hidrata profundamente e melhora o contorno facial de forma natural.",
        benefits: ["Restauração de volume", "Hidratação profunda", "Harmonização facial", "Resultado imediato"],
        duration: "45-60 minutos",
        indication: "Indicado para sulcos, olheiras, lábios e contorno facial"
      },*/
      {
        name: "Intradermoterapia / Mesoterapia",
        description: "Técnica de microinjeções intradérmicas com substâncias ativas para tratamento localizado. Utilizado para gordura localizada, celulite, queda capilar e rejuvenescimento.",
        benefits: ["Ação localizada", "Alta concentração de ativos", "Resultados efetivos", "Tratamento direcionado"],
        duration: "30-45 minutos",
        indication: "Indicado para gordura localizada, celulite, flacidez e queda capilar"
      }
    ]
  }
]

export function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("reabilitacao")
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary-foreground bg-secondary/50 px-4 py-2 rounded-full">
            Tratamentos Especializados
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Catálogo de Serviços de Fisioterapia Dermatofuncional
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Todos os tratamentos são realizados por fisioterapeuta especialista, com avaliação 
            individualizada e protocolos baseados em evidências científicas. Conheça os 
            procedimentos disponíveis e suas indicações.
          </p>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    <category.icon size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif font-semibold text-lg text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full hidden sm:block">
                    {category.services.length} procedimentos
                  </span>
                  {expandedCategory === category.id ? (
                    <ChevronUp size={24} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={24} className="text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Category Services */}
              {expandedCategory === category.id && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service) => (
                      <div 
                        key={service.name}
                        className="bg-background rounded-xl border border-border p-5 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-foreground">{service.name}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap ml-2">
                            {service.duration}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {service.description}
                        </p>

                        <p className="text-xs text-primary/80 italic mb-3">
                          {service.indication}
                        </p>

                        <button
                          onClick={() => setExpandedService(expandedService === service.name ? null : service.name)}
                          className="text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          {expandedService === service.name ? "Ver menos" : "Ver benefícios"}
                          {expandedService === service.name ? (
                            <ChevronUp size={14} />
                          ) : (
                            <ChevronDown size={14} />
                          )}
                        </button>

                        {expandedService === service.name && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-xs font-medium text-foreground mb-2">Benefícios do tratamento:</p>
                            <ul className="grid grid-cols-2 gap-2">
                              {service.benefits.map((benefit) => (
                                <li key={benefit} className="text-xs text-muted-foreground flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nota Profissional */}
        <div className="mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Nota importante:</strong> Todos os procedimentos são realizados mediante avaliação 
            fisioterapêutica prévia, onde são analisadas as indicações, contraindicações e expectativas do paciente. 
            Os protocolos de tratamento são individualizados e podem variar conforme a necessidade de cada caso. 
            A quantidade de sessões é definida após avaliação.
          </p>
        </div>
      </div>
    </section>
  )
}
