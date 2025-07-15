import React from 'react';
import Image from 'next/image';
import nathan from '../assets/NathanProfile.png';

const HeroSection = () => {
  return (
    <section className="bg-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row items-end justify-center px-4">
        <div className="md:w-1/2 flex justify-center">
          <Image 
            src={nathan} 
            alt="Dr. Nathan Dantas"
            width={530}
            height={530}
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left md:pl-12 py-16 md:py-24">
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
      </div>
    </section>
  );
};

export default HeroSection;