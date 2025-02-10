import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner'
import './DetalleProductos.scss'
import useTitulo from '../hooks/useTitulo'
import { Link } from 'react-router-dom'

const DetalleProductos = () => {
    const url =  import.meta.env.VITE_BACKEND_PRODUCTOS
    const [producto, setProducto] = useState(null)
    useTitulo('Detalles')

    console.log(producto)
    const { id } = useParams()
    useEffect(() => {
        getOneProducto()
    }, [])
    const handleAgregar = (producto)=>{
        agregarProductoAlCarritoContext(producto)
    }
    const getOneProducto = async ()=>{
        try {
            const urlGet = url + id
            const res = await fetch(urlGet)
            if (!res.ok) {
                throw new Error('Error al enviar el producto', res.status)
            }
            const data = await res.json()
            console.log(data)
            setProducto(data)
        } catch (error) {
            console.log('getOneProducto', error)
        }
    }

  return (
    <>
    {
        producto ?
        (
        <>
 <main className="main-producto">
    <div className='detalles-producto-container'>
    <div className="image-container">
            <img src={`/${producto.foto}`} alt={producto.nombre} className="image-container__image" />
        </div>
        <div className="container-producto">
            <h1 className="container-producto__titulo">{producto.nombre}</h1>
            <p className="container-producto__precio">${producto.precio}</p>
            <hr className='container-producto__hr'/>
            <div className="container-producto__container-boton">
                <a href={`https://wa.me/5491138532121?text=¡Hola!%20Estoy%20interesado%20en%20un%20producto:%20${producto.nombre}."`}>
                <button className="container-producto__boton">CONSULTAR</button> 
  
                </a>
            </div>

        </div>

    </div>
      <div className='detalles-container'>
        <div className='detalles-container-h1-container'>
            <img src="/svg-icons/description.svg" alt="" className='detalles-container-h1-container__img'/>
        <h1 className='detalles-container-h1-container__h1'>Detalles</h1>

        </div>
        <div className='detalles-container__hr'></div>
      <p className='detalles-container__p'>{producto.detalles}</p>

      </div>

    </main>
        </>
        ) : <Spinner />
    }
    </>
  )
}

export default DetalleProductos