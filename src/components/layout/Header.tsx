import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoHeader from "@/assets/logo-header-blue.png";

const WHATSAPP_URL = "https://wa.me/5519998051046";

const navigation = [
  { name: "Consultoria", href: "/consultoria" },
  { name: "Treinamento", href: "/treinamento" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav className="bg-background border-b border-border shadow-sm">
        <div className="container flex lg:grid lg:grid-cols-3 items-center justify-between h-20 lg:h-24">
          {/* Logo (Left) */}
          <div className="flex justify-start">
            <Link to="/" className="flex items-center">
              <img 
                src={logoHeader} 
                alt="Engaja - Soluções Corporativas" 
                className="h-14 sm:h-16 lg:h-18 xl:h-20 w-auto transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-5 py-2 rounded-lg text-base font-semibold transition-all duration-200 tracking-wide",
                  location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/75 hover:bg-muted hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side (CTA on Desktop, Hamburger on Mobile) */}
          <div className="flex justify-end items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-glow font-semibold text-base px-6 h-11">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Fale Conosco</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors text-center",
                    location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
