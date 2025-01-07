import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ id, nombre, hato, imageUrl, placeholderImage }) {
  const handleError = e => {
    e.target.src = placeholderImage; // Cambia a la imagen predeterminada si falla
  };
  

  return (
    <>
    <Link
        to={`/detail/${id}`}
        className="inline-block text-green-700 hover:text-green-500"
      >

    <div className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition ">
      <img
        src={imageUrl}
        alt={nombre}
        className="object-cover rounded"
        onError={handleError} // Manejo de error
      />
      <h2 className="text-lg font-bold mt-2">
        {nombre}
      </h2>
      <p className="text-sm text-gray-600">
        {hato}
      </p>

    </div>
    </Link>
    </>
    
  );
}

export default Card;
