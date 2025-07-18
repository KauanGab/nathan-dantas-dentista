import React from 'react';
import Image from 'next/image';
import sobre from '../assets/sobre.jpg';
import { FaTooth, FaUserTie, FaStar } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Sobre o Dr. Nathan Dantas</h2>
          <p className="text-gray-700 mb-3 text-base md:text-lg leading-relaxed max-w-xl">
            <strong>Dr. Nathan Dantas</strong>, cirurgião-dentista formado pela UNIRB (<strong>CRO-SE 03939</strong>), comprometido com o cuidado clínico e restaurador, promovendo saúde bucal de forma acessível e personalizada.
          </p>
          <p className="text-gray-700 mb-3 text-base md:text-lg leading-relaxed max-w-xl">
            Oferece atendimento humanizado, ético e personalizado, utilizando técnicas modernas para resultados naturais e duradouros.
          </p>
          <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed max-w-xl">
            Realiza procedimentos como limpezas, check-ups, restaurações, raspagens, extrações e facetas. Sempre com foco em segurança e conforto.
          </p>

          <div className="space-y-4 my-8">
            {[
              { icon: <FaTooth className="text-blue-600" />, label: 'Experiência Comprovada', description: 'Técnicas modernas para os melhores resultados.' },
              { icon: <FaUserTie className="text-blue-600" />, label: 'Atendimento Humanizado', description: 'Cuidado personalizado e focado em você.' },
              { icon: <FaStar className="text-blue-600" />, label: 'Resultados de Excelência', description: 'Pacientes satisfeitos com sorrisos renovados.' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.label}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition flex items-center mx-auto md:mx-0">
            Agendar Consulta
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden shadow-lg max-w-sm">
            <Image
              src={sobre}
              alt="Dr. Nathan realizando atendimento odontológico"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;