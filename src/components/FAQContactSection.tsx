import { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual é a duração do curso?',
    answer: 'O curso tem duração de 12 meses (02/03/2026 a 24/03/2027), com carga horária total de 360 horas na modalidade EAD.',
  },
  {
    question: 'Qual é o investimento?',
    answer: 'O investimento é de 18 parcelas de R$ 877,77 no cartão de crédito, ou R$ 15.800,00 à vista.',
  },
  {
    question: 'Quem pode fazer este curso?',
    answer: 'O curso é indicado para médicos, enfermeiros, engenheiros, gestores da saúde, pesquisadores e profissionais interessados em cargos estratégicos, liderança e gestão da qualidade.',
  },
  {
    question: 'O curso é reconhecido pelo MEC?',
    answer: 'Sim! O curso é oferecido pela BP Educação e Pesquisa (Faculdade BP – Beneficência Portuguesa de São Paulo), reconhecida pelo MEC. Você receberá um diploma de especialista valorizado no mercado.',
  },
  {
    question: 'Como são as aulas?',
    answer: 'O curso é 100% online (EAD), permitindo que você estude no seu próprio ritmo e concilie com sua rotina de trabalho. As aulas são ministradas por professores que atuam diretamente em gestão da qualidade e segurança do paciente na BP.',
  },
  {
    question: 'Quais competências vou desenvolver?',
    answer: 'Ao final do curso, você estará apto a identificar problemas, implementar melhorias nos processos, analisar e aprimorar a segurança do paciente, além de desenvolver e aplicar projetos de melhoria e oferecer consultoria em gestão da qualidade em organizações de saúde.',
  },
];

const FAQContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* FAQ Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dúvidas Frequentes
            </h3>
            <p className="text-muted-foreground mb-8">
              Confira as respostas para as perguntas mais comuns sobre a Pós-Graduação em 
              Gestão da Qualidade e Segurança do Paciente. Se não encontrar o que procura, entre em contato conosco.
            </p>

            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background-alt rounded-lg border border-border px-4"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Form Column */}
          <div className="bg-background-alt rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Entre em Contato
            </h3>
            
            <div className="flex flex-col gap-3 mb-6 text-muted-foreground">
              <a 
                href="mailto:educacao@bp.org.br" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                educacao@bp.org.br
              </a>
              <a 
                href="tel:+551135054980" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 3505-4980
              </a>
              <a 
                href="https://wa.me/5511996528861" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99652-8861 (WhatsApp)
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-styled"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-styled"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-styled"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-styled resize-none"
                  placeholder="Conte-nos um pouco sobre você e seus objetivos..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground rounded-full py-6 text-base font-semibold transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Minha Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQContactSection;
