import { getData } from "../services/dataService";
import Card from "../components/Card";

const Toros = () => {
  const data = getData() || [];
  console.log("Datos obtenidos:", data);

  // Lista de IDs que no quieres mostrar
  const excludeIds = ['01-62360', '01-67344'];

  // Filtrar los datos para excluir los elementos con los IDs especificados
  const filteredData = data.filter(item => !excludeIds.includes(item.id));

  const placeholderImage = "./imgs_toros/noimg.jpg"; // Imagen predeterminada si no existe en la carpeta

  return (
    <div>
      <div className="mx-auto my-5">
        <div className="bg-green-900 text-white h-20 my-5">
          <h1 className="text-center text-5xl font-bold mb-4 p-4">TOROS</h1>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6 ">
          {filteredData.length > 0
            ? filteredData.map(item => {
                const imageUrl = `./imgs_toros/${item.id}.jpg`;
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    nombre={item.nombre}
                    hato={item.hato}
                    imageUrl={imageUrl}
                    placeholderImage={placeholderImage} // Imagen predeterminada si no existe en la carpeta
                  />
                );
              })
            : <p className="text-center text-xl">No hay toros disponibles.</p>}
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/+50689198573"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-100 text-white p-4 rounded-full shadow-lg hover:bg-green-100 transition-colors transform hover:scale-110 animate-bounce"
      >
        <img className="w-14" src="./LogoWA.png" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default Toros;
