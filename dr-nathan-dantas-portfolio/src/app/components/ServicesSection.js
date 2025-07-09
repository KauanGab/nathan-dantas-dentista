import React from 'react';
import Image from 'next/image';

const services = [
  {
    name: 'Restauração',
    description: 'Recuperação da forma e função de dentes danificados por cáries ou fraturas.',
    image: '/services/restauracao.jpg',
  },
  {
    name: 'Limpeza',
    description: 'Remoção de placa bacteriana e tártaro para manter a saúde bucal e prevenir doenças.',
    image: '/services/limpeza.jpg',
  },
  {
    name: 'Raspagem',
    description: 'Tratamento para remover tártaro e placa abaixo da linha da gengiva, combatendo a periodontite.',
    image: '/services/raspagem.jpg',
  },
  {
    name: 'Extrações (inclusive sisos simples)',
    description: 'Remoção de dentes que não podem ser restaurados ou que causam problemas, incluindo sisos.',
    image: '/services/extracao.jpg',
  },
  {
    name: 'Clareamento Dental',
    description: 'Procedimento para clarear o tom dos dentes, removendo manchas e deixando o sorriso mais branco.',
    image: '/services/clareamento.jpg',
  },
  {
    name: 'Facetas Resina',
    description: 'Aplicação de resina nos dentes para corrigir imperfeições, mudar a forma ou cor e melhorar a estética.',
    image: '/services/facetas-resina.jpg',
  },
  {
    name: 'Emergência e Urgência',
    description: 'Atendimento rápido para dores agudas, fraturas, infecções e outros problemas odontológicos urgentes.',
    image: '/services/emergencia.jpg',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-48">
                <Image 
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <a href="#agendar-consulta" className="text-blue-600 font-semibold hover:underline flex items-center">
                  Saiba mais <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;