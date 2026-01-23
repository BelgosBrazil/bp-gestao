import { Clock, GraduationCap, Target, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    label: '360 horas',
    description: 'Carga horária completa',
  },
  {
    icon: GraduationCap,
    label: '100% Online',
    description: 'Modalidade EAD',
  },
  {
    icon: Target,
    label: 'Foco em Liderança',
    description: 'Gestão estratégica',
  },
  {
    icon: Award,
    label: 'Excelência em Saúde',
    description: 'BP Educação',
  },
];

const IntroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background" id="sobre">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
            Forme-se como Líder para a{' '}
            <span className="text-secondary font-semibold">Excelência em Saúde</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A Pós-Graduação em Gestão da Qualidade e Segurança do Paciente, oferecida pela BP Educação e Pesquisa, 
              é um curso EAD com 360 horas, voltado à formação de líderes para a excelência em saúde. O programa integra 
              conceitos de gestão, qualidade, segurança do paciente e ESG, preparando profissionais para atuar de forma 
              estratégica e inovadora no setor de saúde.
            </p>

            <p>
              O curso prepara o profissional para identificar problemas, implementar melhorias nos processos, analisar e 
              aprimorar a segurança do paciente, além de desenvolver e aplicar projetos de melhoria e oferecer consultoria 
              em gestão da qualidade em organizações de saúde.
            </p>

            <p>
              Ao final do curso, o aluno estará apto a atuar de forma estratégica e inovadora no setor de saúde, com 
              competências para liderar equipes multidisciplinares, implementar melhorias contínuas e impactar diretamente 
              nos resultados e na experiência dos pacientes.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {features.map((feature) => (
              <div key={feature.label} className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground">{feature.label}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-border">
            <p className="text-xl text-primary font-medium mb-4">
              Indicado para médicos, enfermeiros, engenheiros, gestores da saúde, pesquisadores e profissionais 
              interessados em cargos estratégicos, liderança e gestão da qualidade.
            </p>
            <a 
              href="https://educacaoepesquisa.bp.org.br/cursos/gestao-de-qualidade-e-seguranca-do-paciente/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary-hover font-semibold underline transition-colors"
            >
              Ver página completa do curso no site da BP →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
