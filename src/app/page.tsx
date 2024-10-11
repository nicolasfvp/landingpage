"use client";

import './globals.css';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import FourthSection from '@/components/FourthSection';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
    <div className="relative min-h-screen bg-cover bg-center md:bg-[url('/imgs/img1.png')] bg-[url('/imgs/imgMobile1.png')]">
      <Header />
      <div className="md:hidden">
        <hr className="border-0 h-0.5 bg-gradient-to-r from-gradientStart to-gradientEnd" />
      </div>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-[16vh] text-center md:items-start md:text-left md:max-w-[50%] md:ml-0">
        <h1 className="text-4xl font-michroma mb-2">
          Descubra seu
          <br />
          potencial na
        </h1>
        <h1 className="text-4xl font-michroma bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text text-transparent">
          UNDEFINED
        </h1>
        
        <p className="mt-4 font-worksans text-xs md:text-lg">
          Desenvolva suas habilidades técnicas e transcenda seus limites na Undefined, a empresa que capacita jovens talentos para brilhar no mercado de programação e UX/UI Design.
        </p>

        <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row items-center">
        <a href="#" className="relative bg-transparent">
          <img src="/imgs/btn1.png" alt="Marque sua mentoria" className="rounded-lg cursor-pointer" />
        </a>
        <a href="#" className="relative">
          <img src="/imgs/btn2.png" alt="Ver cursos" className="rounded-lg cursor-pointer" />
        </a>
        </div>
      </main>

    </div>
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <FourthSection></FourthSection>
    <footer className="bg-[#010921]">
      {/* Imagem Linha 1 */}
      <img src="/imgs/linha1.png" alt="Linha 1" className="w-full" />

      {/* Conteúdo do footer */}
      <div className="flex flex-row items-center justify-between p-4">
        <div className="text-center">
          <h1 className="text-white font-michroma text-lg">UNDEFINED</h1>
          <p className="text-gray-400 text-xs">
            <span className="text-gray-400">&copy;</span> 2024 Todos direitos reservados
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-white font-michroma text-sm">Nos acompanhe</h2>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Imagem Linha 2 */}
      <img src="/imgs/linha2.png" alt="Linha 2" className="w-full" />
    </footer>
    </div>
  );
}
