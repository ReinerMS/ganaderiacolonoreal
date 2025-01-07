import { useState } from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 px-2 bg-white shadow-md flex items-center z-50">
        <nav className="w-full flex justify-around items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={"/"}>
            {/* Logo normal para pantallas grandes */}
            <img src="./Logo.png" alt="Logo" className="hidden lg:block h-16" />
              {/* Favicon para pantallas móviles */}
              <img
                src="./favicon.png"
                alt="Favicon"
                className="block lg:hidden h-10"
              />
              </Link>
          </div>

          {/* Buscador */}
          <SearchInput />

          {/* Menú de hamburguesa */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-600 hover:text-green-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Enlaces de navegación */}
          <a
            className={`flex items-center space-x-5 ${isMenuOpen
              ? "hidden"
              : "hidden"} lg:flex`}
          >
            <Link to={"/"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300">Inicio</Link>
            <Link to={"/toros"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300">Toros</Link>
            <Link to={"/semen"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300">Semen</Link>
            <Link to={"/historia"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300">Historia</Link>
          </a>
        </nav>

        {/* Modal para el menú en pantallas pequeñas */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex justify-center items-center bg-white rounded-lg p-3 h-2/4 w-2/3 max-w-sm">
              <div className="flex flex-col items-center space-y-4 ">
                <Link to={"/"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300" onClick={closeMenu}>Inicio</Link>
                <Link to={"/toros"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300" onClick={closeMenu}>Toros</Link>
                <Link to={"/semen"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300" onClick={closeMenu}>Semen</Link>
                <Link to={"/historia"} className="text-lg font-medium text-green-800 hover:text-green-600 transition duration-300" onClick={closeMenu}>Historia</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Contenido principal de la página, con margen superior para no quedar cubierto */}
      <main className="mt-14">
        {/* Aquí va el contenido principal de la página */}
      </main>
    </>
  );
};

export default Header;
