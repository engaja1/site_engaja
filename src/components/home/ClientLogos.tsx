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
      compact ? "py-2 bg-transparent border-none" : "py-10 sm:py-14 md:py-16 bg-muted/30 border-y border-border/50"
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
            "--gap": compact ? "1.5rem" : "3rem",
            "--duration": "60s",
          } as React.CSSProperties
        }
      >
        {/* First copy of logos */}
        <div className={cn(
          "flex shrink-0 animate-[marquee_var(--duration)_linear_infinite] group-hover:[animation-play-state:paused]",
          compact ? "gap-[var(--gap)] items-center" : "gap-[var(--gap)] sm:gap-12 md:gap-16 items-center"
        )}>
          {clients.map((client) => (
            <div
              key={client.name}
              className={cn(
                "flex items-center justify-center transition-transform duration-300 hover:scale-105",
                compact ? "w-24 h-12 sm:w-28 sm:h-14" : large ? "w-52 h-28 sm:w-64 sm:h-36 md:w-72 md:h-40" : "w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32"
              )}
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className={cn(
                  "object-contain transition-all duration-300",
                  compact ? "max-h-10 max-w-24 sm:max-h-12 sm:max-w-28" : large ? "max-h-24 max-w-48 sm:max-h-32 sm:max-w-60 md:max-h-36 md:max-w-68" : "max-h-20 max-w-40 sm:max-h-24 sm:max-w-48 md:max-h-28 md:max-w-56"
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
            compact ? "gap-[var(--gap)] items-center" : "gap-[var(--gap)] sm:gap-12 md:gap-16 items-center"
          )}
          aria-hidden="true"
        >
          {clients.map((client) => (
            <div
              key={`${client.name}-copy`}
              className={cn(
                "flex items-center justify-center transition-transform duration-300 hover:scale-105",
                compact ? "w-24 h-12 sm:w-28 sm:h-14" : large ? "w-52 h-28 sm:w-64 sm:h-36 md:w-72 md:h-40" : "w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32"
              )}
            >
              <img
                src={client.logo}
                alt=""
                className={cn(
                  "object-contain transition-all duration-300",
                  compact ? "max-h-10 max-w-24 sm:max-h-12 sm:max-w-28" : large ? "max-h-24 max-w-48 sm:max-h-32 sm:max-w-60 md:max-h-36 md:max-w-68" : "max-h-20 max-w-40 sm:max-h-24 sm:max-w-48 md:max-h-28 md:max-w-56"
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