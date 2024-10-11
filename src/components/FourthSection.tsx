import React from 'react';

const FourthSection = () => {
  return (
    <div className="relative min-h-screen pb-[10vh] bg-cover bg-center md:bg-[url('/imgs/img4.png')] bg-[url('/imgs/imgMobile4.png')]">
      {/* Título centralizado */}
      <div className="flex justify-center items-center pt-16">
        <h2 className="text-2xl md:text-3xl font-michroma text-white text-center">
          Dê o próximo passo em direção aos seus objetivos!
        </h2>
      </div>

      {/* Subtítulo centralizado */}
      <div className="flex justify-center items-center pt-4">
        <p className="text-md md:text-lg font-poppins text-white text-center max-w-lg">
          Preencha o formulário e embarque em uma jornada de crescimento e aprendizado com nossa mentoria especializada.
        </p>
      </div>

      {/* Formulário e imagem juntos */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center md:items-center md:w-full">
        <div className="flex flex-col md:flex-row items-center p-8 rounded-lg w-full md:h-[70vh]">
          {/* Imagem no mobile acima e no desktop à esquerda */}
          <div className="flex justify-center w-full md:w-1/2 h-full">
            <img src="/imgs/imgForm.png" alt="Formulário" className="w-full h-full object-cover" />
          </div>

          {/* Formulário */}
          <div className="w-full md:w-1/2 h-full bg-[#010A20] flex items-center justify-center">
            <form className="flex flex-col items-center space-y-8 py-8 md:px-8 w-full">
              {/* Campo Nome */}
              <input
                type="text"
                placeholder="Nome"
                className="w-5/6 md:w-2/3 mx-4 mt-4 p-3 bg-white text-[#202020] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-5/6 md:w-2/3 m-4 p-3 bg-white text-[#202020] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Campo Telefone */}
              <input
                type="tel"
                placeholder="Telefone"
                className="w-5/6 md:w-2/3 m-4 p-3 bg-white text-[#202020] rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              {/* Botão Enviar */}
              <button
                type="submit"
                className="w-5/6 md:w-2/3 p-3 text-white rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 hover:from-purple-600 hover:via-purple-400 hover:to-purple-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
