import React from 'react'
import Galeria from '../../components/Galeria'
import CardPresentacion from '../../components/CardPresentacion'

const index = () => {
  return (
    <section className=' min-h-screen'>
    <div className='h-full'>
      <CardPresentacion/>
     
    </div>
    <div className='sm:mt-96 pt-96'>
    <Galeria/>
    </div>
  
    </section>
  )
}

export default index