import React, { useState } from 'react';

const MenuSm = () => {
  const [active, setActive] = useState('');

  const handleClick = (section) => {
    setActive(section);
  };

  const getColor = (section) => (active === section ? 'text-blue-500 dark:text-green-500' : 'text-classic-svg');

  return (
    <section className="w-full h-16 fixed bottom-0 flex rounded-t-3xl justify-around items-center md:hidden lg:hidden bg-white z-50 backdrop-filter backdrop-blur-lg bg-opacity-100 dark:bg-gray-700">
      <div>
        <a href="#sobremi" className="text-black">
          <button onClick={() => handleClick('sobremi')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-home ${getColor('sobremi')}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </button>
        </a>
        <p className="text-black text-xs dark:text-white">Inicio</p>
      </div>
      <div>
        <a href="#proyectos" className="text-black">
          <button onClick={() => handleClick('proyectos')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-search ${getColor('proyectos')}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
        </a>
        <p className="text-black -ml-2 text-xs dark:text-white">Proyectos</p>
      </div>
      <div>
        <a href="#educacion" className="text-black">
          <button onClick={() => handleClick('educacion')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-ballpen ${getColor('educacion')}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 6l7 7l-4 4" />
              <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z" />
              <path d="M4 20l1.768 -1.768" />
            </svg>
          </button>
        </a>
        <p className="text-black -ml-2 text-xs dark:text-white">Educacion</p>
      </div>
      <div>
        <a href="#contacto" className="text-black">
          <button onClick={() => handleClick('contacto')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`icon icon-tabler icons-tabler-outline icon-tabler-phone-call ${getColor('contacto')}`}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </button>
        </a>
        <p className="text-black -ml-2 text-xs dark:text-white">Contacto</p>
      </div>
    </section>
  );
};

export default MenuSm;
