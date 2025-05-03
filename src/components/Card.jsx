import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext';
import { Link } from 'react-router-dom';

const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    //console.log(producto)
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (

          <Link  to={`/detalle-producto/${producto.id}`}>
              <div className="card-total">
      <article className="card-total__article">
        <div className="card-total__image-container">
        <img
  src={Array.isArray(producto.foto) && producto.foto.length > 0 ? producto.foto[0] : 'https://via.placeholder.com/150'}
  alt={producto.nombre || 'Producto sin nombre'}
  className="card-total__image"
/>
        </div>
        <div className="card-total__content">
          <h2 className="card-total__heading">{producto.nombre}</h2>
          <div className="card-total__description">
            <p className='text-center card-total__precio'>
              $ {producto.precio}
            </p>
          </div>
          </div>
      </article>
    </div>
          </Link>

  );
};

export default Card;
