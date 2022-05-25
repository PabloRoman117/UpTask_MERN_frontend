import React,{useState, useEffect} from "react";
import {Link, useParams} from 'react-router-dom'

import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";

const NuevoPassword = () => {

  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const {token} = params
  useEffect(() => {
    const comprobarToken = async () => {
      try {
       
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      
    }
    comprobarToken()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();

    if(password.length < 6){
      setAlerta({
        msg: 'El password debe más de 6 caracteres',
        error: true
      })

      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`

      const {data} = await clienteAxios.post(url, {password})
      setAlerta({
        msg:data.msg,
        error: false
      })
      setPasswordModificado(true)

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const {msg} = alerta
  

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize ">
        Restablece tu Password y no pierdas acceso a tus{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>
      {msg && <Alerta alerta={alerta} />}
      {tokenValido && (
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow-xl rounded-lg p-10"
        >
          <div className="my-5">
            <label
              htmlFor="password"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Nuevo Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu Nuevo Password"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 hover: -translate-y-1 hover:scale-105  duration-300 "
          />
        </form>
      )}

      {passwordModificado && (
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          Inicia sesión
        </Link>
      )}
    </>
  );
};

export default NuevoPassword;
