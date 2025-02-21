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
    <div id="carouselExampleIndicators" className="carousel carousel-fade carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='boton1'></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={`${producto.foto[0]}`} className=" image-container__image" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={`${producto.foto[1]}`} className=" image-container__image" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={`${producto.foto[2]}`} className="image-container__image" alt="..." />
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>        </div>
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