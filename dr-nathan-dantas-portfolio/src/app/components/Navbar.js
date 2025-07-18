'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav 
      className={`bg-white shadow-md py-3 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#inicio" className="flex items-center">
          <Image
            src={logo}
            alt="Logo Dr. Nathan Dantas"
            width={50}
            height={50}
            className="mr-2"
          />
        </a>

        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contato" className="hidden lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors duration-300">
          Agendar Consulta
        </a>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-3 bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link ) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contato" className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-blue-700">
                Agendar Consulta
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;