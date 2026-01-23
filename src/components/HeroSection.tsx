import heroImage from '@/assets/hero-hospital.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Purple Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Pós-Graduação em Gestão da Qualidade e Segurança do Paciente
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Forme-se como líder para a excelência em saúde. Uma formação completa que integra gestão, qualidade, segurança do paciente e ESG, preparando você para atuar de forma estratégica e inovadora no setor de saúde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://bpeducacao.lyceum.com.br/processo-seletivo/r/inscricao" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-primary animate-pulse-cta"
            >
              Inscreva-se!
            </a>
            <a href="#sobre" className="btn-cta-secondary">
              Saiba Mais Sobre o Curso
            </a>
          </div>

          {/* Course Quick Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Modalidade:</span> Online (EAD)
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Duração:</span> 360 horas
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Início:</span> 02/03/2026
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
