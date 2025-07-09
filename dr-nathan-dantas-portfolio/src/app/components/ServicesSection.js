'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import restauracaoAntes from '../assets/restauracao.jpg';
import restauracaoDepois from '../assets/restauracao2.jpg';


const services = [
  {
    name: 'Restauração',
    description: 'Recuperação da forma e função de dentes danificados por cáries ou fraturas. Veja o antes e depois!',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Limpeza',
    description: 'Remoção de placa bacteriana e tártaro para manter a saúde bucal e prevenir doenças. Tenha um sorriso mais limpo e saudável.',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Raspagem',
    description: 'Tratamento para remover tártaro e placa abaixo da linha da gengiva, combatendo a periodontite. Melhore a saúde da sua gengiva.',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Extrações (inclusive sisos simples)',
    description: 'Remoção de dentes que não podem ser restaurados ou que causam problemas, incluindo sisos. Procedimento seguro e confortável.',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Clareamento Dental',
    description: 'Procedimento para clarear o tom dos dentes, removendo manchas e deixando o sorriso mais branco. Conquiste um sorriso radiante.',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Facetas Resina',
    description: 'Aplicação de resina nos dentes para corrigir imperfeições, mudar a forma ou cor e melhorar a estética. Transforme seu sorriso instantaneamente.',
    images: [restauracaoAntes, restauracaoDepois],
  },
  {
    name: 'Emergência e Urgência',
    description: 'Atendimento rápido para dores agudas, fraturas, infecções e outros problemas odontológicos urgentes. Conte conosco nos momentos que mais precisa.',
    images: [restauracaoAntes, restauracaoDepois],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full">
              <div className="relative w-full h-64 flex-shrink-0">
                <Carousel
                  showArrows={false}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={4000}
                  stopOnHover={true}
                  className="h-full"
                >
                  {service.images.map((img, idx) => (
                    <div key={idx} className="relative" style={{ width: '100%', height: '256px' }}>
                      <Image
                        src={img}
                        alt={`${service.name} - ${idx === 0 ? 'Antes' : 'Depois'}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="transition-transform duration-500 ease-in-out transform hover:scale-105 object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="p-6 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;