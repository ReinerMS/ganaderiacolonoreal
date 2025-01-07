import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getData } from "../services/dataService";
import Card from "../components/Card";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]); // Estado para las sugerencias

  const maxSuggestions = 8; // Número configurable de sugerencias para "Quizá quisiste decir"

  useEffect(() => {
    const data = getData(); // Obtener todos los datos
    if (query) {
      const searchQuery = query.toLowerCase();

      // Filtrar y puntuar los resultados
      const filteredResults = data
        .map(item => {
          const nombre = item.nombre ? item.nombre.toLowerCase() : "";
          const hato = item.hato ? item.hato.toLowerCase() : "";

          let score = 0;

          // Coincidencia exacta en nombre
          if (nombre === searchQuery) {
            score += 3;  // Mayor puntuación para coincidencias exactas
          }
          // Coincidencia parcial en nombre
          else if (nombre.includes(searchQuery)) {
            score += 2;  // Menor puntuación para coincidencias parciales
          }

          // Coincidencia exacta en hato
          if (hato === searchQuery) {
            score += 3;  // Mayor puntuación para coincidencias exactas
          }
          // Coincidencia parcial en hato
          else if (hato.includes(searchQuery)) {
            score += 2;  // Menor puntuación para coincidencias parciales
          }

          return { ...item, score };
        })
        .filter(item => item.score > 0) // Solo los elementos con puntuación mayor a 0
        .sort((a, b) => b.score - a.score); // Ordenar por puntuación (relevancia)

      // Eliminar resultados duplicados y los códigos excluidos
      const excludeIds = ['01-67344', '01-62360'];
      const uniqueResults = filteredResults.filter(item => !excludeIds.includes(item.id));

      setResults(uniqueResults); // Establecer los resultados filtrados

      // Generar sugerencias basadas en el query
      generateSuggestions(searchQuery, data);
    } else {
      setResults([]); // Si no hay query, limpiar los resultados
      setSuggestions([]); // Limpiar las sugerencias
    }
  }, [query]);

  const placeholderImage = "./imgs_toros/noimg.jpg";

  // Función para generar sugerencias basadas en el query
  const generateSuggestions = (searchQuery, data) => {
    const suggestions = new Set(); // Usamos un Set para evitar duplicados

    // Buscar coincidencias parciales
    data.forEach(item => {
      const nombre = item.nombre ? item.nombre.toLowerCase() : "";
      const hato = item.hato ? item.hato.toLowerCase() : "";

      if (nombre.includes(searchQuery)) {
        suggestions.add(nombre);
      }
      if (hato.includes(searchQuery)) {
        suggestions.add(hato);
      }
    });

    // Si tenemos menos sugerencias que el límite, completar con otras posibles coincidencias
    let suggestionArray = Array.from(suggestions);
    if (suggestionArray.length < maxSuggestions) {
      // Completar con nombres de los primeros items más cercanos
      const additionalSuggestions = data.slice(0, maxSuggestions - suggestionArray.length).map(item => item.nombre);
      suggestionArray = suggestionArray.concat(additionalSuggestions);
    }

    // Asegurarnos de tener solo el número máximo de sugerencias
    setSuggestions(suggestionArray.slice(0, maxSuggestions)); // Limitar a un máximo de sugerencias
  };

  // Mostrar los primeros 8 resultados (más relevantes)
  const firstResults = results.slice(0, 8);

  // Mostrar el resto de los resultados (menos relevantes)
  const otherResults = results.slice(8);

  // Completar la sección "Quizá te interese" con resultados adicionales (no más de 8)
  const suggestionsForYou = results.length < 8 ? results.slice(8, 16) : [];

  return (
    <div className="container mx-auto my-5 p-4">
      <h1 className="text-2xl font-bold mb-4">Resultados de Búsqueda</h1>
      
      {/* Mostrar los primeros 8 resultados */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 ">
        {firstResults.length > 0 ? (
          firstResults.map(item => {
            const imageUrl = `./imgs_toros/${item.id}.jpg`;

            return (
              <Card
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                hato={item.hato}
                imageUrl={imageUrl}
                placeholderImage={placeholderImage}
              />
            );
          })
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>

      {/* Mostrar los resultados restantes */}
      {otherResults.length > 0 && (
        <div className="mt-6 border-t-2 border-green-800">
          <p className="text-lg font-semibold my-2 ">Quizá le interese</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 ">
            {otherResults.map(item => {
              const imageUrl = `./imgs_toros/${item.id}.jpg`;

              return (
                <Card
                  key={item.id}
                  id={item.id}
                  nombre={item.nombre}
                  hato={item.hato}
                  imageUrl={imageUrl}
                  placeholderImage={placeholderImage}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Mostrar las sugerencias debajo de los resultados */}
      {suggestionsForYou.length > 0 && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Quizá te interese</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 ">
            {suggestionsForYou.map(item => {
              const imageUrl = `./imgs_toros/${item.id}.jpg`;

              return (
                <Card
                  key={item.id}
                  id={item.id}
                  nombre={item.nombre}
                  hato={item.hato}
                  imageUrl={imageUrl}
                  placeholderImage={placeholderImage}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Mostrar las sugerencias de búsqueda */}
      {suggestions.length > 0 && (
        <div className="mt-6">
          <p className="text-md font-semibold">Quizá quisiste decir:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.slice(0, 2).map((suggestion, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                {suggestion}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
