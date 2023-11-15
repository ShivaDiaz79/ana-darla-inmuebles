import React, { useState } from 'react';
import Image from 'next/image';

const Galeria = () => {
  // Estado para la imagen principal seleccionada
  const [imagenPrincipal, setImagenPrincipal] = useState(
    'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.03_1_qlwkwh.jpg'
  );

  // Manejar clics en miniaturas
  const handleClickMiniatura = (url) => {
    setImagenPrincipal(url);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 ms-10 mt-3">
        {/* Cuadro de información a la izquierda en dispositivos móviles, arriba en desktop */}
        <div className="md:order-1 border-2 border-blue-600 h-64 w-80">
          <h3 className="text-xl font-semibold mb-2 text-center">Título</h3>
          <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Mostrar la imagen principal según el estado */}
        <div className="md:order-2">
          <Image className="rounded-lg" src={imagenPrincipal} alt="principal" width={350} height={296} />
        </div>
        {/* Cuadro de información a la derecha en dispositivos móviles, abajo en desktop */}
        <div className="md:order-3 mt-4 md:mt-0 border-2 border-blue-600 h-64 w-64">
          <h3 className="text-xl font-semibold mb-2">Precio y Otras Info</h3>
          <p>Precio: $100</p>
          <p>Otra información importante...</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {/* Mapear sobre las miniaturas y mostrarlas */}
        {[
          'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.03_dgkgi2.jpg',
          'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.07_1_a0bgxi.jpg',
          'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041581/WhatsApp_Image_2023-09-06_at_19.01.07_oqvxkz.jpg',
          'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.07_2_asuirg.jpg',
          'https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.05_iwzwat.jpg',
        ].map((url, index) => (
          <div key={index}>
            {/* Agregar el controlador de clics a cada miniatura */}
            <Image
              className=" "
              src={url}
              alt="otras"
              onClick={() => handleClickMiniatura(url)}
              width={84}
              height={90}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;

