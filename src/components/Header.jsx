import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useProyectos from '../hooks/useProyectos'
import Busqueda from './Busqueda'

const Header = () => {

    const {handleBuscador, cerrarSesionProyectos} = useProyectos();
    const {cerrarSisionAuth} = useAuth();

    const handleCerrarSesion = () => {
        cerrarSesionProyectos()
        cerrarSisionAuth()
        localStorage.removeItem('token')

    }
  return (
    <header className='px-4 py-5 bg-white border-b'>
        <div className='md:flex md:justify-between'>
            <h2 className='text-4xl text-sky-600 font-black text-center mb-5 md:mb-0'> UpTask</h2>

            <div className='flex flex-col md:flex-row items-center gap-4'>
                <button 
                    type='button'
                    className='font-bold uppercase hover:text-slate-700 hover: -translate-y-1 hover:scale-105  duration-300'
                    onClick={handleBuscador}
                >Buscar Proyecto</button>
                <Link
                    to="/proyectos"
                    className='font-bold uppercase hover:text-slate-700 hover: -translate-y-1 hover:scale-105  duration-300  '> Proyectos </Link>
                <button
                 type='button' 
                 className='text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold hover:bg-sky-800 hover: -translate-y-1 hover:scale-105  duration-300'
                onClick={handleCerrarSesion}>
                    Cerrar Sesión
                </button>
                <Busqueda />
            </div>
        </div>
    </header>
  )
}

export default Header