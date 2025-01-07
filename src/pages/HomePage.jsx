/*import { getData } from "../services/dataService";*/
/*import Card from "../components/Card";*/
import BannerHeader from "../components/HomeBanner";

const HomePage = () => {
  /*const data = getData() || [];*/
  /*const placeholderImage = "/imgs_toros/noimg.jpg"; // Imagen predeterminada si no exite en la carpeta*/

  return (
    <div>
      <BannerHeader />

      <div>
        <div className="my-10 text-center">
          <p className="text-4xl md:text-6xl font-extrabold text-green-800">
            MEJORAMIENTO
          </p>
          <p className=" text-3xl md:text-5xl font-semibold text-gray-600">
            Genético Ganadero
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-28">
          <div className="w-60">
            <img className="" src="./images/ICONO-1.jpg" alt="" />
            <p className="bg-green-700 rounded-xl px-5 py-1 my-3 text-center text-white text-xl font-bold">
              Potencial Genético Superior
            </p>
          </div>
          <div className="w-60">
            <img className="" src="./images/ICONO-2.jpg" alt="" />
            <p className="bg-green-700 rounded-xl px-5 py-1 my-3 text-center text-white text-xl font-bold">
              Resultados en Pastoreo
            </p>
          </div>
          <div className="w-60">
            <img className="" src="./images/ICONO-3.jpg" alt="" />
            <p className="bg-green-700 rounded-xl px-5 py-1 my-3 text-center text-white text-xl font-bold">
              Calidad y Rendimiento
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 my-5 mb-32">
  <div className="flex flex-col lg:flex-row items-center justify-between mx-2 h-auto lg:px-40">
    <img className="w-1/2 h-auto m-4" src="./images/Banner4.jpg" alt="" />
    <p className="flex-1 text-lg m-5 font-medium text-gray-600 md:text-2xl text-justify">
      Nuestros sementales están seleccionados para garantizar la
      transmisión de las mejores características genéticas, creando
      generaciones más fuertes y productivas.
    </p>
  </div>
</div>


      <div className="flex flex-wrap justify-center gap-3 my-10">
        <div className="w-full">
          <p className="text-center text-2xl font-semibold text-gray-600 ">
            Obtén canales de excelente calidad con musculatura definida y
            fertilidad superior, asegurando un rendimiento excepcional.{" "}
          </p>
        </div>
        <div className="h-1 w-1/2 bg-green-800 rounded-xl mt-5" />
      </div>

      <div className="flex justify-center gap-10 m-5 mb-32">
        <div className="w-60">
          <img className="rounded" src="./images/miniatura1.jpg" alt="" />
        </div>
        <div className="w-60">
          <img className="rounded" src="./images/miniatura2.jpg" alt="" />
        </div>
        <div className="w-60">
          <img className="rounded" src="./images/miniatura3.jpg" alt="" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center my-8">
        <p className="bg-yellow-600 w-full h-10 text-center text-white font-semibold text-4xl">
        Visítanos en
        </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2969.271803017661!2d-83.82668549210568!3d10.249458301815855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2scr!4v1735339414561!5m2!1ses!2scr"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="my-2"
      ></iframe>
    </div>

      {/* <div className="mx-auto my-5 ">
        <div className="text-green-800 font-semibold px-5 py-2">
          <a href="/toros">
            <p className="text-right mx-5 text-md">Ver mas</p>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:px-10 lg:gap-32">
          {data.length > 0
            ? data
                .sort(() => Math.random() - 0.5) // Mezcla aleatoriamente los elementos
                .slice(0, 4) // Selecciona solo los primeros 4
                .map(item => {
                  const imageUrl = `/imgs_toros/${item.id}.jpg`;
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
      </div>*/}
     

      {/* Botón flotante de WhatsApp*/}
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

export default HomePage;
