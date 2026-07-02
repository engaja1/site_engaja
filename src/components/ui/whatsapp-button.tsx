import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "5519998051046";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Engaja.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Online indicator */}
      <span className="bg-foreground text-background text-xs px-3 py-1.5 rounded-full font-medium shadow-lg animate-fade-in flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Online agora • Resp. em 5min
      </span>
      
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" fill="white" />
        
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
    </div>
  );
}
