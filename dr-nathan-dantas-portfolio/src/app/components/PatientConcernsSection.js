import React from 'react';
import { FaHeartbeat, FaClock, FaShieldAlt, FaSmile } from 'react-icons/fa';

const PatientConcernsSection = () => {
  return (
    <section id="suas-preocupacoes" className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-custom-blue mb-4">Suas Preocupações, Nossas Soluções</h2>
        <p className="text-gray-700 mb-12 text-lg leading-relaxed">
          Entendemos o que te preocupa e transformamos cada desafio em um sorriso de confiança.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
              <FaHeartbeat className="text-custom-blue text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">"A ansiedade da cadeira do dentista?"</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-custom-blue">Nossa abordagem:</span> Um ambiente sereno e técnicas que priorizam seu bem-estar, para que cada visita seja tranquila.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
              <FaClock className="text-custom-blue text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">"Tempo é ouro, e o meu é escasso!"</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-custom-blue">Nossa flexibilidade:</span> Agendamentos adaptados à sua agenda, incluindo opções aos sábados, para que sua saúde bucal se encaixe na sua vida.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
              <FaShieldAlt className="text-custom-blue text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">"Preocupado com o desconforto?"</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-custom-blue">Nosso compromisso:</span> Tecnologias de ponta e métodos minimamente invasivos garantem um tratamento confortável e eficaz.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 mx-auto">
              <FaSmile className="text-custom-blue text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">"O resultado final será o esperado?"</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-custom-blue">Nossa garantia:</span> Milhares de sorrisos transformados e a certeza de um resultado que superará suas expectativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientConcernsSection;