import { useState, useEffect } from "react";

export default function HomeBanner() {
  // Array de imágenes para el slider
  const images = [
    "./images/Banner1.jpg", // Cambia estas rutas por tus imágenes
    "./images/Banner2.jpg",
    "./images/Banner3.jpg",
  ];

  // Estado para el índice de la imagen actual y para controlar el efecto de transición
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Cambia la imagen cada 6 segundos con una transición de 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Inicia la transición (aplica opacidad 0)
      setTimeout(() => {
        // Cambia a la siguiente imagen y restaura la visibilidad
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Termina la transición
      }, 500); // Duración de la transición
    }, 5000); // Tiempo entre cambios de imagen

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className=" relative isolate overflow-hidden bg-green-900  sm:py-80">
      {/* Imagen dinámica */}
      <img
        alt=""
        src={images[currentImageIndex]} // Muestra la imagen actual del slider
        className={`opacity-0 absolute inset-0 size-full object-right object-cover md:object-center transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100" // Aplica opacidad dinámica para la transición
        }`}
      />
    </div>
  );
}
