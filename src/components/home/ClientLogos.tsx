import { cn } from "@/lib/utils";
import logo01 from "@/assets/clients/logo-01.png";
import logo02 from "@/assets/clients/logo-02.png";
import logo03 from "@/assets/clients/logo-03.png";
import logo04 from "@/assets/clients/logo-04.png";
import logo05 from "@/assets/clients/logo-05.png";
import logo06 from "@/assets/clients/logo-06.png";
import logo07 from "@/assets/clients/logo-07.png";
import logo08 from "@/assets/clients/logo-08.png";
import logo09 from "@/assets/clients/logo-09.png";
import logo10 from "@/assets/clients/logo-10.png";
import logo11 from "@/assets/clients/logo-11.png";
import logo12 from "@/assets/clients/logo-12.png";
import logo13 from "@/assets/clients/logo-13.png";
import logo14 from "@/assets/clients/logo-14.png";
import logo15 from "@/assets/clients/logo-15.png";
import logo16 from "@/assets/clients/logo-16.png";
import logo17 from "@/assets/clients/logo-17.png";
import logo18 from "@/assets/clients/logo-18.png";
import logo19 from "@/assets/clients/logo-19.png";
import logo20 from "@/assets/clients/logo-20.png";
import logo21 from "@/assets/clients/logo-21.png";
import logo22 from "@/assets/clients/logo-22.png";
import logo23 from "@/assets/clients/logo-23.png";
import logo24 from "@/assets/clients/logo-24.png";
import logo25 from "@/assets/clients/logo-25.png";
import logo26 from "@/assets/clients/logo-26.png";
import logo27 from "@/assets/clients/logo-27.png";
import logo28 from "@/assets/clients/logo-28.png";
import logo29 from "@/assets/clients/logo-29.png";
import logo30 from "@/assets/clients/logo-30.png";
import logo31 from "@/assets/clients/logo-31.png";
import logo32 from "@/assets/clients/logo-32.png";
import logo33 from "@/assets/clients/logo-33.png";
import logo34 from "@/assets/clients/logo-34.png";
import logo35 from "@/assets/clients/logo-35.png";
import logo36 from "@/assets/clients/logo-36.png";

const clients = [
  { name: "Ibéria", logo: logo01 },
  { name: "Kometudo", logo: logo02 },
  { name: "Santa Izabel Bauer", logo: logo03 },
  { name: "Borelli Correa", logo: logo04 },
  { name: "Hering", logo: logo05 },
  { name: "Kibon", logo: logo06 },
  { name: "Distribom", logo: logo07 },
  { name: "Lez a Lez", logo: logo08 },
  { name: "Wogo", logo: logo09 },
  { name: "Grupo Alimentos", logo: logo10 },
  { name: "Profit", logo: logo11 },
  { name: "AC Distribuidora", logo: logo12 },
  { name: "Prata Libéria", logo: logo13 },
  { name: "Perfect Flight", logo: logo14 },
  { name: "Marca Fuzil", logo: logo15 },
  { name: "Dra. Cherie", logo: logo16 },
  { name: "Ordine", logo: logo17 },
  { name: "Café Pacaembu", logo: logo18 },
  { name: "Hope", logo: logo19 },
  { name: "Óticas Carol", logo: logo20 },
  { name: "Kopenhagen", logo: logo21 },
  { name: "Valmont", logo: logo22 },
  { name: "Arezzo", logo: logo23 },
  { name: "Kohler", logo: logo24 },
  { name: "Caruana", logo: logo25 },
  { name: "Grupo JCN", logo: logo26 },
  { name: "Espaço Laser", logo: logo27 },
  { name: "Loungerie", logo: logo28 },
  { name: "São João Calhas", logo: logo29 },
  { name: "Dengo", logo: logo30 },
  { name: "O Boticário", logo: logo31 },
  { name: "Massas Lott", logo: logo32 },
  { name: "Ebara", logo: logo33 },
  { name: "Unifeob", logo: logo34 },
  { name: "Santa Lolla", logo: logo35 },
  { name: "L'Occitane", logo: logo36 },
];

export function ClientLogos({ compact = false, large = false }: { compact?: boolean; large?: boolean }) {
  return (
    <section className={cn(
      "overflow-hidden",
      compact ? "py-2 bg-transparent border-none" : "py-8 sm:py-10 md:py-12 bg-muted/30 border-y border-border/50"
    )}>
      {!compact && (
        <div className="container mb-6 sm:mb-8">
          <p className="text-center text-xs sm:text-sm text-muted-foreground font-medium">
            Empresas que confiam na Engaja
          </p>
        </div>
      )}

      {/* Marquee Container */}
      <div
        className="group flex overflow-hidden"
        style={
          {
            "--gap": compact ? "1.5rem" : "2rem",
            "--duration": "60s",
          } as React.CSSProperties
        }
      >
        {/* First copy of logos */}
        <div className={cn(
          "flex shrink-0 animate-[marquee_var(--duration)_linear_infinite] group-hover:[animation-play-state:paused]",
          compact ? "gap-[var(--gap)]" : "gap-[var(--gap)] sm:gap-10 md:gap-12"
        )}>
          {clients.map((client) => (
            <div
              key={client.name}
              className={cn(
                "flex items-center justify-center",
                compact ? "w-20 h-10 sm:w-24 sm:h-12" : large ? "w-44 h-24 sm:w-56 sm:h-32 md:w-64 md:h-36" : "w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28"
              )}
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className={cn(
                  "object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100",
                  compact ? "max-h-8 max-w-20 sm:max-h-10 sm:max-w-24" : large ? "max-h-20 max-w-40 sm:max-h-28 sm:max-w-52 md:max-h-32 md:max-w-60" : "max-h-16 max-w-32 sm:max-h-20 sm:max-w-40 md:max-h-24 md:max-w-48"
                )}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Second copy for infinite loop */}
        <div
          className={cn(
            "flex shrink-0 animate-[marquee_var(--duration)_linear_infinite] group-hover:[animation-play-state:paused]",
            compact ? "gap-[var(--gap)]" : "gap-[var(--gap)] sm:gap-10 md:gap-12"
          )}
          aria-hidden="true"
        >
          {clients.map((client) => (
            <div
              key={`${client.name}-copy`}
              className={cn(
                "flex items-center justify-center",
                compact ? "w-20 h-10 sm:w-24 sm:h-12" : large ? "w-44 h-24 sm:w-56 sm:h-32 md:w-64 md:h-36" : "w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28"
              )}
            >
              <img
                src={client.logo}
                alt=""
                className={cn(
                  "object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100",
                  compact ? "max-h-8 max-w-20 sm:max-h-10 sm:max-w-24" : large ? "max-h-20 max-w-40 sm:max-h-28 sm:max-w-52 md:max-h-32 md:max-w-60" : "max-h-16 max-w-32 sm:max-h-20 sm:max-w-40 md:max-h-24 md:max-w-48"
                )}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}