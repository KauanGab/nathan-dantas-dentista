import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center ml-9">
          <Image
            src={logo}
            alt="Logo Dr. Nathan Dantas"
            width={50}
            height={50}
            className="mr-2"
          />
        </div>

        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#inicio" className="hover:text-blue-600">Início</a></li>
          <li><a href="#quem-somos" className="hover:text-blue-600">Quem somos</a></li>
          <li><a href="#servicos" className="hover:text-blue-600">Serviços</a></li>
          <li><a href="#depoimentos" className="hover:text-blue-600">Depoimentos</a></li>
          <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
        </ul>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-300">
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;