export function WhatsAppButton() {
  const phoneNumber = "5519998051046";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Engaja.");

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-2 group">
      {/* Online indicator / Tooltip badge */}
      <span className="bg-foreground text-background text-xs px-3 py-1.5 rounded-full font-medium shadow-lg animate-fade-in flex items-center gap-2 transition-transform duration-200 group-hover:scale-105 select-none pointer-events-none">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        Fale conosco no WhatsApp
      </span>
      
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Real WhatsApp vector icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M12.01 2.01c-5.52 0-9.99 4.47-9.99 9.99 0 1.76.46 3.48 1.33 4.99L2 22l5.16-1.32c1.47.8 3.12 1.22 4.85 1.22 5.52 0 9.99-4.47 9.99-9.99s-4.47-9.9-9.99-9.9zm5.83 14.16c-.24.68-1.4 1.3-1.95 1.37-.52.07-1.19.1-3.48-.84-2.73-1.13-4.48-3.9-4.62-4.08-.13-.18-1.11-1.47-1.11-2.81 0-1.34.7-2 1-2.27.24-.22.53-.33.85-.33.1 0 .2 0 .29.01.27.01.4.03.58.46.22.53.76 1.86.83 2 .07.14.12.31.02.5-.09.2-.15.31-.29.48-.15.17-.3.3-.44.49-.15.17-.32.35-.14.66.19.32.83 1.36 1.78 2.21 1.23 1.09 2.26 1.43 2.58 1.59.32.16.51.14.7-.08.19-.22.81-.95 1.03-1.27.22-.32.44-.27.73-.16.3.11 1.88.89 2.2 1.05.32.16.53.24.61.38.08.13.08.79-.16 1.47z" />
        </svg>
        
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      </a>
    </div>
  );
}
