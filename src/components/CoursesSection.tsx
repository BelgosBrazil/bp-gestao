import { Target, TrendingUp, Shield, BarChart, Users, Lightbulb } from 'lucide-react';

const competencies = [
  {
    icon: Target,
    title: 'Identificação de Problemas',
    description: 'Desenvolva habilidades para identificar problemas e oportunidades de melhoria nos processos de saúde, utilizando metodologias estruturadas de análise.',
  },
  {
    icon: TrendingUp,
    title: 'Implementação de Melhorias',
    description: 'Aprenda a implementar melhorias nos processos de forma sistemática e eficaz, garantindo resultados sustentáveis e mensuráveis.',
  },
  {
    icon: Shield,
    title: 'Segurança do Paciente',
    description: 'Analise e aprimore a segurança do paciente, implementando protocolos e práticas que reduzam riscos e aumentem a qualidade do cuidado.',
  },
  {
    icon: BarChart,
    title: 'Gestão da Qualidade',
    description: 'Domine ferramentas e metodologias de gestão da qualidade aplicadas ao setor de saúde, com foco em resultados e excelência operacional.',
  },
  {
    icon: Users,
    title: 'Liderança Estratégica',
    description: 'Desenvolva competências de liderança para conduzir equipes multidisciplinares e promover transformações organizacionais.',
  },
  {
    icon: Lightbulb,
    title: 'Consultoria em Gestão',
    description: 'Adquira conhecimentos para desenvolver e aplicar projetos de melhoria e oferecer consultoria em gestão da qualidade em organizações de saúde.',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background-alt" id="competencias">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            O Que Você Vai{' '}
            <span className="section-title-underline text-secondary font-semibold">
              Aprender
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Competências essenciais que você desenvolverá ao longo da pós-graduação em Gestão da Qualidade e Segurança do Paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {competencies.map((item, index) => (
            <div 
              key={item.title}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
