import React from 'react'
import Pagina from '../components/Pagina'

const array = () => {

  const carros = ['Opala',
   'Classic',
    'Ka',
    'Omega',
    'Fusca']

  return (
    <>
    <Pagina titulo="Deputados">
    
    {deputados.map(item=>(
      <p>{item}</p>
    ))}

    </Pagina>
    </>
  )
}

export default array