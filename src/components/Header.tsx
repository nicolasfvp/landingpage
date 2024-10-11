"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex flex-col relative z-20">
      <div className="flex justify-between items-center py-4 px-6 text-white bg-transparent">
        <div className="flex items-center">
          <Image
            src="/imgs/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="mr-3"
          />
          <span className="font-michroma text-2xl">undefined</span>
        </div>

        <nav className="hidden md:flex space-x-[6vw] flex-grow justify-end">
          <div className="relative">
            <a href="#" className="font-michroma">Home</a>
            <div className="absolute left-0 right-0 h-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-800" />
          </div>
          <a href="#" className="font-michroma">O que fazemos</a>
          <a href="#" className="font-michroma">Cases</a>
          <a href="#" className="font-michroma">Talentos</a>
        </nav>

        {/* Botão de menu para mobile */}
        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-transparent"
          aria-label="Menu"
        >
          <GiHamburgerMenu size={24} />
        </Button>
      </div>

      {/* Menu lateral mobile */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-gradient-to-r from-gradientEnd to-gradientStart z-50 p-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="font-michroma text-white">Home</a>
            <a href="#" className="font-michroma text-white">O que fazemos</a>
            <a href="#" className="font-michroma text-white">Cases</a>
            <a href="#" className="font-michroma text-white">Talentos</a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mt-auto flex items-center text-white"
              aria-label="Fechar menu"
            >
              <FaArrowLeft />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
