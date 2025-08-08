'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import restauracao1 from '../assets/restauracao1.jpg';
import restauracao1DEP from '../assets/restauracao1DEP.jpg';
import restauracao2 from '../assets/restauracao2.jpg';
import restauracao2DEP from '../assets/restauracao2DEP.jpg';
import restauracao3 from '../assets/restauracao3.jpg';
import restauracao3DEP from '../assets/restauracao3DEP.jpg';
import restauracao4 from '../assets/restauracao4.jpg';
import restauracao4DEP from '../assets/restauracao4DEP.jpg';
import restauracao5 from '../assets/restauracao5.jpg';
import restauracao5DEP from '../assets/restauracao5DEP.jpg';
import restauracao6 from '../assets/restauracao6.jpg';
import restauracao6DEP from '../assets/restauracao6DEP.jpg';


import limpezaeraspagem from '../assets/limpezaeraspagem.jpg';
import limpezaeraspagem2 from '../assets/limpezaeraspagem2.jpg';
import limpezaeraspagem3 from '../assets/limpezaeraspagem3.jpg';

import extracao1 from '../assets/extracao1.jpg';
import extracao2 from '../assets/extracao2.jpg';
import extracao3 from '../assets/extracao3.jpg';

import clareamento1 from '../assets/clareamento1.jpg';
import clareamento1DEP from '../assets/clareamento1DEP.jpg';
import clareamento2 from '../assets/clareamento2.jpg';
import clareamento2DEP from '../assets/clareamento2DEP.jpg';

const finalServices = [
  {
    name: 'Restaurações',
    description: 'Recupere a forma e a função dos seus dentes danificados.',
    hasBeforeAfter: true,
    beforeAfterPairs: [
      { before: restauracao2, after: restauracao2DEP },
      { before: restauracao1, after: restauracao1DEP },
      { before: restauracao3, after: restauracao3DEP },
      { before: restauracao6, after: restauracao6DEP },
      { before: restauracao4, after: restauracao4DEP },
      { before: restauracao5, after: restauracao5DEP },
    ]
  },
  {
    name: 'Limpeza | Raspagem',
    description: 'Mantenha a saúde bucal em dia e previna doenças periodontais.',
    images: [limpezaeraspagem3, limpezaeraspagem2, limpezaeraspagem],
    hasBeforeAfter: false,
  },
  {
    name: 'Extração',
    description: 'Remoção segura de dentes comprometidos, incluindo sisos.',
    images: [extracao1, extracao2, extracao3],
    hasBeforeAfter: false,
  },
  {
    name: 'Clareamento Dental',
    description: 'Conquiste um sorriso mais branco e radiante com nossos métodos.',
    hasBeforeAfter: true,
    beforeAfterPairs: [
      { before: clareamento1, after: clareamento1DEP },
      { before: clareamento2, after: clareamento2DEP },
    ]
  },
];

const ServicesSection = () => {
  const handlePositionChange = (position) => {
    return Math.max(15, Math.min(85, position));
  };

  return (
    <section id="servicos" className="pt-16 pb-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-custom-blue mb-12">
          Principais Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {finalServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col"
            >
              <div className="relative w-full h-56 flex-shrink-0">
                {service.hasBeforeAfter ? (
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={9000}
                    stopOnHover={true}
                    swipeable={false}
                    emulateTouch={false}
                    className="h-full"
                  >
                    {service.beforeAfterPairs.map((pair, idx) => (
                      <div key={idx} className="relative h-56">
                        <ReactCompareSlider
                          itemOne={
                            <ReactCompareSliderImage
                              src={pair.before.src}
                              alt={`${service.name} - Antes ${idx + 1}`}
                              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                          }
                          itemTwo={
                            <ReactCompareSliderImage
                              src={pair.after.src}
                              alt={`${service.name} - Depois ${idx + 1}`}
                              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                          }
                          position={50}
                          onPositionChange={handlePositionChange}
                          boundsPadding={25}
                          style={{ height: '100%' }}
                          handle={
                            <div className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-custom-blue flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </div>
                          }
                        />
                        <div className="absolute top-2 left-2 bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                          ANTES
                        </div>
                        <div className="absolute top-2 right-2 bg-custom-blue text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10">
                          DEPOIS
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-blue text-white text-xs px-4 py-2 rounded-full z-10 font-medium shadow-lg whitespace-nowrap">
                          ← Arraste para comparar →
                        </div>
                      </div>
                    ))}
                  </Carousel>
                ) : (
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
                          alt={`${service.name} - Imagem ${idx + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>

              <div className="p-5 text-center flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-custom-blue">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden px-2 mt-6 mb-8">
          <a href="https://wa.me/message/BMPNVWC4QTNTM1" target="_blank" rel="noopener noreferrer">
            <button className="bg-custom-blue text-white px-7 py-3 rounded-full text-base font-medium hover:bg-custom-blue-darker transition flex items-center mx-auto md:mx-0">
              Agendar Consulta
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;