import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bpLogo from '@/assets/bp-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre o Curso', href: '#sobre' },
    { label: 'O Que Você Aprende', href: '#competencias' },
    { label: 'Investimento', href: '#inscricao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="header-sticky">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={bpLogo} 
              alt="BP - Pós-Graduação" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+551135054980" 
              className="flex items-center gap-2 text-secondary font-semibold hover:text-secondary-hover transition-colors"
            >
              <Phone className="w-4 h-4" />
              (11) 3505-4980
            </a>
            <Button 
              variant="outline" 
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a 
                href="https://bpeducacao.lyceum.com.br/processo-seletivo/r/inscricao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscreva-se!
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:+551135054980" 
                className="flex items-center gap-2 text-secondary font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                (11) 3505-4980
              </a>
              <Button 
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary-dark mt-2"
                asChild
              >
                <a 
                  href="https://bpeducacao.lyceum.com.br/processo-seletivo/r/inscricao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscreva-se!
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
