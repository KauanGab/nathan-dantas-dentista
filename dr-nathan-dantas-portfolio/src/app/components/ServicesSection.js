import React from 'react';

const ServicesSection = () => {
  return (
    <section id="servicos" className="bg-gray-100 py-20 container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Nossos Serviços</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Serviço 1</h3>
          <p className="text-gray-600">Descrição breve do serviço 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Serviço 2</h3>
          <p className="text-gray-600">Descrição breve do serviço 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Serviço 3</h3>
          <p className="text-gray-600">Descrição breve do serviço 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;