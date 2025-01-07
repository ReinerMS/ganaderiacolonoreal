const Historia = () => {
  return (
    <div className="my-10">
      <div className="mb-6">
        <p className="text-3xl font-bold text-center uppercase text-green-800">Historia</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img className="rounded-md w-full h-auto" src="./DonAlbertoCastillo.jpg" alt="Don Alberto Castillo" />
          <p className="text-center text-3xl font-bold text-white bg-green-800">Sr. José Alberto Castillo</p>
          <p className="text-center text-xl text-white bg-green-400">Propietario Ganadería Colono Real</p>
        </div>
        <div className="max-w-xl mx-2 text-justify ">
          <p>
            <strong>Ganadería Colono Real</strong> es parte de Grupo Colono, la cual comenzó sus operaciones en <strong>febrero de 2007</strong> con la misión de mejorar la raza Brahman en la región. Para alcanzar este objetivo, empleamos el mejor material genético disponible en el mercado internacional, buscando optimizar los parámetros productivos de esta raza.
          </p><br/>
          <p>
            Nuestro compromiso es ofrecer a los ganaderos sementales seleccionados que transmitan su máximo potencial genético a sus crías, destacando características como <strong className="text-green-800">precocidad, alta ganancia de peso en pastoreo, fertilidad superior y canales de excelente calidad y musculatura</strong>.
          </p><br/>
          <p>
            Para lograr estos estándares, hemos adquirido hembras, machos, semen y embriones de destacadas ganaderías nacionales e internacionales, incluyendo Guatemala, Panamá y Estados Unidos.
          </p><br/>
          <p>
            Desde 2008, <strong>Colono Real</strong> ha implementado intensivamente la <strong>fertilización in vitro (FIV)</strong> como herramienta clave, en alianza con Embryotech, empresa que contó con una franquicia de <strong>CENATTE</strong>, líder brasileño en biotecnología. Esta técnica permite aprovechar al máximo el valor genético de vacas élite, logrando un mayor número de crías por año provenientes de una sola donadora.
          </p><br/>
          <p>
            El éxito de nuestra labor se refleja en los reconocimientos obtenidos en las principales exposiciones ganaderas del país y <strong>Centroamérica</strong>, como <strong>EXPICA</strong> permanente en <strong>Nicaragua</strong> y <strong>EXPICA</strong> Rotativa, celebrada anualmente en distintos países del <strong>Istmo Centroamericano</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;