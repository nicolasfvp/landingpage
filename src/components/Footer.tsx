import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
    <footer className="bg-[#010921]">
            <img src="/imgs/linha1.png" alt="Linha 1" className="w-full" />

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

            <img src="/imgs/linha2.png" alt="Linha 2" className="w-full" />
      
    </footer>
    );
};

export default Footer;