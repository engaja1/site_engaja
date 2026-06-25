import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import logoHeader from "@/assets/logo-header.webp";

const WHATSAPP_URL = "https://wa.me/5511978153276";

const solutions = [
  { name: "Consultoria Empresarial", href: "/consultoria" },
  { name: "Consultoria de RH", href: "/consultoria" },
  { name: "Consultoria Comercial", href: "/consultoria" },
  { name: "Consultoria Sistêmica", href: "/consultoria" },
  { name: "Consultoria Varejo", href: "/consultoria" },
  { name: "Inteligência Artificial & Dados", href: "/consultoria" },
];

const treinamentos = [
  { name: "Liderança", href: "/treinamento" },
  { name: "Comercial & Vendas", href: "/treinamento" },
  { name: "Imersões Comportamentais", href: "/treinamento" },
  { name: "Capacitação Operacional", href: "/treinamento" },
  { name: "Atendimento & CS", href: "/treinamento" },
  { name: "Treinamento Sob Medida", href: "/treinamento" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Consultoria", href: "/consultoria" },
  { name: "Treinamento", href: "/treinamento" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <Link to="/" className="block">
              <img 
                src={logoHeader} 
                alt="Engaja - Soluções Corporativas" 
                className="h-16 sm:h-20 w-auto brightness-0 invert"
              />
            </Link>
            <div className="flex gap-3 sm:gap-4">
              <a href="https://www.linkedin.com/in/engaja-solu%C3%A7%C3%B5es-corporativas-388138341/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="https://www.instagram.com/engajasolucoescorporativas/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Consultoria */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Consultoria</h3>
            <ul className="space-y-2 sm:space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treinamento */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Treinamento</h3>
            <ul className="space-y-2 sm:space-y-3">
              {treinamentos.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent flex-shrink-0 mt-0.5 sm:mt-1" />
                <span className="text-primary-foreground/80 text-sm sm:text-base">
                  R. Nazareno Thomé, 65 - Parque Colina da Mantiqueira<br />
                  São João da Boa Vista - SP, 13874-459
                </span>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  (11) 97815-3276
                </a>
              </li>
              <li>
                <a href="mailto:engaja.treinamento@gmail.com" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  engaja.treinamento@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/60">
          <p className="text-center md:text-left">© {new Date().getFullYear()} Engaja Soluções Corporativas. Todos os direitos reservados.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
            <Link to="/privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link>
            <Link to="/cookies" className="hover:text-accent transition-colors">Política de Cookies</Link>
            <Link to="/aviso-legal" className="hover:text-accent transition-colors">Aviso Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}