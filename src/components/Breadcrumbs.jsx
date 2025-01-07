import { useHistory } from 'react-router-dom'; // Si estás usando react-router para navegación

// eslint-disable-next-line react/prop-types
const Breadcrumbs = ({ currentSection, backLink }) => {
  const history = useHistory(); // Hook de react-router para la navegación

  return (
    <nav className="bg-gray-100 p-4 rounded-lg mb-4">
      <div className="flex items-center">
        {/* Botón de retroceso */}
        <button
          onClick={() => history.push(backLink)} // Regresa a la página de la ruta pasada en backLink
          className="text-green-600 hover:text-green-800 flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <span>Volver</span>
        </button>

        {/* Separador */}
        <span className="mx-2">/</span>

        {/* Sección actual */}
        <span className="font-semibold text-lg">{currentSection}</span>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
