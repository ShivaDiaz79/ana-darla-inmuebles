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
      <div>
        {/* Mostrar la imagen principal según el estado */}
        <Image className="rounded-lg mx-auto" src={imagenPrincipal} alt="principal" width={350} height={296}/>
      </div>
      <div className="grid grid-cols-5 gap-4">
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
