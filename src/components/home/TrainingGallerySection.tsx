import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Training images
import training01 from "@/assets/training/training-01.webp";
import training02 from "@/assets/training/training-02.webp";
import training03 from "@/assets/training/training-03.webp";
import training04 from "@/assets/training/training-04.webp";
import training05 from "@/assets/training/training-05.webp";
import training06 from "@/assets/training/training-06.webp";
import training07 from "@/assets/training/training-07.webp";
import training08 from "@/assets/training/training-08.webp";
import training13 from "@/assets/training/training-13.webp";
import training14 from "@/assets/training/training-14.webp";
import training16 from "@/assets/training/training-16.webp";
import training18 from "@/assets/training/training-18.webp";
import training19 from "@/assets/training/training-19.webp";
import training21 from "@/assets/training/training-21.webp";
import training22 from "@/assets/training/training-22.webp";
import training23 from "@/assets/training/training-23.webp";
import training24 from "@/assets/training/training-24.webp";
import training25 from "@/assets/training/training-25.webp";

const trainingImages = [
  { src: training01, alt: "Treinamento corporativo 1" },
  { src: training02, alt: "Treinamento corporativo 2" },
  { src: training03, alt: "Treinamento corporativo 3" },
  { src: training04, alt: "Treinamento corporativo 4" },
  { src: training05, alt: "Treinamento corporativo 5" },
  { src: training06, alt: "Treinamento corporativo 6" },
  { src: training07, alt: "Treinamento corporativo 7" },
  { src: training08, alt: "Treinamento corporativo 8" },
  { src: training13, alt: "Treinamento corporativo 13" },
  { src: training14, alt: "Treinamento corporativo 14" },
  { src: training16, alt: "Treinamento corporativo 16" },
  { src: training18, alt: "Treinamento corporativo 18" },
  { src: training19, alt: "Treinamento corporativo 19" },
  { src: training21, alt: "Treinamento corporativo 21" },
  { src: training22, alt: "Treinamento corporativo 22" },
  { src: training23, alt: "Treinamento corporativo 23" },
  { src: training24, alt: "Treinamento corporativo 24" },
  { src: training25, alt: "Treinamento corporativo 25" },
];

export const TrainingGallerySection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: true })
  );

  return (
    <section className="py-10 sm:py-14 lg:py-18 bg-muted/30 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-up">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Treinamentos em Ação
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground">
            Nossa atuação na{" "}
            <span className="text-primary">prática</span>
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
            Registros reais das imersões e programas de treinamento desenhados sob medida para a realidade e cultura de cada cliente em todo o Brasil.
          </p>
        </div>

        <div className="relative px-2 sm:px-4 md:px-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {trainingImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[3/4] bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-background border-border hover:bg-muted" />
            <CarouselNext className="hidden md:flex -right-4 bg-background border-border hover:bg-muted" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
