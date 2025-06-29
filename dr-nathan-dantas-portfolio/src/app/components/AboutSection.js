import React from 'react';

const AboutSection = () => {
  return (
    <section id="quem-somos" className="py-20 container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">Sobre o Dr. Nathan Dantas</h2>
      <p className="text-lg text-gray-700 mb-4">Um resumo sobre o profissional: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h3 className="text-2xl font-bold text-blue-800 mb-4">Clínicas onde atende:</h3>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Clínica A - Endereço, Cidade</li>
        <li>Clínica B - Endereço, Cidade</li>
        <li>Clínica C - Endereço, Cidade</li>
      </ul>
    </section>
  );
};

export default AboutSection;