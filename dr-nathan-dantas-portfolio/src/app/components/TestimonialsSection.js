'use client';

import React from 'react';
import Image from 'next/image';

import avatar1 from '../assets/avatar-1.jpeg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';
import avatar6 from '../assets/avatar-6.jpg';

const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const testimonials = [
  {
    quote: "O Dr. Nathan é um excelente profissional! Atencioso e muito competente. Meu sorriso nunca esteve tão bonito e saudável.",
    author: "Ana Silva",
    avatar: avatar1,
  },
  {
    quote: "Atendimento impecável e resultados surpreendentes no meu clareamento. A clínica é moderna e a equipe é fantástica. Recomendo!",
    author: "Juliana Pereira",
    avatar: avatar2,
  },
  {
    quote: "Tinha muito medo de dentista, mas o Dr. Nathan e sua equipe me deixaram super à vontade. O tratamento foi tranquilo e indolor.",
    author: "Mariana Costa",
    avatar: avatar3,
  },
  {
    quote: "Fiz a extração do siso e a recuperação foi muito mais rápida do que eu esperava. Profissionalismo nota mil!",
    author: "Pedro Oliveira",
    avatar: avatar4,
  },
  {
    quote: "O resultado das minhas facetas de resina ficou incrível, super natural. Transformou completamente meu sorriso. Estou muito feliz!",
    author: "Carlos Souza",
    avatar: avatar5,
  },
  {
    quote: "Serviço de emergência ágil e eficiente. Fui atendido rapidamente e resolveram meu problema com muita atenção e cuidado.",
    author: "Ricardo Lima",
    avatar: avatar6,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4">
          Confiança que se vê no Sorriso
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Veja o que nossos pacientes dizem sobre a experiência em nossa clínica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.author}`}
                  fill
                  className="rounded-full object-cover border-4 border-blue-100"
                  sizes="96px"
                />
              </div>

              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              <p className="italic text-gray-700 mb-6 flex-grow">
                &quot;{testimonial.quote}&quot;
              </p>

              <p className="font-bold text-lg text-blue-700">{testimonial.author}</p>
              <p className="text-sm text-gray-500">Paciente Verificado</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;