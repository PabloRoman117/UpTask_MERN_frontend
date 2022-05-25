import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";
import clienteAxios from "../config/clienteAxios";
const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setrepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, email, password, repetirPassword].includes('')) {
      
     setAlerta({
       msg: 'Todos los campos son obligatorios',
       error: true,
      })
      return
    }

    if(password !==repetirPassword){
      setAlerta({
        msg: 'Los password no son iguales ',
        error: true,
       })
       return
    }

    if(password.length <6){
      setAlerta({
        msg: 'El password es muy corto, agrega minimo 6 caracteres ',
        error: true,
       })
       return
    }

    setAlerta({})

    //Crear Usuario en API

    try {
      
      const {data} = await clienteAxios.post(`/usuarios`, {
        nombre,email,password})

        setAlerta({
          msg: data.msg,
          error: false
        })

        setNombre('')
        setEmail('')
        setPassword('')
        setrepetirPassword('')
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
        Crea tu Cuenta y administra tus{" "}
        <span className="text-slate-700">Proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta}/>}
      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow-xl rounded-lg p-10">
        <div className="my-5">
          <label
            htmlFor="nombre"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="email"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <div className="my-5">
          <label
            htmlFor="password2"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            value={repetirPassword}
            onChange={(e) => setrepetirPassword(e.target.value)}
            placeholder="Repetir tu Password "
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Crear Cuenta"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 hover: -translate-y-1 hover:scale-105  duration-300 "
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/olvide-password"
        >
          Olvide mi Password
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
