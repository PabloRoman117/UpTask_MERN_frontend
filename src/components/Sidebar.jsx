import React from 'react'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const {auth} = useAuth();
  return (
    <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6  px-5 py-10'>
        <p className='text-xl font-bold '>Hola: {auth.nombre}</p>
        <Link to="crear-proyecto" className='bg-sky-600 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg hover:bg-sky-800 hover: -translate-y-1 hover:scale-105  duration-300'>
            Nuevo Proyecto
        </Link>
    </aside>
  )
}

export default Sidebar