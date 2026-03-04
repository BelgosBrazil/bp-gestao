import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail } from 'lucide-react';
import bpLogo from '@/assets/bp-logo-footer.svg';

const footerLinks = {
  curso: {
    title: 'O curso',
    links: [
      { label: 'Sobre o curso', href: '#sobre' },
      { label: 'O que você vai aprender', href: '#competencias' },
      { label: 'Inscreva-se', href: 'https://bpeducacao.lyceum.com.br/processo-seletivo/r/inscricao' },
    ],
  },
  educacao: {
    title: 'Faculdade BP',
    links: [
      { label: 'Página do curso', href: 'https://educacaoepesquisa.bp.org.br/cursos/gestao-de-qualidade-e-seguranca-do-paciente/' },
      { label: 'Outros cursos', href: 'https://educacaoepesquisa.bp.org.br/' },
      { label: 'Sobre a BP', href: 'https://www.bp.org.br/' },
    ],
  },
  suporte: {
    title: 'Contato',
    links: [
      { label: 'Fale conosco', href: '#contato' },
      { label: 'educacao@bp.org.br', href: 'mailto:educacao@bp.org.br' },
      { label: '(11) 3505-4980', href: 'tel:+551135054980' },
    ],
  },
};

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/faculdadebp', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/faculdadebp/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/showcase/bp-educa-o-e-pesquisa/', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@faculdadebp', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Contact */}
          <div className="lg:col-span-2">
            <img 
              src={bpLogo} 
              alt="BP - Pós-Graduação" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Pós-Graduação em Gestão da Qualidade e Segurança do Paciente. Especialize-se como líder 
              para a excelência em saúde com quem é referência em gestão e qualidade.
            </p>
            <div className="space-y-3">
              <a 
                href="tel:+551135054980" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 3505-4980
              </a>
              <a 
                href="mailto:educacao@bp.org.br" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                educacao@bp.org.br
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-primary-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80 text-sm">Nos acompanhe:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-primary-foreground" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm text-center md:text-right">
              © 2026 BP - A Beneficência Portuguesa de São Paulo. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
