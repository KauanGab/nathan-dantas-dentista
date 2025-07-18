'use client';

import React from 'react';

const Footer = () => {
  const instagramLink = "https://www.instagram.com/dr.nathandantas/";
  const whatsappLink = "http://wa.me/5579991959241";
  const address = "R. Laranjeiras, 422 - Centro, Aracaju - SE, 49010-000";

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-4">Dr. Nathan Dantas</h3>
              <p className="text-sm">
                Oferecendo odontologia de excelência com um atendimento humano e personalizado. Seu sorriso é nossa maior prioridade.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navegue</h3>
              <ul className="space-y-2">
                <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
                <li><a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a></li>
                <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-center sm:justify-start">
                  <span className="flex-shrink-0 mr-2 mt-1">📍</span>
                  <span>{address}</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <span className="flex-shrink-0 mr-2 mt-1">📧</span>
                  <a href="mailto:dr.nathandantas@gmail.com" className="hover:text-blue-400 transition-colors">dr.nathandantas@gmail.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Siga-nos</h3>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0-1.623C8.724.54 8.316.552 7.053.612c-3.55.164-6.024 2.64-6.188 6.188C.804 8.316.792 8.724.792 12s.012 3.684.07 4.947c.164 3.548 2.638 6.024 6.188 6.188 1.263.06 1.67.072 4.947.072s3.684-.012 4.947-.072c3.55-.164 6.024-2.64 6.188-6.188.06-1.263.072-1.67.072-4.947s-.012-3.684-.072-4.947c-.164-3.548-2.638-6.024-6.188-6.188C15.684.552 15.276.54 12 .54z"></path>
                    <path d="M12 6.865A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.61A3.475 3.475 0 1115.475 12 3.475 3.475 0 0112 15.475z"></path>
                    <path d="M16.95 6.405a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"></path>
                  </svg>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-green-500 p-3 rounded-full transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.203 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {new Date( ).getFullYear()} Dr. Nathan Dantas. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido por <span className="font-semibold text-white">Kauan Gabriel</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;