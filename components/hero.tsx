"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const slides = [
  {
    image: "/images/tratamento-facial.jpg",
    title: "Tratamentos Faciais",
    subtitle: "Limpeza de Pele, Peeling, Microagulhamento",
    description: "Renove sua pele com tratamentos personalizados que devolvem a vitalidade e luminosidade do seu rosto.",
  },
  {
    image: "/images/massagem-relaxante.jpg",
    title: "Massagens Terapêuticas",
    subtitle: "Relaxante, Modeladora, Pedras Quentes",
    description: "Momentos de relaxamento profundo que aliviam tensões e proporcionam bem-estar completo.",
  },
  {
    image: "/images/tratamento-corporal.jpg",
    title: "Estética Corporal",
    subtitle: "Radiofrequência, Criolipólise, Endermologia",
    description: "Tecnologias avançadas para modelagem corporal, redução de medidas e firmeza da pele.",
  },
  {
    image: "/images/drenagem-linfatica.jpg",
    title: "Drenagem Linfática",
    subtitle: "Manual e Pós-operatório",
    description: "Elimine toxinas, reduza inchaços e acelere sua recuperação com técnicas especializadas.",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Sparkles size={14} className="animate-pulse" />
                Juliana Alves - CREFITO 280091-F
              </span>
            </div>

            {/* Title */}
            <h1 
              className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 transition-all duration-500 delay-100 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-balance">{slides[currentSlide].title}</span>
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-secondary text-lg sm:text-xl font-medium mb-4 transition-all duration-500 delay-150 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* Description */}
            <p 
              className={`text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg transition-all duration-500 delay-200 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-300 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <Link 
                href="https://api.whatsapp.com/send/?phone=555191264309&text=Olá, vim do site e gostaria de saber mais sobre seus serviços."
                target="_blank"
                className="group bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 flex items-center justify-center gap-3"
              >
                <Calendar size={20} />
                Agendar Consulta
              </Link>
              <Link 
                href="#servicos"
                className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center justify-center"
              >
                Conhecer Serviços
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-20">
        <button
          onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label="Slide anterior"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-20">
        <button
          onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
          aria-label="Próximo slide"
        >
          <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => { goToSlide(index); setIsAutoPlaying(false); }}
            className={`group relative transition-all duration-300 ${
              index === currentSlide ? "w-20" : "w-3 hover:w-6"
            }`}
            aria-label={`Ir para ${slide.title}`}
          >
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-secondary" 
                  : "bg-white/40 group-hover:bg-white/60"
              }`}
            />
            {index === currentSlide && (
              <div 
                className="absolute inset-0 h-3 rounded-full bg-secondary/50 animate-pulse"
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="bg-gradient-to-t from-foreground/80 to-transparent pt-16 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Atendimento Individual</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-secondary" />
                <span>Hora Marcada</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/30" />
              <div className="flex items-center gap-2">
                <span>Cachoeirinha Center - Sala 1085</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
