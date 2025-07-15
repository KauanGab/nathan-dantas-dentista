'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import restauracao1 from '../assets/restauracao.jpg';
import restauracao2 from '../assets/restauracao2.jpg';
import restauracao3 from '../assets/restauracao3.jpg';

import limpezaeraspagem from '../assets/limpezaeraspagem.jpg';
import limpezaeraspagem2 from '../assets/limpezaeraspagem2.jpg';
import limpezaeraspagem3 from '../assets/limpezaeraspagem3.jpg';

import extracao1 from '../assets/extracao1.jpg';
import extracao2 from '../assets/extracao2.jpg';
import extracao3 from '../assets/extracao3.jpg';

import clareamento1 from '../assets/clareamento1.jpg';
import clareamento2 from '../assets/clareamento2.jpg';
import clareamento3 from '../assets/clareamento3.jpg';

const finalServices = [
  {
    name: 'Restaurações',
    description: 'Recupere a forma e a função dos seus dentes danificados.',
    images: [restauracao1, restauracao2, restauracao3],
  },
  {
    name: 'Limpeza | Raspagem',
    description: 'Mantenha a saúde bucal em dia e previna doenças periodontais.',
    images: [limpezaeraspagem3, limpezaeraspagem2, limpezaeraspagem],
  },
  {
    name: 'Extração',
    description: 'Remoção segura de dentes comprometidos, incluindo sisos.',
    images: [extracao1, extracao2, extracao3],
  },
  {
    name: 'Clareamento Dental',
    description: 'Conquiste um sorriso mais branco e radiante com nossos métodos.',
    images: [clareamento1, clareamento2, clareamento3],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-12">
          Principais Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="relative w-full h-56 flex-shrink-0">
                <Carousel
                  showArrows={true}
                  showStatus={false}
                  showIndicators={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={7000}
                  stopOnHover={true}
                  className="h-full"
                >
                  {service.images.map((img, idx) => (
                    <div key={idx} className="relative h-56"> 
                      <Image
                        src={img}
                        alt={`${service.name} - ${idx === 0 ? 'Antes' : 'Depois'}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="p-5 text-center flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-blue-700">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;