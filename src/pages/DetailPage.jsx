import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData } from "../services/dataService";
import SliderMoreBulls from "../components/SliderMoreBulls";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchedItem = getData().find(data => data.id === id);
    setItem(fetchedItem);

    if (fetchedItem) {
      const mainImagen = `./imgs_toros/${fetchedItem.id}.jpg`;
      const posiblesMiniaturas = [
        mainImagen,
        `./imgs_toros/${fetchedItem.id}-1.jpg`,
        `./imgs_toros/${fetchedItem.id}-2.jpg`
      ];

      setMainImage(mainImagen);

      const verificarImagenes = async () => {
        const validas = await Promise.all(
          posiblesMiniaturas.map(url => {
            return new Promise(resolve => {
              const img = new Image();
              img.src = url;
              img.onload = () => resolve(url);
              img.onerror = () => resolve(null);
            });
          })
        );
        setThumbnails(validas.filter(Boolean));
      };

      verificarImagenes();
    }
  }, [id]);

  const handleThumbnailClick = (image) => {
    console.log("Imagen seleccionada:", image);
    setMainImage(image);
  };

  const calcularEdadEnMeses = (fechaNacimiento) => {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    const años = hoy.getFullYear() - nacimiento.getFullYear();
    const meses = hoy.getMonth() - nacimiento.getMonth();

    let edadMeses = años * 12 + meses;

    if (hoy.getDate() < nacimiento.getDate()) {
      edadMeses--;
    }

    return `${edadMeses} meses`;
  };

  if (!item) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="flex-1 p-4">
          <div className="grid justify-items-center">
            <img
              src={mainImage}
              alt={item.nombre}
              className="h-full object-center rounded lg:w-3/5 "
            />
          </div>

          {thumbnails.length > 0 && (
            <div className="flex flex-wrap justify-center m-2">
              {thumbnails.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Producto ${item.id} - Vista ${index}`}
                  className="rounded-md w-28 h-16 md:w-40 md:h-20 object-cover cursor-pointer border-2 border-transparent hover:border-green-600 hover:scale-105 transition"
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 p-2">
          <h1 className="text-green-800 text-3xl font-bold my-1">
            {item.nombre}
          </h1>

          <div className="bg-slate-50 my-2">
            <div className="flex flex-row">
              <div className="flex-1 mx-5">
                <p className="basic-1/2 font-semibold text-md">RGCCR N°</p>
                <p className="text-lg">{item.id}</p>
              </div>
              <div className="flex-1 mx-5">
                <p className="font-semibold text-md">Hato</p>
                <p className="text-lg">{item.hato}</p>
              </div>
            </div>

            <div className="mx-5">
              <p className="font-semibold text-md">Raza</p>
              <p className="text-lg">{item.raza}</p>
            </div>

            <div className="flex flex-row">
              <div className="flex-1 mx-5">
                <p className="font-semibold text-nd">Fecha de Nacimiento</p>
                <p className="text-lg">{item.fecha_nacimiento}</p>
              </div>
              <div className="flex-1 mx-5">
                <p className="font-semibold text-md">Edad</p>
                <p className="text-lg">
                  {item.fecha_nacimiento
                    ? calcularEdadEnMeses(item.fecha_nacimiento)
                    : "N/A"}
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className="flex-1 mx-5">
                <p className="font-semibold text-nd">Último propietario</p>
                <p className="text-lg">{item.ultimo_propietario}</p>
              </div>
              <div className="flex-1 mx-5">
                <p className="font-semibold text-md">Criador</p>
                <p className="text-lg">{item.criador}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 my-4">
            <h1 className="bg-slate-100 text-center text-2xl">Descendencia</h1>

            <div className="bg-slate-50">
              <div className="flex flex-row">
                <div className="flex-1 mx-5">
                  <h2 className="text-1xl font-semibold my-1">Padre</h2>
                  <h2 className="text-1xl my-1">{item.nombre_padre + ' ' + item.cod_padre}</h2>
                </div>
                <div className="flex-1 mx-5">
                  <h2 className="text-1xl font-semibold my-1">Madre</h2>
                  <h2 className="text-1xl my-1">{item.nombre_madre + ' ' + item.cod_madre}</h2>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1 mx-5">
                  <h2 className="text-1xl font-semibold my-1">Abuelo paterno</h2>
                  <h2 className="text-1xl my-1">{item.abuelo_paterno}</h2>
                </div>
                <div className="flex-1 mx-5">
                  <h2 className="text-1xl font-semibold my-1">Abuelo materno</h2>
                  <h2 className="text-1xl my-1">{item["abuelo_materno "]}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SliderMoreBulls />
      </div>
    </>
  );
};

export default DetailPage;