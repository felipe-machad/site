import { Award, Heart, Users, Clock, GraduationCap, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Fisioterapeuta Especialista",
    description: "Formação em Fisioterapia com especialização em Dermatofuncional e registro ativo no CREFITO"
  },
  {
    icon: Heart,
    title: "Tratamento Personalizado",
    description: "Avaliação fisioterapêutica completa com protocolo individualizado baseado nas suas necessidades"
  },
  {
    icon: ShieldCheck,
    title: "Técnicas Baseadas em Evidências",
    description: "Procedimentos seguros e cientificamente comprovados para resultados efetivos e duradouros"
  },
  {
    icon: Users,
    title: "Atendimento Individual",
    description: "Sessões exclusivas com total privacidade para acompanhamento detalhado da sua evolução"
  },
  {
    icon: Award,
    title: "Equipamentos de Ponta",
    description: "Tecnologias modernas e recursos terapêuticos atualizados para os melhores resultados"
  },
  {
    icon: Clock,
    title: "Acompanhamento Contínuo",
    description: "Reavaliações periódicas para ajustar o tratamento e garantir sua evolução"
  }
]

export function About() {
  return (
    <section id="sobre" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary-foreground bg-secondary/50 px-4 py-2 rounded-full">
            Fisioterapia Dermatofuncional
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            A Fisioterapia a Serviço da Sua Saúde e Beleza
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Fisioterapia Dermatofuncional é uma especialidade que atua na prevenção, 
            promoção e recuperação da saúde da pele e do corpo. Através de técnicas 
            fisioterapêuticas específicas, tratamos disfunções estéticas e funcionais, 
            promovendo bem-estar e autoestima com embasamento científico e segurança.
          </p>
        </div>

        {/* O que é Fisioterapia Dermatofuncional */}
        <div className="bg-background rounded-2xl border border-border p-8 mb-12">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
            O que é Fisioterapia Dermatofuncional?
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <p>
              É a área da Fisioterapia especializada no tratamento de alterações 
              dermatológicas e estéticas. O fisioterapeuta dermatofuncional utiliza 
              recursos manuais, eletroterapia, termoterapia e outras técnicas para 
              tratar condições como flacidez, celulite, gordura localizada, cicatrizes, 
              estrias e recuperação pós-cirúrgica.
            </p>
            <p>
              Diferente de procedimentos puramente estéticos, a fisioterapia dermatofuncional 
              considera a saúde integral do paciente, avaliando causas funcionais e propondo 
              tratamentos que vão além da aparência, promovendo saúde tecidual e qualidade 
              de vida de forma segura e eficaz.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
