import { Calendar, CreditCard, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary" id="inscricao">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Transforme Sua Carreira em Liderança e Gestão em Saúde
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Torne-se um líder estratégico em gestão da qualidade e segurança do paciente. 
            Inscreva-se agora na Pós-Graduação em Gestão da Qualidade e Segurança do Paciente da BP.
          </p>

          {/* Investment Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-bold text-primary-foreground mb-1">Período</h4>
              <p className="text-primary-foreground/80">02/03/2026 a 24/03/2027</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <CreditCard className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-bold text-primary-foreground mb-1">Investimento</h4>
              <p className="text-primary-foreground/80">18x de R$ 877,77</p>
              <p className="text-primary-foreground/60 text-sm">ou R$ 15.800 à vista</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <h4 className="font-bold text-primary-foreground mb-1">Carga Horária</h4>
              <p className="text-primary-foreground/80">360 horas - EAD</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://bpeducacao.lyceum.com.br/processo-seletivo/r/inscricao" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-primary animate-pulse-cta"
            >
              Inscreva-se!
            </a>
            <a 
              href="#contato" 
              className="btn-cta-secondary"
            >
              Fale com Nosso Time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
