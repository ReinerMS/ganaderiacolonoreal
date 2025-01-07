import { useState, useEffect } from "react";
import { getData } from "../services/dataService";

const Semen = () => {
  const [exclusiveBulls, setExclusiveBulls] = useState([]);

  useEffect(() => {
    // Definir IDs específicos de los toros exclusivos
    const exclusiveIds = ["01-67344", "01-62360"]; // IDs de toros exclusivos
    
    const allData = getData();

    // Filtrar toros por ID
    const filteredBulls = allData.filter(data => exclusiveIds.includes(String(data.id)));
    console.log("Toros exclusivos filtrados:", filteredBulls);
    
    setExclusiveBulls(filteredBulls);
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-green-800 text-4xl font-bold text-center mb-5 uppercase">Semen</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {exclusiveBulls.length > 0 ? (
          exclusiveBulls.map((toro) => (
            <div key={toro.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                className="w-full h-68 object-cover"
                src={`./imgs_toros/${toro.id}.jpg`}
                alt={toro.nombre}
              />
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{toro.nombre}</h2>
                <p className="text-gray-700"><strong>RGCCR N°:</strong> {toro.id}</p>
                <p className="text-gray-700"><strong>Raza:</strong> {toro.raza}</p>
                <p className="text-gray-700"><strong>Fecha de nacimiento:</strong> {toro.fecha_nacimiento}</p>
                <p className="text-gray-700"><strong>Nombre padre:</strong> {toro.nombre_padre}</p>
                <p className="text-gray-700"><strong>Cod padre:</strong> {toro.cod_padre}</p>
                <p className="text-gray-700"><strong>Nombre Madre:</strong> {toro.nombre_madre}</p>
                <p className="text-gray-700"><strong>Cod madre:</strong> {toro.cod_madre}</p>
                <p className="text-gray-700"><strong>Criador:</strong> {toro.criador}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg">No hay toros disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Semen;
