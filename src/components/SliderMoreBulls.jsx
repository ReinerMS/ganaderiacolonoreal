import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { getData } from "../services/dataService";
import Card from "../components/Card";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const SliderMoreBulls = () => {
  const [data, setData] = useState([]);
  const placeholderImage = "./imgs_toros/noimg.jpg"; // Imagen predeterminada si no existe en la carpeta
  const navigate = useNavigate(); // Inicializar useNavigate

  useEffect(() => {
    const fetchedData = getData() || []; // Obtener los datos
    const shuffledData = fetchedData.sort(() => Math.random() - 0.5); // Mezcla aleatoria de los datos
    setData(shuffledData); // Establecer los datos mezclados en el estado
  }, []); // Solo se ejecuta una vez cuando se carga el componente

  // Función para manejar el clic y redirigir al detalle
  const handleCardClick = (id) => {
    navigate(`/detail/${id}`); // Redirige a la página de detalles con el id del toro
    setTimeout(() => {
      window.location.reload(); // Recargar la página después de un pequeño retraso
    }, 100); // Ajusta el tiempo de retraso según sea necesario
  };

  return (
    <div className="bg-gray-50 p-5">
      <div className="mx-auto">
        <div>
          <p className="text-center text-2xl font-semibold">Más Toros</p>
        </div>
      <div className="text-green-800 text-right mx-5 my-2">
          <Link to={"/toros"}>Ver más</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.length > 0
            ? data.slice(0, 4).map(item => {
                const imageUrl = `./imgs_toros/${item.id}.jpg`;
                return (
                  <SwiperSlide key={item.id}>
                    <Card
                      key={item.id}  // Usar id como key para Card
                      id={item.id}
                      nombre={item.nombre}
                      hato={item.hato}
                      imageUrl={imageUrl}
                      placeholderImage={placeholderImage} // Imagen predeterminada si no existe en la carpeta
                      onClick={() => handleCardClick(item.id)} // Pasar el id de la tarjeta al hacer clic
                    />
                  </SwiperSlide>
                );
              })
            : <p className="text-center text-xl">No hay toros disponibles.</p>}
        </div>
      </div>
    </div>
  );
};

export default SliderMoreBulls;