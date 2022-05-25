import React from "react";
import useProyectos from "../hooks/useProyectos";

const Colaborador = ({ colaborador }) => {
  const {handleModalEliminarColaborador} = useProyectos();

  const { nombre, email } = colaborador;
  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p>{nombre}</p>
        <p className="text-sm text-gray-700">{email}</p>
      </div>
      <div>
        <button
          className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-xl 
        hover:bg-red-800 hover: -translate-y-1 hover:scale-105  duration-300 flex gap-2 items-center "
        onClick={()=> handleModalEliminarColaborador(colaborador)}
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
      </div>
    </div>
  );
};

export default Colaborador;
