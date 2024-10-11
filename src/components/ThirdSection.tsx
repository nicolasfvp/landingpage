"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"; // Verifique o caminho correto
import Image from "next/image";

export default function ThirdSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(6); // 6 elementos no carrossel

  useEffect(() => {
    // Função para verificar se o tamanho da tela é mobile ou desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!api) return;

    setTotalSlides(api.scrollSnapList().length);

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative min-h-screen bg-cover bg-center md:bg-[url('/imgs/img3.png')] bg-[url('/imgs/imgMobile3.png')]">
      {/* Título centralizado */}
      <div className="flex flex-col justify-center items-center pt-16">
        <h1 className="text-4xl font-michroma text-white text-center">
          Descubra Nossas Aventuras Criativas!
        </h1>
        <p className="text-lg font-ligconsolata text-white text-center mt-4 px-4 md:px-0 max-w-2xl">
          A curiosidade nos inspira, a inovação nos guia. Explore e conheça nossos principais projetos - onde cada empreendimento conta uma história de sucesso.
        </p>
      </div>


      {isMobile ? (
        <div className="mt-8 relative flex flex-col justify-center">
          {/* Carrossel para mobile */}
          <Carousel setApi={setApi} className="w-full max-w-[vw]">
            <CarouselContent className="flex">
              {/* 6 elementos do carrossel */}
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className="carousel-item">
                  <img src="/imgs/frame1.png" alt={`Frame ${index + 1}`} className="mx-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Bolinhas indicadoras de navegação do carrossel */}
          <div className="flex justify-center items-center mt-4 space-x-2 z-20 relative pb-[10vh]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="relative flex items-center">
                <div
                className={`w-4 h-4 rounded-full ml-4 ${currentIndex === index ? "bg-white" : "bg-transparent border-2 border-white"}`}
                ></div>

                {(currentIndex + 1 === index && currentIndex !== 5) && (
                <div
                    className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 h-[2px] bg-white animate-slide-in"
                    style={{ width: "0px" }}
                ></div>
                )}
            </div>
            ))}
            <style jsx>{`
            @keyframes slideIn {
                from {
                width: 0;
                }
                to {
                width: 12px;
                }
            }

            .animate-slide-in {
                animation: slideIn 0.5s ease-out forwards; 
            }
            `}</style>
            </div>
        </div>
      ) : (
        /* Grid para desktop */
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 md:pb-[10vh] px-[10vw]">
          {/* 6 cards dispostos em 3 colunas e 2 linhas */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src="/imgs/frame1.png"
                alt={`Frame ${index + 1}`}
                width={200} 
                height={200}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
