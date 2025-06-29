import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Dr. Nathan Dantas</h2>
        <p className="text-xl text-gray-700 mb-8">Transformando sorrisos para uma melhor qualidade de vida!</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">Agende uma consulta</button>
      </div>
    </section>
  );
};

export default HeroSection;