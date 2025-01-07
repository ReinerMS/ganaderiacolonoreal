import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Usamos useNavigate para redirigir

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  // Función para manejar la búsqueda
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      // Redirigir a la página de resultados con la consulta en la URL
      navigate(`/search?q=${searchQuery}`);
    }
  };

  // Función para detectar cuando se presiona la tecla Enter
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event); // Llama a la función de búsqueda
    }
  };

  return (
    <div className="w-30 flex items-center bg-gray-100 rounded-full p-2 mx-5 shadow-md lg:w-96">
      <input
        type="text"
        placeholder="Nombre toro..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Detecta la tecla presionada
        className="mx-5 w-full bg-transparent outline-none text-gray-700 placeholder-gray-500  rounded-full"
      />
      <button onClick={handleSearch} className=" text-green-700 mx-2 hover:text-green-400">
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
