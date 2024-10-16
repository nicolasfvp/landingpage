"use client";

import './globals.css';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import SecondSection from '@/components/SecondSection';
import ThirdSection from '@/components/ThirdSection';
import FourthSection from '@/components/FourthSection';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
    <div className="relative min-h-screen bg-cover bg-center md:bg-[url('/imgs/img1.png')] bg-[url('/imgs/imgMobile1.png')]">
      <main className="max-w-[1200px] m-auto">
        <Header />
        <div className="md:hidden">
          <hr className="border-0 h-0.5 bg-gradient-to-r from-gradientStart to-gradientEnd" />
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-[16vh] text-center md:items-start md:text-left md:max-w-[50%] md:ml-0">
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

          <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:space-x-2 md:flex-row items-center">
          <a href="#" className="relative bg-transparent">
            <img src="/imgs/btn1.png" alt="Marque sua mentoria" className="rounded-lg cursor-pointer" />
          </a>
          <a href="#" className="relative">
            <img src="/imgs/btn2.png" alt="Ver cursos" className="rounded-lg cursor-pointer" />
          </a>
          </div>
        </div>
      </main>
      

    </div>
    <SecondSection></SecondSection>
    <ThirdSection></ThirdSection>
    <FourthSection></FourthSection>
    <Footer></Footer>
    </div>
  );
}
