'use client';

import React from 'react';

const ContactSection = () => {
  const address = "R. Laranjeiras, 422 - Centro, Aracaju - SE, 49010-000";
  const whatsappLink = "http://wa.me/5579991959241";
  const instagramLink = "https://www.instagram.com/dr.nathandantas/";
  const email = "dr.nathandantas@gmail.com";

  const googleMapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.684958259423!2d-37.051877999999995!3d-10.911529999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab345a48e4715%3A0x42002271d672aeaf!2sDr.%20Nathan%20Dantas!5e0!3m2!1spt-BR!2sbr!4v1752850745092!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;

  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-4">
            Pronto para Renovar seu Sorriso?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo. Estamos ansiosos para cuidar de você.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group"
              >
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Endereço</p>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">{address}</p>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.203 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">(79 ) 99195-9241</p>
                </div>
              </a>

              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                 <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Instagram</p>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">@dr.nathandantas</p>
                </div>
              </a>

              <a href={`mailto:${email}`} className="flex items-center group">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">{email}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="h-96 lg:h-full w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-center">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
            >
                Agende sua Consulta Pelo WhatsApp
            </a>
        </div>
      </div>
    </section>
   );
};

export default ContactSection;