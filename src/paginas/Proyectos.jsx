import React, {useEffect} from 'react'
import PreviewProyecto from '../components/PreviewProyecto';
import useProyectos from '../hooks/useProyectos'
import Alerta from '../components/Alerta';

const Proyectos = () => {

  const {proyectos, alerta} = useProyectos();


  
  
 const {msg} = alerta

  return (
    <>
        <h1 className='text-4xl font-black mb-5 '> Proyectos</h1>
        {msg && <Alerta alerta={alerta}/>} 
        <div className='bg-white shadow-lg rounded-lg '>
          {proyectos.length ? 
            proyectos.map(proyecto => (
              <PreviewProyecto
                key={proyecto._id}
                proyecto={proyecto}
              />
            ))
          : <p className='text-center text-gray-600 uppercase p-5'>No hay Proyectos aún</p>}
        </div>
    </>
  )
}

export default Proyectos