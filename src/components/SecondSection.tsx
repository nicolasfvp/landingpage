"use client";

import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from '@/components/ui/carousel'; // Verifique se o caminho está correto
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importa os ícones

export default function SecondSection() {
  const [api, setApi] = useState<CarouselApi | undefined>(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Para identificar o tamanho da tela

  useEffect(() => {
    if (!api) return;

    // Define o número total de slides
    setTotalSlides(api.scrollSnapList().length);

    // Atualiza o índice atual
    const updateCurrentIndex = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    updateCurrentIndex();

    // Ouve o evento "select" para atualizar o índice quando o slide mudar
    api.on("select", updateCurrentIndex);

    // Verifica o tamanho da tela (mobile ou desktop)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [api]);

  // Funções de navegação manual
  const goToNextSlide = () => api?.scrollNext();
  const goToPrevSlide = () => api?.scrollPrev();

  // Função para limitar as bolinhas a 3 na versão desktop
  const getVisibleDots = () => {
    if (totalSlides <= 3) {
      return Array.from({ length: totalSlides }).map((_, index) => index);
    }

    if (currentIndex === 0) {
      return [0, 1, 2];
    } else if (currentIndex === totalSlides - 1) {
      return [totalSlides - 3, totalSlides - 2, totalSlides - 1];
    } else {
      return [currentIndex - 1, currentIndex, currentIndex + 1];
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center md:bg-[url('/imgs/img2.png')] bg-[url('/imgs/imgMobile2.png')]">

      <div className="flex justify-center items-center pt-16">
        <h2 className="text-3xl font-michroma text-white text-center z-20 py-[5vh]">Nossos serviços</h2>
      </div>

      {/* Carrossel */}
      <div className="mt-8 relative">
        {/* Botões de navegação (esquerda e direita) - visíveis apenas na versão desktop */}
        <button
        onClick={goToPrevSlide}
        className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-transparent p-2 rounded-full"
        >
        <img src="/imgs/arrow.png" alt="Arrow Left" className="w-3 h-6" />
        </button>
        <button
        onClick={goToNextSlide}
        className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white bg-transparent p-2 rounded-full"
        >
        <img src="/imgs/arrow.png" alt="Arrow Right" className="w-3 h-6 transform rotate-180" />
        </button>

        <Carousel setApi={setApi} className="pl-[5vw] md:pt-[10vh]">
          <CarouselContent className="flex">
            <CarouselItem className="carousel-item md:basis-1/3">
              <img src="/imgs/card1.png" alt="Card 1" />
            </CarouselItem>
            <CarouselItem className="carousel-item md:basis-1/3">
              <img src="/imgs/card2.png" alt="Card 2" />
            </CarouselItem>
            <CarouselItem className="carousel-item md:basis-1/3">
              <img src="/imgs/card3.png" alt="Card 3" />
            </CarouselItem>
            <CarouselItem className="carousel-item md:basis-1/3">
              <img src="/imgs/card4.png" alt="Card 4" />
            </CarouselItem>
            <CarouselItem className="carousel-item md:basis-1/3">
              <img src="/imgs/card5.png" alt="Card 5" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2 z-20 relative">
        {/* Versão mobile: mostra todas as bolinhas */}
        {isMobile ? (
          Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="relative flex items-center">
            <div
                className={`w-4 h-4 rounded-full ml-4 ${currentIndex === index ? "bg-white" : "bg-transparent border-2 border-white"}`}
            ></div>

            {(currentIndex + 1 === index && currentIndex !== 4 )&& (
                <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 h-[2px] bg-white animate-slide-in"></div>
            )}
            </div>
        ))
        
        ) : (
          /* Versão desktop: limita a 3 bolinhas */
          getVisibleDots().map((index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full mb-[8vh] ${currentIndex === index ? 'bg-white' : 'bg-transparent border-2 border-white'}`}
            ></div>
          ))
        )}
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
  );
}
