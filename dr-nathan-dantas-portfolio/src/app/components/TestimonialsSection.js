import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Opinião dos Clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="italic text-gray-700 mb-4">"O Dr. Nathan é um excelente profissional! Meu sorriso nunca esteve tão bonito."</p>
          <p className="font-semibold text-blue-600">- Paciente 1</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p className="italic text-gray-700 mb-4">"Atendimento impecável e resultados surpreendentes. Recomendo!"</p>
          <p className="font-semibold text-blue-600">- Paciente 2</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;