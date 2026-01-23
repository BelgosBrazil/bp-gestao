import { Building2, Users, BrainCog, Award } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Instituição de Referência em Saúde',
    description: 'Aprenda com o respaldo da BP - Beneficência Portuguesa de São Paulo, uma das mais importantes instituições de saúde do Brasil, reconhecida pela excelência em gestão, qualidade e segurança do paciente.',
  },
  {
    icon: Users,
    title: 'Corpo Docente Especializado',
    description: 'Nossos professores são profissionais que atuam diretamente em gestão da qualidade e segurança do paciente na BP. Eles trazem para a sala de aula a experiência prática, os desafios reais e as soluções inovadoras do dia a dia.',
  },
  {
    icon: BrainCog,
    title: 'Visão Integrada de Gestão',
    description: 'Nossa abordagem integra gestão, qualidade, segurança do paciente e ESG, preparando você para atuar de forma estratégica e inovadora, com impacto direto nos resultados e na experiência dos pacientes.',
  },
  {
    icon: Award,
    title: 'Reconhecimento no Mercado',
    description: 'A pós-graduação da BP é reconhecida pelo MEC e valorizada no mercado de trabalho. Diferencie-se como líder estratégico em uma das áreas mais demandadas da gestão em saúde.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Por Que Escolher a{' '}
            <span className="text-secondary font-semibold">Pós-Graduação BP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-box animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
