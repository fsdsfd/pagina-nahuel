import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'
import { notificacionSweet } from './TablaFila.service';

const TablaFila = ( { producto }) => {

  const { setProductoAEditar, eliminarProducto } = useContext(ProductosContext);
  //console.log(producto)
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }
  const handleEliminar = () => {
    notificacionSweet(producto.nombre, () => {
      eliminarProducto(producto.id);
    });

  };
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
      <img className="img-row" src={producto.foto[0]} alt={producto.nombre} />
      </td>
      <td>
        <button onClick={() => handleEditar(producto)}>Editar</button>
        <button className="boton-alta boton-alta__eliminar" onClick={handleEliminar}>Eliminar</button>
        </td>
    </tr>
  )
}

export default TablaFila