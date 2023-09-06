import React from 'react'

const Galeria = () => {
  return (
    <div>



<div className="grid gap-4">
    <div>
        <img className=" h-full w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.03_1_qlwkwh.jpg" alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.03_dgkgi2.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.07_1_a0bgxi.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041581/WhatsApp_Image_2023-09-06_at_19.01.07_oqvxkz.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.07_2_asuirg.jpg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694041580/WhatsApp_Image_2023-09-06_at_19.01.05_iwzwat.jpg" alt=""/>
        </div>
    </div>
</div>

    </div>
  )
}

export default Galeria