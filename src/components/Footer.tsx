import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="animate-fade-in">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold text-gradient mb-4 hover:opacity-80 transition-opacity"
            >
              Mahesh Patgar
            </button>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Frontend Developer passionate about creating exceptional web experiences with modern technologies and best practices.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild className="hover-lift">
                <a href="https://github.com/maheshpatgar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover-lift">
                <a href="https://linkedin.com/in/maheshpatgar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="hover-lift">
                <a href="mailto:maheshpatgar488@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                <strong>Email:</strong><br />
                <a href="mailto:maheshpatgar488@gmail.com" className="hover:text-primary transition-colors">
                  maheshpatgar488@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong><br />
                <a href="tel:+919967949880" className="hover:text-primary transition-colors">
                  +91 9967949880
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Location:</strong><br />
                Mumbai, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Mahesh Patgar. Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>using</span>
              <Code2 className="h-4 w-4 text-primary" />
              <span>React.js & Tailwind CSS</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span>Made with modern web technologies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;