import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dr. Nathan Dantas</h1>
        <ul className="flex space-x-4">
          <li><a href="#inicio" className="hover:underline">Início</a></li>
          <li><a href="#servicos" className="hover:underline">Serviços</a></li>
          <li><a href="#quem-somos" className="hover:underline">Quem somos</a></li>
          <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;