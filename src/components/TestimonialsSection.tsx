import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import testimonial1 from '@/assets/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonial-3.jpg';

const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: 'Dr. Carlos Mendes',
    specialty: 'Gestor de Qualidade - Hospital de Referência SP',
    text: 'A pós-graduação em Gestão da Qualidade e Segurança do Paciente da BP transformou minha carreira. Aprendi não apenas metodologias de gestão, mas principalmente como implementar melhorias que impactam diretamente na segurança e experiência dos pacientes. Hoje me sinto preparado para liderar projetos estratégicos de qualidade.',
    rating: 5,
  },
  {
    id: 2,
    image: testimonial2,
    name: 'Enf. Ana Paula Silva',
    specialty: 'Coordenadora de Qualidade e Segurança',
    text: 'O diferencial do curso é o corpo docente que atua diretamente em gestão da qualidade na BP. As aulas conectam teoria e prática de forma única. A formação me deu a segurança necessária para assumir a coordenação de qualidade e implementar melhorias contínuas nos processos.',
    rating: 5,
  },
  {
    id: 3,
    image: testimonial3,
    name: 'Eng. Roberto Alves',
    specialty: 'Consultor em Gestão da Qualidade em Saúde',
    text: 'A modalidade EAD foi perfeita para minha rotina de trabalho. Consegui conciliar os estudos com meu emprego, e a qualidade do ensino superou minhas expectativas. O curso me preparou para oferecer consultoria em gestão da qualidade em organizações de saúde.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Histórias de Quem Já{' '}
            <span className="section-title-underline text-secondary font-semibold">
              Se Formou
            </span>
          </h2>
        </div>

        {/* Desktop View - All cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.specialty}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Carousel */}
        <div className="lg:hidden">
          <div className="testimonial-card max-w-lg mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].specialty}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
