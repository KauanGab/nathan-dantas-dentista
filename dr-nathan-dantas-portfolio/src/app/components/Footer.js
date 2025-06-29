import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Dr. Nathan Dantas. Todos os direitos reservados.</p>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Contato</h3>
          <p>Email: contato@drnathandantas.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Opinião dos Pacientes</h3>
          <p>Deixe sua opinião sobre o atendimento do Dr. Nathan Dantas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


