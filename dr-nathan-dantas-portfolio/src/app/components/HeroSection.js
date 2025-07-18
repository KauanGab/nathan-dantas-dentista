import React from 'react';
import Image from 'next/image';
import nathan from '../assets/NathanProfile.png';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row items-end justify-center px-4">
        <div className="hidden md:flex md:w-1/2 justify-center">
          <Image 
            src={nathan} 
            alt="Dr. Nathan Dantas"
            width={530}
            height={530}
          />
        </div>

        <div className="hidden md:block md:w-1/2 text-center md:text-left md:pl-12 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">Dr. Nathan Dantas</h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">Cirurgião-dentista</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Transformando sorrisos para uma melhor qualidade de vida! 
            Nosso compromisso é oferecer um atendimento humanizado e de excelência, 
            utilizando as mais modernas técnicas e tecnologias para cuidar da sua saúde bucal.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Agendar Consulta
          </button>
        </div>

        <div className="md:hidden w-full relative overflow-hidden bg-blue-50 mx-4 my-4 rounded-3xl h-96">
          <div className="absolute inset-0 flex items-end justify-end pr-2">
            <Image 
              src={nathan} 
              alt="Dr. Nathan Dantas"
              width={350}
              height={420}
              className="object-cover object-top"
            />
          </div>

          <div className="relative z-10 h-full p-3 flex flex-col justify-end">
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold text-blue-600 mb-1 leading-tight">Dr. Nathan Dantas</h3>
              
              <div className="mb-3">
                <h4 className="text-lg font-semibold text-gray-800 leading-tight">Cirurgião-dentista</h4>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs mb-2">
                Experiência e precisão em cada procedimento, 
                assegurando qualidade e conforto para você.
              </p>
              
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg w-fit">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;