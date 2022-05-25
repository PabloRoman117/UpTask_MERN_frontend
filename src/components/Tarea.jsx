import React from "react";
import { formatearFecha } from "../helpers/formatearFecha";
import useAdmin from "../hooks/useAdimin";
import useProyectos from "../hooks/useProyectos";

const Tarea = ({ tarea }) => {

  const {handleModalEditarTarea, handleModalEliminarTarea, completarTarea} = useProyectos()
  const admin = useAdmin();

  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className=" mb-2 text-xl">{nombre}</p>
        <p className=" mb-2 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className=" mb-2 text-sm">Fecha de entrega: {formatearFecha(fechaEntrega)}</p>
        <p className=" mb-2 text-gray-600">Prioridad: {prioridad}</p>
        {estado &&<p className="text-xs bg-amber-600 uppercase p-1 rounded-lg text-white font-bold" >Completada por:  {tarea.completado.nombre}</p>}
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        {admin && (
        <button 
        onClick={() => handleModalEditarTarea(tarea)}
        className="bg-indigo-600 px-4 py-3 text-white  uppercase font-bold text-sm rounded-xl hover:bg-indigo-800 hover: -translate-y-1 hover:scale-105  duration-300 flex gap-2 items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>{" "}
          Editar
        </button>
        )}
        {estado ? (
          <button
           className="bg-green-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-xl hover:bg-green-800 hover: -translate-y-1 hover:scale-105  duration-300 flex gap-2 items-center "
            onClick={() => completarTarea(_id)}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Completa
          </button>
        ) : (
          <button 
          className="bg-gray-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-xl hover:bg-gray-800 hover: -translate-y-1 hover:scale-105  duration-300 flex gap-2 items-center "
          onClick={() => completarTarea(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Incompleta
          </button>
        )}

        {admin && (
        <button 
        className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-xl hover:bg-red-800 hover: -translate-y-1 hover:scale-105  duration-300 flex gap-2 items-center "
        onClick={() => handleModalEliminarTarea(tarea)}
        >
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Eliminar
        </button>
        )}
      </div>
    </div>
  );
};

export default Tarea;
