import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext';

const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    //console.log(producto)
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className="card-total">
      <article className="card-total__article">
        <div className="card-total__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card-total__image"
          />
        </div>
        <div className="card-total__content">
          <h2 className="card-total__heading">{producto.nombre}</h2>
          <div className="card-total__description">
            <p className='text-center'>
              $ {producto.precio}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
