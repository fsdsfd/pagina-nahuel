import React, { useState } from 'react'
import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'
const Alta = () => {

  useTitulo('Alta')
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") === "secreto123"
  );

  const handleLogin = async () => {
    const password = prompt("Ingresa la contraseña:");
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta");
    }
  };
  return isAuthenticated ? (
    <>
      <h1>Formulario de alta de productos</h1>
      <h2>Agregar producto</h2>
      <Formulario />
      <hr />
      <Tabla />
    </>
  ) : (
    <div className='boton-container'>
    <button onClick={handleLogin} className='btn btn-primary boton-container__boton'>Ingresar contraseña</button>
    </div>
  );
}

export default Alta