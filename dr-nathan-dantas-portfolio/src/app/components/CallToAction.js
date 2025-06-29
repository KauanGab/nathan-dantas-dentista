import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-600 py-20 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Seu sorriso é único. Seu atendimento também deve ser.</h2>
        <p className="text-xl mb-8">Cuidar da sua saúde bucal pode (e deve) ser uma experiência leve, acolhedora e profissional.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100">Agende sua consulta agora!</button>
      </div>
    </section>
  );
};

export default CallToAction;
