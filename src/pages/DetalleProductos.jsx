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
            console.log(data.foto)

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
    <div id="carouselExampleIndicators" className="carousel carousel-fade carousel-dark slide carousel-custom">
  {/* Indicadores dinámicos */}
  <div className="carousel-indicators">
    {producto.foto.map((_, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === 0 ? "active" : ""}
        aria-current={index === 0 ? "true" : ""}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>

  {/* Slides dinámicos */}
  <div className="carousel-inner">
    {producto.foto.map((imagen, index) => (
      <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
        <img src={imagen} className="image-container__image" alt={`Imagen ${index + 1}`} />
      </div>
    ))}
  </div>

  {/* Controles de navegación */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next boton1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon boton1" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>      </div>
        <div className="container-producto">
            <h1 className="container-producto__titulo">{producto.nombre}</h1>
            <p className="container-producto__precio">${producto.precio}</p>
            <hr className='container-producto__hr'/>
            <div className="container-producto__container-boton">
                <a href={`https://wa.me/5493413820429?text=¡Hola!%20Estoy%20interesado%20en%20un%20producto:%20${producto.nombre}."`}>
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